import React from 'react';
import { 
  Printer, 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  QrCode, 
  CheckCircle2, 
  Calendar, 
  FileText,
  Building2,
  Sparkles
} from 'lucide-react';
import { StudentProfile } from '../types';
import { getBestAttempt, formatDateSpanish } from '../utils/examUtils';

interface CertificateViewProps {
  student: StudentProfile;
  onBack: () => void;
  onViewHistory: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  student,
  onBack,
  onViewHistory,
}) => {
  const bestAttempt = getBestAttempt(student);
  const finalScore = student.finalApprovedAttemptIndex !== undefined 
    ? (student.attempts[student.finalApprovedAttemptIndex]?.score ?? (bestAttempt?.score || 0))
    : (bestAttempt?.score || 0);

  const isApproved = finalScore >= 80;
  const issueDate = student.certificateIssuedDate || formatDateSpanish();
  const folio = student.certificateFolio || 'ITSC-PF4-2026-A8K2L9';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Action Toolbar (Hidden during print) */}
      <div className="no-print bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Evaluación</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onViewHistory}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Ver Historial de Intentos
          </button>

          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Descargar / Imprimir Constancia (PDF)</span>
          </button>
        </div>
      </div>

      {/* Official Certificate Container (Targeted by CSS @media print) */}
      <div className="certificate-container bg-white rounded-3xl p-8 sm:p-14 border-4 border-double border-sky-800 shadow-xl relative overflow-hidden text-slate-800">
        
        {/* Subtle Decorative Guilloché Watermark Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Outer Fine Line Border Frame */}
        <div className="border border-sky-200 p-6 sm:p-10 rounded-2xl relative">
          
          {/* Institutional Header Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-sky-900/20 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-700 via-sky-800 to-slate-900 text-white flex flex-col items-center justify-center font-extrabold text-xl shadow-md border-2 border-white shrink-0">
                <span className="tracking-tighter">ITS</span>
                <span className="text-[9px] tracking-widest text-sky-200 font-mono">COMALCALCO</span>
              </div>
              <div>
                <p className="text-xs uppercase font-extrabold tracking-widest text-slate-500">
                  Tecnológico Nacional de México
                </p>
                <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  Instituto Tecnológico Superior de Comalcalco
                </h1>
                <p className="text-xs font-semibold text-sky-800 tracking-wide">
                  División de Estudios Profesionales · Academia de Ingeniería
                </p>
              </div>
            </div>

            {/* Verification Seal Badge */}
            <div className="flex flex-col items-center sm:items-end">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>FOLIO DIGITAL OFICIAL</span>
              </div>
              <span className="font-mono text-xs font-bold text-slate-800 mt-1 tabular-nums">
                {folio}
              </span>
            </div>
          </div>

          {/* Certificate Central Body */}
          <div className="py-8 sm:py-10 text-center space-y-6">
            <div className="inline-block">
              <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-sky-700 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-200">
                CONSTANCIA DE ACREDITACIÓN ACADÉMICA
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-serif italic">
              La Academia de Ingeniería hace constar que el (la) estudiante:
            </p>

            {/* Student Full Name */}
            <div className="py-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight border-b-2 border-dashed border-slate-300 pb-3 max-w-2xl mx-auto uppercase font-serif">
                {student.fullName}
              </h2>
              {student.matricula && (
                <p className="text-xs font-mono font-medium text-slate-500 mt-2">
                  Matrícula / No. Control: <span className="font-bold text-slate-700">{student.matricula}</span>
                </p>
              )}
              <p className="text-sm font-semibold text-sky-900 mt-1">
                Carrera: {student.career}
              </p>
            </div>

            {/* Official Accreditation Statement */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Ha acreditado satisfactoriamente la evaluación de conocimientos y competencias técnicas correspondientes a la:
            </p>

            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 max-w-3xl mx-auto space-y-1.5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Materia: <strong className="text-slate-800 font-bold">Procesos de Fabricación</strong>
              </p>
              <h3 className="text-base sm:text-lg font-bold text-sky-950">
                Unidad 4: Acabados Superficiales y Tratamientos de Superficie en la Manufactura
              </h3>
              <p className="text-xs text-slate-600">
                Basado en el temario técnico oficial (Unidad 4 acabados.pdf) y banco de reactivos de ingeniería.
              </p>
            </div>

            {/* Final Grade Highlight Box */}
            <div className="flex items-center justify-center gap-6 pt-2">
              <div className="px-6 py-3 rounded-2xl bg-white border-2 border-sky-800 shadow-sm flex items-center gap-4">
                <Award className="w-8 h-8 text-sky-700" />
                <div className="text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Calificación Final Acreditada
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold font-mono tabular-nums text-slate-900">
                      {finalScore}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">/ 100 puntos</span>
                    <span className="ml-2 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      {isApproved ? 'APROBADO' : 'EVALUADO'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Certificate Signatures and Digital Stamp Footer */}
          <div className="pt-8 border-t-2 border-sky-900/20 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-center">
            
            {/* Signature 1 */}
            <div className="space-y-1">
              <div className="h-14 flex items-end justify-center font-serif italic text-slate-400 text-sm select-none">
                Firmado digitalmente
              </div>
              <div className="border-t border-slate-400 pt-1.5">
                <p className="text-xs font-bold text-slate-800 leading-tight">Academia de Manufactura</p>
                <p className="text-[11px] text-slate-500">Jefatura de Ingeniería</p>
              </div>
            </div>

            {/* Center: Digital Seal & QR Code */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-300 p-1 flex items-center justify-center text-slate-800">
                <QrCode className="w-12 h-12 text-slate-800" />
              </div>
              <p className="text-[10px] font-mono text-slate-400">Verificación Segura ITSC</p>
              <p className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-sky-600" />
                <span>Expedida: {issueDate}</span>
              </p>
            </div>

            {/* Signature 2 */}
            <div className="space-y-1">
              <div className="h-14 flex items-end justify-center font-serif italic text-slate-400 text-sm select-none">
                Sello institucional
              </div>
              <div className="border-t border-slate-400 pt-1.5">
                <p className="text-xs font-bold text-slate-800 leading-tight">División de Estudios Profesionales</p>
                <p className="text-[11px] text-slate-500">ITS de Comalcalco, Tabasco</p>
              </div>
            </div>

          </div>

          {/* Legal Fineprint */}
          <div className="mt-6 pt-3 border-t border-slate-200/60 text-center">
            <p className="text-[10px] text-slate-400 leading-tight">
              Documento con validez de acreditación curricular interna conforme al reglamento de evaluación del Tecnológico Nacional de México. Código de autenticidad: {folio}.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
