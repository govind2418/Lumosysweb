"use client";

import { useState, type FormEvent } from "react";
import { Loader2, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema } from "@/lib/contact-schema";

const budgetOptions = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [budget, setBudget] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      budget,
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
      setBudget("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-muted/30 p-8 ring-1 ring-foreground/10">
        <CheckCircle2 className="size-8 text-foreground" />
        <h3 className="text-lg font-semibold">Message sent.</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out — we&apos;ll reply within one business day.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Jordan Rivera" aria-invalid={!!errors.name} />
          {errors.name ? <p className="text-sm text-destructive">{errors.name}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@company.com" aria-invalid={!!errors.email} />
          {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Acme Inc." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget range</Label>
          <Select value={budget} onValueChange={(value) => setBudget(value ?? "")}>
            <SelectTrigger id="budget" className="w-full">
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project details</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, timeline, and goals."
          aria-invalid={!!errors.message}
        />
        {errors.message ? <p className="text-sm text-destructive">{errors.message}</p> : null}
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive">
          Something went wrong sending your message. Please try again.
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="group h-11 w-full px-6 text-base sm:w-auto">
        {status === "submitting" ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            Send message
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </Button>
    </form>
  );
}
