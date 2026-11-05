export interface ServiceItem {
  id: string;
  title: string;
  category: 'preventivo' | 'cirurgico';
  description: string;
  indication: string;
  benefits: string[];
  whatsappMessage: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  name: 'Clínica Veterinária São Luiz',
  brandName: 'Veterinária São Luiz',
  city: 'João Monlevade',
  state: 'MG',
  neighborhood: 'Cruzeiro Celeste',
  address: 'Rua Nova York, 51, loja 2',
  fullAddress: 'Rua Nova York, 51, loja 2, Cruzeiro Celeste, João Monlevade - MG, CEP 35931-112',
  cep: '35931-112',
  phone: '(31) 3852-5863',
  phoneClean: '+553138525863',
  whatsapp: '(31) 99429-5899',
  whatsappClean: '5531994295899',
  rating: 5.0,
  reviewsCount: 6,
  yearsInMarket: '+3 anos',
  species: 'Exclusivo para Cães e Gatos',
  googleMapsUrl: 'https://maps.google.com/?q=Rua+Nova+York,+51,+Cruzeiro+Celeste,+Joao+Monlevade+-+MG',
  wazeUrl: 'https://waze.com/ul?q=Rua+Nova+York+51+Cruzeiro+Celeste+Joao+Monlevade',
  hours: {
    weekdays: 'Segunda a Sexta: 08:00 às 17:00',
    saturday: 'Sábado: 08:00 às 12:00',
    sunday: 'Domingo e Feriados: Fechado',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'consultas-clinicas',
    title: 'Consultas Clínicas Gerais & Check-up',
    category: 'preventivo',
    description: 'Exame físico minucioso, acompanhamento de peso, ausculta cardiopulmonar e diagnóstico precoce para manter a saúde do seu pet sempre protegida.',
    indication: 'Indicado para acompanhamento de rotina, animais filhotes em crescimento ou pets com mudanças de comportamento ou apetite.',
    benefits: ['Exame clínico detalhado sem pressa', 'Orientações nutricionais e preventivas', 'Histórico de saúde personalizado'],
    whatsappMessage: 'Olá! Gostaria de agendar uma consulta clínica de rotina na Veterinária São Luiz.',
  },
  {
    id: 'vacinacao-etica',
    title: 'Vacinação Ética & Desparasitação',
    category: 'preventivo',
    description: 'Protocolos de imunização completos com vacinas importadas de alta eficácia (V8/V10, Antirrábica, Gripe e Giardia para cães; Quádrupla/Quíntupla felina), além de controle antiparasitário.',
    indication: 'Essencial desde os primeiros 45 dias de vida e reforços anuais para garantir imunidade vitalícia.',
    benefits: ['Vacinas importadas com refrigeração monitorada', 'Carteirinha de vacinação oficial', 'Controle eficaz de pulgas, carrapatos e vermes'],
    whatsappMessage: 'Olá! Gostaria de consultar o calendário vacinal e agendar as vacinas do meu pet na São Luiz.',
  },
  {
    id: 'castracao-segura',
    title: 'Castração Segura & Responsável',
    category: 'cirurgico',
    description: 'Procedimento cirúrgico eletivo realizado com rigoroso centro cirúrgico higienizado, avaliação pré-operatória, controle avançado de dor e pós-operatório monitorado.',
    indication: 'Previne tumores de mama e próstata, piometra (infecção uterina grave), marcação de território e fugas em cães e gatos.',
    benefits: ['Avaliação e exames pré-anestésicos', 'Anestesia segura e centro cirúrgico limpo', 'Recuperação confortável e orientações pós-cirúrgicas'],
    whatsappMessage: 'Olá! Gostaria de informações sobre o procedimento de castração segura para meu cão/gato na São Luiz.',
  },
  {
    id: 'dermatologia-pet',
    title: 'Dermatologia & Cuidados de Pele',
    category: 'preventivo',
    description: 'Diagnóstico e tratamento especializado para coceiras insistentes, queda de pelos, alergias alimentares, infecções fúngicas, bacterianas e otites frequentes.',
    indication: 'Para animais que se coçam excessivamente, mordem as patas, apresentam feridas ou vermelhidão na pele e orelhas.',
    benefits: ['Identificação precisa da causa da coceira', 'Tratamentos modernos e eficazes', 'Alívio rápido do desconforto do animal'],
    whatsappMessage: 'Olá! Meu pet está com coceira/problema de pele e gostaria de agendar uma avaliação dermatológica.',
  },
  {
    id: 'cardiologia-cirurgias',
    title: 'Cardiologia & Avaliação Pré-Cirúrgica',
    category: 'cirurgico',
    description: 'Avaliação clínica e monitoramento da saúde cardíaca, essencial para pets idosos e para garantir que qualquer procedimento anestésico ocorra com total tranquilidade.',
    indication: 'Pets sêniores (acima de 7 anos), cães com tosse seca ou cansaço fácil, e pacientes com cirurgia programada.',
    benefits: ['Detecção precoce de cardiopatias', 'Segurança máxima em cirurgias eletivas', 'Mais qualidade de vida para pets idosos'],
    whatsappMessage: 'Olá! Gostaria de agendar uma avaliação cardíaca/pré-operatória para meu pet na São Luiz.',
  },
  {
    id: 'odontologia-veterinaria',
    title: 'Odontologia (Profilaxia de Tártaro)',
    category: 'preventivo',
    description: 'Remoção ultrassônica do tártaro acumulado, prevenindo infecções bucais dolorosas e impedindo que bactérias migrem para a corrente sanguínea, afetando rins e coração.',
    indication: 'Cães e gatos com mau hálito, placas amareladas nos dentes, sangramento gengival ou dificuldade para mastigar.',
    benefits: ['Fim do mau hálito crônico', 'Proteção aos órgãos nobres (rins e coração)', 'Alívio imediato da dor mastigatória'],
    whatsappMessage: 'Olá! Gostaria de agendar uma avaliação odontológica e limpeza de tártaro para meu pet.',
  },
];

export const DIFFERENTIALS_DATA = [
  {
    id: 'atencao-individualizada',
    title: 'Atenção Individualizada e Calma',
    description: 'Consultas com tempo dedicado para escutar o tutor e examinar o animal com serenidade, respeitando o medo e o estresse natural do pet.',
    badge: 'Manejo Humanizado',
  },
  {
    id: 'nota-maxima-google',
    title: 'Nota 5.0 Impecável no Google',
    description: '100% de avaliações máximas e espontâneas de clientes reais de João Monlevade, comprovando nossa dedicação contínua em cada atendimento.',
    badge: 'Reputação Comprovada',
  },
  {
    id: 'farmacia-no-local',
    title: 'Farmácia Veterinária Integrada',
    description: 'Conveniência total: termine a consulta médica e já retire os medicamentos, antibióticos e pomadas no próprio local, sem ter que rodar a cidade.',
    badge: 'Conveniência Prática',
  },
  {
    id: 'tradicao-cruzeiro-celeste',
    title: 'Mais de 3 Anos no Cruzeiro Celeste',
    description: 'Presença sólida e confiável na Rua Nova York, nº 51, com fácil acesso, estacionamento prático e relacionamento próximo com a comunidade.',
    badge: 'Tradição Local',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Maria Clara S.',
    role: 'Tutora de cão em João Monlevade',
    rating: 5,
    date: 'Avaliação verificada no Google',
    text: 'Excelente atendimento! Profissionais muito atenciosos, tiveram toda a paciência do mundo para examinar meu cachorro e me explicar o tratamento direitinho. Recomendo de olhos fechados!',
  },
  {
    id: 'rev-2',
    author: 'Rodrigo M.',
    role: 'Tutor de felino',
    rating: 5,
    date: 'Avaliação verificada no Google',
    text: 'Lugar acolhedor e com profissionais realmente competentes. Tratam os animais com muito amor e respeito. Minha gatinha foi super bem cuidada. Melhor clínica da região!',
  },
  {
    id: 'rev-3',
    author: 'Luciana F.',
    role: 'Cliente verificada',
    rating: 5,
    date: 'Avaliação verificada no Google',
    text: 'Confio de olhos fechados na São Luiz. Sempre que precisei de consulta e vacinas fui super bem atendida. Ambiente limpo, organizado e preço justo. Nota 10!',
  },
  {
    id: 'rev-4',
    author: 'Gabriel T.',
    role: 'Tutor de Golden Retriever',
    rating: 5,
    date: 'Avaliação verificada no Google',
    text: 'Atenção nota 1000! O carinho com que cuidaram do meu cachorro fez toda a diferença. Dá para ver a paixão que a equipe tem pelos animais. Parabéns pelo trabalho!',
  },
  {
    id: 'rev-5',
    author: 'Camila R.',
    role: 'Moradora do Cruzeiro Celeste',
    rating: 5,
    date: 'Avaliação verificada no Google',
    text: 'Muito bom ter uma clínica desse nível perto de casa. Farmácia com os remédios que precisava e atendimento pontual e carinhoso.',
  },
  {
    id: 'rev-6',
    author: 'Eduardo P.',
    role: 'Tutor de dois cães',
    rating: 5,
    date: 'Avaliação verificada no Google',
    text: 'Equipe exemplar e muito atenciosa. Cuidado cirúrgico impecável na castração. Recuperação rápida e acompanhamento constante!',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o agendamento de consultas na Clínica São Luiz?',
    answer: 'O agendamento é simples e imediato. Basta clicar no botão do WhatsApp (31) 99429-5899 ou ligar para o telefone (31) 3852-5863. Nossa equipe informará os horários disponíveis e tirará qualquer dúvida prévia para receber você e seu companheiro.',
  },
  {
    id: 'faq-2',
    question: 'A clínica atende apenas cães e gatos?',
    answer: 'Sim! Nosso corpo clínico e nossa estrutura são exclusivamente especializados na medicina de cães e gatos. Isso garante um conhecimento aprofundado das particularidades biológicas, farmacológicas e comportamentais de cada uma dessas espécies.',
  },
  {
    id: 'faq-3',
    question: 'Como funciona o atendimento para urgências e emergências?',
    answer: 'Realizamos atendimentos de pronto-socorro clínico dentro do nosso horário regular de funcionamento: de segunda a sexta-feira das 08:00 às 17:00 e aos sábados das 08:00 às 12:00. Caso seu pet apresente sintomas agudos ou graves (como vômitos persistentes, convulsão ou ferimentos), recomendamos enviar uma mensagem no WhatsApp ou ligar antes de sair de casa para prepararmos a recepção imediata.',
  },
  {
    id: 'faq-4',
    question: 'A partir de que idade posso castrar meu cão ou gato?',
    answer: 'Em geral, a castração pode ser realizada a partir dos 5 a 6 meses de idade, dependendo do porte, da raça e da avaliação individual. Antes do procedimento cirúrgico, realizamos uma consulta pré-operatória e solicitamos os exames necessários para garantir máxima segurança anestésica.',
  },
  {
    id: 'faq-5',
    question: 'A clínica possui farmácia com medicamentos para venda no local?',
    answer: 'Sim! Dispomos de farmácia veterinária própria no Cruzeiro Celeste com antibióticos, anti-inflamatórios, analgésicos, vermífugos, coleiras e comprimidos antiparasitários, além de dermocosméticos. Você já sai da consulta médica com o tratamento prescrito em mãos, sem precisar rodar pela cidade.',
  },
];

export function getClinicStatus(): {
  isOpen: boolean;
  statusText: string;
  badgeClass: string;
  detailText: string;
} {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour * 60 + minute;

  // Weekdays: 08:00 (480 min) to 17:00 (1020 min)
  if (day >= 1 && day <= 5) {
    if (currentTime >= 480 && currentTime < 1020) {
      const remainingMinutes = 1020 - currentTime;
      if (remainingMinutes <= 45) {
        return {
          isOpen: true,
          statusText: 'Fechando em breve (atendimento até 17h)',
          badgeClass: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
          detailText: 'Atendimento hoje até às 17:00',
        };
      }
      return {
        isOpen: true,
        statusText: 'Aberto agora até às 17h',
        badgeClass: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
        detailText: 'Segunda a Sexta das 08:00 às 17:00',
      };
    }
  }

  // Saturday: 08:00 (480 min) to 12:00 (720 min)
  if (day === 6) {
    if (currentTime >= 480 && currentTime < 720) {
      return {
        isOpen: true,
        statusText: 'Aberto agora (plantão de sábado até 12h)',
        badgeClass: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
        detailText: 'Sábado das 08:00 às 12:00',
      };
    }
  }

  // Closed
  return {
    isOpen: false,
    statusText: 'Fechado no momento • Agendamentos via WhatsApp',
    badgeClass: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
    detailText: 'Atendimento presencial de Seg a Sex (08h às 17h) e Sáb (08h às 12h)',
  };
}

export function buildWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Olá! Gostaria de informações para agendar uma consulta na Clínica Veterinária São Luiz.';
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${CLINIC_INFO.whatsappClean}?text=${text}`;
}
