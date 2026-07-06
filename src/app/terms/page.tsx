import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-28 text-muted-foreground lg:px-8">
        <p>
          These terms govern your use of {siteConfig.url}. By using this
          site, you agree to these terms.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Use of this site</h2>
        <p>
          Content on this site is provided for general information about{" "}
          {siteConfig.name}&apos;s services and is not a binding offer. Formal
          engagements are governed by a separate signed agreement between{" "}
          {siteConfig.name} and the client.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Intellectual property</h2>
        <p>
          Unless otherwise noted, all content on this site — including text,
          graphics, and code samples — is the property of {siteConfig.name}{" "}
          and may not be reproduced without permission.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
