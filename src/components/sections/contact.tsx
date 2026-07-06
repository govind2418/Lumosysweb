"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";

import { services } from "@/data/services";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-config";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.524 5.857L.057 23.882a.5.5 0 0 0 .636.578l6.294-2.04A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.851 0-3.587-.505-5.08-1.383l-.36-.217-3.735 1.21 1.234-3.625-.237-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "UAE", value: siteConfig.phones.uae.display, href: siteConfig.phones.uae.href },
  { icon: Phone, label: "India", value: siteConfig.phones.india.display, href: siteConfig.phones.india.href },
  { icon: MapPin, label: "Studio", value: siteConfig.address },
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "interactive w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.07]";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function openWhatsApp() {
    const message = encodeURIComponent(siteConfig.whatsapp.message);
    window.open(`https://wa.me/${siteConfig.whatsapp.number}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 bg-card/50 py-32 backdrop-blur-sm">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >
              Get In Touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mb-6 text-4xl font-bold tracking-tight md:text-5xl"
            >
              Let&apos;s Build Something <span className="text-gradient">Great.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-10 max-w-md text-lg text-muted-foreground"
            >
              Tell us about your project and we&apos;ll get back to you within
              one business day with next steps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass-card space-y-5 rounded-3xl p-8"
            >
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <detail.icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="interactive font-medium text-white transition-colors hover:text-primary">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <button
                onClick={openWhatsApp}
                className="interactive mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-4 w-4 fill-black" />
                Chat on WhatsApp
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            {status === "success" ? (
              <div className="flex flex-col items-start gap-3 py-8">
                <CheckCircle2 className="size-10 text-primary" />
                <h3 className="text-xl font-semibold text-white">Message sent.</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out — we&apos;ll reply within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="interactive mt-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Full name
                    </label>
                    <input id="name" name="name" placeholder="Your name" className={inputClasses} />
                    {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <input id="email" name="email" type="email" placeholder="you@company.com" className={inputClasses} />
                    {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white">
                      Phone (optional)
                    </label>
                    <input id="phone" name="phone" placeholder="+971 5X XXX XXXX" className={inputClasses} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-white">
                      Service needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, timeline, and goals."
                    className={`${inputClasses} resize-none`}
                  />
                  {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
                </div>

                {status === "error" ? (
                  <p className="text-sm text-destructive">
                    Something went wrong sending your message. Please try again.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="interactive flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60 sm:w-auto sm:px-8"
                >
                  {status === "submitting" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    "Send message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
