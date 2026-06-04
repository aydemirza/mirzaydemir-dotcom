"use client";

import { useEffect, useRef } from "react";

export function SkillBars({
  skills,
}: {
  skills: { name: string; level: number }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const fills = containerRef.current.querySelectorAll<HTMLDivElement>(".sk-fill");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            el.style.width = `${Number(el.dataset.lvl) * 100}%`;
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    fills.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {skills.map((sk) => (
        <div className="skillbar" key={sk.name}>
          <div className="sk-top">
            <span>{sk.name}</span>
          </div>
          <div className="sk-track">
            <div className="sk-fill" data-lvl={sk.level} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PrintButton() {
  return (
    <button
      className="dlbtn"
      onClick={() => window.print()}
    >
      ↧ Download / Print
    </button>
  );
}
