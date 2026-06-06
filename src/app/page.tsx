import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import { getAllCases } from "@/lib/cases";
import Link from "next/link";

const placeholderCases = [
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

      </main>

      <Footer />
    </>
  );
}
