import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Contact | The Aydemir Review",
  description: "Get in touch with Mirza Aydemir.",
};

export default function ContactPage() {
  return (
    <>
      <Masthead />

      <main>
        <section className="sheet contact-wrap">
          <Reveal>
            <h1 className="big">Contact</h1>
          </Reveal>
          <p className="contact-lede">
            I value thoughtful discussions and enjoy connecting with others to
            share insights, perspectives, and ideas.
          </p>

          <div className="contact-rows">
            <div className="contact-row">
              <span className="cr-key">Email</span>
              <a href="mailto:aydemirmirza@gmail.com">aydemirmirza@gmail.com</a>
            </div>
<div className="contact-row">
              <span className="cr-key" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/aydemirmirza"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/aydemirmirza ↗
              </a>
            </div>
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
