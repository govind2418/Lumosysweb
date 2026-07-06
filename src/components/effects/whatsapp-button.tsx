"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.524 5.857L.057 23.882a.5.5 0 0 0 .636.578l6.294-2.04A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.851 0-3.587-.505-5.08-1.383l-.36-.217-3.735 1.21 1.234-3.625-.237-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent(siteConfig.whatsapp.message);
    window.open(
      `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-64 rounded-2xl border border-white/10 bg-[#0f1117] p-4 shadow-2xl"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20">
                  <WhatsAppIcon className="h-4 w-4 fill-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Lumosys Web</p>
                  <p className="flex items-center gap-1 text-xs text-[#25D366]">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#25D366]" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground transition-colors hover:text-white"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
              Hi there! 👋 Ready to grow your business? Chat with us on WhatsApp.
            </p>
            <button
              onClick={openWhatsApp}
              className="interactive w-full rounded-full bg-[#25D366] py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Chat on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="interactive flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_24px_rgba(37,211,102,0.4)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
      </button>
    </div>
  );
}
