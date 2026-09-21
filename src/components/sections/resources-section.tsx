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
              <header className="context-preview__head">
                <span>Suporte · Em progresso</span>
                <strong>Renovar contrato do cliente</strong>
                <div className="context-preview__meta">
                  <span className="is-high">Prioridade alta</span>
                  <span className="is-sla">SLA · 1 dia</span>
                  <span>
                    <i className="avatar avatar--green">AL</i> Ana Lima
                  </span>
                </div>
                <div className="context-preview__sla">
                  <span>SLA de continuidade</span>
                  <b>1 dia restante</b>
                  <i>
                    <em />
                  </i>
                </div>
              </header>

              <ul className="context-preview__thread">
                <li>
                  <i className="avatar">HB</i>
                  <p>
                    <strong>Higor Braga</strong>
                    <span>TF O contrato vence sexta. Quem assume?</span>
                  </p>
                  <time>10:14</time>
                </li>
                <li>
                  <i className="avatar avatar--green">AL</i>
                  <p>
                    <strong>Ana Lima</strong>
                    <span>Eu assumo. Envio a proposta hoje.</span>
                  </p>
                  <time>10:21</time>
                </li>
                <li>
                  <i className="avatar">HB</i>
                  <p>
                    <strong>Higor Braga</strong>
                    <span>Perfeito. Deixei o histórico do cliente no card.</span>
                  </p>
                  <time>10:24</time>
                </li>
              </ul>

              <div className="context-preview__comment">
                <span>
                  <i className="avatar avatar--violet">CS</i>
                  Comentário interno · Carla Souza
                </span>
                <p>Cliente pediu 10% de desconto. Validar com o financeiro.</p>
              </div>

              <ol className="context-preview__history">
                <li>Card criado a partir da thread</li>
                <li>Ana Lima definida como responsável</li>
                <li>Movido para Em progresso por reação 👀</li>
              </ol>

              <footer className="context-preview__footer">
                <span>2 respostas · 1 comentário</span>
                <span className="context-preview__people">
                  <i className="avatar">HB</i>
                  <i className="avatar avatar--green">AL</i>
                  <i className="avatar avatar--violet">CS</i>
                  3 participantes
                </span>
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
            <ul className="unread-preview" aria-hidden="true">
              <li className="is-total">
                <span className="avatar">BG</span>
                <strong>Board geral</strong>
                <i>7</i>
              </li>
              <li>
                <span className="avatar avatar--green">SO</span>
                <strong>Suporte</strong>
                <i>3</i>
              </li>
              <li>
                <span className="avatar avatar--violet">PR</span>
                <strong>Produto</strong>
                <i>4</i>
              </li>
              <li className="is-read">
                <span className="avatar avatar--unknown">IM</span>
                <strong>Implantação</strong>
              </li>
            </ul>
          </article>

          <article className="support-card glass-card" data-reveal>
            <span className="eyebrow">Governança</span>
            <h3>Filtre o que exige atenção.</h3>
            <p>
              Prioridade, SLA, responsáveis, atividade não lida e período ajudam
              a recortar o board sem alterar sua ordem compartilhada.
            </p>
            <div className="filter-preview" aria-hidden="true">
              <div className="filter-preview__chips">
                <span className="is-active">Prioridade: alta ×</span>
                <span className="is-active">SLA: 1 dia ×</span>
                <span>Responsável</span>
                <span>Não lidos</span>
                <span>Período</span>
              </div>
              <div className="filter-preview__result">
                <strong>3 de 12 cards</strong>
                <span>Ordem do board preservada</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
