import Image from "next/image";

const workspaces = [
  { code: "SO", name: "Suporte", team: "Equipe A", modifier: "support" },
  { code: "PR", name: "Produto", team: "Equipe B", modifier: "product" },
  {
    code: "IM",
    name: "Implantação",
    team: "Equipe C",
    modifier: "implementation",
  },
] as const;

export function SecuritySection() {
  return (
    <section className="security section section--light" id="seguranca">
      <div className="security__layout container">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">Segurança por princípio</span>
          <h2>Cada espaço é uma fronteira.</h2>
          <p>
            O acesso ao board é validado no backend. Informações, notificações e
            estados de leitura permanecem isolados por espaço e por destinatário.
          </p>
          <a className="security__link" href="#recursos">
            Entenda os princípios do produto
            <span aria-hidden="true">→</span>
          </a>
        </header>

        <div
          className="security-diagram glass-card"
          role="img"
          data-reveal
          aria-label="Três equipes com acesso isolado e validado"
        >
          <div className="security-diagram__connections" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>

          {workspaces.map((workspace) => (
            <article
              className={`workspace-card workspace-card--${workspace.modifier}`}
              key={workspace.code}
            >
              <span>{workspace.code}</span>
              <strong>{workspace.name}</strong>
              <small>{workspace.team}</small>
            </article>
          ))}

          <div className="access-core">
            <Image
              src="/images/logo/threadflow-app-icon.svg"
              width={54}
              height={54}
              alt=""
            />
            <strong>acesso validado</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
