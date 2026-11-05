import React from 'react';
import { Heart, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/clinicData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Storytelling with Cat Exam Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="overflow-hidden rounded-3xl border-4 border-slate-100 shadow-xl bg-slate-100 aspect-4/3">
                <img
                  src="/src/assets/images/cat_gentle_exam_1793879605667.jpg"
                  alt="Veterinária da Clínica São Luiz em exame cuidadoso e tranquilo com gato sobre toalha macia"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Float Card: Manejo Cat-Friendly */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#083344] text-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-xs z-10">
                <div className="flex items-center gap-2 mb-1.5 text-teal-300 font-bold text-xs uppercase tracking-wider">
                  <Heart className="w-4 h-4 fill-teal-300" />
                  <span>Respeito ao Animal</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Manejo sereno para cães e felinos, respeitando o tempo e o medo de cada pet na consulta.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Manifesto de Cuidado</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083344] tracking-tight leading-tight mb-4">
              Cuidar da saúde animal é uma questão de respeito, paciência e vocação.
            </h2>

            <p className="text-base sm:text-lg text-teal-800 font-semibold mb-6">
              Na Veterinária São Luiz, seu pet nunca é apenas mais um número em uma ficha.
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base mb-8">
              <p>
                Sabemos o quanto seu cão ou gato significa para a sua família. Sabemos também que ir ao veterinário pode gerar medo no animal e ansiedade no tutor.
              </p>
              <p>
                Por isso, nossa prática diária é guiada por uma premissa simples: <strong className="text-slate-900 font-semibold">medicina veterinária exercida com calma</strong>. Reservamos o tempo necessário para examinar seu pet sem pressa, escutar suas observações do dia a dia e explicar cada etapa do diagnóstico de forma clara e transparente.
              </p>
              <p>
                Localizada no bairro Cruzeiro Celeste, nossa clínica combina rigor técnico, ambiente higienizado e acolhimento afetuoso, proporcionando a segurança médica que seu companheiro precisa para viver muitos anos ao seu lado com vitalidade e alegria.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Manejo suave sem pressa nem agressividade</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Diálogo transparente e orientações claras</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Apenas procedimentos e exames necessários</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Farmácia no local para início imediato</span>
              </div>
            </div>

            {/* Section CTA */}
            <a
              href={buildWhatsAppUrl('Olá! Conheci a filosofia da São Luiz pelo site e gostaria de agendar uma consulta para meu pet.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#083344] hover:bg-[#0c445a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 text-teal-400" />
              <span>Conheça nosso atendimento no WhatsApp</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
