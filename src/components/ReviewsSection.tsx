import React from 'react';
import { Star, ExternalLink, CheckCircle, Quote, MessageCircle } from 'lucide-react';
import { REVIEWS_DATA, CLINIC_INFO, buildWhatsAppUrl } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading & Google Emblem */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Reputação Impecável no Google</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083344] tracking-tight leading-tight mb-4">
            Quem nos conhece recomenda com nota máxima.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            Confira depoimentos autênticos de tutores de João Monlevade que confiam a saúde de seus animais à Clínica São Luiz.
          </p>

          {/* Centralized Rating Metric Box */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-6 sm:py-3 rounded-2xl bg-[#FAF8F5] border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-[#083344]">{CLINIC_INFO.rating.toFixed(1)}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
            <div className="text-xs text-slate-600 text-center sm:text-left">
              <span className="font-bold text-slate-900 block">{CLINIC_INFO.reviewsCount} avaliações verificadas</span>
              <span>100% de satisfação registrada</span>
            </div>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 underline underline-offset-2 ml-2"
            >
              <span>Ver no Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-3xl bg-[#FAF8F5] border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300/80" />
                </div>

                {/* Review Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Verification Info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{review.author}</h4>
                  <span className="text-[11px] text-slate-500">{review.role}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-teal-700">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner with Warm Animal Care Image */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 bg-[#083344] text-white">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center items-start">
            <span className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
              Longevidade & Bem-Estar Pet
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              Junte-se às famílias de João Monlevade que confiam plenamente na São Luiz.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-lg">
              Oferecemos o cuidado veterinário carinhoso e cientificamente responsável que o seu melhor amigo precisa para viver muito e com saúde.
            </p>
            <a
              href={buildWhatsAppUrl('Olá! Vi as excelentes avaliações no site e gostaria de agendar uma consulta para meu pet.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#00A896] hover:bg-[#009282] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white text-teal-600" />
              <span>Agendar Agora pelo WhatsApp</span>
            </a>
          </div>

          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src="/src/assets/images/healthy_pets_care_1793879638511.jpg"
              alt="Cão e gato saudáveis e tranquilos juntos demonstrando o bem-estar proporcionado pela Clínica São Luiz"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
