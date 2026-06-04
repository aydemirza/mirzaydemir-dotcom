"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Front Page", href: "/", id: "home" },
  { name: "About", href: "/about", id: "about" },
  { name: "Selected Works", href: "/#cases", id: "cases" },
  { name: "Curriculum", href: "/resume", id: "resume" },
  { name: "Correspondence", href: "/contact", id: "contact" },
];

export function Masthead() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function getActiveId() {
    if (pathname === "/") return "home";
    if (pathname === "/about") return "about";
    if (pathname === "/resume") return "resume";
    if (pathname === "/contact") return "contact";
    if (pathname.startsWith("/cases")) return "cases";
    return "home";
  }

  const activeId = getActiveId();

  return (
    <>
      <header className="sheet masthead">
        <div className="masthead-top">
          <div className="mt-l">Toronto, Ontario</div>
          <div className="mt-c"></div>
          <div className="mt-r">
            <a
              href="https://www.linkedin.com/in/aydemirmirza/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: "5px" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <hr className="rule" />
        <h1 className="nameplate">
          <Link href="/">Mirza Aydemir</Link>
        </h1>
        <div className="rule-double" />
      </header>

      {/* Desktop nav */}
      <nav className="papernav" style={{ display: undefined }}>
        <div className="hidden md:contents">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={activeId === link.id ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ padding: "4px 12px", color: "var(--ink)" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center md:hidden"
            style={{ background: "var(--paper)" }}
          >
            <button
              className="absolute top-6 right-6"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{ color: "var(--ink)" }}
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-6 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl"
                  style={{
                    textDecoration: "none",
                    color: activeId === link.id ? "var(--accent)" : "var(--ink)",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
