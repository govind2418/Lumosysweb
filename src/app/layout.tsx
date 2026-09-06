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
import { faqs } from "@/data/faq";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title =
  "Lumosys Web | App Development, Web App & Website Development Agency";
const description =
  "Lumosys Web builds mobile apps, web apps, and all types of custom app development — plus web design, SEO & digital marketing. Trusted in India, UAE and Canada. Contact: lumosysweb@gmail.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "Lumosys Web",
    "lumosysweb",
    "app development company",
    "app development agency",
    "mobile app development company",
    "mobile app development India",
    "Android app development",
    "iOS app development",
    "web app development company",
    "web application development",
    "custom app development",
    "cross-platform app development",
    "Progressive Web App development",
    "PWA development company",
    "SaaS app development",
    "hire app developers",
    "on-demand app development",
    "app development UAE",
    "app development Dubai",
    "app development Canada",
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
      "All types of app development — mobile apps, web apps, and cross-platform apps — plus web design, SEO & digital marketing. Trusted in India, UAE and Canada.",
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
      "App development, web app development & website development — India's growth partner, also serving UAE and Canada. lumosysweb.com",
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
    "Lumosys Web is a global digital agency offering app development (mobile, web, and cross-platform apps), web design & development, SEO, digital marketing, software solutions and graphic design. Started in India, serving UAE and Canada.",
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
    "App Development",
    "Mobile App Development",
    "Web App Development",
    "Cross-Platform App Development",
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

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
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
