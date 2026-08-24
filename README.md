# ThreadFlow Landing Page

Landing page institucional do ThreadFlow construída com Next.js, React, TypeScript e Tailwind CSS. A aplicação usa App Router, renderização estática, componentes por responsabilidade e rotas nativas de metadata para SEO.

## Stack

- Next.js 16 com App Router e Turbopack;
- React 19;
- TypeScript em modo estrito;
- Tailwind CSS 4 via PostCSS;
- CSS semântico em camadas para preservar o design system;
- `next/font` para Inter e Sora;
- `next/image` para assets da marca e do produto.

## Executar localmente

Requisitos: Node.js 20.9 ou superior. O projeto inclui `.nvmrc` com Node 22.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run lint       # ESLint com regras do Next.js e TypeScript
npm run typecheck  # verificação de tipos sem emitir arquivos
npm run build      # build otimizado de produção
npm run start      # executa o build de produção
npm run check      # lint + tipos + build
```

## Estrutura

```text
src/
├── app/                         # App Router, SEO e composição
├── components/                  # efeitos, layout, seções e UI
├── data/                        # conteúdo estruturado da página
├── hooks/                       # preferências do navegador
├── lib/                         # configuração do site e domínio
└── styles/                      # tokens e estilos por camada
public/images/                   # assets públicos
legacy/static-site/              # implementação anterior
.spec/                           # arquitetura e stack
```

## Arquitetura

As seções editoriais são Server Components. Apenas áreas que dependem do navegador são Client Components: header, menu, progresso de leitura, carrossel, tabs, FAQ, reveal e parallax.

Conteúdo repetido fica tipado em `src/data/site-content.ts`. Configuração de domínio e identidade fica em `src/lib/site-config.ts`.

## SEO

O projeto configura título, descrição, keywords, canonical, Open Graph, Twitter Card, imagens sociais, `robots.txt`, `sitemap.xml`, manifest, ícones e theme color.

O domínio é resolvido nesta ordem:

1. `NEXT_PUBLIC_SITE_URL`;
2. `https://threadflow.com.br`, definido como domínio canônico do projeto.

Os previews da Vercel também apontam seus metadados canônicos para o domínio de produção, evitando indexação duplicada.

Use `.env.example` como referência ao configurar um domínio próprio.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. A Vercel detectará Next.js automaticamente.
3. Mantenha o comando de build como `npm run build`.
4. Configure `NEXT_PUBLIC_SITE_URL=https://threadflow.com.br` para deixar o domínio canônico explícito no ambiente.
5. Adicione `threadflow.com.br` em **Settings > Domains** e direcione `www.threadflow.com.br` para o domínio principal, caso também utilize a versão com `www`.
6. Faça o deploy.

Não é necessário configurar diretório de saída.

## Qualidade

```bash
npm run check
npm audit
```

Além das verificações automatizadas, valide carrossel, menu, tabs e FAQ por mouse e teclado nos breakpoints relevantes.

## Implementação anterior

A versão estática original foi preservada em `legacy/static-site` apenas para comparação e histórico. Ela não participa do build atual.
