import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import { getAllCases } from "@/lib/cases";
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
    body: "Researched AI’s impact on the North American labour market, reviewing 40+ sources across sectors. Executed regression analysis using secondary data to build a predictive model and derive recommendations from key variable relationships.",
  },
];

const areas = [
  {
    title: "Financial Risk Management",
    body: "Market risk frameworks, stress testing methodologies, and regulatory capital requirements — and how tail risks propagate through interconnected markets.",
  },
  {
    title: "Capital Markets",
    body: "Fixed income securities, derivatives pricing, and portfolio construction — bridging theoretical asset pricing models and practical trading strategies.",
  },
  {
    title: "Econometrics & Data Science",
    body: "Statistical methods applied to financial time series. Python and R for predictive modeling, volatility forecasting, and large-scale data analysis.",
  },
];

const education = [
  {
    period: "Aug 2025 — Aug 2026",
    org: "Schulich School of Business, York University",
    degree: "Master of Finance, Financial Risk Management Stream",
    notes: [
      "Dean’s Entrance Award Recipient ($12,000)",
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

const placeholderCases = [
  {
    slug: "portfolio-risk-model",
    year: "2025",
    kicker: "Risk Management",
    title: "Portfolio Risk Attribution Model",
    excerpt: "A multi-factor risk attribution framework decomposing portfolio variance into systematic and idiosyncratic components across asset classes.",
  },
  {
    slug: "fx-volatility-forecasting",
    year: "2025",
    kicker: "Quantitative Finance",
    title: "FX Volatility Forecasting with GARCH",
    excerpt: "Comparing GARCH family models for forecasting realized volatility in major currency pairs, with applications to options pricing and hedging strategies.",
  },
  {
    slug: "credit-risk-scoring",
    year: "2024",
    kicker: "Credit Analysis",
    title: "Credit Risk Scoring Framework",
    excerpt: "A logistic regression-based credit scoring model incorporating macroeconomic indicators to predict default probabilities for mid-market corporate borrowers.",
  },
];

export default function Home() {
  const cases = getAllCases();

  return (
    <>
      <Masthead />

      <main>
        {/* Projects */}
        <section className="sheet fold" id="cases">
          <div className="section-bar">
            <h2>Projects</h2>
            <span className="sb-note">Cases &amp; models</span>
          </div>
          {/* Row 1 */}
          <div className="case-teasers">
            {cases.map((c) => (
              <Reveal key={c.slug}>
                <article>
                  <div className="ct-year">
                    {c.year} · {c.kicker || c.tags[0]}
                  </div>
                  <h3>
                    <Link href={`/cases/${c.slug}`}>{c.title}</Link>
                  </h3>
                  <p className="ct-dek">{c.excerpt}</p>
                  <Link href={`/cases/${c.slug}`} className="cont">
                    Read the full case →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          {/* Row 2 */}
          <div className="case-teasers" style={{ marginTop: "clamp(24px, 4vw, 40px)" }}>
            {placeholderCases.map((c) => (
              <Reveal key={c.slug}>
                <article>
                  <div className="ct-year">
                    {c.year} · {c.kicker}
                  </div>
                  <h3>{c.title}</h3>
                  <p className="ct-dek">{c.excerpt}</p>
                  <span className="cont" style={{ opacity: 0.5 }}>
                    Coming soon
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="sheet fold" id="experience">
          <div className="section-bar">
            <h2>Experience</h2>
            <span className="sb-note">Field reporting</span>
          </div>
          <div className="cols-3">
            {experience.map((e) => (
              <Reveal key={e.org}>
                <div className="entry">
                  <div className="e-meta">
                    {e.period} · <b>{e.org}</b>
                  </div>
                  <h3>{e.role}</h3>
                  <p>{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="sheet fold" id="education">
          <div className="section-bar">
            <h2>Education</h2>
          </div>
          <div className="cols-2">
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
        </section>


        {/* Areas of Study */}
        <section className="sheet fold">
          <div className="section-bar">
            <h2>Areas of Study</h2>
            <span className="sb-note">Standing columns</span>
          </div>
          <div className="cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.title}>
                <div className="entry">
                  <div className="e-meta">
                    <b>0{i + 1}</b>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
