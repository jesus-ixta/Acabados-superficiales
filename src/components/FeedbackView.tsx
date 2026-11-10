import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  FileCheck2, 
  HelpCircle, 
  ShieldAlert, 
  TrendingUp,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ExamAttempt } from '../types';

interface FeedbackViewProps {
  latestAttempt: ExamAttempt;
  allAttempts: ExamAttempt[];
  studentName: string;
  onStayWithScore: () => void;
  onRetryExam: () => void;
  onGoToCertificate: () => void;
}

export const FeedbackView: React.FC<FeedbackViewProps> = ({
  latestAttempt,
  allAttempts,
  studentName,
  onStayWithScore,
  onRetryExam,
  onGoToCertificate,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'correct' | 'incorrect'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const attemptNumber = latestAttempt.attemptNumber;
  const score = latestAttempt.score;
  const correctCount = latestAttempt.correctCount;
  const totalQuestions = latestAttempt.totalQuestions;
  const isApproved = score >= 80;
  const isLastAttempt = attemptNumber >= 3;
  const remainingAttempts = Math.max(0, 3 - attemptNumber);

  // Best score across all attempts
  const bestScore = Math.max(...allAttempts.map((a) => a.score));

  // Trigger celebration confetti if approved
  useEffect(() => {
    if (isApproved) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  }, [isApproved]);

  const filteredQuestions = latestAttempt.questions.filter((q) => {
    const isCorrect = latestAttempt.answers[q.id] === q.correcta;
    if (filterMode === 'correct') return isCorrect;
    if (filterMode === 'incorrect') return !isCorrect;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Primary Score Hero Card */}
      <div 
        className={`rounded-3xl p-6 sm:p-10 border shadow-md relative overflow-hidden transition-all ${
          isApproved
            ? 'bg-gradient-to-br from-emerald-950 via-slate-900 to-sky-950 text-white border-emerald-700/40'
            : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-slate-700'
        }`}
      >
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Score Gauge / Metric */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-4">
            <div 
              className={`w-36 h-36 rounded-full flex flex-col items-center justify-center border-4 shadow-xl mb-3 ${
                isApproved 
                  ? 'border-emerald-400 bg-emerald-500/15 text-emerald-300' 
                  : 'border-amber-400 bg-amber-500/15 text-amber-300'
              }`}
            >
              <span className="text-4xl font-extrabold font-mono tracking-tight text-white">
                {score}
              </span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                de 100 puntos
              </span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200">
              <span>{correctCount} de {totalQuestions} reactivos correctos</span>
            </div>
          </div>

          {/* Right: Decision Message & Direct Action Banner */}
          <div className="md:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resultado Oficial del Intento {attemptNumber} de 3</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-white">
              {isApproved ? (
                <span>¡Felicidades, {studentName}! Has acreditado la Unidad 4.</span>
              ) : (
                <span>Calificación Insuficiente ({score} pts)</span>
              )}
            </h2>

            {/* Business Decision Logic Branching */}
            {isApproved && !isLastAttempt && (
              <div className="space-y-4">
                <p className="text-sm text-slate-200 leading-relaxed">
                  Has alcanzado y superado la calificación mínima requerida (80/100). ¿Deseas dar por terminada tu evaluación y generar tu constancia oficial o prefieres usar otro intento para buscar la excelencia?
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onStayWithScore}
                    className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>Quedarme con mi nota ({score} pts) y Generar Constancia</span>
                  </button>

                  <button
                    type="button"
                    onClick={onRetryExam}
                    className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white text-sm font-semibold border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Volver a intentarlo (Quedan {remainingAttempts})</span>
                  </button>
                </div>
              </div>
            )}

            {!isApproved && !isLastAttempt && (
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Obtuviste <strong className="text-white font-bold">{score} pts</strong>. La calificación mínima aprobatoria es 80 pts. Aún te quedan <strong className="text-sky-300">{remainingAttempts} intento(s)</strong> disponibles para acreditar la unidad.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onRetryExam}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Iniciar Intento {attemptNumber + 1} de 3</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {isLastAttempt && (
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-xs text-slate-200">
                  <p className="font-semibold text-white">
                    Has completado tus 3 intentos reglamentarios.
                  </p>
                  <p className="mt-1">
                    Tu constancia se emitirá con base en tu <strong className="text-emerald-400">calificación más alta obtenida: {bestScore} / 100 pts</strong>.
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onGoToCertificate}
                    className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>Emitir Constancia Oficial con {bestScore} pts</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* History Summary Bar (If multiple attempts exist) */}
      {allAttempts.length > 1 && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-sky-600" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Historial Comparativo de Intentos</h4>
              <p className="text-xs text-slate-500">Progreso en los intentos realizados hasta ahora</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {allAttempts.map((att, i) => (
              <div 
                key={i}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
                  att.attemptNumber === latestAttempt.attemptNumber
                    ? 'bg-sky-50 text-sky-800 border-sky-300 ring-2 ring-sky-200'
                    : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                Intento {att.attemptNumber}: <span className={att.score >= 80 ? 'text-emerald-600 font-extrabold' : 'text-slate-800'}>{att.score} pts</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Question-by-Question Review Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        
        {/* Header and Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-sky-600" />
              <span>Revisión Técnica de Reactivos (Intento {attemptNumber})</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Revisa tus respuestas seleccionadas comparadas con las correctas y la fundamentación de ingeniería.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({totalQuestions})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'correct' ? 'bg-emerald-600 text-white shadow-xs' : 'text-emerald-700 hover:text-emerald-900'
              }`}
            >
              Aciertos ({correctCount})
            </button>
            <button
              onClick={() => setFilterMode('incorrect')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'incorrect' ? 'bg-rose-600 text-white shadow-xs' : 'text-rose-700 hover:text-rose-900'
              }`}
            >
              Errores ({totalQuestions - correctCount})
            </button>
          </div>
        </div>

        {/* Questions Accordion / List */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const selectedOptIndex = latestAttempt.answers[q.id];
            const isCorrect = selectedOptIndex === q.correcta;
            const isUnanswered = selectedOptIndex === undefined;
            const isExpanded = expandedId === q.id || filterMode !== 'all';

            return (
              <div
                key={q.id}
                className={`rounded-2xl border transition-all ${
                  isCorrect
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : isUnanswered
                    ? 'border-slate-300 bg-slate-50/60'
                    : 'border-rose-200 bg-rose-50/20'
                }`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                  className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold mb-1">
                        <span className="text-slate-500 font-mono">Reactivo #{q.id}</span>
                        {q.tema && <span className="text-slate-400">· {q.tema}</span>}
                        <span 
                          className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                            isCorrect 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : isUnanswered 
                              ? 'bg-slate-200 text-slate-700' 
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isCorrect ? '+5 pts' : '0 pts'}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {q.pregunta}
                      </p>
                    </div>
                  </div>

                  <button className="text-slate-400 hover:text-slate-600 p-1 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Details: Options + Explanation */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100/80 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2">
                      {q.opciones.map((opcion, optIdx) => {
                        const isThisCorrect = optIdx === q.correcta;
                        const isThisUserSelected = optIdx === selectedOptIndex;

                        return (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                              isThisCorrect
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                                : isThisUserSelected
                                ? 'bg-rose-50 border-rose-300 text-rose-950 line-through'
                                : 'bg-white border-slate-200 text-slate-600'
                            }`}
                          >
                            <span 
                              className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                isThisCorrect 
                                  ? 'bg-emerald-600 text-white' 
                                  : isThisUserSelected 
                                  ? 'bg-rose-600 text-white' 
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-tight pt-0.5">{opcion}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Technical Rationale Note */}
                    {q.explicacion && (
                      <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 text-xs text-sky-950 flex items-start gap-2.5 mt-2">
                        <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold block text-sky-900 mb-0.5">Fundamentación de Manufactura:</strong>
                          <p className="text-slate-700 leading-relaxed">{q.explicacion}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
