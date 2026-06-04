import { getCaseBySlug, getAllCases } from "@/lib/cases";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import Link from "next/link";

export async function generateStaticParams() {
  const cases = getAllCases();
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const others = getAllCases().filter((c) => c.slug !== slug);

  return (
    <>
      <Masthead />

      <main>
        <article className="sheet">
          <div className="article-head">
            <span className="kicker">
              {caseStudy.kicker || caseStudy.tags[0]} · {caseStudy.year}
            </span>
            <Reveal>
              <h1 className="article-title">{caseStudy.title}</h1>
            </Reveal>
            <p className="byline">
              A case from <b>{caseStudy.org || "Selected Works"}</b>
            </p>
            <p className="article-dek">{caseStudy.excerpt}</p>
          </div>

          <hr className="rule" style={{ marginTop: 26 }} />

          <div className="article-body">
            <ReactMarkdown
              components={{
                h2: ({ children }) => <h3>{children}</h3>,
                p: ({ children }) => <p>{children}</p>,
                ul: ({ children }) => <ul>{children}</ul>,
                li: ({ children }) => <li>{children}</li>,
                blockquote: () => null,
                strong: ({ children }) => <strong>{children}</strong>,
              }}
            >
              {caseStudy.content}
            </ReactMarkdown>

            {caseStudy.finding && (
              <div className="article-figure">
                <div className="fig-label">Key Finding</div>
                <div className="fig-quote">
                  &ldquo;{caseStudy.finding}&rdquo;
                </div>
              </div>
            )}
          </div>

          <p className="filed">
            Filed under{" "}
            {caseStudy.tags.map((tag, i) => (
              <span key={tag}>
                <Link href="/#cases">{tag}</Link>
                {i < caseStudy.tags.length - 1 && " · "}
              </span>
            ))}
          </p>

          {others.length > 0 && (
            <>
              <hr className="rule-hair" style={{ margin: "30px 0 22px" }} />
              <div className="section-bar">
                <h2 style={{ fontSize: 22 }}>More from Selected Works</h2>
              </div>
              <div className="case-teasers">
                {others.map((o) => (
                  <article key={o.slug}>
                    <div className="ct-year">
                      {o.year} · {o.kicker || o.tags[0]}
                    </div>
                    <h3>
                      <Link href={`/cases/${o.slug}`}>{o.title}</Link>
                    </h3>
                    <p className="ct-dek">{o.excerpt}</p>
                    <Link href={`/cases/${o.slug}`} className="cont">
                      Read the full case →
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}

          <p style={{ textAlign: "center" }}>
            <Link href="/" className="backlink">
              ← Return to the Front Page
            </Link>
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
