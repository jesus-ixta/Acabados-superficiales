import { Question, QUESTIONS_BANK } from '../data/questions';
import { StudentProfile } from '../types';

const STORAGE_KEY = 'itsc_u4_student_profile';
const ACTIVE_EXAM_KEY = 'itsc_u4_active_exam';

export interface ActiveExamSession {
  questions: Question[];
  answers: Record<number, number>;
  flagged: number[]; // question IDs
  timeRemainingSeconds: number;
  attemptNumber: number;
  currentQuestionIndex: number;
  startTime: number;
}

/**
 * Selects 20 unique random questions from the 100 questions bank
 */
export function generateRandom20Questions(): Question[] {
  const shuffled = [...QUESTIONS_BANK].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 20);
}

/**
 * Format seconds to MM:SS string
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format date in Spanish
 */
export function formatDateSpanish(dateObj: Date = new Date()): string {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  return `${day} de ${month} de ${year}`;
}

/**
 * Generate a unique verification folio
 */
export function generateFolio(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randomPart = '';
  for (let i = 0; i < 6; i++) {
    randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const year = new Date().getFullYear();
  return `ITSC-PF4-${year}-${randomPart}`;
}

/**
 * Save profile to localStorage
 */
export function saveProfileToStorage(profile: StudentProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Error saving profile to localStorage', e);
  }
}

/**
 * Load profile from localStorage
 */
export function loadProfileFromStorage(): StudentProfile | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data) as StudentProfile;
  } catch (e) {
    console.error('Error loading profile from localStorage', e);
    return null;
  }
}

/**
 * Save active ongoing exam
 */
export function saveActiveExamSession(session: ActiveExamSession | null): void {
  try {
    if (!session) {
      localStorage.removeItem(ACTIVE_EXAM_KEY);
    } else {
      localStorage.setItem(ACTIVE_EXAM_KEY, JSON.stringify(session));
    }
  } catch (e) {
    console.error('Error saving active exam', e);
  }
}

/**
 * Load active ongoing exam
 */
export function loadActiveExamSession(): ActiveExamSession | null {
  try {
    const data = localStorage.getItem(ACTIVE_EXAM_KEY);
    if (!data) return null;
    return JSON.parse(data) as ActiveExamSession;
  } catch (e) {
    console.error('Error loading active exam', e);
    return null;
  }
}

/**
 * Helper to get the best attempt score
 */
export function getBestAttempt(profile: StudentProfile) {
  if (!profile.attempts || profile.attempts.length === 0) return null;
  return [...profile.attempts].sort((a, b) => b.score - a.score)[0];
}
