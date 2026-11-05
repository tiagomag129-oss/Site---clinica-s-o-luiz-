import React from 'react';
import { Phone, MessageCircle, MapPin, Heart, Shield, Clock } from 'lucide-react';
import { CLINIC_INFO, buildWhatsAppUrl } from '../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#083344] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="bg-white p-2 rounded-xl mb-4 inline-block">
              <img
                src="/assets/aistudio/Screenshot_20261105_073908_Instagram_516ec4df.jpg"
                alt="Clínica Veterinária São Luiz"
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
              Medicina veterinária dedicada com carinho para cães e gatos em João Monlevade. Mais de 3 anos cuidando com respeito, paciência e responsabilidade da saúde do seu companheiro.
            </p>

            <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold bg-teal-950/60 border border-teal-800/80 px-3 py-1.5 rounded-lg">
              <Shield className="w-4 h-4 text-teal-400" />
              <span>Atendimento Ético • Nota 5.0 no Google</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-teal-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">Serviços Veterinários</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-teal-400 transition-colors">A Clínica & Filosofia</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-teal-400 transition-colors">Diferenciais da São Luiz</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-teal-400 transition-colors">Avaliações Verificadas</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-teal-400 transition-colors">Localização & Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Atendimento & Contato
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">{CLINIC_INFO.address}</strong>
                  <span className="text-slate-400">Cruzeiro Celeste, João Monlevade - MG</span>
                  <span className="text-slate-400 block">CEP: {CLINIC_INFO.cep}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone} (Telefone Fixo)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_INFO.whatsapp} (WhatsApp Oficial)
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <span className="block text-white font-medium">{CLINIC_INFO.hours.weekdays}</span>
                  <span className="block text-slate-300">{CLINIC_INFO.hours.saturday}</span>
                  <span className="block text-slate-400">{CLINIC_INFO.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer & Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="text-center sm:text-left text-slate-300">
            © 2026 {CLINIC_INFO.name}. Todos os direitos reservados. João Monlevade - MG.
          </p>
          <div className="flex items-center gap-1.5 text-slate-300 text-center">
            <span>Medicina veterinária exercida com respeito e amor</span>
            <Heart className="w-3.5 h-3.5 fill-teal-400 text-teal-400 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
