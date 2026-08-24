# ThreadFlow — Sistema de Design UX/UI

> Especificação visual e comportamental baseada na landing page atual. Este documento serve como referência para evoluir o front-end principal do ThreadFlow sem perder consistência de marca, acessibilidade ou responsividade.

## 1. Objetivo do sistema

O ThreadFlow transforma conversas do Google Chat em trabalho acompanhado. A interface deve comunicar quatro atributos:

1. **Clareza operacional:** deve ser fácil identificar demanda, dono, prioridade, prazo e estado.
2. **Continuidade:** a experiência precisa mostrar que Chat e board pertencem ao mesmo fluxo.
3. **Confiança:** segurança, isolamento por espaço e rastreabilidade devem parecer estruturais, não acessórios.
4. **Tecnologia discreta:** efeitos de vidro, profundidade e animação apoiam a hierarquia; nunca competem com o conteúdo.

### Personalidade visual

- Tecnológica, sóbria e contemporânea.
- Escura nas áreas operacionais e de demonstração do produto.
- Clara nas áreas explicativas, comparativas e de confiança.
- Azul como ação e orientação; verde como confirmação; amarelo como atenção; vermelho como risco.
- Cantos suaves, bordas finas e sombras difusas.
- Poucos elementos decorativos e bastante espaço negativo.

## 2. Princípios de UX

### 2.1 A prioridade é o estado do trabalho

Em telas do produto, a pergunta principal deve ser respondida rapidamente: **o que exige minha atenção agora?** Prioridade, SLA, responsável e atividade não lida devem estar visíveis sem abrir o card.

### 2.2 Divulgação progressiva

- No board: exibir resumo operacional.
- No card aberto: revelar conversa, participantes, histórico, comentários e automações.
- Em configurações: começar pela opção mais segura e esconder complexidade avançada em seções secundárias.

### 2.3 Uma ação primária por contexto

Cada painel, modal ou estado vazio deve possuir uma ação claramente dominante. Ações secundárias usam botão ghost ou link; ações destrutivas nunca compartilham a mesma cor da ação primária.

### 2.4 A cor não trabalha sozinha

Status precisam combinar cor com texto, ícone ou forma. “SLA crítico”, por exemplo, deve conter rótulo e não apenas uma borda vermelha.

### 2.5 Movimento explica mudança

Animações devem indicar origem, destino, seleção ou atualização. Não utilizar movimento contínuo meramente decorativo em áreas densas do produto.

## 3. Tokens fundamentais

Os tokens abaixo reproduzem a base visual da landing page e devem ser a fonte da verdade no produto.

```css
:root {
   /* Fundos e superfícies */
   --tf-bg: #0e1116;
   --tf-bg-deep: #0b0e13;
   --tf-surface: #151a22;
   --tf-surface-light: #f5f7fb;

   /* Texto */
   --tf-text: #e8edf5;
   --tf-text-strong: #f4f7fc;
   --tf-text-muted: rgba(232, 237, 245, 0.6);
   --tf-ink: #0f1720;
   --tf-ink-muted: #55616f;

   /* Marca e semântica */
   --tf-primary: #2f7cf6;
   --tf-primary-deep: #1d5bc4;
   --tf-primary-light: #93baf9;
   --tf-success: #2fa06b;
   --tf-warning: #d99425;
   --tf-danger: #d5493c;

   /* Contornos */
   --tf-border-dark: rgba(226, 236, 250, 0.12);
   --tf-border-light: #e2e8f0;

   /* Tipografia */
   --tf-font-body: "Inter", "Segoe UI", system-ui, sans-serif;
   --tf-font-display: "Sora", var(--tf-font-body);

   /* Geometria */
   --tf-radius-sm: 0.75rem; /* 12px */
   --tf-radius-md: 1rem; /* 16px */
   --tf-radius-lg: 1.5rem; /* 24px */
   --tf-radius-xl: 1.875rem; /* 30px */
   --tf-radius-pill: 999px;

   /* Layout */
   --tf-container: 77.5rem; /* 1240px */
   --tf-page-gutter: clamp(1.25rem, 4vw, 3rem);
   --tf-section-space: clamp(5.5rem, 9vw, 8rem);

   /* Movimento */
   --tf-ease-out: cubic-bezier(0.2, 0.75, 0.25, 1);
   --tf-duration-fast: 180ms;
   --tf-duration-base: 280ms;
   --tf-duration-reveal: 780ms;

   /* Elevação */
   --tf-shadow-dark: 0 24px 60px rgba(4, 7, 12, 0.5);
   --tf-shadow-light: 0 36px 80px rgba(15, 35, 70, 0.15);
}
```

### Regra para novos tokens

Nomear pela função, não pela aparência. Usar `--tf-text-muted` em vez de `--tf-gray-500`. Isso permite ajustar temas sem alterar a intenção do componente.

## 4. Sistema de cores

### 4.1 Tema escuro — experiência operacional

| Função           |                   Valor | Uso                                             |
| ---------------- | ----------------------: | ----------------------------------------------- |
| Fundo principal  |               `#0e1116` | App shell, board e seções principais            |
| Fundo profundo   |               `#0b0e13` | Footer, barras laterais e contraste entre zonas |
| Superfície       |               `#151a22` | Cards, painéis e menus                          |
| Texto forte      |               `#f4f7fc` | Títulos e valores essenciais                    |
| Texto padrão     |               `#e8edf5` | Conteúdo de leitura                             |
| Texto secundário | `rgba(232,237,245,.60)` | Metadados e descrições                          |
| Divisor          | `rgba(226,236,250,.12)` | Bordas e separadores discretos                  |

Não usar preto puro como fundo nem branco puro em grandes blocos de texto. A pequena redução de contraste diminui fadiga visual sem prejudicar legibilidade.

### 4.2 Tema claro — explicação e confiança

| Função             |                   Valor | Uso                                   |
| ------------------ | ----------------------: | ------------------------------------- |
| Fundo claro        |               `#f5f7fb` | Segurança, FAQ e configurações claras |
| Superfície elevada | `rgba(255,255,255,.82)` | Diagramas e painéis de destaque       |
| Superfície neutra  |               `#f1f4f9` | Cards internos                        |
| Tinta principal    |               `#0f1720` | Títulos e dados                       |
| Tinta secundária   |               `#55616f` | Descrições e metadados                |
| Divisor            |               `#e2e8f0` | Estrutura e separação                 |

### 4.3 Azul de marca

- `#2f7cf6`: ação principal, seleção e foco.
- `#1d5bc4`: profundidade do gradiente e texto de destaque em fundo claro.
- `#93baf9`: informação, borda ativa e detalhe em fundo escuro.
- Gradiente recomendado: `linear-gradient(180deg, #3b85f8, #1d5bc4)`.

O azul não deve preencher grandes áreas operacionais. Reservá-lo para orientar interação, seleção e progresso.

### 4.4 Cores semânticas

| Estado               |      Base |         Fundo sugerido | Texto sugerido |
| -------------------- | --------: | ---------------------: | -------------: |
| Sucesso/sincronizado | `#2fa06b` | `rgba(47,160,107,.15)` |      `#69b78f` |
| Atenção/SLA próximo  | `#d99425` | `rgba(217,148,37,.16)` |      `#f0ba60` |
| Erro/SLA vencido     | `#d5493c` |  `rgba(213,73,60,.18)` |      `#f0a79f` |
| Informação           | `#2f7cf6` | `rgba(47,124,246,.12)` |      `#93baf9` |

## 5. Tipografia

### Famílias

- **Sora:** títulos de marketing, títulos de página e números expressivos.
- **Inter:** navegação, corpo, botões, tabelas, formulários e dados operacionais.
- Fallback: `Segoe UI`, `system-ui`, `sans-serif`.

### Escala recomendada

| Papel         | Fonte         |                         Tamanho |    Peso | Altura de linha |  Tracking |
| ------------- | ------------- | ------------------------------: | ------: | --------------: | --------: |
| Display/hero  | Sora          | `clamp(2.35rem, 4.4vw, 3.5rem)` |     350 |            1.02 |  `-.04em` |
| H1 do produto | Sora          |     `clamp(2rem, 3vw, 2.75rem)` |     400 |            1.08 | `-.035em` |
| H2            | Sora          |    `clamp(2.1rem, 4vw, 3.4rem)` |     300 |            1.05 |  `-.04em` |
| H3/card       | Sora ou Inter |                  `1.25–1.75rem` | 500–600 |             1.2 |  `-.02em` |
| Corpo grande  | Inter         |                 `1.05–1.125rem` |     400 |            1.65 |    normal |
| Corpo         | Inter         |                          `1rem` |     400 |            1.55 |    normal |
| Interface     | Inter         |                   `.875–.94rem` | 500–600 |             1.4 |    normal |
| Metadado      | Inter         |                  `.75–.8125rem` |     500 |             1.4 |   `.01em` |
| Eyebrow       | Inter         |                        `.72rem` |     600 |             1.2 |   `.14em` |

O eyebrow é sempre em caixa alta. Textos corridos não devem usar caixa alta. Limitar parágrafos a aproximadamente 60–72 caracteres por linha.

> Se Sora for carregada como fonte estática e não possuir peso 350, utilizar a versão variável ou arredondar para 400 para evitar síntese artificial do navegador.

## 6. Espaçamento e layout

### Escala espacial

Adotar uma escala de 4px, privilegiando os passos abaixo:

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 88, 128px`.

- Espaço entre ícone e rótulo: 8–10px.
- Conteúdo interno de chip: 4px vertical / 9px horizontal.
- Padding de controle: 12–16px.
- Padding de card compacto: 16–20px.
- Padding de card editorial: 24–32px.
- Padding de painel grande: 32–48px.
- Distância entre blocos de uma seção: 40–64px.

### Container e grids

- Largura máxima de conteúdo: `1240px`.
- Gutter fluido: `clamp(20px, 4vw, 48px)`.
- Seções: `clamp(88px, 9vw, 128px)` no eixo vertical.
- Grid desktop: 12 colunas.
- Grid tablet: 8 colunas.
- Grid mobile: 4 colunas.
- Gap preferencial: 24px desktop, 20px tablet, 16px mobile.

Cards irmãos devem alinhar topo, títulos, conteúdos equivalentes e rodapé. Evitar alturas fixas quando o texto for dinâmico.

## 7. Glassmorphism — especificação principal

O vidro do ThreadFlow é uma **camada funcional de profundidade**. Ele serve para indicar que um elemento está acima de outro ou reúne conteúdo relacionado. Não aplicar vidro em todos os cards.

### 7.1 Vidro escuro base

Uso: cards de board, painéis de atividade, filtros flutuantes e demonstrações.

```css
.tf-glass {
   border: 1px solid rgba(226, 236, 250, 0.12);
   background: rgba(21, 26, 34, 0.66);
   box-shadow: inset 0 1px rgba(255, 255, 255, 0.1);
   backdrop-filter: blur(22px) saturate(160%);
   -webkit-backdrop-filter: blur(22px) saturate(160%);
}
```

### 7.2 Vidro de navegação

Uso: header fixo, command bar e barra contextual.

```css
.tf-glass-nav {
   border: 1px solid rgba(226, 236, 250, 0.12);
   background: rgba(18, 23, 30, 0.68);
   box-shadow:
      0 16px 44px rgba(4, 7, 12, 0.4),
      inset 0 1px rgba(255, 255, 255, 0.12);
   backdrop-filter: blur(26px) saturate(180%);
   -webkit-backdrop-filter: blur(26px) saturate(180%);
}
```

### 7.3 Vidro embutido e sutil

Uso: filtros, chips maiores, controles dentro de painéis e cards secundários.

```css
.tf-glass-subtle {
   border: 1px solid rgba(226, 236, 250, 0.1);
   background: rgba(226, 236, 250, 0.05);
   box-shadow: inset 0 1px rgba(255, 255, 255, 0.07);
   backdrop-filter: blur(14px) saturate(130%);
}
```

### 7.4 Vidro claro

Uso: segurança, configurações, diagramas de permissão e painéis sobre fundo claro.

```css
.tf-glass-light {
   border: 1px solid #e2e8f0;
   background: rgba(255, 255, 255, 0.82);
   box-shadow:
      0 28px 70px rgba(15, 35, 70, 0.11),
      inset 0 1px rgba(255, 255, 255, 1);
   backdrop-filter: blur(22px) saturate(145%);
}
```

### 7.5 Núcleo escuro elevado

Uso pontual: confirmação de acesso, conexão, autenticação ou estado central de um diagrama.

```css
.tf-elevated-core {
   border: 1px solid rgba(255, 255, 255, 0.08);
   border-radius: 1.45rem;
   background: rgba(9, 13, 20, 0.96);
   box-shadow:
      0 25px 55px rgba(4, 7, 12, 0.52),
      0 0 55px rgba(88, 101, 242, 0.12),
      inset 0 1px rgba(255, 255, 255, 0.08);
}
```

### Regras para o efeito glass

- Deve existir conteúdo visual atrás do vidro; caso contrário, usar superfície sólida.
- Manter opacidade entre `.60` e `.82` em áreas de leitura.
- Usar uma borda clara de 1px para definir o limite do card.
- O brilho interno superior substitui contornos pesados.
- Blur de 14–26px é suficiente. Valores maiores elevam o custo gráfico e borram demais.
- Não empilhar mais de duas superfícies translúcidas no mesmo ponto.
- Evitar glass em tabelas longas e listas densas; uma superfície sólida é mais legível e performática.
- Em mobile ou dispositivos de baixa potência, reduzir blur ou desativá-lo.

### Fallback obrigatório

```css
.tf-glass {
   background: #151a22;
}

@supports (backdrop-filter: blur(1px)) {
   .tf-glass {
      background: rgba(21, 26, 34, 0.66);
      backdrop-filter: blur(22px) saturate(160%);
   }
}

@media (prefers-reduced-transparency: reduce) {
   .tf-glass,
   .tf-glass-nav,
   .tf-glass-light {
      backdrop-filter: none;
   }
}
```

## 8. Bordas e raios

- 12px: inputs, pequenos menus, botões compactos.
- 14–16px: botões principais e cards compactos.
- 18–24px: cards do board, modais e painéis.
- 24–30px: blocos editoriais, shells e diagramas grandes.
- Pill: status, filtros selecionados, contadores e eyebrow.

Uma superfície e todos os seus estados devem preservar o mesmo raio. Imagens e camadas internas devem usar `overflow: hidden` e herdar o raio para evitar quinas expostas.

## 9. Sombras e elevação

| Nível          | Sombra                              | Aplicação                   |
| -------------- | ----------------------------------- | --------------------------- |
| 0 — estrutural | `inset 0 1px rgba(255,255,255,.07)` | Cards no mesmo plano        |
| 1 — card       | `0 10px 26px rgba(3,7,13,.22)`      | Cards inativos e controles  |
| 2 — painel     | `0 18px 44px rgba(3,7,13,.38)`      | Card selecionado e dropdown |
| 3 — overlay    | `0 24px 60px rgba(4,7,12,.50)`      | Modal, drawer e menu global |
| Claro          | `0 28px 70px rgba(15,35,70,.11)`    | Painel sobre fundo claro    |
| Marca          | `0 16px 38px rgba(20,62,140,.44)`   | Somente botão primário      |

Sombras devem ser amplas e suaves. Não usar sombras pretas curtas e duras. O estado selecionado deve combinar elevação, borda e/ou cor — não apenas aumentar muito a sombra.

## 10. Componentes essenciais

### 10.1 Botões

- Altura padrão: 52px.
- Altura compacta: 40px.
- Padding horizontal: 23px; compacto: 16px.
- Raio: 14px; compacto: 12px.
- Texto: Inter, 15px, peso 600.
- Gap ícone/texto: 10px.

**Primário:** gradiente azul, texto quase branco, borda azul-clara translúcida e sombra de marca.  
**Secundário/ghost:** fundo branco a 6%, borda a 16% e blur de 18px.  
**Claro:** gradiente branco para `#e6ecf6`, texto `#0d1319`.  
**Destrutivo:** vermelho apenas quando a ação realmente remove, revoga ou encerra algo.

Estados obrigatórios: default, hover, active, focus-visible, disabled e loading. Hover move no máximo `-2px`; active retorna a `0` e reduz levemente a elevação.

### 10.2 Cards do board

Hierarquia interna recomendada:

1. Origem/espaço e indicador de não lido.
2. Título da demanda — máximo de três linhas.
3. Responsável, prioridade, SLA e status.
4. Última atividade ou número de respostas.

Regras:

- Fundo glass escuro base ou superfície sólida equivalente.
- Raio de 18–20px.
- Padding de 18–20px.
- Borda neutra de 1px; azul discreto no selecionado.
- Prioridade e SLA usam chips compactos.
- Não aplicar sombra diferente para cada prioridade.
- Hover deve revelar clicabilidade sem deslocar o layout.

### 10.3 Chips e status

- Padding: 4px 9px.
- Raio pill.
- Fonte: 10–12px, peso 600–700.
- Status pode usar caixa alta apenas quando muito curto.
- Um pequeno ponto pode reforçar estados em tempo real.

### 10.4 Inputs, selects e busca

- Altura mínima: 44px; preferencial: 48px.
- Fundo: `rgba(226,236,250,.05)` no tema escuro.
- Borda: `rgba(226,236,250,.12)`.
- Focus: borda `#93baf9` e halo `0 0 0 3px rgba(47,124,246,.22)`.
- Placeholder precisa ser mais fraco que o valor, mas manter contraste legível.
- Erro usa texto explicativo e ícone, além da cor vermelha.

### 10.5 Tabs de recursos e filtros

- A tab ativa recebe superfície clara translúcida, texto forte e número azul-claro.
- Tabs horizontais devem permitir scroll no mobile e manter alvos de pelo menos 44px.
- Alterar filtro não deve reorganizar silenciosamente a ordem compartilhada do board.
- Filtros ativos devem permanecer visíveis e removíveis individualmente.

### 10.6 Accordion/FAQ

- Apenas um item aberto por vez quando o objetivo for leitura sequencial.
- O primeiro item pode iniciar aberto.
- Botão ocupa toda a largura e possui `aria-expanded`.
- Ícone `+` muda para `−`; não depende de rotação difícil de interpretar.
- A altura anima suavemente, mas o conteúdo permanece acessível sem animação.

### 10.7 Carousel de produto

- Cards quadrados para manter unidade e permitir capturas de Chat, board, SLA e contexto.
- Card central: escala e opacidade completas, borda azul sutil, elevação nível 2.
- Cards laterais: escala e opacidade reduzidas, sem perder o raio.
- Imagem usa `object-fit: cover`, `border-radius: inherit` e `overflow: hidden` no wrapper.
- Setas ficam centralizadas com `display:grid; place-items:center`, alvo mínimo de 44px.
- Não exibir legendas redundantes quando a imagem já for autoexplicativa.

## 11. Navegação e app shell

### Landing page

- Header fixo em vidro, conteúdo máximo de 1240px.
- Marca à esquerda, links centralizados e CTA à direita.
- Indicador fino de progresso de leitura em gradiente azul.
- Em até 768px, navegação vira menu empilhado com fundo quase opaco.

### Produto principal

Recomendação de estrutura:

- **Sidebar:** espaços e contexto global, fundo profundo sólido ou vidro muito sutil.
- **Topbar:** busca, filtros, sincronização e perfil; vidro de navegação apenas se estiver sobre conteúdo rolável.
- **Área principal:** board sobre `#0e1116`.
- **Drawer lateral:** detalhes do card, elevação nível 3, largura entre 420 e 560px no desktop.
- **Mobile:** sidebar vira drawer; detalhe do card ocupa a tela inteira.

Não usar vidro forte simultaneamente na sidebar, topbar, colunas e todos os cards. Para manter hierarquia, escolha uma camada elevada e mantenha as demais mais sólidas.

## 12. Movimento e microinterações

### Tempos

- Feedback imediato: 120–180ms.
- Hover e seleção: 180–240ms.
- Drawer, modal e troca de painel: 280–420ms.
- Reveal editorial: 780ms.
- Entrada do hero: até 900ms com delays de 120ms.

### Curva principal

`cubic-bezier(0.2, 0.75, 0.25, 1)` produz desaceleração suave e deve ser usada em entradas e reposicionamentos.

### Padrões

- Entrada: opacidade de 0 para 1 e deslocamento vertical máximo de 26px.
- Hover de botão: deslocamento máximo de 2px.
- Card movido no Kanban: animação curta de origem para destino e confirmação discreta.
- Sincronização: pulso verde controlado, sem piscar rapidamente.
- Skeleton: brilho sutil e lento; nunca competir com os dados reais.

### Movimento reduzido

```css
@media (prefers-reduced-motion: reduce) {
   *,
   *::before,
   *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
   }
}
```

## 13. Responsividade

### Breakpoints atuais

- Desktop amplo: acima de 1024px.
- Tablet/desktop compacto: até `64rem` / 1024px.
- Tablet/mobile: até `48rem` / 768px.
- Mobile compacto: até `35rem` / 560px.

### Comportamento esperado

**Até 1024px**

- Reduzir gaps e largura de elementos demonstrativos.
- Cards de três colunas podem virar duas.
- Painéis complexos devem priorizar conteúdo textual antes da ilustração.

**Até 768px**

- Layouts principais passam para uma coluna.
- Menu do header torna-se dropdown.
- Tabs podem rolar horizontalmente.
- Comparações empilham antes/depois.
- Hero centraliza texto e ações.
- Diagramas mantêm legibilidade, não apenas são reduzidos proporcionalmente.

**Até 560px**

- Botões primários ocupam toda a largura quando agrupados.
- Título do hero usa `clamp(2.35rem, 11vw, 3rem)`.
- Cards passam a uma coluna.
- Diagramas de segurança se tornam uma sequência vertical.
- Ocultar decoração que não ajude a tarefa.

### Regras fluidas

- Evitar breakpoints específicos por aparelho.
- Preferir `minmax(0, 1fr)`, `clamp()` e `auto-fit`.
- Nenhum texto deve exigir scroll horizontal.
- Alvos interativos: mínimo 44 × 44px.
- Respeitar safe areas em dispositivos móveis.

## 14. Acessibilidade

- Contraste mínimo WCAG AA: 4.5:1 para texto comum e 3:1 para texto grande e componentes.
- Foco visível padrão: `3px solid #93baf9`, offset de 4px.
- Ordem do DOM deve acompanhar a ordem visual.
- Elementos clicáveis usam `button` ou `a`, não `div` com click.
- Ícones decorativos recebem `aria-hidden="true"`.
- Botões apenas com ícone precisam de nome acessível.
- Atualizações de sincronização importantes usam live region sem interromper o usuário.
- Drag-and-drop do Kanban deve possuir alternativa por teclado: “Mover para…”.
- Evitar transmitir prioridade apenas por cor.
- Zoom a 200% não pode cortar controles ou informações essenciais.
- Glass precisa manter contraste mesmo quando o conteúdo de fundo muda.

## 15. Aplicação no front-end principal

### Board Kanban

- Fundo operacional escuro.
- Cabeçalho de coluna com superfície sutil, nome, contagem e menu.
- Cards em glass base apenas quando houver fundo capaz de produzir profundidade; caso contrário, usar `#151a22`.
- Coluna em drag-over recebe contorno azul e fundo azul a 5%, não glow intenso.
- SLA visível no card; vermelho reservado ao vencido.

### Detalhe da demanda

- Drawer escuro elevado.
- Cabeçalho fixo com título, status e ação primária.
- Informações operacionais agrupadas antes do histórico.
- Timeline da conversa deve diferenciar mensagem original, respostas, mudanças manuais e automações.
- Comentários internos precisam ser visualmente distintos das mensagens do Google Chat.

### Espaços e permissões

- Preferir tema claro ou painel claro para configurações de confiança.
- Mostrar claramente a fronteira do espaço, equipe e acesso validado.
- Confirmações de revogação ou remoção devem explicitar impacto e destinatários.

### Estados vazios

Um bom estado vazio contém:

1. O que está vazio.
2. Por que isso pode acontecer.
3. A ação recomendada.
4. Link secundário para aprender, quando necessário.

### Loading, erro e sincronização

- Loading inicial: skeleton com a geometria real do componente.
- Atualização em background: manter conteúdo e mostrar status discreto.
- Erro recuperável: explicar e oferecer “Tentar novamente”.
- Sem conexão: indicar que os dados podem estar desatualizados.
- Sincronizado: verde e timestamp; não manter toast permanente.

## 16. Conteúdo e tom de voz

- Direto, preciso e orientado a consequência.
- Frases curtas em controles e estados.
- Evitar jargão quando uma palavra operacional simples funcionar.
- Preferir “Responsável” a “Owner” e “Prazo/SLA” conforme o contexto do público.
- CTAs começam com verbo: “Abrir card”, “Mover demanda”, “Definir responsável”.
- Mensagens de erro dizem o que ocorreu e como continuar.
- Não culpar o usuário.

## 17. O que evitar

- Blur pesado em toda a tela.
- Glows neon fortes ao redor de todos os elementos.
- Bordas brancas opacas sobre o tema escuro.
- Mais de uma ação primária por bloco.
- Texto secundário abaixo do contraste mínimo.
- Cards com raio diferente entre default, hover e carousel.
- Animações que mudam a posição do conteúdo durante leitura.
- Ícones sem rótulo em ações pouco familiares.
- Componentes desktop apenas encolhidos no mobile.
- Verde para ações neutras ou azul para erro.

## 18. Checklist de revisão visual

### Fundação

- [ ] Cores, espaçamentos e raios vêm de tokens.
- [ ] Inter é usada na interface e Sora apenas na hierarquia de destaque.
- [ ] Tema claro e escuro mantêm contraste AA.

### Glass e profundidade

- [ ] O vidro tem um motivo de hierarquia.
- [ ] Existe fallback sólido.
- [ ] Não há mais de duas camadas translúcidas sobrepostas.
- [ ] Borda, blur e sombra seguem um dos níveis documentados.
- [ ] O desempenho foi verificado em mobile.

### Componentes

- [ ] Todos os controles possuem hover, active, focus, disabled e loading quando aplicável.
- [ ] Raios permanecem consistentes em imagem, wrapper e estados.
- [ ] Status possuem texto ou ícone além da cor.
- [ ] Estados vazios, loading, erro e offline foram previstos.

### Responsividade

- [ ] A interface funciona em 320px sem scroll horizontal.
- [ ] Touch targets possuem no mínimo 44px.
- [ ] Drawer, filtros, tabs e board possuem comportamento mobile definido.
- [ ] Textos longos e nomes de espaços foram testados.

### Acessibilidade e movimento

- [ ] Navegação completa por teclado.
- [ ] Foco sempre visível.
- [ ] Drag-and-drop possui alternativa por teclado.
- [ ] `prefers-reduced-motion` é respeitado.
- [ ] Ícones e atualizações dinâmicas têm nomes acessíveis adequados.

## 19. Direção resumida para implementação

O produto principal deve usar o tema escuro como ambiente de operação, reservar o tema claro para explicação e confiança, e aplicar glassmorphism apenas em elementos realmente elevados. O efeito característico do ThreadFlow nasce da combinação de **superfície azul-acinzentada translúcida, borda clara muito fina, brilho interno superior, blur moderado e sombra ampla**. A interface continuará clean se a maior parte das superfícies permanecer sólida ou quase sólida e o azul for reservado para ação, seleção e continuidade.

---

**Fonte desta especificação:** tokens, componentes e padrões responsivos da landing page ThreadFlow vigente em agosto de 2026.
