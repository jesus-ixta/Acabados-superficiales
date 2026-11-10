import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  FileText, 
  Layers, 
  Flame, 
  Zap, 
  Compass, 
  ArrowRight,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { StudentProfile } from '../types';

interface RegisterViewProps {
  student: StudentProfile | null;
  onStartExam: (fullName: string, career: string, matricula?: string) => void;
  onViewHistory: () => void;
  onViewCertificate: () => void;
}

export const RegisterView: React.FC<RegisterViewProps> = ({
  student,
  onStartExam,
  onViewHistory,
  onViewCertificate,
}) => {
  const [fullName, setFullName] = useState(student?.fullName || '');
  const [career, setCareer] = useState(student?.career || 'Ingeniería Industrial');
  const [matricula, setMatricula] = useState(student?.matricula || '');
  const [error, setError] = useState('');

  const attemptsCount = student?.attempts.length || 0;
  const nextAttempt = attemptsCount + 1;
  const isMaxAttemptsReached = attemptsCount >= 3;
  const bestScore = student?.attempts ? Math.max(0, ...student.attempts.map(a => a.score)) : 0;
  const isApproved = bestScore >= 80;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Por favor ingresa tu Nombre Completo para registrar tu examen.');
      return;
    }
    setError('');
    onStartExam(fullName.trim(), career, matricula.trim());
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Hero Institutional Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-sky-900/50">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold tracking-wide">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            <span>INSTITUTO TECNOLÓGICO SUPERIOR DE COMALCALCO</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Evaluación Oficial: <span className="text-sky-400">Unidad 4</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-300 leading-relaxed">
            Acabados Superficiales y Tratamientos de Superficie en la Manufactura
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <BookOpen className="w-4 h-4 text-sky-400" />
              Materia: <strong className="text-white font-semibold">Procesos de Fabricación</strong>
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span>Documento Base: <strong className="text-slate-200">Unidad 4 acabados.pdf</strong></span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="text-emerald-400 font-medium">Banco: 100 Reactivos Especializados</span>
          </div>
        </div>

        {/* Floating summary badge if attempts exist */}
        {attemptsCount > 0 && (
          <div className="mt-8 pt-6 border-t border-sky-800/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center font-mono font-bold text-sky-300 text-lg">
                {attemptsCount}/3
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Historial de intentos de {student?.fullName}</p>
                <p className="text-sm font-medium text-white">
                  Mejor Calificación: <span className={`font-bold ${isApproved ? 'text-emerald-400' : 'text-amber-400'}`}>{bestScore} / 100 pts</span>
                  {isApproved && ' (Acreditado)'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onViewHistory}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                Ver Respuestas Anteriores
              </button>
              {(isApproved || isMaxAttemptsReached) && (
                <button
                  type="button"
                  onClick={onViewCertificate}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  Ver Constancia Oficial
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Grid: Registration Form + Business Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Registration Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="border-b border-slate-100 pb-5">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-sky-600" />
              <span>Registro del Alumno</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Ingresa tus datos institucionales para dar seguimiento y expedir tu constancia oficial de acreditación.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name (Required) */}
            <div>
              <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                Nombre Completo del Alumno <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Ej. Carlos Mendoza Domínguez"
                className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50/50 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                  error 
                    ? 'border-rose-400 focus:ring-rose-200 text-rose-900' 
                    : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100 text-slate-900'
                }`}
              />
              {error && (
                <p className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1">
                  <span>{error}</span>
                </p>
              )}
            </div>

            {/* Career Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Carrera Profesional <span className="text-rose-500">*</span>
                </label>
                <select
                  value={career}
                  onChange={(e) => setCareer(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:border-sky-500 focus:ring-sky-100"
                >
                  <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                  <option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
                </select>
              </div>

              {/* Matrícula (Optional) */}
              <div>
                <label htmlFor="matricula" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Matrícula / No. Control <span className="text-slate-400 font-normal">(Opcional)</span>
                </label>
                <input
                  id="matricula"
                  type="text"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                  placeholder="Ej. 21E50148"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:border-sky-500 focus:ring-sky-100"
                />
              </div>
            </div>

            {/* Action Button: Dynamic depending on attempts count */}
            <div className="pt-4 border-t border-slate-100">
              {isMaxAttemptsReached ? (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-3">
                  <div className="flex items-center gap-2 font-semibold text-sm">
                    <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
                    <span>Límite de intentos alcanzado (3 de 3)</span>
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Has completado tus 3 oportunidades reglamentarias. Tu calificación final definitiva es{' '}
                    <strong>{bestScore} / 100 pts</strong>. Puedes consultar o descargar tu constancia oficial basada en tu mejor desempeño.
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={onViewCertificate}
                      className="w-full py-3 px-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Award className="w-4 h-4" />
                      <span>Emitir Constancia Oficial</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 active:from-sky-800 active:to-sky-900 text-white font-bold text-base shadow-md hover:shadow-lg shadow-sky-600/20 transition-all flex items-center justify-center gap-3 group cursor-pointer"
                >
                  <span>Iniciar Evaluación (Intento {nextAttempt} de 3)</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>
          </form>

          {/* Quick Notice */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 text-xs text-slate-600 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <p>
              Una vez presionado el botón de inicio, se seleccionarán aleatoriamente 20 reactivos únicos del banco de 100 preguntas y comenzará la cuenta regresiva reglamentaria de 90 minutos.
            </p>
          </div>
        </div>

        {/* Right Column: Business Rules & Technical Units */}
        <div className="lg:col-span-5 space-y-6">
          {/* Rules Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/80 space-y-4">
            <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              <span>Reglas y Condiciones del Examen</span>
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 font-semibold block">Duración: 90 minutos por intento</strong>
                  <span className="text-slate-500 text-xs">Al agotarse el tiempo, el examen se evaluará automáticamente con las respuestas guardadas.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 font-semibold block">20 preguntas aleatorias sin repetición</strong>
                  <span className="text-slate-500 text-xs">Cada intento genera 20 reactivos diferentes seleccionados del banco de 100 preguntas.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 font-semibold block">Calificación Mínima: 80 / 100 pts</strong>
                  <span className="text-slate-500 text-xs">Cada pregunta correcta otorga 5 puntos. Se requieren al menos 16 aciertos para aprobar.</span>
                </div>
              </li>

              <li className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 font-semibold block">Máximo 3 intentos permitidos</strong>
                  <span className="text-slate-500 text-xs">Si apruebas con ≥80 pts puedes quedarte con la nota o volver a intentar para subir calificación.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Syllabus Topics Card */}
          <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/70 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Temario Oficial Cubierto en la Unidad 4
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-medium text-slate-700">Textura y Metrología (Ra, Rz, Sm)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="font-medium text-slate-700">Mecánicos (Lapeado, Shot Peening)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-medium text-slate-700">Electroquímicos (Electropulido, Anodizado)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="font-medium text-slate-700">Termoquímica (Nitruración, Carburación)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-700">Recubrimientos (PVD, CVD, KTL, Powder)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-medium text-slate-700">Normas y Calidad (ISO 1302, ASTM)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
