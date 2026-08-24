export const navigationItems = [
  { href: "#problema", label: "O Problema" },
  { href: "#solucao", label: "A Solução" },
  { href: "#recursos", label: "Recursos" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export const carouselSlides = [
  {
    src: "/images/carousel/process-01-chat-message.svg",
    alt: "Thread aberta no Google Chat com a mensagem inicial e uma resposta",
    caption: "A demanda nasce na conversa",
  },
  {
    src: "/images/carousel/process-02-card-created.svg",
    alt: "Board do ThreadFlow com o card criado a partir da thread",
    caption: "A thread ganha visibilidade",
  },
  {
    src: "/images/carousel/process-03-card-settings.svg",
    alt: "Painel de detalhes do card com prioridade, responsável e configuração de SLA",
    caption: "O trabalho ganha contexto",
  },
  {
    src: "/images/carousel/process-04-sla-applied.svg",
    alt: "Board do ThreadFlow com SLA aplicado ao card",
    caption: "O prazo entra no radar",
  },
  {
    src: "/images/carousel/process-05-chat-reaction-progress.svg",
    alt: "Reação adicionada à mensagem no Google Chat para avançar o card",
    caption: "Uma reação movimenta o fluxo",
  },
  {
    src: "/images/carousel/process-06-card-in-progress.svg",
    alt: "Card movido automaticamente para Em progresso no ThreadFlow",
    caption: "A demanda avança automaticamente",
  },
  {
    src: "/images/carousel/process-07-chat-reaction-complete.svg",
    alt: "Reação de conclusão adicionada à mensagem no Google Chat",
    caption: "A conclusão acontece na conversa",
  },
  {
    src: "/images/carousel/process-08-card-completed.svg",
    alt: "Card movido automaticamente para Concluído no ThreadFlow",
    caption: "O ciclo termina acompanhado",
  },
] as const;

export const resourceTabs = [
  {
    id: "board",
    number: "01",
    label: "Board compartilhado",
    eyebrow: "Visibilidade",
    title: "Um quadro compartilhado para cada espaço.",
    description:
      "Todos enxergam os mesmos cards, colunas, responsáveis e prioridades — sem cópias privadas do trabalho.",
  },
  {
    id: "sla",
    number: "02",
    label: "SLA visível",
    eyebrow: "Previsibilidade",
    title: "O prazo deixa de ser uma surpresa.",
    description:
      "Metas por espaço, ciclos históricos e alertas ajudam a agir antes que uma demanda ultrapasse o combinado.",
  },
  {
    id: "sync",
    number: "03",
    label: "Sincronização",
    eyebrow: "Continuidade",
    title: "O board acompanha o que acontece no Chat.",
    description:
      "Eventos, sincronização e atualizações em tempo real mantêm o estado do trabalho alinhado entre as pessoas.",
  },
  {
    id: "reaction",
    number: "04",
    label: "Ações por reação",
    eyebrow: "Automação",
    title: "O fluxo pode avançar sem sair da conversa.",
    description:
      "Reações Unicode configuradas por coluna podem mover cards quando usadas por pessoas autorizadas no Google Chat.",
  },
] as const;

export type ResourceTabId = (typeof resourceTabs)[number]["id"];

export const faqItems = [
  {
    question: "O ThreadFlow substitui o Google Chat?",
    answer:
      "Não. A conversa continua no Google Chat. O ThreadFlow acrescenta a camada de acompanhamento operacional.",
  },
  {
    question: "Quando uma thread se torna um card?",
    answer:
      "A raiz é persistida para o SLA, mas o card só fica visível depois que existe uma resposta ativa na thread.",
  },
  {
    question: "Todos os usuários veem os mesmos espaços?",
    answer:
      "Não. Cada pessoa acessa apenas os espaços para os quais possui permissão explícita. Um papel administrativo global não concede acesso automático aos boards.",
  },
  {
    question: "O board é individual ou compartilhado?",
    answer:
      "Compartilhado. Pessoas com acesso ao mesmo espaço trabalham sobre os mesmos cards, colunas e configurações.",
  },
  {
    question: "O que pode ser validado em um piloto?",
    answer:
      "Redução de threads esquecidas, idade dos itens abertos, cobertura de responsáveis, tempo de primeira resposta, esforço manual e percepção do time.",
  },
] as const;
