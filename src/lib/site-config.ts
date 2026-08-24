export const PRODUCTION_SITE_URL = "https://threadflow.com.br";

function withProtocol(value: string): string {
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
}

export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) return withProtocol(configuredUrl).replace(/\/$/, "");
  return PRODUCTION_SITE_URL;
}

export const siteConfig = {
  name: "ThreadFlow",
  title: "ThreadFlow — Toda conversa vira trabalho com endereço",
  description:
    "ThreadFlow transforma threads do Google Chat em trabalho visível, com responsável, prioridade, SLA e histórico.",
  shortDescription:
    "Um board vivo conectado às threads do Google Chat.",
  locale: "pt_BR",
  language: "pt-BR",
  keywords: [
    "Google Chat",
    "gestão de demandas",
    "Kanban",
    "SLA",
    "colaboração",
    "ThreadFlow",
  ],
} as const;
