import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL, FORM_ENDPOINT } from "../config.js";
import { Button, OliveBranch } from "./ui.jsx";

const field =
  "font-body w-full border border-sand bg-cream px-4 py-3 text-[13px] text-espresso placeholder:text-caramel/70 focus:border-caramel focus:outline-none";

export default function InquiryForm({ idPrefix = "inquiry" }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New inquiry from ${data.name}`,
          _replyto: data.email,
          _template: "table",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === "false") throw new Error(json.message || res.statusText);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="py-10 text-center" role="status">
        <OliveBranch className="mx-auto h-16 w-11" />
        <h3 className="font-display mt-6 text-3xl text-espresso">Thank you.</h3>
        <p className="font-body mx-auto mt-3 max-w-xs text-[14px] leading-7 text-cocoa">
          Your inquiry is on its way. Expect a reply within one business day.
        </p>
        <p className="font-script mt-6 text-3xl text-caramel">Grace in Every Detail.</p>
      </div>
    );
  }

  const id = (name) => `${idPrefix}-${name}`;
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-3">
        <label htmlFor={id("name")} className="sr-only">Full name</label>
        <input id={id("name")} name="name" required autoComplete="name" className={field} placeholder="Full name" />

        <label htmlFor={id("email")} className="sr-only">Email address</label>
        <input id={id("email")} name="email" type="email" required autoComplete="email" className={field} placeholder="Email address" />

        <label htmlFor={id("brokerage")} className="sr-only">Brokerage</label>
        <input id={id("brokerage")} name="brokerage" autoComplete="organization" className={field} placeholder="Brokerage" />

        <label htmlFor={id("volume")} className="sr-only">Transactions per month</label>
        <select id={id("volume")} name="transactions_per_month" className={field} defaultValue="">
          <option value="" disabled>
            Transactions per month
          </option>
          <option>1–2</option>
          <option>3–5</option>
          <option>6–10</option>
          <option>10+</option>
        </select>

        <label htmlFor={id("message")} className="sr-only">Message</label>
        <textarea id={id("message")} name="message" required rows={4} className={field} placeholder="How can I support you?" />

        {/* Honeypot: hidden from people, filled in by spam bots, which FormSubmit then discards */}
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>

      {status === "error" && (
        <p className="font-body mt-4 text-[13px] leading-6 text-cocoa" role="alert">
          Something went wrong sending your message. Please try again, or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2 hover:text-espresso">
            {CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}

      <Button type="submit" disabled={status === "sending"} className="mt-6 w-full justify-center">
        {status === "sending" ? "Sending…" : "Send Inquiry"} <ArrowRight size={14} />
      </Button>
    </form>
  );
}
