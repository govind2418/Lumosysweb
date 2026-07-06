import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { contactSchema } from "@/lib/contact-schema";

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

    // In production this would enqueue an email/CRM notification.
    console.log("New contact submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      budget: data.budget,
      service: data.service,
    });

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
