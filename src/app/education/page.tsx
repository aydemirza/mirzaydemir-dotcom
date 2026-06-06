import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Education | The Aydemir Review",
  description:
    "Academic background — Schulich School of Business MFin and York University BA.",
};

const education = [
  {
    period: "Aug 2025 — Aug 2026",
    org: "Schulich School of Business, York University",
    degree: "Master of Finance, Financial Risk Management Stream",
    notes: [
      "Dean's Entrance Award Recipient ($12,000)",
      "Class Representative — MFIN 5600 Institutional Wealth Management",
      "Class Representative — FNEN 6850 Fixed Income Securities",
    ],
  },
  {
    period: "May 2022 — May 2025",
    org: "York University",
    degree: "Bachelor of Arts, Spec. Hons. Financial and Business Economics",
    honors: "Graduated Cum Laude",
    stats: ["8.28 / 9.00 (A / A+) Major GPA", "7.54 / 9.00 (B+ / A) cGPA"],
  },
];

export default function EducationPage() {
  return (
    <>
      <Masthead />

      <main>
        <section className="sheet fold">
          <span className="kicker">Academic record</span>
          <Reveal>
            <h1 className="big">Education</h1>
          </Reveal>

          <div className="cols-2" style={{ marginTop: 32 }}>
            {education.map((ed) => (
              <Reveal key={ed.org}>
                <div className="entry">
                  <div className="e-meta">
                    {ed.period} · <b>{ed.org}</b>
                  </div>
                  <h3>{ed.degree}</h3>
                  {ed.honors && (
                    <p style={{ fontStyle: "italic", marginBottom: 6 }}>
                      {ed.honors}
                    </p>
                  )}
                  {ed.notes && (
                    <ul>
                      {ed.notes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  )}
                  {ed.stats && (
                    <ul>
                      {ed.stats.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <p style={{ marginTop: 30 }}>
            <Link href="/" className="backlink">
              ← Return to the Front Page
            </Link>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
