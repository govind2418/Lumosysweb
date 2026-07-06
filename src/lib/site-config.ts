export const siteConfig = {
  name: "Lumosys Web",
  shortName: "Lumosys",
  tagline: "Your Digital Growth Partner",
  description:
    "Lumosys Web is India's trusted web design, SEO & digital marketing agency — also serving UAE and Canada. Premium websites starting ₹30,000, plus software solutions and graphic design.",
  url: "https://www.lumosysweb.com",
  ogImage: "/logo.png",
  email: "sales@lumosysweb.com",
  founder: "Govind Sharma",
  address: "Dubai, United Arab Emirates",
  whatsapp: {
    number: "971588108014",
    display: "+971 58 810 8014",
    message: "Hi Lumosys Web! I'd like to discuss a project with you.",
  },
  phones: {
    uae: { display: "+971 58 810 8014", href: "tel:+971588108014" },
    india: { display: "+91 89551 62046", href: "tel:+918955162046" },
  },
  links: {
    instagram: "https://www.instagram.com/lumosysweb",
    facebook: "https://www.facebook.com/lumosysweb",
    linkedin: "https://www.linkedin.com/company/lumosysweb",
    x: "https://www.x.com/lumosysweb",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
] as const;

export const footerLinks = {
  services: [
    "Web Development",
    "SEO",
    "Digital Marketing",
    "Software Solutions",
    "Domain & Hosting",
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  offices: [
    { flag: "🇦🇪", country: "UAE", city: "Dubai (HQ)" },
    { flag: "🇮🇳", country: "India", city: "Operations" },
    { flag: "🇨🇦", country: "Canada", city: "North America" },
  ],
} as const;

export const globalPresence = [
  { flag: "🇦🇪", label: "United Arab Emirates", city: "Dubai (HQ)" },
  { flag: "🇮🇳", label: "India", city: "Operations" },
  { flag: "🇨🇦", label: "Canada", city: "North America" },
] as const;
