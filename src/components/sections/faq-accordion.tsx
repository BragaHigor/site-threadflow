"use client";

import { useState } from "react";

import { faqItems } from "@/data/site-content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq__accordion" data-reveal>
      {faqItems.map((item, index) => {
        const open = index === openIndex;
        const questionId = `faq-question-${index + 1}`;
        const answerId = `faq-answer-${index + 1}`;

        return (
          <article className={`faq-item${open ? " is-open" : ""}`} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={answerId}
                id={questionId}
                onClick={() => {
                  if (!open) setOpenIndex(index);
                }}
              >
                <span>{item.question}</span>
                <i aria-hidden="true">{open ? "−" : "+"}</i>
              </button>
            </h3>
            <div
              className="faq-item__answer"
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              hidden={!open}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
