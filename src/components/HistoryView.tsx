import React from 'react';
import { 
  History, 
  ArrowLeft, 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Calendar,
  ChevronRight,
  TrendingUp,
  FileCheck2
} from 'lucide-react';
import { StudentProfile, ExamAttempt } from '../types';
import { formatTime } from '../utils/examUtils';

interface HistoryViewProps {
  student: StudentProfile;
  onBack: () => void;
  onSelectAttemptReview: (attempt: ExamAttempt) => void;
  onStartNewAttempt: () => void;
  onGoToCertificate: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  student,
  onBack,
  onSelectAttemptReview,
  onStartNewAttempt,
  onGoToCertificate,
}) => {
  const attempts = student.attempts || [];
  const attemptsCount = attempts.length;
  const canRetry = attemptsCount < 3;
  const bestScore = attempts.length > 0 ? Math.max(...attempts.map(a => a.score)) : 0;
  const isApproved = bestScore >= 80;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </button>

        <div className="flex items-center gap-3">
          {(isApproved || attemptsCount >= 3) && (
            <button
              onClick={onGoToCertificate}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Ver Constancia Oficial</span>
            </button>
          )}

          {canRetry && (
            <button
              onClick={onStartNewAttempt}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Iniciar Intento {attemptsCount + 1} de 3</span>
            </button>
          )}
        </div>
      </div>

      {/* Student Summary Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-wider font-extrabold text-sky-700">
            Registro Académico del Estudiante
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
            {student.fullName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {student.career} {student.matricula && `· Matrícula: ${student.matricula}`}
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Mejor Calificación</span>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-2xl font-extrabold font-mono ${isApproved ? 'text-emerald-600' : 'text-slate-900'}`}>
                {bestScore}
              </span>
              <span className="text-xs text-slate-500">/ 100 pts</span>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-200"></div>
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Intentos Usados</span>
            <span className="text-xl font-bold font-mono text-slate-800">
              {attemptsCount} <span className="text-slate-400 font-normal">/ 3</span>
            </span>
          </div>
        </div>
      </div>

      {/* Attempt List */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <History className="w-5 h-5 text-sky-600" />
          <span>Detalle de Evaluaciones Presentadas</span>
        </h3>

        {attempts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center text-slate-500 border border-slate-200">
            <p>Aún no has presentado ningún intento.</p>
          </div>
        ) : (
          attempts.map((att) => {
            const isAttApproved = att.score >= 80;

            return (
              <div
                key={att.attemptNumber}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-sky-300 transition-all flex flex-wrap items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base ${
                      isAttApproved 
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                        : 'bg-slate-100 text-slate-700 border border-slate-300'
                    }`}
                  >
                    #{att.attemptNumber}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">
                        Intento {att.attemptNumber} de 3
                      </h4>
                      <span 
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          isAttApproved 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {isAttApproved ? 'Acreditado' : 'No acreditado'}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {att.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        Tiempo: {formatTime(att.timeSpentSeconds)}
                      </span>
                      <span>·</span>
                      <span>Aciertos: {att.correctCount} / {att.totalQuestions}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-xl font-extrabold font-mono text-slate-900">
                      {att.score}
                    </span>
                    <span className="text-xs text-slate-400 ml-1">/ 100 pts</span>
                  </div>

                  <button
                    onClick={() => onSelectAttemptReview(att)}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>Ver Respuestas</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
