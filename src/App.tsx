import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { StructureSection } from './components/StructureSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Header and Smart Utility Bar */}
      <Header />

      {/* Main Conversion Journey */}
      <main id="conteudo-principal" className="flex-1">
        {/* 1. Hero Principal */}
        <Hero />

        {/* 2. Barra de Credibilidade Rápida */}
        <TrustBar />

        {/* 3. Apresentação Institucional & Manifesto do Cuidado */}
        <AboutSection />

        {/* 4. Serviços Clínicos & Cirúrgicos Estruturados */}
        <ServicesSection />

        {/* 5. Diferenciais Comprovados (O DNA da Nota 5.0) */}
        <DifferentialsSection />

        {/* 6. Estrutura Física & Farmácia Veterinária Integrada */}
        <StructureSection />

        {/* 7. Prova Social: Avaliações Reais no Google (5.0 ★) */}
        <ReviewsSection />

        {/* 8. Perguntas Frequentes (FAQ Anti-Objeções) */}
        <FaqSection />

        {/* 9. Localização Interativa, Rotas GPS & Horários */}
        <LocationSection />
      </main>

      {/* Rodapé Institucional Completo */}
      <Footer />

      {/* Floating Sticky CTA do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
