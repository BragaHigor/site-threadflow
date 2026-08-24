"use client";

import Image from "next/image";
import {
   type FocusEvent,
   type KeyboardEvent,
   type PointerEvent,
   useEffect,
   useRef,
   useState,
} from "react";

import { carouselSlides } from "@/data/site-content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const AUTOPLAY_MILLISECONDS = 6000;
const SWIPE_THRESHOLD = 42;

function normalizeIndex(index: number): number {
   return (
      ((index % carouselSlides.length) + carouselSlides.length) %
      carouselSlides.length
   );
}

export function HeroCarousel() {
   const reducedMotion = useReducedMotion();
   const [activeIndex, setActiveIndex] = useState(0);
   const [hovered, setHovered] = useState(false);
   const [focusWithin, setFocusWithin] = useState(false);
   const [documentHidden, setDocumentHidden] = useState(false);
   const [autoplayEnabled, setAutoplayEnabled] = useState(true);
   const pointerStartX = useRef<number | null>(null);

   const paused =
      reducedMotion ||
      hovered ||
      focusWithin ||
      documentHidden ||
      !autoplayEnabled;

   useEffect(() => {
      const handleVisibilityChange = () => setDocumentHidden(document.hidden);
      document.addEventListener("visibilitychange", handleVisibilityChange);
      handleVisibilityChange();

      return () =>
         document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange,
         );
   }, []);

   useEffect(() => {
      if (paused) return;

      const timer = window.setTimeout(() => {
         setActiveIndex((current) => normalizeIndex(current + 1));
      }, AUTOPLAY_MILLISECONDS);

      return () => window.clearTimeout(timer);
   }, [activeIndex, paused]);

   const goTo = (index: number) => setActiveIndex(normalizeIndex(index));
   const showPrevious = () => goTo(activeIndex - 1);
   const showNext = () => goTo(activeIndex + 1);

   const getRelativePosition = (index: number) => {
      const forwardPosition = normalizeIndex(index - activeIndex);
      return forwardPosition > Math.floor(carouselSlides.length / 2)
         ? forwardPosition - carouselSlides.length
         : forwardPosition;
   };

   const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      const actions: Record<string, () => void> = {
         ArrowLeft: showPrevious,
         ArrowRight: showNext,
         Home: () => goTo(0),
         End: () => goTo(carouselSlides.length - 1),
      };

      const action = actions[event.key];
      if (!action) return;
      event.preventDefault();
      action();
   };

   const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
      pointerStartX.current = event.clientX;
   };

   const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
      if (pointerStartX.current === null) return;
      const distance = event.clientX - pointerStartX.current;
      pointerStartX.current = null;

      if (Math.abs(distance) < SWIPE_THRESHOLD) return;
      if (distance > 0) showPrevious();
      else showNext();
   };

   const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget))
         setFocusWithin(false);
   };

   return (
      <div
         className="product-carousel animate-rise animate-delay-2"
         aria-label="Demonstrações do Google Chat e do ThreadFlow"
         aria-roledescription="carrossel"
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         onFocus={() => setFocusWithin(true)}
         onBlur={handleBlur}
      >
         <div
            className="product-carousel__viewport"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
               pointerStartX.current = null;
            }}
         >
            <div className="product-carousel__track">
               {carouselSlides.map((slide, index) => {
                  const isActive = index === activeIndex;
                  return (
                     <figure
                        className={`product-carousel__slide${isActive ? " is-active" : ""}`}
                        data-position={getRelativePosition(index)}
                        aria-hidden={!isActive}
                        key={slide.src}
                     >
                        <div className="product-carousel__media">
                           <Image
                              className="product-carousel__image"
                              src={slide.src}
                              width={720}
                              height={720}
                              alt={isActive ? slide.alt : ""}
                              priority={index === 0}
                           />
                        </div>
                        <figcaption className="product-carousel__caption">
                           <span aria-hidden="true">
                              {String(index + 1).padStart(2, "0")}
                           </span>
                           <strong>{slide.caption}</strong>
                        </figcaption>
                     </figure>
                  );
               })}
            </div>
         </div>

         <div className="product-carousel__controls">
            <button
               className="product-carousel__arrow"
               type="button"
               aria-label="Mostrar imagem anterior"
               onClick={showPrevious}
            >
               <svg aria-hidden="true" viewBox="0 0 20 20" focusable="false">
                  <path d="M12.5 4.5 7 10l5.5 5.5" />
               </svg>
            </button>
            <button
               className="product-carousel__arrow"
               type="button"
               aria-label="Mostrar próxima imagem"
               onClick={showNext}
            >
               <svg aria-hidden="true" viewBox="0 0 20 20" focusable="false">
                  <path d="m7.5 4.5 5.5 5.5-5.5 5.5" />
               </svg>
            </button>
         </div>

         <p className="sr-only" aria-live="polite">
            Imagem {activeIndex + 1} de {carouselSlides.length}
         </p>
      </div>
   );
}
