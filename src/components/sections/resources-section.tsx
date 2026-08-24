import { ResourcesTabs } from "./resources-tabs";

export function ResourcesSection() {
  return (
    <section className="resources section section--dark-deep" id="recursos">
      <div className="container">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">Feito para acompanhar até o fim</span>
          <h2>Da thread ao card. Do card à decisão.</h2>
          <p>Cada recurso existe para reduzir uma dúvida operacional real.</p>
        </header>

        <ResourcesTabs />

        <div className="resources-support">
          <article
            className="support-card support-card--context glass-card"
            data-reveal
          >
            <span className="eyebrow">Contexto completo</span>
            <h3>Abra o card. Entenda a história.</h3>
            <p>
              Mensagens, participantes, responsáveis, prioridade, comentários e
              histórico reunidos para facilitar decisões e handoffs.
            </p>
            <div className="context-preview" aria-hidden="true">
              <header>
                <span className="avatar">HB</span>
                <span>
                  <strong>Higor Braga</strong> enviou uma mensagem
                </span>
                <time>10:14</time>
              </header>
              <div />
              <footer>
                <span>Prioridade: média</span>
                <span>2 respostas</span>
              </footer>
            </div>
          </article>

          <article className="support-card glass-card" data-reveal>
            <span className="eyebrow">Menos ruído</span>
            <h3>Não lidos por espaço.</h3>
            <p>
              O indicador mostra onde existem cards com atividade nova sem
              transportar informação entre quadros.
            </p>
            <div className="unread-preview" aria-hidden="true">
              <span className="avatar avatar--green">NE</span>
              <strong>Novo Espaço</strong>
              <i>3</i>
            </div>
          </article>

          <article className="support-card glass-card" data-reveal>
            <span className="eyebrow">Governança</span>
            <h3>Filtre o que exige atenção.</h3>
            <p>
              Prioridade, SLA, responsáveis, atividade não lida e período ajudam
              a recortar o board sem alterar sua ordem compartilhada.
            </p>
            <div className="filter-preview" aria-label="Exemplos de filtros">
              <span>Prioridade</span>
              <span>SLA</span>
              <span>Responsável</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
