const problems = [
  {
    number: "01",
    icon: "☵",
    title: "Demandas desaparecem no fluxo",
    description:
      "Threads importantes perdem destaque conforme novas mensagens ocupam a conversa.",
    variant: "thread",
  },
  {
    number: "02",
    icon: "?",
    title: "Responsabilidade fica implícita",
    description:
      "Sem um responsável explícito, a equipe precisa perguntar, cobrar e reconstruir o status.",
    variant: "responsibility",
  },
  {
    number: "03",
    icon: "!",
    title: "O risco aparece tarde demais",
    description:
      "Sem prioridade e SLA visíveis, o atraso costuma ser percebido apenas quando já escalou.",
    variant: "risk",
  },
] as const;

function ProblemDemo({ variant }: { variant: (typeof problems)[number]["variant"] }) {
  if (variant === "thread") {
    return (
      <div className="thread-demo" aria-hidden="true">
        <p className="is-lost">
          <i className="avatar">HB</i>
          <span>Contrato do cliente vence sexta</span>
          <em>há 2 dias · sem resposta</em>
        </p>
        <p>
          <i className="avatar avatar--green">AT</i>
          <span>Bom dia, pessoal!</span>
        </p>
        <p>
          <i className="avatar avatar--unknown">CS</i>
          <span>Alguém tem o link da reunião?</span>
        </p>
        <p>
          <i className="avatar">HB</i>
          <span>Subi o deploy agora 🚀</span>
        </p>
      </div>
    );
  }

  if (variant === "responsibility") {
    return (
      <div className="responsibility-demo" aria-hidden="true">
        <p className="is-question">
          <i className="avatar">HB</i>
          <span>Quem pode ver o erro do cliente?</span>
        </p>
        <p>
          <i className="avatar avatar--green">AT</i>
          <span>Acho que a Carla estava vendo…</span>
        </p>
        <p>
          <i className="avatar avatar--unknown">CS</i>
          <span>Eu não, pergunta pro Tiago.</span>
        </p>
        <strong>
          Responsável: <b>ninguém</b>
        </strong>
      </div>
    );
  }

  return (
    <div className="risk-demo" aria-hidden="true">
      <ol>
        <li>
          <b>Dia 1</b>
          <span>Pedido recebido</span>
        </li>
        <li>
          <b>Dia 3</b>
          <span>Sem atualização</span>
        </li>
        <li className="is-late">
          <b>Dia 5</b>
          <span>Cliente escalou</span>
        </li>
      </ol>
      <strong>Prazo nunca foi definido</strong>
    </div>
  );
}

export function ProblemSection() {
  return (
    <section className="problem section section--dark-deep" id="problema">
      <div className="container">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">O problema</span>
          <h2>Uma mensagem respondida não é uma demanda acompanhada.</h2>
          <p>
            O Google Chat organiza conversas em uma linha do tempo. Quando o
            trabalho depende apenas da memória, o acompanhamento vira uma
            atividade invisível.
          </p>
        </header>

        <div className="problem__grid">
          {problems.map((problem) => (
            <article
              className={`feature-card glass-card${
                problem.variant === "responsibility"
                  ? " feature-card--highlight"
                  : ""
              }`}
              data-reveal
              key={problem.number}
            >
              <header className="feature-card__header">
                <span
                  className={`icon-box${
                    problem.variant === "responsibility"
                      ? " icon-box--blue"
                      : problem.variant === "risk"
                        ? " icon-box--warning"
                        : ""
                  }`}
                >
                  {problem.icon}
                </span>
                <span>{problem.number}</span>
              </header>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
              <ProblemDemo variant={problem.variant} />
            </article>
          ))}
        </div>

        <div className="problem__cost glass-card" data-reveal>
          <span>O custo não é só o atraso.</span>
          <strong>É o esforço manual necessário para tentar evitá-lo.</strong>
        </div>
      </div>
    </section>
  );
}
