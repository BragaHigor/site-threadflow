# Instruções do projeto ThreadFlow Landing Page

## Contexto obrigatório

Este repositório usa Next.js App Router, React, TypeScript e Tailwind CSS. Consulte `.spec/architecture.md`, `.spec/stack.md` e `docs/THREADFLOW-UX-UI-DESIGN-SYSTEM.md` antes de mudanças estruturais ou visuais.

A implementação HTML/CSS/JS anterior está em `legacy/static-site` e não participa do build.

## Arquitetura

- Use Server Components por padrão.
- Adicione `"use client"` somente quando o componente exigir estado, eventos ou APIs do navegador.
- Mantenha componentes por seção em `src/components/sections`.
- Mantenha layout global em `src/components/layout`.
- Extraia comportamento reutilizável para `src/hooks`.
- Coloque conteúdo repetido e estático em `src/data` com tipos inferidos ou explícitos.
- Centralize identidade, domínio e SEO em `src/lib/site-config.ts` e `src/app/layout.tsx`.
- Não importe código de `legacy/static-site`.

## TypeScript e clean code

- Preserve `strict: true` e não use `any` sem justificativa documentada.
- Prefira funções pequenas, nomes orientados à intenção e early returns.
- Uma função ou componente deve ter uma responsabilidade principal.
- Evite duplicar strings, dados ou lógica de normalização.
- Todo efeito deve limpar listeners, timers, observers e animation frames.
- Não adicione dependências para utilidades triviais.

## Tailwind e CSS

- Tailwind é a base de utilities e tema.
- Preserve `src/styles` para tokens e componentes visuais complexos.
- Use tokens semânticos; não espalhe cores e medidas mágicas.
- Mantenha breakpoints em `src/styles/utilities/responsive.css`.
- Glassmorphism exige fallback sólido e respeito a `prefers-reduced-transparency`.
- Preserve a identidade documentada em `legacy/static-site/assets/img/logo/BRAND-GUIDE.md`.

## Acessibilidade e responsividade

- Todo controle deve funcionar por teclado.
- Preserve foco visível, skip link e ordem semântica do DOM.
- Atualize ARIA junto com o estado visual.
- Mantenha touch targets com pelo menos 44 × 44px.
- Não comunique estado apenas por cor.
- Respeite `prefers-reduced-motion`.
- Autoplay deve ter pausa e interromper em hover, foco, interação e aba oculta.
- Verifique 1024px, 768px, 560px e 320px sem overflow horizontal.

## Next.js e SEO

- Use `next/image` e `next/font`.
- Use a Metadata API; não adicione tags de SEO manualmente no JSX.
- Use `getSiteUrl()`; o domínio canônico padrão é `https://threadflow.com.br` e só deve ser alterado por configuração explícita.
- Preserve robots, sitemap, manifest e imagens sociais.

## Verificação obrigatória

Após mudanças relevantes, execute:

```bash
npm run lint
npm run typecheck
npm run build
```

Para alterações visuais ou interativas, valide também o comportamento renderizado nos breakpoints afetados.
