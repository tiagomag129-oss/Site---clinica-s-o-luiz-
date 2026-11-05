import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, getClinicStatus } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const status = getClinicStatus();

  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5">
      {/* Floating Micro-Pill Message */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#083344] font-bold text-xs py-2 px-3.5 rounded-full border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-teal-500'}`}></span>
        <span>{status.isOpen ? 'Fale com a Recepção' : 'Deixe sua Mensagem'}</span>
      </a>

      {/* Main Round Floating Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp oficial da Clínica Veterinária São Luiz"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#00A896] hover:bg-[#009282] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
      >
        {/* Animated Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-teal-400 opacity-40 animate-ping pointer-events-none"></span>

        <MessageCircle className="w-7 h-7 fill-white text-teal-600 transition-transform group-hover:scale-110" />
      </a>
    </aside>
  );
};
