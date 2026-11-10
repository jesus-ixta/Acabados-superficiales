import React from 'react';
import { Clock, Award, History, AlertTriangle, ShieldCheck } from 'lucide-react';
import { formatTime } from '../utils/examUtils';
import { ViewState, StudentProfile } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  student: StudentProfile | null;
  timeRemaining?: number;
  answeredCount?: number;
  totalQuestions?: number;
  onFinishExamClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  student,
  timeRemaining,
  answeredCount = 0,
  totalQuestions = 20,
  onFinishExamClick,
}) => {
  const isExamActive = currentView === 'exam' && typeof timeRemaining === 'number';
  const isTimeCritical = isExamActive && timeRemaining < 180; // < 3 mins
  const isTimeWarning = isExamActive && timeRemaining < 600 && !isTimeCritical; // < 10 mins

  const hasCertificate = student?.certificateFolio || (student?.attempts.some(a => a.score >= 80) || (student?.attempts.length ?? 0) >= 3);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div 
          onClick={() => {
            if (currentView !== 'exam') {
              onNavigate('register');
            }
          }}
          className={`flex items-center gap-3 select-none ${currentView !== 'exam' ? 'cursor-pointer group' : ''}`}
        >
          {/* Institution Emblem / Icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-sky-800 text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-sky-600/20 ring-1 ring-white/20 shrink-0">
            <span className="tracking-tighter">ITS</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-none group-hover:text-sky-700 transition-colors">
                TecNM · ITS de Comalcalco
              </span>
              <span className="hidden sm:inline-flex items-center text-[11px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60">
                División de Ingeniería
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 tracking-wide mt-1 leading-none">
              Procesos de Fabricación · <span className="text-slate-700 font-semibold">Unidad 4: Acabados Superficiales</span>
            </p>
          </div>
        </div>

        {/* Center / Context Zone: Active Exam Timer & Progress */}
        {isExamActive && (
          <div className="flex items-center gap-3 sm:gap-6 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="w-2 h-2 rounded-full bg-sky-600"></span>
              <span className="hidden md:inline">Progreso:</span>
              <span className="font-mono tabular-nums text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                {answeredCount} / {totalQuestions}
              </span>
            </div>

            <div className="h-4 w-px bg-slate-200"></div>

            <div 
              className={`flex items-center gap-2 font-mono text-sm font-bold tabular-nums px-2.5 py-1 rounded-lg transition-colors ${
                isTimeCritical
                  ? 'bg-rose-100 text-rose-700 border border-rose-300 animate-pulse'
                  : isTimeWarning
                  ? 'bg-amber-100 text-amber-800 border border-amber-300'
                  : 'bg-white text-slate-800 border border-slate-200'
              }`}
            >
              {isTimeCritical ? (
                <AlertTriangle className="w-4 h-4 text-rose-600" />
              ) : (
                <Clock className="w-4 h-4 text-sky-600" />
              )}
              <span>{formatTime(timeRemaining)}</span>
              <span className="hidden lg:inline text-[11px] font-sans font-medium text-slate-500">restantes</span>
            </div>
          </div>
        )}

        {/* Action Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {isExamActive ? (
            <button
              onClick={onFinishExamClick}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl transition-all shadow-sm hover:shadow flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Finalizar y Evaluar</span>
              <span className="sm:hidden">Finalizar</span>
            </button>
          ) : (
            <>
              {student && student.attempts.length > 0 && (
                <button
                  onClick={() => onNavigate('history')}
                  className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl transition-colors flex items-center gap-1.5 ${
                    currentView === 'history'
                      ? 'bg-sky-50 text-sky-700 border border-sky-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  title="Ver historial de intentos anteriores"
                >
                  <History className="w-4 h-4" />
                  <span className="hidden md:inline">Historial</span>
                  <span className="text-xs bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded-full font-mono">
                    {student.attempts.length}/3
                  </span>
                </button>
              )}

              {hasCertificate && (
                <button
                  onClick={() => onNavigate('certificate')}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                    currentView === 'certificate'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  <Award className="w-4 h-4 text-emerald-600 group-hover:text-emerald-700" />
                  <span>Constancia Oficial</span>
                </button>
              )}

              {student && currentView !== 'register' && (
                <button
                  onClick={() => onNavigate('register')}
                  className="hidden lg:inline-flex text-xs text-slate-500 hover:text-slate-800 py-2 px-2.5 transition-colors font-medium"
                >
                  Cambiar Alumno
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};
