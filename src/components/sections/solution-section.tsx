const beforeItems = [
  "Procurar threads antigas",
  "Perguntar quem está responsável",
  "Descobrir o que está atrasado",
  "Consolidar espaços manualmente",
] as const;

const afterItems = [
  "Cards organizados em um Kanban",
  "Dono, prioridade e status explícitos",
  "SLA e alertas no contexto do trabalho",
  "Cada espaço com seu próprio contexto",
] as const;

type ComparisonCardProps = {
  variant: "before" | "after";
  label: string;
  title: string;
  items: readonly string[];
};

function ComparisonCard({ variant, label, title, items }: ComparisonCardProps) {
  const positive = variant === "after";

  return (
    <article
      className={`comparison-card comparison-card--${variant}`}
      data-reveal
    >
      <span className="comparison-card__label">{label}</span>
      <h3>{title}</h3>
      <ul
        className={`comparison-list comparison-list--${
          positive ? "positive" : "negative"
        }`}
      >
        {items.map((item) => (
          <li key={item}>
            <span aria-hidden="true">{positive ? "✓" : "×"}</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SolutionSection() {
  return (
    <section className="solution section section--light" id="solucao">
      <div className="container">
        <header className="solution__heading" data-reveal>
          <div>
            <span className="eyebrow">A solução</span>
            <h2>Uma camada de gestão, sem criar outro canal.</h2>
          </div>
          <p>
            O ThreadFlow preserva o Google Chat como origem da conversa e
            acrescenta o que faltava: visibilidade, responsabilidade, prioridade
            e continuidade.
          </p>
        </header>

        <div className="solution__comparison">
          <ComparisonCard
            variant="before"
            label="Antes"
            title="Acompanhamento por memória"
            items={beforeItems}
          />

          <div className="solution__transition" aria-hidden="true">
            <span>ThreadFlow</span>
            <i>→</i>
          </div>

          <ComparisonCard
            variant="after"
            label="Com ThreadFlow"
            title="Trabalho organizado e rastreável"
            items={afterItems}
          />
        </div>
      </div>
    </section>
  );
}
