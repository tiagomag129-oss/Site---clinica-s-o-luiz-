import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { CLINIC_INFO, buildWhatsAppUrl, getClinicStatus } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  const status = getClinicStatus();

  return (
    <section id="localizacao" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Localização & Atendimento</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083344] tracking-tight leading-tight mb-4">
            Venha nos visitar no Cruzeiro Celeste.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Fácil acesso, parada prática para transportar seu pet e atendimento acolhedor em João Monlevade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact & Logistics Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] border border-slate-200/90 shadow-2xs">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center shrink-0 text-teal-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083344]">Endereço Completo</h3>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bairro {CLINIC_INFO.neighborhood} • {CLINIC_INFO.city} - {CLINIC_INFO.state}
                  </p>
                  <p className="text-xs text-slate-500">
                    CEP: {CLINIC_INFO.cep}
                  </p>
                </div>
              </div>

              {/* 1-Click GPS Route Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/60">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#083344] font-bold text-xs py-2.5 px-3 rounded-xl border border-slate-300 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={CLINIC_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#083344] font-bold text-xs py-2.5 px-3 rounded-xl border border-slate-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-600" />
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>

            {/* Hours Table Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#083344]">Horários de Funcionamento</h3>
                    <span className="text-xs text-slate-500">Atendimento presencial e recepção</span>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${status.badgeClass}`}>
                  {status.isOpen ? 'Aberto' : 'Fechado'}
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-700">Segunda a Sexta-feira:</span>
                  <span className="font-bold text-[#083344]">08:00 às 17:00</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-700">Sábado:</span>
                  <span className="font-bold text-[#083344]">08:00 às 12:00</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-400">
                  <span>Domingo e Feriados:</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppUrl('Olá! Estou indo até a Clínica São Luiz e gostaria de confirmar o atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#00A896] hover:bg-[#009282] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white text-teal-600" />
                <span>WhatsApp: {CLINIC_INFO.whatsapp}</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm py-3.5 px-4 rounded-xl border border-slate-300 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Ligar: {CLINIC_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/90 shadow-md relative min-h-[380px] bg-slate-100">
            <iframe
              title="Mapa de Localização da Clínica Veterinária São Luiz em João Monlevade"
              src="https://maps.google.com/maps?q=Rua+Nova+York,+51,+Cruzeiro+Celeste,+Joao+Monlevade+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>

            {/* Overlaid Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-[#083344] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span>Rua Nova York, 51, loja 2 • Cruzeiro Celeste</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
