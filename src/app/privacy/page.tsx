import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-28 text-muted-foreground lg:px-8">
        <p>
          {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) respects your
          privacy. This policy explains what information we collect through{" "}
          {siteConfig.url}, how we use it, and the choices you have.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
        <p>
          When you submit our contact form we collect your name, email
          address, company, and any project details you share. We do not
          collect payment information through this site.
        </p>
        <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
        <p>
          We use submitted information solely to respond to your inquiry and,
          if you become a client, to deliver contracted services. We do not
          sell personal data to third parties.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
