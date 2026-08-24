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
        <i />
        <i />
        <i className="is-active" />
        <i />
        <span />
      </div>
    );
  }

  if (variant === "responsibility") {
    return (
      <div className="responsibility-demo" aria-hidden="true">
        <span>Quem assume?</span>
        <div className="responsibility-demo__people">
          <i className="avatar">HB</i>
          <i className="avatar avatar--green">AT</i>
          <i className="avatar avatar--unknown">?</i>
        </div>
      </div>
    );
  }

  return (
    <div className="risk-demo" aria-hidden="true">
      <span>Prazo</span>
      <strong>?</strong>
      <div className="risk-demo__meter">
        <i />
      </div>
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
