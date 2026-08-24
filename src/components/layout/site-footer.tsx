import Image from "next/image";

import { navigationItems } from "@/data/site-content";

function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function SiteFooter() {
  const currentYear = getCurrentYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="brand brand--footer">
            <Image
              className="brand__logo brand__logo--footer"
              src="/images/logo/threadflow-logo-horizontal-white.svg"
              width={135}
              height={36}
              alt="ThreadFlow"
            />
            <small>Google Chat Monitor</small>
          </div>

          <p className="site-footer__tagline">
            Da conversa ao trabalho acompanhado.
          </p>

          <nav aria-label="Navegação do rodapé">
            {navigationItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label.replace("O ", "").replace("A ", "")}
              </a>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__legal">
            <p>© {currentYear} ThreadFlow.</p>
            <p className="site-footer__developer">
              Desenvolvido por
              <a
                href="https://www.linkedin.com/in/higor-braga-99010ba1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Higor Braga (abre em uma nova aba)"
              >
                <span>Higor Braga</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
                </svg>
              </a>
            </p>
          </div>
          <p>Google Chat permanece como fonte da verdade.</p>
        </div>
      </div>
    </footer>
  );
}
