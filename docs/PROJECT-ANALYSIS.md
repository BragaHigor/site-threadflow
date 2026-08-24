# Análise técnica e registro da migração

**Projeto:** ThreadFlow Landing Page  
**Atualização:** 23 de agosto de 2026

## Estado anterior

O repositório continha uma landing page estática em HTML, CSS e JavaScript ES Modules. A implementação era funcional e organizada, mas não possuía framework, TypeScript, pipeline de build, metadata completa ou configuração nativa para a Vercel.

## Estado atual

A landing page foi migrada para Next.js 16, React 19, TypeScript e Tailwind CSS 4. A versão estática anterior permanece em `legacy/static-site` apenas como referência.

## Decisões arquiteturais

- App Router e pré-renderização estática.
- Server Components para conteúdo editorial.
- Client Components pequenos para interações.
- Conteúdo repetido extraído para dados tipados.
- Configuração central de domínio e identidade.
- Tailwind como base, mantendo CSS semântico para o visual complexo já validado.
- Nenhuma biblioteca adicional de UI ou estado, pois React e APIs nativas são suficientes.

## Comportamentos preservados

- Menu responsivo e fechamento por Escape/link.
- Progresso de leitura.
- Reveal por IntersectionObserver.
- Parallax da aurora.
- Carrossel por autoplay, setas, teclado e swipe.
- Pausa em hover, foco, interação e aba oculta.
- Tabs com navegação por teclado.
- FAQ exclusivo com estado ARIA.
- Preferência de movimento reduzido.

## Ajustes realizados

- Controles do carrossel com alvo mínimo de 44px.
- Remoção do overflow observado em 320px.
- Fallback sólido para glassmorphism e transparência reduzida.
- Remoção do cleanup baseado em `pagehide`.
- Fontes hospedadas pelo build via `next/font`.
- Cachebusters manuais substituídos pelo pipeline do Next.js.

## SEO configurado

- title, description, keywords e canonical;
- Open Graph e Twitter Card;
- imagens sociais geradas em 1200 × 630;
- robots.txt, sitemap.xml e manifest.webmanifest;
- ícones, locale, theme color e regras para Googlebot;
- domínio canônico `https://threadflow.com.br` para produção e previews da Vercel.

## Validações concluídas

- ESLint e TypeScript sem erros.
- Build de produção concluído.
- Página e rotas de metadata pré-renderizadas.
- Home e cinco rotas de SEO respondendo HTTP 200.
- Nenhum erro de console na origem local correta.
- Carrossel, pausa, tabs, FAQ e menu mobile testados.
- Layout conferido em desktop, 390px e 320px.
- Sem overflow horizontal em 320px.
- Touch targets do carrossel medindo 44px.
- Auditoria explícita do npm sem vulnerabilidades reportadas.

## Pendência de produto

Os CTAs ainda apontam para seções internas porque não foi fornecido um endereço comercial, formulário ou URL de conversão. Nenhum destino foi inventado.

## Deploy

O projeto está pronto para importação na Vercel. O framework é detectado automaticamente, `npm run build` é o comando de produção e não há diretório de saída customizado.
