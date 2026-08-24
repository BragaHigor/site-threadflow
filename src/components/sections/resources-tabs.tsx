"use client";

import { type KeyboardEvent, useRef, useState } from "react";

import {
  type ResourceTabId,
  resourceTabs,
} from "@/data/site-content";

function ResourceDemo({ id }: { id: ResourceTabId }) {
  if (id === "board") {
    return (
      <div className="resource-demo resource-demo--board" aria-hidden="true">
        <div>
          <span>Aberto</span>
          <i />
          <i />
        </div>
        <div>
          <span>Em progresso</span>
          <i className="is-active" />
          <i />
        </div>
        <div>
          <span>Concluído</span>
          <i />
        </div>
      </div>
    );
  }

  if (id === "sla") {
    return (
      <div className="resource-demo resource-demo--sla" aria-hidden="true">
        <div className="resource-demo__sla-head">
          <span>SLA de continuidade</span>
          <strong>3d restantes</strong>
        </div>
        <div className="resource-demo__sla-meter">
          <i />
        </div>
        <p>Atuação preventiva, não apenas cobrança tardia.</p>
      </div>
    );
  }

  if (id === "sync") {
    return (
      <div className="resource-demo resource-demo--sync" aria-hidden="true">
        <div>Google Chat</div>
        <span>→</span>
        <div>ThreadFlow</div>
        <strong>
          <i /> Sincronizado
        </strong>
      </div>
    );
  }

  return (
    <div className="resource-demo resource-demo--reaction" aria-hidden="true">
      <div>
        <span>Mensagem inicial</span>
        <strong>👀</strong>
      </div>
      <i>→</i>
      <div>
        <span>Card movido para</span>
        <strong>Aguardando review</strong>
      </div>
    </div>
  );
}

export function ResourcesTabs() {
  const [activeId, setActiveId] = useState<ResourceTabId>("board");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activate = (id: ResourceTabId, focus = false) => {
    setActiveId(id);
    if (focus) {
      const index = resourceTabs.findIndex((tab) => tab.id === id);
      window.requestAnimationFrame(() => tabRefs.current[index]?.focus());
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    const lastIndex = resourceTabs.length - 1;
    const destinations: Record<string, number> = {
      ArrowDown: (currentIndex + 1) % resourceTabs.length,
      ArrowRight: (currentIndex + 1) % resourceTabs.length,
      ArrowUp: (currentIndex - 1 + resourceTabs.length) % resourceTabs.length,
      ArrowLeft: (currentIndex - 1 + resourceTabs.length) % resourceTabs.length,
      Home: 0,
      End: lastIndex,
    };

    const destination = destinations[event.key];
    if (destination === undefined) return;
    event.preventDefault();
    activate(resourceTabs[destination].id, true);
  };

  return (
    <div className="resources-browser glass-card" data-reveal>
      <div
        className="resources-tabs"
        role="tablist"
        aria-label="Recursos do ThreadFlow"
      >
        {resourceTabs.map((tab, index) => {
          const active = tab.id === activeId;
          return (
            <button
              className={`resources-tab${active ? " is-active" : ""}`}
              id={`resource-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`resource-panel-${tab.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => activate(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              key={tab.id}
            >
              <span>{tab.number}</span>
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="resources-panels">
        {resourceTabs.map((tab) => {
          const active = tab.id === activeId;
          return (
            <article
              className={`resource-panel${active ? " is-active" : ""}`}
              id={`resource-panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`resource-tab-${tab.id}`}
              hidden={!active}
              key={tab.id}
            >
              <div className="resource-panel__copy">
                <span className="eyebrow">{tab.eyebrow}</span>
                <h3>{tab.title}</h3>
                <p>{tab.description}</p>
              </div>
              <ResourceDemo id={tab.id} />
            </article>
          );
        })}
      </div>
    </div>
  );
}
