import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import Reveal from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Correspondence | The Aydemir Review",
  description: "Get in touch with Mirza Aydemir.",
};

export default function ContactPage() {
  return (
    <>
      <Masthead />

      <main>
        <section className="sheet contact-wrap">
          <span className="kicker">Correspondence</span>
          <Reveal>
            <h1 className="big">Letters to the Analyst</h1>
          </Reveal>
          <p className="contact-lede">
            I welcome thoughtful conversation — whether about research
            collaboration, market ideas, or simply an exchange of perspectives.
          </p>

          <div className="contact-rows">
            <div className="contact-row">
              <span className="cr-key">Email</span>
              <a href="mailto:aydemirmirza@gmail.com">aydemirmirza@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="cr-key">Telephone</span>
              <span className="val">+1 (514) 549-8815</span>
            </div>
            <div className="contact-row">
              <span className="cr-key">LinkedIn</span>
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
