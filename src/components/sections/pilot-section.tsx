import Image from "next/image";

import { ButtonLink } from "../ui/button-link";

export function PilotSection() {
  return (
    <section className="pilot section section--dark" id="piloto">
      <div className="pilot__glow" aria-hidden="true" />
      <div className="pilot__content container" data-reveal>
        <div className="pilot__icon" aria-hidden="true">
          <Image
            src="/images/logo/threadflow-app-icon.svg"
            width={62}
            height={62}
            alt=""
          />
        </div>
        <h2>Não deixe uma demanda desaparecer na conversa.</h2>
        <p>
          Escolha um espaço real, ligue o ThreadFlow e compare: threads
          esquecidas, idade dos itens abertos, cobertura de responsáveis e
          esforço manual.
        </p>
        <div className="pilot__actions">
          <ButtonLink href="#recursos" variant="primary" arrow>
            Ver demonstração
          </ButtonLink>
          <ButtonLink href="#problema" variant="ghost">
            Rever o problema
          </ButtonLink>
        </div>
        <ul className="pilot__benefits">
          <li>Sem migrar conversas</li>
          <li>Sem novo hábito</li>
          <li>Sem board privado</li>
        </ul>
      </div>
    </section>
  );
}
