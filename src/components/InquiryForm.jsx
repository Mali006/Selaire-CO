import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL, FORM_ENDPOINT } from "../config.js";
import { INQUIRY_TOPICS, SERVICE_AREAS } from "../content.js";
import { Button, OliveBranch } from "./ui.jsx";

const field =
  "font-body w-full border border-sand bg-cream px-4 py-3 text-[13px] text-espresso placeholder:text-caramel/70 focus:border-caramel focus:outline-none";
const label = "font-body mb-1.5 block text-[12px] font-medium text-espresso";

function RadioGroup({ legend, name, options }) {
  return (
    <fieldset>
      <legend className={label}>{legend}</legend>
      <div className="space-y-1.5">
        {options.map((option) => (
          <label key={option} className="font-body flex items-center gap-2.5 text-[13px] text-cocoa">
            <input type="radio" name={name} value={option} required className="h-4 w-4 accent-caramel" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

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
          Thank you for reaching out to Selaire &amp; Co.! Your inquiry has been received, and we look forward to
          connecting with you.
        </p>
        <p className="font-script mt-6 text-3xl text-caramel">Grace in Every Detail.</p>
      </div>
    );
  }

  const id = (name) => `${idPrefix}-${name}`;
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor={id("name")} className={label}>Full Name</label>
          <input id={id("name")} name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor={id("email")} className={label}>Email Address</label>
          <input id={id("email")} name="email" type="email" required maxLength={254} autoComplete="email" className={field} placeholder="you@brokerage.com" />
        </div>
        <div>
          <label htmlFor={id("brokerage")} className={label}>Brokerage Name</label>
          <input id={id("brokerage")} name="brokerage" maxLength={120} autoComplete="organization" className={field} placeholder="Your brokerage" />
        </div>

        <RadioGroup legend="Primary Service Area" name="service_area" options={SERVICE_AREAS} />
        <RadioGroup legend="What Can We Help You With?" name="help_with" options={INQUIRY_TOPICS} />

        <div>
          <label htmlFor={id("message")} className={label}>Your Message</label>
          <textarea
            id={id("message")}
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={4}
            className={field}
            placeholder="Tell us a little about what you're looking for..."
          />
        </div>

        {/* Honeypot: hidden from people, filled in by spam bots, which FormSubmit then discards */}
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>

      <p className="font-body mt-4 text-[12px] leading-5 text-caramel">
        Please do not include confidential client information, contracts, or sensitive transaction documents in this
        form.
      </p>

      {status === "error" && (
        <p className="font-body mt-4 text-[13px] leading-6 text-cocoa" role="alert">
          Something went wrong sending your message. Please try again, or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2 hover:text-espresso">
            {CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}

      <Button type="submit" disabled={status === "sending"} className="mt-5 w-full justify-center">
        {status === "sending" ? "Sending…" : "Send Inquiry"} <ArrowRight size={14} />
      </Button>
    </form>
  );
}
