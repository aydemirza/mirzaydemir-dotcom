import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { EditionSwitcher } from "@/components/EditionSwitcher";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirzaydemir.com"),
  title: "The Aydemir Review | Mirza Aydemir — MFin Candidate",
  description:
    "Master of Finance candidate at Schulich (Capital Markets & Risk). Turning data into decision-grade insight.",
  openGraph: {
    title: "The Aydemir Review | Mirza Aydemir",
    description:
      "Master of Finance candidate at Schulich (Capital Markets & Risk). Turning data into decision-grade insight.",
    url: "https://mirzaydemir.com",
    siteName: "The Aydemir Review",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aydemir Review | Mirza Aydemir",
    description:
      "Master of Finance candidate at Schulich (Capital Markets & Risk). Turning data into decision-grade insight.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scheme="salmon" suppressHydrationWarning>
      <head>
        <Script
          id="edition-restore"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem("bs-scheme");if(s)document.documentElement.dataset.scheme=s}catch(e){}`,
          }}
        />
      </head>
      <body className={`${newsreader.variable} antialiased`} style={{ fontFamily: "var(--font-newsreader), Georgia, 'Times New Roman', serif" }}>
        {children}
        <EditionSwitcher />
      </body>
    </html>
  );
}
