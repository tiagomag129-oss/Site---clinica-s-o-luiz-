import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA, buildWhatsAppUrl } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Transparência e Esclarecimentos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083344] tracking-tight leading-tight mb-4">
            Dúvidas frequentes sobre nosso atendimento.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Respostas diretas e honestas para ajudar você a cuidar da saúde do seu cão ou gato com total tranquilidade.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 mb-12">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-teal-700 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span>{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-teal-50 text-teal-700 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Residual Question CTA Box */}
        <div className="text-center p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <h3 className="text-lg font-bold text-[#083344] mb-2">
            Ainda tem alguma dúvida sobre exames, procedimentos ou valores?
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Nossa equipe está pronta para responder suas dúvidas diretamente pelo WhatsApp sem compromisso.
          </p>
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de tirar uma dúvida sobre o atendimento da Veterinária São Luiz.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#083344] hover:bg-[#0c445a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-teal-400" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
