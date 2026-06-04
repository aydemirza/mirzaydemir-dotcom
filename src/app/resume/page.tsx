import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import { SkillBars, PrintButton } from "@/components/ResumeClient";
import Link from "next/link";

const experience = [
  {
    period: "Sep 2023 — Dec 2023",
    org: "FGF Brands",
    role: "Financial Analyst Intern, FP&A",
    body: "Identified a 60% variance at a specific plant through deep Excel analysis; traced the root cause to a vendor-related machine issue, enabling faster resolution and helping prevent future discrepancies. Built analytical financial models from datasets exceeding 500k entries, collaborating across teams to interpret trends.",
  },
  {
    period: "Oct 2023 — Sep 2024",
    org: "Fisor",
    role: "Startup Founder and Research Analyst",
    body: "Built a car value assessment approach comparing the present value of two cars while accounting for depreciation, maintenance, insurance, and inflation-discounting to support better purchasing decisions.",
  },
  {
    period: "Jul 2023 — Oct 2023",
    org: "Risk and Insurance Studies Centre",
    role: "Project Intern",
    body: "Researched AI's impact on the North American labour market, reviewing 40+ sources across sectors. Executed regression analysis using secondary data to build a predictive model and derive recommendations from key variable relationships.",
  },
];

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
    groups: [] as { label: string; items: string[] }[],
  },
  {
    period: "May 2022 — May 2025",
    org: "York University",
    degree: "Bachelor of Arts, Spec. Hons. Financial and Business Economics",
    honors: "Graduated Cum Laude",
    stats: ["8.28 / 9.00 (A / A+) Major GPA", "7.54 / 9.00 (B+ / A) cGPA"],
    groups: [
      {
        label: "Awards",
        items: [
          "Sessional Academic Achievement List (FW22 and FW23)",
          "Member of Dean's Honour Roll (FW24)",
        ],
      },
      {
        label: "Extracurricular",
        items: [
          "Co-Founder, Arise Student Club",
          "York Trading Club Aspire Mentorship Program Participant",
          "First place in RBC's Career Fit Program — delivered a winning wealth management presentation to the RBC InvestEase team.",
        ],
      },
    ],
  },
];

const skills = [
  { name: "Financial Modeling", level: 0.92 },
  { name: "FP&A / Variance Analysis", level: 0.88 },
  { name: "Econometrics & Regression", level: 0.85 },
  { name: "Python", level: 0.78 },
  { name: "R", level: 0.72 },
  { name: "Excel / VBA", level: 0.95 },
];

export const metadata = {
  title: "Curriculum Vitae | The Aydemir Review",
  description: "Mirza Aydemir — MFin Candidate, Capital Markets & Risk.",
};

export default function ResumePage() {
  return (
    <>
      <Masthead />

      <main>
        <section className="sheet">
          <div className="article-head" style={{ textAlign: "left" }}>
            <span className="kicker">Curriculum Vitae · MFIN-2026</span>
            <Reveal>
              <h1
                className="article-title"
                style={{
                  margin: 0,
                  maxWidth: "none",
                  fontSize: "clamp(36px, 6vw, 68px)",
                  textAlign: "left",
                }}
              >
                Mirza Aydemir
              </h1>
            </Reveal>
            <p className="byline" style={{ marginTop: 10 }}>
              MFin Candidate — Capital Markets &amp; Risk
            </p>
          </div>

          <hr className="rule-thick" style={{ marginTop: 22 }} />

          <div className="cv-grid">
            {/* Main column */}
            <div>
              {/* Experience block */}
              <div className="cv-block">
                <div className="cvb-head">Experience</div>
                {experience.map((e) => (
                  <Reveal key={e.org}>
                    <div className="cv-item">
                      <div className="cvi-top">
                        <h4>{e.role}</h4>
                        <span className="cvi-when">{e.period}</span>
                      </div>
                      <div className="cvi-org">{e.org}</div>
                      <p>{e.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Education block */}
              <div className="cv-block">
                <div className="cvb-head">Education</div>
                {education.map((ed) => (
                  <Reveal key={ed.org}>
                    <div className="cv-item">
                      <div className="cvi-top">
                        <h4>{ed.degree}</h4>
                        <span className="cvi-when">{ed.period}</span>
                      </div>
                      <div className="cvi-org">{ed.org}</div>
                      {ed.honors && (
                        <p style={{ fontStyle: "italic" }}>{ed.honors}</p>
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
                      {ed.groups?.map((g) => (
                        <div key={g.label} style={{ marginTop: 8 }}>
                          <span className="label">{g.label}</span>
                          <ul>
                            {g.items.map((it) => (
                              <li key={it}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Aside */}
            <aside>
              <div className="cv-side">
                <div className="cvs-head">Toolkit</div>
                <SkillBars skills={skills} />
                <PrintButton />
              </div>
              <div className="cv-side" style={{ marginTop: 18 }}>
                <div className="cvs-head">Contact</div>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                  <a
                    href="mailto:aydemirmirza@gmail.com"
                    style={{ color: "var(--accent)", textDecoration: "none" }}
                  >
                    aydemirmirza@gmail.com
                  </a>
                  <br />
                  +1 (514) 549-8815
                  <br />
                  <a
                    href="https://linkedin.com/in/aydemirmirza"
                    target="_blank"
                    style={{ color: "var(--accent)", textDecoration: "none" }}
                  >
                    linkedin.com/in/aydemirmirza
                  </a>
                </p>
              </div>
            </aside>
          </div>

          <p style={{ textAlign: "center" }}>
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
