import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import { getAllCases } from "@/lib/cases";
import Link from "next/link";

// Row 1: flagship quantitative & research projects
const row1Slugs = [
  "heston-deep-learning",
  "lightspeed-equity-research",
  "lulu-equity-research",
];

// Row 2: modeling & strategy projects
const row2Slugs = [
  "pair-trading-macd",
  "car-value-assessment",
  "ai-labour-market",
  "wealth-management-gen-z",
];

export default function Home() {
  const allCases = getAllCases();
  const caseMap = Object.fromEntries(allCases.map((c) => [c.slug, c]));

  const row1 = row1Slugs.map((s) => caseMap[s]).filter(Boolean);
  const row2 = row2Slugs.map((s) => caseMap[s]).filter(Boolean);

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
          {/* Row 1 — Research & Quant */}
          <div className="case-teasers">
            {row1.map((c) => (
              <Reveal key={c.slug}>
                <article>
                  <div className="ct-year">
                    {c.kicker || c.tags[0]}
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
          {/* Row 2 — Modeling & Strategy */}
          <div className="case-teasers">
            {row2.map((c) => (
              <Reveal key={c.slug}>
                <article>
                  <div className="ct-year">
                    {c.kicker || c.tags[0]}
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
        </section>
      </main>

      <Footer />
    </>
  );
}
