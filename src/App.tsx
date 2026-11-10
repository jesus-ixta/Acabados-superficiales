import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { RegisterView } from './components/RegisterView';
import { ExamView } from './components/ExamView';
import { FeedbackView } from './components/FeedbackView';
import { CertificateView } from './components/CertificateView';
import { HistoryView } from './components/HistoryView';
import { Question } from './data/questions';
import { StudentProfile, ExamAttempt, ViewState } from './types';
import { 
  generateRandom20Questions, 
  generateFolio, 
  formatDateSpanish, 
  saveProfileToStorage, 
  loadProfileFromStorage,
  saveActiveExamSession,
  loadActiveExamSession,
  getBestAttempt
} from './utils/examUtils';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('register');
  const [student, setStudent] = useState<StudentProfile | null>(null);
  
  // Active exam state
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examAnswers, setExamAnswers] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(5400); // 90 minutes = 5400 seconds
  const [currentAttemptNumber, setCurrentAttemptNumber] = useState<number>(1);
  const [latestAttempt, setLatestAttempt] = useState<ExamAttempt | null>(null);

  // Timer reference
  const timerRef = useRef<number | null>(null);

  // 1. On Mount: Load saved profile and check for ongoing session
  useEffect(() => {
    const savedProfile = loadProfileFromStorage();
    if (savedProfile) {
      setStudent(savedProfile);
    }

    const activeSession = loadActiveExamSession();
    if (activeSession && savedProfile) {
      // Resume active session
      setExamQuestions(activeSession.questions);
      setExamAnswers(activeSession.answers);
      setTimeRemaining(activeSession.timeRemainingSeconds);
      setCurrentAttemptNumber(activeSession.attemptNumber);
      setCurrentView('exam');
    }
  }, []);

  // 2. Timer countdown effect when in 'exam' view
  useEffect(() => {
    if (currentView === 'exam') {
      timerRef.current = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time is up! Auto-finish exam
            if (timerRef.current) clearInterval(timerRef.current);
            finishExam();
            return 0;
          }
          const nextTime = prev - 1;
          // Periodically save state to local storage
          if (nextTime % 5 === 0) {
            saveActiveExamSession({
              questions: examQuestions,
              answers: examAnswers,
              flagged: [],
              timeRemainingSeconds: nextTime,
              attemptNumber: currentAttemptNumber,
              currentQuestionIndex: 0,
              startTime: Date.now()
            });
          }
          return nextTime;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentView, examQuestions, examAnswers, currentAttemptNumber]);

  // Handle start or retry exam
  const handleStartExam = (fullName?: string, career?: string, matricula?: string) => {
    let currentStudent = student;

    if (!currentStudent && fullName && career) {
      currentStudent = {
        fullName,
        career,
        matricula,
        attempts: []
      };
      setStudent(currentStudent);
      saveProfileToStorage(currentStudent);
    } else if (currentStudent && fullName) {
      currentStudent = {
        ...currentStudent,
        fullName,
        career: career || currentStudent.career,
        matricula: matricula || currentStudent.matricula
      };
      setStudent(currentStudent);
      saveProfileToStorage(currentStudent);
    }

    if (!currentStudent) return;

    const attemptsCount = currentStudent.attempts.length;
    if (attemptsCount >= 3) {
      // Reached maximum 3 attempts
      setCurrentView('certificate');
      return;
    }

    // Generate 20 unique random questions
    const selected20 = generateRandom20Questions();
    const nextAttemptNum = attemptsCount + 1;

    setExamQuestions(selected20);
    setExamAnswers({});
    setTimeRemaining(5400); // 90:00 minutes
    setCurrentAttemptNumber(nextAttemptNum);

    // Save active session
    saveActiveExamSession({
      questions: selected20,
      answers: {},
      flagged: [],
      timeRemainingSeconds: 5400,
      attemptNumber: nextAttemptNum,
      currentQuestionIndex: 0,
      startTime: Date.now()
    });

    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle answering question
  const handleAnswerChange = (questionId: number, optionIndex: number) => {
    setExamAnswers((prev) => {
      const updated = { ...prev, [questionId]: optionIndex };
      // Save ongoing progress
      saveActiveExamSession({
        questions: examQuestions,
        answers: updated,
        flagged: [],
        timeRemainingSeconds: timeRemaining,
        attemptNumber: currentAttemptNumber,
        currentQuestionIndex: 0,
        startTime: Date.now()
      });
      return updated;
    });
  };

  // Finish and evaluate the exam
  const finishExam = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Calculate score
    let correctCount = 0;
    examQuestions.forEach((q) => {
      if (examAnswers[q.id] === q.correcta) {
        correctCount += 1;
      }
    });

    const score = correctCount * 5; // 20 questions * 5 pts = 100 max
    const timeSpent = 5400 - timeRemaining;

    const newAttempt: ExamAttempt = {
      attemptNumber: currentAttemptNumber,
      date: formatDateSpanish(),
      score,
      correctCount,
      totalQuestions: examQuestions.length,
      timeSpentSeconds: timeSpent,
      answers: { ...examAnswers },
      questions: [...examQuestions]
    };

    const currentProfile = student || {
      fullName: 'Alumno Evaluado',
      career: 'Ingeniería Industrial',
      attempts: []
    };

    const updatedAttempts = [...currentProfile.attempts, newAttempt];
    const isApproved = score >= 80;
    const isLastAttempt = updatedAttempts.length >= 3;

    // Generate certificate folio if not yet generated or if approved/completed
    let folio = currentProfile.certificateFolio;
    let issueDate = currentProfile.certificateIssuedDate;
    if (!folio && (isApproved || isLastAttempt)) {
      folio = generateFolio();
      issueDate = formatDateSpanish();
    }

    const updatedStudent: StudentProfile = {
      ...currentProfile,
      attempts: updatedAttempts,
      certificateFolio: folio,
      certificateIssuedDate: issueDate,
      finalApprovedAttemptIndex: isApproved ? updatedAttempts.length - 1 : currentProfile.finalApprovedAttemptIndex
    };

    setStudent(updatedStudent);
    saveProfileToStorage(updatedStudent);
    saveActiveExamSession(null); // Clear active session

    setLatestAttempt(newAttempt);
    setCurrentView('feedback');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Branching: Student chooses to stay with their passing score
  const handleStayWithScore = () => {
    if (student) {
      const best = getBestAttempt(student);
      const updatedStudent: StudentProfile = {
        ...student,
        certificateFolio: student.certificateFolio || generateFolio(),
        certificateIssuedDate: student.certificateIssuedDate || formatDateSpanish()
      };
      setStudent(updatedStudent);
      saveProfileToStorage(updatedStudent);
    }
    setCurrentView('certificate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Inspect past attempt from history
  const handleSelectAttemptReview = (attempt: ExamAttempt) => {
    setLatestAttempt(attempt);
    setCurrentView('feedback');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-sky-100 selection:text-sky-900">
      
      {/* Institutional Top Navigation Header */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          if (currentView === 'exam') {
            if (window.confirm('Tienes un examen activo. ¿Deseas salir? Tus respuestas se guardarán para reanudar luego.')) {
              setCurrentView(view);
            }
          } else {
            setCurrentView(view);
          }
        }}
        student={student}
        timeRemaining={timeRemaining}
        answeredCount={Object.keys(examAnswers).length}
        totalQuestions={examQuestions.length || 20}
        onFinishExamClick={finishExam}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {currentView === 'register' && (
          <RegisterView
            student={student}
            onStartExam={(fullName, career, matricula) => handleStartExam(fullName, career, matricula)}
            onViewHistory={() => setCurrentView('history')}
            onViewCertificate={() => setCurrentView('certificate')}
          />
        )}

        {currentView === 'exam' && (
          <ExamView
            questions={examQuestions}
            answers={examAnswers}
            onAnswerChange={handleAnswerChange}
            onFinishExam={finishExam}
            timeRemaining={timeRemaining}
            attemptNumber={currentAttemptNumber}
            studentName={student?.fullName || 'Alumno'}
          />
        )}

        {currentView === 'feedback' && latestAttempt && (
          <FeedbackView
            latestAttempt={latestAttempt}
            allAttempts={student?.attempts || []}
            studentName={student?.fullName || 'Alumno'}
            onStayWithScore={handleStayWithScore}
            onRetryExam={() => handleStartExam()}
            onGoToCertificate={() => setCurrentView('certificate')}
          />
        )}

        {currentView === 'certificate' && student && (
          <CertificateView
            student={student}
            onBack={() => setCurrentView(student.attempts.length > 0 ? 'history' : 'register')}
            onViewHistory={() => setCurrentView('history')}
          />
        )}

        {currentView === 'history' && student && (
          <HistoryView
            student={student}
            onBack={() => setCurrentView('register')}
            onSelectAttemptReview={handleSelectAttemptReview}
            onStartNewAttempt={() => handleStartExam()}
            onGoToCertificate={() => setCurrentView('certificate')}
          />
        )}
      </main>

      {/* Clean Academic Footer (no-print) */}
      <footer className="no-print mt-auto py-6 border-t border-slate-200 bg-white/70 text-slate-500 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium text-slate-600">
            Instituto Tecnológico Superior de Comalcalco · Ingeniería Industrial e Ingeniería Mecatrónica
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Materia: Procesos de Fabricación</span>
            <span>·</span>
            <span>Unidad 4: Acabados Superficiales</span>
            <span>·</span>
            <span>2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
