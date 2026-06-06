import { getCaseBySlug, getAllCases } from "@/lib/cases";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import Link from "next/link";
import ExcelPreview from "@/components/ExcelPreview";

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
              <h1 className="article-title">
                {caseStudy.org ? `${caseStudy.title} — ${caseStudy.org}` : caseStudy.title}
              </h1>
            </Reveal>
            <p className="article-dek">{caseStudy.excerpt}</p>
          </div>

          <hr className="rule" style={{ marginTop: 26 }} />

          <div className="article-body">
            {caseStudy.content
              .split(/(?=^## )/m)
              .filter((s) => s.trim())
              .map((section, i) => (
                <div key={i} className="article-section">
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
                    {section}
                  </ReactMarkdown>
                </div>
              ))}

            {caseStudy.finding && (
              <div className="article-figure">
                <div className="fig-label">Key Finding</div>
                <div className="fig-quote">
                  &ldquo;{caseStudy.finding}&rdquo;
                </div>
              </div>
            )}
          </div>

          {caseStudy.documents && caseStudy.documents.length > 0 && (
            <>
              <hr className="rule-hair" style={{ margin: "30px 0 22px" }} />
              <div className="section-bar">
                <h2 style={{ fontSize: 22 }}>Documents</h2>
              </div>
              <div className="case-documents">
                {caseStudy.documents.map((doc) =>
                  doc.type === "pdf" ? (
                    <div key={doc.file} className="case-doc">
                      <h3>{doc.label}</h3>
                      <div className="pdf-embed">
                        <iframe
                          src={doc.file}
                          title={doc.label}
                          style={{
                            width: "100%",
                            height: "600px",
                            border: "1px solid var(--hair)",
                          }}
                        />
                      </div>
                      <a
                        href={doc.file}
                        download
                        className="cont"
                        style={{ display: "inline-block", marginTop: 12 }}
                      >
                        Download PDF ↓
                      </a>
                    </div>
                  ) : (
                    <div key={doc.file} className="case-doc">
                      <h3>{doc.label}</h3>
                      <ExcelPreview file={doc.file} />
                      <a
                        href={doc.file}
                        download
                        className="cont"
                        style={{ display: "inline-block", marginTop: 12 }}
                      >
                        Download Excel Model ↓
                      </a>
                    </div>
                  )
                )}
              </div>
            </>
          )}


          {others.length > 0 && (
            <>
              <hr className="rule-hair" style={{ margin: "30px 0 22px" }} />
              <div className="section-bar">
                <h2 style={{ fontSize: 22 }}>More from Projects</h2>
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
