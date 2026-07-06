export interface PricingRegion {
  id: "uae" | "india" | "canada";
  flag: string;
  label: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingRegions: PricingRegion[] = [
  { id: "uae", flag: "🇦🇪", label: "UAE (AED)" },
  { id: "india", flag: "🇮🇳", label: "India (INR)" },
  { id: "canada", flag: "🇨🇦", label: "Canada (CAD)" },
];

export const pricingPlans: Record<PricingRegion["id"], PricingTier[]> = {
  uae: [
    {
      name: "Starter Website",
      price: "1,500",
      period: "AED one-time",
      description: "Perfect for small businesses and startups entering the digital space.",
      features: ["Business Website", "Mobile Responsive", "SEO Basics", "Contact Form", "SSL Certificate", "1 Month Support"],
    },
    {
      name: "Business Website",
      price: "3,000",
      period: "AED one-time",
      description: "Full-featured website for growing businesses ready to scale.",
      features: ["Custom Design", "Up to 10 Pages", "Advanced SEO", "CMS Integration", "Speed Optimized", "Analytics Setup", "3 Months Support"],
      highlighted: true,
    },
    {
      name: "Website Maintenance",
      price: "300",
      period: "AED / month",
      description: "Keep your website updated, secure, and performing at its best.",
      features: ["Monthly Updates", "Security Monitoring", "Performance Checks", "Content Updates", "Priority Support"],
    },
    {
      name: "SEO Package",
      price: "100",
      period: "AED / month",
      description: "Consistent SEO to grow your organic reach and search rankings.",
      features: ["Keyword Research", "On-Page SEO", "Monthly Reports", "Google Search Console", "Link Building Basics"],
    },
  ],
  india: [
    {
      name: "Starter Website",
      price: "30,000",
      period: "INR one-time",
      description: "Perfect for small businesses and startups entering the digital space.",
      features: ["Business Website", "Mobile Responsive", "SEO Basics", "Contact Form", "SSL Certificate", "1 Month Support"],
    },
    {
      name: "Business Website",
      price: "50,000",
      period: "INR one-time",
      description: "Full-featured website for growing businesses ready to scale.",
      features: ["Custom Design", "Up to 10 Pages", "Advanced SEO", "CMS Integration", "Speed Optimized", "Analytics Setup", "3 Months Support"],
      highlighted: true,
    },
    {
      name: "Website Maintenance",
      price: "2,000",
      period: "INR / month",
      description: "Keep your website updated, secure, and performing at its best.",
      features: ["Monthly Updates", "Security Monitoring", "Performance Checks", "Content Updates", "Priority Support"],
    },
    {
      name: "SEO Package",
      price: "1,000",
      period: "INR / month",
      description: "Consistent SEO to grow your organic reach and search rankings.",
      features: ["Keyword Research", "On-Page SEO", "Monthly Reports", "Google Search Console", "Link Building Basics"],
    },
  ],
  canada: [
    {
      name: "Starter Website",
      price: "999",
      period: "CAD one-time",
      description: "Perfect for small businesses and startups entering the digital space.",
      features: ["Business Website", "Mobile Responsive", "SEO Basics", "Contact Form", "SSL Certificate", "1 Month Support"],
    },
    {
      name: "Business Website",
      price: "1,500",
      period: "CAD one-time",
      description: "Full-featured website for growing businesses ready to scale.",
      features: ["Custom Design", "Up to 10 Pages", "Advanced SEO", "CMS Integration", "Speed Optimized", "Analytics Setup", "3 Months Support"],
      highlighted: true,
    },
    {
      name: "Website Maintenance",
      price: "150",
      period: "CAD / month",
      description: "Keep your website updated, secure, and performing at its best.",
      features: ["Monthly Updates", "Security Monitoring", "Performance Checks", "Content Updates", "Priority Support"],
    },
    {
      name: "SEO Package",
      price: "50",
      period: "CAD / month",
      description: "Consistent SEO to grow your organic reach and search rankings.",
      features: ["Keyword Research", "On-Page SEO", "Monthly Reports", "Google Search Console", "Link Building Basics"],
    },
  ],
};
