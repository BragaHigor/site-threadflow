# Arquitetura do projeto

## Visão geral

O projeto é uma landing page de rota única construída com Next.js App Router. A página é pré-renderizada como conteúdo estático e combina Server Components para conteúdo editorial com Client Components pequenos e focados para interação.

## Estrutura principal

```text
src/app
├── layout.tsx
├── page.tsx
├── globals.css
├── manifest.ts
├── robots.ts
├── sitemap.ts
├── opengraph-image.tsx
└── twitter-image.tsx

src/components
├── effects/client-effects.tsx
├── layout/site-header.tsx
├── layout/site-footer.tsx
├── sections/
└── ui/button-link.tsx

src/data/site-content.ts
src/hooks/use-reduced-motion.ts
src/lib/site-config.ts
src/styles/
public/images/
```

## Limites de responsabilidade

### App Router

- `layout.tsx`: fontes, metadata, viewport e shell HTML.
- `page.tsx`: composição das seções sem lógica de interação.
- arquivos de metadata: manifest, robots, sitemap e imagens sociais.

### Server Components

São o padrão para hero, problema, solução, recursos editoriais, segurança, FAQ estrutural, piloto e footer. Eles enviam menos JavaScript ao navegador e mantêm conteúdo indexável.

### Client Components

São usados somente onde APIs do navegador ou estado interativo são necessários:

- `site-header.tsx`: menu e progresso de leitura;
- `hero-carousel.tsx`: navegação, swipe, teclado, autoplay e pausa;
- `resources-tabs.tsx`: estado e padrão ARIA de tabs;
- `faq-accordion.tsx`: estado do accordion;
- `client-effects.tsx`: IntersectionObserver e parallax.

### Dados e configuração

- `site-content.ts`: navegação, slides, tabs e perguntas frequentes.
- `site-config.ts`: identidade, descrição, keywords e resolução do domínio.

### Estilos

Tailwind CSS é carregado em `globals.css`. Os estilos visuais complexos permanecem organizados por tokens, componentes, seções e responsividade em `src/styles`.

Essa combinação mantém fidelidade visual e permite usar utilities Tailwind em novos componentes sem concentrar milhares de classes no JSX.

## Fluxo de renderização

1. Next.js pré-renderiza a rota `/`.
2. Server Components produzem todo o conteúdo indexável.
3. Client Components são hidratados apenas nas ilhas interativas.
4. `next/image` entrega os assets públicos.
5. `next/font` baixa e hospeda Inter e Sora no próprio build.
6. Rotas de metadata são geradas estaticamente.

## Princípios

- Server Components por padrão.
- Uma responsabilidade principal por componente ou hook.
- Conteúdo repetido representado como dados tipados.
- Estado acessível refletido em ARIA e no DOM.
- Cleanup obrigatório para listeners, observers, timers e animation frames.
- Tokens como fonte de verdade visual.
- Breakpoints centralizados.
- Sem dependências adicionais quando React e APIs nativas resolvem o problema.
- Implementação anterior isolada em `legacy/static-site` e fora do build.

## Deploy

A aplicação segue as convenções nativas de Next.js detectadas automaticamente pela Vercel. O build gera a página, imagens sociais e rotas de SEO como conteúdo estático.
