import React from 'react';
import { MessageCircle, MapPin, Phone, Star, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { CLINIC_INFO, buildWhatsAppUrl, getClinicStatus } from '../data/clinicData';

export const Hero: React.FC = () => {
  const status = getClinicStatus();

  return (
    <section id="inicio" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -z-10 w-full max-w-4xl h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
        <div className="absolute top-48 right-48 w-80 h-80 bg-cyan-100/60 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Strategic Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Operational & Localization Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Medicina Veterinária para Cães e Gatos • João Monlevade</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#083344] tracking-tight leading-[1.15] mb-6">
              O cuidado acolhedor e a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] to-teal-700 underline decoration-teal-300 decoration-wavy decoration-2">
                segurança médica
              </span>{' '}
              que seu pet merece.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Atendimento com paciência, escuta atenta e respeito ao medo do animal. Mais de 3 anos cuidando com carinho e responsabilidade técnica de quem faz parte da sua família no bairro Cruzeiro Celeste.
            </p>

            {/* Conversion CTA Group */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#00A896] hover:bg-[#009282] text-white font-bold text-base px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white text-teal-600" />
                <span>Agendar Consulta no WhatsApp</span>
              </a>

              <a
                href="#localizacao"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#083344] font-bold text-base px-5 py-4 rounded-xl border border-slate-300 hover:border-slate-400 shadow-2xs transition-all text-center"
              >
                <MapPin className="w-5 h-5 text-teal-600" />
                <span>Como Chegar (Rota)</span>
              </a>
            </div>

            {/* Reassurance Microcopy */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium mb-8">
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Retorno ágil no WhatsApp
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-700">
                <Heart className="w-4 h-4 text-teal-600" />
                Manejo suave sem pressa
              </span>
              <span>•</span>
              <span>Seg a Sex (08h às 17h) e Sáb (08h às 12h)</span>
            </div>

            {/* Google Rating Social Proof Badge */}
            <div className="inline-flex items-center gap-3 p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="border-l border-slate-200 pl-3">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-[#083344] text-sm leading-none">Nota 5.0</span>
                  <span className="text-xs text-slate-500 font-medium">no Google</span>
                </div>
                <span className="text-[11px] text-teal-700 font-semibold">100% de avaliações máximas verificadas</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Editorial Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow / Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/20 to-cyan-500/10 rounded-3xl blur-xl -z-10"></div>

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-xl bg-slate-100 aspect-4/3">
                <img
                  src="/src/assets/images/hero_vet_care_1793879589727.jpg"
                  alt="Veterinária da Clínica São Luiz em atendimento acolhedor com cão dócil em João Monlevade"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Subtitle Caption inside Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs sm:text-sm font-semibold tracking-wide drop-shadow-md">
                    Atendimento humanizado no Cruzeiro Celeste • João Monlevade
                  </p>
                </div>
              </div>

              {/* Floating Pill: Farmácia no Local */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-lg flex items-center gap-3 z-10 animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Farmácia no Próprio Local</span>
                  <span className="block text-[11px] text-slate-500">Medicamentos imediatos após a consulta</span>
                </div>
              </div>

              {/* Floating Status Pill */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#083344] text-white px-3.5 py-2 rounded-xl shadow-md text-xs font-bold flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                <span>{status.isOpen ? 'Atendendo Hoje' : 'Agendamentos Abertos'}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
