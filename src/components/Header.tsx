import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Clock } from 'lucide-react';
import { CLINIC_INFO, getClinicStatus, buildWhatsAppUrl } from '../data/clinicData';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const status = getClinicStatus();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Smart Utility Bar */}
      <div className="bg-[#083344] text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {status.isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
            </span>
            <span className="font-medium tracking-tight">
              {status.statusText}
            </span>
          </div>

          {/* Quick Access Contacts */}
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Cruzeiro Celeste, João Monlevade - MG</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
              title="Ligar para a recepção"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-semibold text-white">{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo with Official Image */}
        <a href="#" className="flex items-center gap-3 group" title="Veterinária São Luiz - Início">
          <img
            src="/assets/aistudio/Screenshot_20261105_073908_Instagram_516ec4df.jpg"
            alt="Logotipo Oficial da Clínica Veterinária São Luiz"
            className="h-11 sm:h-13 w-auto object-contain rounded-md"
          />
          <div className="hidden lg:block border-l border-slate-200 pl-3">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-teal-700">João Monlevade • MG</span>
            <span className="block text-xs text-slate-500">Cães e Gatos • Desde 3+ Anos</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
          <a href="#inicio" className="hover:text-teal-700 transition-colors">Início</a>
          <a href="#servicos" className="hover:text-teal-700 transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-teal-700 transition-colors">A Clínica</a>
          <a href="#diferenciais" className="hover:text-teal-700 transition-colors">Diferenciais</a>
          <a href="#avaliacoes" className="hover:text-teal-700 transition-colors">Avaliações</a>
          <a href="#faq" className="hover:text-teal-700 transition-colors">Dúvidas</a>
          <a href="#localizacao" className="hover:text-teal-700 transition-colors">Como Chegar</a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#009383] text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white text-teal-600" />
            <span>Agendar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 font-semibold text-slate-800 text-base">
            <a
              href="#inicio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Serviços Veterinários
            </a>
            <a
              href="#sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              A Clínica & Equipe
            </a>
            <a
              href="#diferenciais"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Diferenciais da São Luiz
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Avaliações Google (5.0 ★)
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Perguntas Frequentes
            </a>
            <a
              href="#localizacao"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Localização & Horários
            </a>
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#00A896] text-white font-bold py-3 px-4 rounded-xl shadow-xs"
            >
              <MessageCircle className="w-5 h-5 fill-white text-teal-600" />
              <span>Chamar no WhatsApp (31) 99429-5899</span>
            </a>
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 border border-slate-300 text-slate-800 font-bold py-2.5 px-4 rounded-xl hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Ligar no Fixo: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
