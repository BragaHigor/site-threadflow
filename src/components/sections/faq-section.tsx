import { FaqAccordion } from "./faq-accordion";

export function FaqSection() {
  return (
    <section className="faq section section--light" id="duvidas">
      <div className="faq__layout container">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>O essencial, sem rodeios.</h2>
          <p>
            Respostas para as primeiras dúvidas de quem está conhecendo o
            ThreadFlow.
          </p>
        </header>

        <FaqAccordion />
      </div>
    </section>
  );
}
