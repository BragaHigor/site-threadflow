"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { navigationItems } from "@/data/site-content";

import { ButtonLink } from "../ui/button-link";

const DESKTOP_QUERY = "(min-width: 48.001rem)";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const closeOnDesktop = () => {
      if (mediaQuery.matches) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    mediaQuery.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      mediaQuery.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const paint = () => {
      animationFrame = 0;
      const scrollableHeight = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setReadingProgress(
        Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100)),
      );
    };

    const schedulePaint = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("resize", schedulePaint, { passive: true });
    paint();

    return () => {
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("resize", schedulePaint);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav
        className="navbar container container--nav"
        aria-label="Navegação principal"
      >
        <a className="brand" href="#topo" aria-label="ThreadFlow — início">
          <Image
            className="brand__logo"
            src="/images/logo/threadflow-logo-horizontal-white.svg"
            width={150}
            height={40}
            alt=""
            loading="eager"
          />
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar__menu${menuOpen ? " is-open" : ""}`}
          id="main-menu"
        >
          <div className="navbar__links">
            {navigationItems.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
          <ButtonLink
            href="#recursos"
            variant="light"
            small
            arrow
            onClick={closeMenu}
          >
            Ver o produto
          </ButtonLink>
        </div>
      </nav>

      <div
        className="reading-progress container container--nav"
        aria-hidden="true"
      >
        <i style={{ width: `${readingProgress.toFixed(2)}%` }} />
      </div>
    </header>
  );
}
