import React, { useState } from 'react';
import { 
  Stethoscope, 
  Syringe, 
  Scissors, 
  Sparkles, 
  HeartPulse, 
  Smile, 
  Check, 
  MessageCircle, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, buildWhatsAppUrl, ServiceItem } from '../data/clinicData';

export const ServicesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'preventivo' | 'cirurgico'>('todos');

  const filteredServices = activeFilter === 'todos' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeFilter);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'consultas-clinicas':
        return <Stethoscope className="w-6 h-6 text-teal-600" />;
      case 'vacinacao-etica':
        return <Syringe className="w-6 h-6 text-teal-600" />;
      case 'castracao-segura':
        return <Scissors className="w-6 h-6 text-teal-600" />;
      case 'dermatologia-pet':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'cardiologia-cirurgias':
        return <HeartPulse className="w-6 h-6 text-teal-600" />;
      case 'odontologia-veterinaria':
        return <Smile className="w-6 h-6 text-teal-600" />;
      default:
        return <Stethoscope className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Medicina Veterinária Especializada</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083344] tracking-tight leading-tight mb-4">
            Soluções completas para cada fase da vida do seu cão ou gato.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Da prevenção básica aos cuidados cirúrgicos avançados, unimos precisão técnica, centro cirúrgico higienizado e muito afeto.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveFilter('todos')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'todos'
                  ? 'bg-[#083344] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todos os Serviços (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('preventivo')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'preventivo'
                  ? 'bg-[#083344] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Cuidados Preventivos
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('cirurgico')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'cirurgico'
                  ? 'bg-[#083344] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Cirurgia & Especialidades
            </button>
          </div>
        </div>

        {/* Ethical Diurnal Urgency Alert Banner */}
        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 text-amber-600" />
          </div>
          <div className="text-xs sm:text-sm text-slate-700 flex-1">
            <strong className="text-slate-900 font-bold block sm:inline mr-1">Aviso sobre Urgências Clínicas:</strong>
            Atendemos situações de emergência durante nosso expediente regular (Seg-Sex 08h-17h | Sáb 08h-12h). Caso seu pet apresente sintomas graves, avise nossa recepção no WhatsApp antes de sair de casa para prepararmos o atendimento imediato.
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <article
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    service.category === 'cirurgico'
                      ? 'bg-amber-50 text-amber-800 border border-amber-200/60'
                      : 'bg-teal-50 text-teal-800 border border-teal-200/60'
                  }`}>
                    {service.category === 'cirurgico' ? 'Procedimento Eletivo' : 'Rotina & Prevenção'}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#083344] mb-3 leading-snug group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Indication Box */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-5 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-0.5">Para quem é indicado:</span>
                  {service.indication}
                </div>

                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contextual WhatsApp CTA Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-2xs group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-teal-400 group-hover/btn:text-white" />
                  <span>Agendar no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
