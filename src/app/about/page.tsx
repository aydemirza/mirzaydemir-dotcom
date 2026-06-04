import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import Link from "next/link";

const toolkit = [
  "Excel",
  "Python",
  "R",
  "Econometrics",
  "Financial Modeling",
  "FP&A",
  "Regression Analysis",
];

export const metadata = {
  title: "About | The Aydemir Review",
  description: "A letter from the analyst — on finance and uncertainty.",
};

export default function AboutPage() {
  return (
    <>
      <Masthead />

      <main>
        <article className="sheet">
          <div className="article-head">
            <span className="kicker">A Letter from the Analyst</span>
            <Reveal>
              <h1 className="article-title">On Finance &amp; Uncertainty</h1>
            </Reveal>
            <p className="byline">
              By <b>Mirza Aydemir</b> · MFin Candidate — Capital Markets &amp; Risk
            </p>
          </div>

          <div style={{ maxWidth: 760, margin: "clamp(28px, 4vw, 46px) auto 0" }}>
            <div className="article-body" style={{ columns: 2 }}>
              <p>
                I am drawn to the places where numbers stop being tidy — where a 500,000-row dataset hides a single broken machine, or where a regression quietly reveals which skills a market is about to abandon.
              </p>
              <p>
                My work sits between rigor and judgment: building models careful enough to trust, then asking the harder question of what the model is too confident about. Risk, to me, is less a number to minimize than a conversation to keep honest.
              </p>
              <p>
                I value patience over prediction, evidence over instinct, and the slow accumulation of small, correct decisions.
              </p>
              <p>
                A Master of Finance (Capital Markets Stream) candidate at Schulich (Expected Aug 2026) with hands-on experience in FP&amp;A, financial modeling, and econometrics research — from analyzing 500k+ row datasets to building models that improve real decisions.
              </p>
              <div className="article-figure">
                <div className="fig-label">Method</div>
                <div className="fig-quote">
                  &ldquo;Turning data into decision-grade insight.&rdquo;
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              {toolkit.map((t) => (
                <span
                  key={t}
                  className="label"
                  style={{
                    border: "1px solid var(--hair)",
                    padding: "7px 13px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: 30 }}>
              <Link href="/" className="backlink">
                ← Return to the Front Page
              </Link>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
