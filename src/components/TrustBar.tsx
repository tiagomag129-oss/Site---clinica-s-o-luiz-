import React from 'react';
import { Star, Clock, Shield, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustBar: React.FC = () => {
  return (
    <section className="border-y border-slate-200/80 bg-white/80 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Item 1 */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0 text-amber-500 shadow-2xs">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-extrabold text-[#083344] text-lg leading-tight">
                <span>Nota 5.0</span>
                <span className="text-xs font-semibold text-amber-600 bg-amber-100/60 px-1.5 py-0.5 rounded">Google</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">100% de aprovação comprovada</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center shrink-0 text-teal-600 shadow-2xs">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-[#083344] text-lg leading-tight">
                {CLINIC_INFO.yearsInMarket}
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Tradição no Cruzeiro Celeste</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center shrink-0 text-cyan-600 shadow-2xs">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-[#083344] text-lg leading-tight">
                Cães & Gatos
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Corpo clínico especializado</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shrink-0 text-emerald-600 shadow-2xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-[#083344] text-lg leading-tight">
                Farmácia Local
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Medicamentos imediatos</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
