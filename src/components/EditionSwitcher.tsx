"use client";

import { useState, useEffect } from "react";

const SCHEMES = [
  { id: "salmon", name: "Salmon", paper: "oklch(0.948 0.020 52)", accent: "oklch(0.44 0.135 28)" },
  { id: "ivory", name: "Ivory", paper: "oklch(0.966 0.012 90)", accent: "oklch(0.42 0.14 25)" },
  { id: "slate", name: "Slate", paper: "oklch(0.955 0.004 240)", accent: "oklch(0.45 0.10 250)" },
  { id: "sage", name: "Sage", paper: "oklch(0.957 0.014 132)", accent: "oklch(0.45 0.09 152)" },
  { id: "manila", name: "Manila", paper: "oklch(0.918 0.030 76)", accent: "oklch(0.50 0.13 45)" },
  { id: "midnight", name: "Midnight", paper: "oklch(0.255 0.018 265)", accent: "oklch(0.74 0.13 70)" },
];

export function EditionSwitcher() {
  const [active, setActive] = useState("salmon");

  useEffect(() => {
    const saved = document.documentElement.dataset.scheme || "salmon";
    setActive(saved);
  }, []);

  function apply(id: string) {
    // eslint-disable-next-line react-hooks/immutability
    document.documentElement.dataset.scheme = id;
    setActive(id);
    try { localStorage.setItem("bs-scheme", id); } catch {}
  }

  return (
    <div className="edition-switch">
      <span className="es-label">Edition</span>
      <div className="edition-swatches">
        {SCHEMES.map((s) => (
          <button
            key={s.id}
            className="es-dot"
            aria-pressed={active === s.id}
            title={s.name}
            onClick={() => apply(s.id)}
            style={{
              background: s.paper,
              "--es-accent": s.accent,
            } as React.CSSProperties}
          >
            <span className="es-name">{s.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
