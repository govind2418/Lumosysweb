import type { LucideIcon } from "lucide-react";
import { Code2, Globe2, PenTool, Search, Server, TrendingUp } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  slug: string;
  title: string;
  description: string;
  items: string[];
  features: string[];
}

const webDevItems = [
  "Business Websites",
  "Corporate Websites",
  "Landing Pages",
  "Portfolio Websites",
  "E-Commerce Stores",
  "WordPress Development",
  "Custom Websites",
];

const seoItems = [
  "Technical SEO",
  "On-Page SEO",
  "Off-Page SEO",
  "Local SEO",
  "Google Search Console",
  "Website Audit",
  "Monthly SEO",
];

const marketingItems = [
  "Google Ads",
  "Meta Ads",
  "Social Media Marketing",
  "Lead Generation",
  "Performance Marketing",
];

const softwareItems = [
  "Business Software",
  "CRM Development",
  "ERP Solutions",
  "Automation",
  "Custom Dashboards",
  "AI Integration",
];

const hostingItems = [
  "Premium Hosting",
  "Business Email",
  "SSL Certificates",
  "Website Migration",
  "Maintenance",
];

const graphicDesignItems = [
  "Logo Design",
  "Brand Identity Design",
  "Business Card Design",
  "Letterhead Design",
  "Company Profile Design",
  "Brochure Design",
  "Flyer & Poster Design",
  "Social Media Creatives",
  "Banner Design",
];

export const services: Service[] = [
  {
    icon: Code2,
    slug: "web-design-development",
    title: "Web Design & Development",
    description: "Pixel-perfect websites that convert visitors into customers.",
    items: webDevItems,
    features: webDevItems,
  },
  {
    icon: Search,
    slug: "seo",
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies that dominate search rankings.",
    items: seoItems,
    features: seoItems,
  },
  {
    icon: TrendingUp,
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Performance-focused marketing that drives measurable ROI.",
    items: marketingItems,
    features: marketingItems,
  },
  {
    icon: Globe2,
    slug: "software-solutions",
    title: "Software Solutions",
    description: "Custom business software and intelligent automation systems.",
    items: softwareItems,
    features: softwareItems,
  },
  {
    icon: Server,
    slug: "domain-hosting",
    title: "Domain & Hosting",
    description: "Enterprise-grade infrastructure to keep your business always on.",
    items: hostingItems,
    features: hostingItems,
  },
  {
    icon: PenTool,
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Visual identities and creative assets that make your brand impossible to ignore.",
    items: graphicDesignItems,
    features: graphicDesignItems,
  },
];
