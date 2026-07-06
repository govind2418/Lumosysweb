import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { WhatsAppButton } from "@/components/effects/whatsapp-button";
import { NetworkGlobeCanvas } from "@/components/effects/network-globe-canvas";
import { siteConfig } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Lumosys Web | Web Design, SEO & Digital Marketing Agency in India";
const description =
  "Lumosys Web is India's trusted web design, SEO & digital marketing agency — also serving UAE and Canada. Premium websites starting ₹30,000, plus software solutions and graphic design. Contact: sales@lumosysweb.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "Lumosys Web",
    "lumosysweb",
    "web design company India",
    "web development company India",
    "best website design company in India",
    "affordable website design India",
    "website designing company near me",
    "small business website design India",
    "startup website development India",
    "ecommerce website development India",
    "SEO company India",
    "SEO services India",
    "digital marketing agency India",
    "digital marketing company India",
    "social media marketing agency India",
    "Google Ads agency India",
    "website design Mumbai",
    "website design Delhi",
    "website design Bangalore",
    "web design UAE",
    "web development Dubai",
    "web design Canada",
    "CRM development",
    "ERP solutions",
    "software development company",
    "AI integration",
    "Govind Sharma",
  ],
  authors: [{ name: `${siteConfig.name} — ${siteConfig.founder}` }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "ElQ1PJNtaJwLqxL6PbP55yo5bmACq47-VZrh_dUbE64",
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description:
      "India's trusted web design, SEO & digital marketing agency — also serving UAE and Canada. Premium websites starting ₹30,000, plus software solutions and graphic design.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 2084,
        height: 454,
        alt: "Lumosys Web — Your Digital Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lumosysweb",
    creator: "@lumosysweb",
    title,
    description:
      "India's growth partner for web design, SEO & digital marketing — plus UAE and Canada. Starting ₹30,000 | lumosysweb.com",
    images: [
      {
        url: siteConfig.ogImage,
        width: 2084,
        height: 454,
        alt: "Lumosys Web — Your Digital Growth Partner",
      },
    ],
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "theme-color": "#0a0c14",
  },
};

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  alternateName: "lumosysweb",
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.png`,
  image: `${siteConfig.url}/favicon.png`,
  description:
    "Lumosys Web is a global digital agency offering web design & development, SEO, digital marketing, software solutions and graphic design. Started in India, serving UAE and Canada.",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971-58-810-8014",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-89551-62046",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English",
    },
  ],
  email: siteConfig.email,
  sameAs: Object.values(siteConfig.links),
  areaServed: ["AE", "IN", "CA"],
  serviceType: [
    "Web Design",
    "Web Development",
    "Search Engine Optimization",
    "Digital Marketing",
    "Software Development",
    "Graphic Design",
    "Domain and Hosting",
  ],
  priceRange: "$$",
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="flex min-h-full flex-col selection:bg-primary/30 selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <NetworkGlobeCanvas />
        </div>
        <TooltipProvider delay={150}>
          <CustomCursor />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </TooltipProvider>
      </body>
    </html>
  );
}
