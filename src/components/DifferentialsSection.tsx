import React from 'react';
import { Heart, Star, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { DIFFERENTIALS_DATA, buildWhatsAppUrl } from '../data/clinicData';

export const DifferentialsSection: React.FC = () => {
  const getDiffIcon = (id: string) => {
    switch (id) {
      case 'atencao-individualizada':
        return <Heart className="w-6 h-6 text-teal-600" />;
      case 'nota-maxima-google':
        return <Star className="w-6 h-6 text-amber-500 fill-amber-400" />;
      case 'farmacia-no-local':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'tradicao-cruzeiro-celeste':
        return <MapPin className="w-6 h-6 text-cyan-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>O DNA da Nota 5.0</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083344] tracking-tight leading-tight mb-4">
            Por que os tutores de João Monlevade confiam na Clínica São Luiz?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A diferença real entre uma consulta apressada de balcão e um atendimento médico que verdadeiramente escuta você e acolhe quem você ama.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIALS_DATA.map((diff, index) => (
            <div
              key={diff.id}
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-slate-200/80 hover:border-teal-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getDiffIcon(diff.id)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
                    {diff.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#083344] mb-3 leading-snug">
                  {diff.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="text-teal-600 font-bold">Pilar #{index + 1}</span>
                <span>•</span>
                <span>Compromisso permanente com o tutor</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#083344] to-[#0d455b] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              Seu pet merece um atendimento com calma e respeito.
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Agende uma consulta preventiva, vacinação ou avaliação cirúrgica diretamente com nossa equipe no WhatsApp.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de agendar uma consulta na Clínica São Luiz e conhecer o atendimento de vocês.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#00A896] hover:bg-[#009282] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all whitespace-nowrap active:scale-95"
          >
            <span>Falar com a Recepção no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
