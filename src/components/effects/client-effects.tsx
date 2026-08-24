"use client";

import { useEffect } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

const REVEAL_OPTIONS: IntersectionObserverInit = {
  rootMargin: "0px 0px -12% 0px",
  threshold: 0.12,
};

function useRevealObserver(reducedMotion: boolean) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!elements.length) return;

    const reveal = (element: HTMLElement) => {
      element.classList.remove("is-pending");
      element.dataset.revealed = "true";
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(reveal);
      return;
    }

    elements.forEach((element) => element.classList.add("is-pending"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    }, REVEAL_OPTIONS);

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [reducedMotion]);
}

function useHeroParallax(reducedMotion: boolean) {
  useEffect(() => {
    const aurora = document.querySelector<HTMLElement>("[data-aurora]");
    if (!aurora || reducedMotion) return;

    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      animationFrame = 0;
      aurora.style.transform = `translateX(-50%) translate3d(${(
        pointerX * 26
      ).toFixed(1)}px, ${(pointerY * 16).toFixed(1)}px, 0)`;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      pointerY = (event.clientY / window.innerHeight) * 2 - 1;

      if (!animationFrame) animationFrame = window.requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      aurora.style.removeProperty("transform");
    };
  }, [reducedMotion]);
}

export function ClientEffects() {
  const reducedMotion = useReducedMotion();

  useRevealObserver(reducedMotion);
  useHeroParallax(reducedMotion);

  return null;
}
