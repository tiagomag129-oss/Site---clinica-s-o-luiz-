import React from 'react';
import { Pill, ShieldCheck, Sparkles, MessageCircle, Clock, Check } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/clinicData';

export const StructureSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Estrutura Física & Farmácia</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083344] tracking-tight leading-tight mb-4">
              Estrutura higienizada, acolhedora e preparada para cuidar.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Planejamos cada detalhe da nossa sede no Cruzeiro Celeste para minimizar o estresse de cães e gatos e oferecer conveniência completa aos tutores de João Monlevade.
            </p>

            {/* In-House Pharmacy Highlight Box */}
            <div className="w-full bg-white border border-teal-200/80 rounded-3xl p-6 sm:p-7 shadow-xs mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Pill className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083344]">Farmácia Veterinária Integrada</h3>
                  <p className="text-xs text-teal-700 font-semibold">Tratamento imediato sem precisar rodar pela cidade</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Dispomos de farmácia própria com medicamentos de uso imediato e contínuo prescritos pelo veterinário. Você sai da consulta já com a receita aviada em mãos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Antibióticos e anti-inflamatórios</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Antiparasitários (pulgas e carrapatos)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Vermífugos éticos para cães e gatos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Tratamentos dermatológicos e pomadas</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppUrl('Olá! Gostaria de consultar a disponibilidade de um medicamento na farmácia da Veterinária São Luiz.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#00A896] hover:bg-[#009282] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-teal-600" />
                <span>Consultar Medicamento no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="overflow-hidden rounded-3xl border-4 border-white shadow-xl bg-slate-100 aspect-4/3">
                <img
                  src="/src/assets/images/clinic_structure_1793879619706.jpg"
                  alt="Recepção moderna, higienizada e farmácia veterinária organizada da Clínica São Luiz em João Monlevade"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Floating Pill: Ambiente Limpo e Calmo */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200 p-4 rounded-2xl shadow-lg flex items-center gap-3.5 z-10 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Assepsia e Higiene Rigorosa</span>
                  <span className="block text-[11px] text-slate-500">Ambiente ventilado e seguro contra contaminações</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
