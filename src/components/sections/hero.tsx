import { ButtonLink } from "../ui/button-link";
import { HeroCarousel } from "./hero-carousel";

export function Hero() {
  return (
    <section className="hero section section--dark" id="topo">
      <div className="hero__aurora" data-aurora aria-hidden="true" />
      <div className="hero__grid-pattern" aria-hidden="true" />

      <div className="hero__layout container">
        <div className="hero__content">
          <div className="eyebrow eyebrow--pill animate-rise">
            <span className="status-dot" aria-hidden="true" />
            Nenhuma thread fora do radar
          </div>
          <h1 className="hero__title">
            <span className="animate-rise animate-delay-1">
              Toda conversa pode
              <br className="hero__title-break" /> começar uma demanda.
            </span>
            <span className="text-gradient animate-rise animate-delay-2">
              Nenhuma deveria
              <br className="hero__title-break" /> terminar esquecida.
            </span>
          </h1>
          <p className="hero__description animate-rise animate-delay-3">
            O ThreadFlow lê as threads do Google Chat e devolve um board vivo:
            responsável, prioridade, SLA e histórico. A conversa fica onde está,
            o acompanhamento ganha lugar.
          </p>
          <div className="hero__actions animate-rise animate-delay-4">
            <ButtonLink href="#recursos" variant="primary" arrow>
              Conhecer o ThreadFlow
            </ButtonLink>
            <ButtonLink href="#problema" variant="ghost">
              Entender o problema
            </ButtonLink>
          </div>
          <div className="hero__trust animate-rise animate-delay-5">
            <span>
              Google Chat como fonte da verdade. ThreadFlow como camada
              operacional.
            </span>
          </div>
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
}
