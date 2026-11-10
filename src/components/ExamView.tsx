import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  HelpCircle, 
  Send, 
  Clock, 
  AlertCircle,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { Question } from '../data/questions';
import { formatTime } from '../utils/examUtils';

interface ExamViewProps {
  questions: Question[];
  answers: Record<number, number>;
  onAnswerChange: (questionId: number, optionIndex: number) => void;
  onFinishExam: () => void;
  timeRemaining: number;
  attemptNumber: number;
  studentName: string;
}

export const ExamView: React.FC<ExamViewProps> = ({
  questions,
  answers,
  onAnswerChange,
  onFinishExam,
  timeRemaining,
  attemptNumber,
  studentName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const pendingCount = totalQuestions - answeredCount;

  // Toggle flag for question review
  const toggleFlag = (qId: number) => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) {
        next.delete(qId);
      } else {
        next.add(qId);
      }
      return next;
    });
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight' && currentIndex < totalQuestions - 1) {
        setCurrentIndex((i) => i + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      } else if (['1', '2', '3', '4'].includes(e.key) && currentQ) {
        const optIndex = parseInt(e.key, 10) - 1;
        if (optIndex >= 0 && optIndex < currentQ.opciones.length) {
          onAnswerChange(currentQ.id, optIndex);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalQuestions, currentQ, onAnswerChange]);

  if (!currentQ) return null;

  const currentSelectedOption = answers[currentQ.id];
  const isCurrentFlagged = flaggedQuestions.has(currentQ.id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Status & Context Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 font-bold flex items-center justify-center border border-sky-100 text-sm">
            #{attemptNumber}
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
              Intento {attemptNumber} de 3 · {studentName}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Evaluación Unidad 4: Acabados Superficiales en la Manufactura
            </p>
          </div>
        </div>

        {/* Global Progress Indicators */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs text-slate-500 font-medium block">Respondidas</span>
            <span className="text-sm font-bold text-slate-900 font-mono tabular-nums">
              {answeredCount} <span className="text-slate-400 font-normal">/ {totalQuestions}</span>
            </span>
          </div>

          <div className="h-8 w-px bg-slate-200"></div>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Finalizar y Evaluar</span>
          </button>
        </div>
      </div>

      {/* Main Examination Layout: 2 Columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left / Main Column: Question Card & Options */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6 transition-all">
            
            {/* Question Header: Tag, Index, and Bookmark Flag */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono">
                  Reactivo {currentIndex + 1} de {totalQuestions}
                </span>
                {currentQ.tema && (
                  <span className="hidden sm:inline-block text-slate-400 font-medium">
                    · {currentQ.tema}
                  </span>
                )}
              </div>

              {/* Bookmark Flag button */}
              <button
                type="button"
                onClick={() => toggleFlag(currentQ.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  isCurrentFlagged
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-transparent'
                }`}
                title="Marcar esta pregunta para revisar antes de finalizar"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span>{isCurrentFlagged ? 'Marcada para revisión' : 'Marcar para revisar'}</span>
              </button>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {currentQ.pregunta}
              </h3>
              <p className="text-xs text-slate-400">
                Selecciona una de las siguientes opciones (o usa las teclas 1, 2, 3 o 4):
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.opciones.map((opcion, idx) => {
                const isSelected = currentSelectedOption === idx;
                const letter = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onAnswerChange(currentQ.id, idx)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all flex items-start gap-3.5 group cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50/80 border-sky-400 text-slate-900 ring-2 ring-sky-200/70 shadow-xs'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200/90 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {/* Letter Indicator badge */}
                    <span 
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      {letter}
                    </span>

                    {/* Option Text */}
                    <span className="text-sm sm:text-base font-medium leading-relaxed pt-0.5">
                      {opcion}
                    </span>

                    {/* Selected Checkmark Indicator */}
                    <div className="ml-auto shrink-0 pt-0.5">
                      <div 
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-sky-600 bg-sky-600 text-white'
                            : 'border-slate-300 group-hover:border-slate-400'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Question Navigation Controls */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                  currentIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Reactivo {currentIndex + 1} / {totalQuestions}
              </span>

              {currentIndex < totalQuestions - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex((i) => Math.min(totalQuestions - 1, i + 1))}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(true)}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Revisar y Enviar</span>
                  <Send className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Column: Interactive Grid Navigator & Legend */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                Mapa de Preguntas
              </h4>
              <span className="text-xs font-mono text-slate-500">
                {answeredCount}/{totalQuestions} listas
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sky-600 transition-all duration-300 rounded-full"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              ></div>
            </div>

            {/* Grid of 20 Question Buttons */}
            <div className="grid grid-cols-5 gap-2 pt-2">
              {questions.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isFlagged = flaggedQuestions.has(q.id);
                const isCurrent = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-11 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center relative cursor-pointer ${
                      isCurrent
                        ? 'ring-2 ring-sky-500 ring-offset-2 bg-sky-600 text-white shadow-xs'
                        : isAnswered
                        ? 'bg-sky-100 text-sky-800 hover:bg-sky-200 border border-sky-200'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <span>{idx + 1}</span>

                    {/* Flagged marker dot */}
                    {isFlagged && (
                      <span 
                        className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500" 
                        title="Pregunta marcada para revisión"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Color Legend */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-sky-600"></span>
                <span>Actual</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-sky-100 border border-sky-300"></span>
                <span>Respondida</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-100 border border-slate-300"></span>
                <span>Sin responder</span>
              </div>
            </div>

            {/* Quick Unanswered Warning if any */}
            {pendingCount > 0 && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  Te faltan <strong>{pendingCount}</strong> pregunta(s) por responder. Puedes hacer clic en cualquiera para ir a ella.
                </p>
              </div>
            )}
          </div>

          {/* Tips Card */}
          <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60 text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-slate-700 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>Instrucciones rápidas</span>
            </p>
            <p className="text-slate-500 leading-relaxed">
              Puedes navegar libremente entre las 20 preguntas sin perder tus respuestas seleccionadas. No olvides enviar tu examen antes de que el reloj llegue a 00:00.
            </p>
          </div>
        </div>

      </div>

      {/* Confirmation Submission Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  ¿Finalizar y evaluar examen?
                </h3>
                <p className="text-xs text-slate-500">
                  Intento {attemptNumber} de 3 · Tiempo restante: {formatTime(timeRemaining)}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>Preguntas respondidas:</span>
                <strong className="font-mono text-slate-900">{answeredCount} de {totalQuestions}</strong>
              </div>
              <div className="flex justify-between">
                <span>Preguntas pendientes:</span>
                <strong className={`font-mono ${pendingCount > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
                  {pendingCount}
                </strong>
              </div>
              {flaggedQuestions.size > 0 && (
                <div className="flex justify-between">
                  <span>Preguntas marcadas para revisión:</span>
                  <strong className="font-mono text-amber-700">{flaggedQuestions.size}</strong>
                </div>
              )}
            </div>

            {pendingCount > 0 && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Las preguntas no respondidas se computarán como incorrectas (0 puntos).</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Continuar respondiendo
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmModal(false);
                  onFinishExam();
                }}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Sí, finalizar y calificar</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
