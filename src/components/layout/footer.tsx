"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon as XIcon,
} from "@/components/icons/social-icons";
import { footerLinks, siteConfig } from "@/lib/site-config";
import { scrollToSection } from "@/lib/scroll-to-section";

const socials = [
  {
    icon: InstagramIcon,
    href: siteConfig.links.instagram,
    label: "Instagram @lumosysweb",
    hoverClass: "hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5",
  },
  {
    icon: FacebookIcon,
    href: siteConfig.links.facebook,
    label: "Facebook @lumosysweb",
    hoverClass: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5",
  },
  {
    icon: LinkedinIcon,
    href: siteConfig.links.linkedin,
    label: "LinkedIn @lumosysweb",
    hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5",
  },
  {
    icon: XIcon,
    href: siteConfig.links.x,
    label: "X @lumosysweb",
    hoverClass: "hover:text-white hover:border-white/30 hover:bg-white/5",
  },
];

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="relative border-t border-white/5 bg-background/50 pt-16 pb-8 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="interactive mb-4 inline-block"
            >
              <Image src="/logo.png" alt="Lumosys Web" width={160} height={40} className="h-10 w-auto" />
            </a>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Your Digital Growth Partner — premium web design, SEO, digital
              marketing, and software solutions from Dubai to the world.
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="interactive flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
              >
                <Mail size={13} className="text-primary" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.phones.uae.href}
                className="interactive flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
              >
                <Phone size={13} className="text-primary" />
                {siteConfig.phones.uae.display} (UAE)
              </a>
              <a
                href={siteConfig.phones.india.href}
                className="interactive flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
              >
                <Phone size={13} className="text-primary" />
                {siteConfig.phones.india.display} (India)
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    onClick={(e) => handleClick(e, "#services")}
                    className="interactive text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="interactive text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white">
              Offices
            </h4>
            <div className="space-y-3">
              {footerLinks.offices.map((office) => (
                <div key={office.country} className="flex items-center gap-2">
                  <span>{office.flag}</span>
                  <div>
                    <p className="text-sm font-medium leading-none text-white">
                      {office.country}
                    </p>
                    <p className="text-xs text-muted-foreground">{office.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lumosys Web. All rights reserved. |
            www.lumosysweb.com
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className={`interactive flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all ${social.hoverClass}`}
              >
                <social.icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
