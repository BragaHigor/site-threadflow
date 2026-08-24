# Stack do projeto

## Runtime e framework

| Tecnologia | Versão instalada | Responsabilidade |
| --- | ---: | --- |
| Node.js | 22 recomendado | Runtime de desenvolvimento e build |
| Next.js | 16.3.2 | App Router, build, metadata e otimização |
| React | 19.2.0 | Componentes e estado interativo |
| TypeScript | 5.9.3 | Tipagem estrita e contratos |

## Estilos e assets

| Tecnologia | Versão instalada | Responsabilidade |
| --- | ---: | --- |
| Tailwind CSS | 4.3.3 | Utilities e tema do projeto |
| `@tailwindcss/postcss` | 4.3.3 | Integração Tailwind/PostCSS |
| CSS nativo | plataforma | Tokens e componentes visuais complexos |
| `next/font` | Next.js | Inter e Sora hospedadas localmente |
| `next/image` | Next.js | Imagens responsivas e assets públicos |

## Qualidade

- ESLint com `core-web-vitals` e regras TypeScript do Next.js.
- TypeScript em modo `strict`.
- Build de produção com Turbopack.
- `npm audit` para dependências.

## APIs do navegador

- `matchMedia`;
- `IntersectionObserver`;
- `requestAnimationFrame`;
- Pointer Events;
- Page Visibility API;
- atributos ARIA e live regions.

## SEO e publicação

- Metadata API do App Router;
- Open Graph e Twitter Image com `ImageResponse`;
- Metadata Routes para robots, sitemap e manifest;
- domínio canônico `https://threadflow.com.br`, inclusive em previews da Vercel;
- deploy nativo na Vercel, sem diretório de saída customizado.

## Comandos

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run check
```

## Política de dependências

Adicionar uma biblioteca somente quando ela reduzir complexidade real, tiver manutenção ativa e não duplicar uma capacidade simples do React, Next.js, Tailwind ou navegador.
