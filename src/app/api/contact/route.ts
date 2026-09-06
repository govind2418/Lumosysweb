import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ZodError } from "zod";

import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  try {
    const data = contactSchema.parse(body);

    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone && `Phone: ${data.phone}`,
      data.company && `Company: ${data.company}`,
      data.budget && `Budget: ${data.budget}`,
      data.service && `Service: ${data.service}`,
      "",
      "Message:",
      data.message,
    ].filter(Boolean);

    const { error } = await resend.emails.send(
      {
        from: `Lumosys Web <inquiries@${process.env.RESEND_EMAIL_DOMAIN}>`,
        to: [siteConfig.email],
        replyTo: data.email,
        subject: `New inquiry from ${data.name}`,
        text: lines.join("\n"),
      },
      { idempotencyKey: `contact-form/${data.email}/${Date.now()}` },
    );

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed.", issues: error.flatten().fieldErrors },
        { status: 422 },
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
