import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/animations/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Lumosys Web about your project. We reply within one business day.",
};

const details = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone (UAE)", value: siteConfig.phones.uae.display, href: siteConfig.phones.uae.href },
  { icon: Phone, label: "Phone (India)", value: siteConfig.phones.india.display, href: siteConfig.phones.india.href },
  { icon: MapPin, label: "Studio", value: siteConfig.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your project."
        description="Fill out the form and our team will get back to you within one business day with next steps."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-8">
              {details.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted/60">
                    <detail.icon className="size-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="font-medium hover:underline">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-medium">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
