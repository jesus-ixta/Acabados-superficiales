import { Question } from '../data/questions';

export interface ExamAttempt {
  attemptNumber: number; // 1, 2, or 3
  date: string;
  score: number; // 0 - 100
  correctCount: number; // 0 - 20
  totalQuestions: number; // 20
  timeSpentSeconds: number;
  answers: Record<number, number>; // questionId -> selectedOptionIndex (0-3)
  questions: Question[]; // The 20 randomized questions used in this attempt
}

export interface StudentProfile {
  fullName: string;
  career: string;
  matricula?: string;
  attempts: ExamAttempt[];
  finalApprovedAttemptIndex?: number;
  certificateFolio?: string;
  certificateIssuedDate?: string;
}

export type ViewState = 'register' | 'exam' | 'feedback' | 'certificate' | 'history';
