import { useState } from "react";
import { Check, ChevronDown, Info, Receipt } from "lucide-react";
import { Eyebrow, useR } from "../components/ui.jsx";
import { NOT_INCLUDED, PAYMENT_NOTE, SERVICES } from "../content.js";

function ServiceCard({ service }) {
  const r = useR();
  const [open, setOpen] = useState(false);
  const { icon: Icon, title, summary, bestFor, includes } = service;
  const detailsId = `service-${title.replace(/\W+/g, "-").toLowerCase()}`;
  return (
    <article className={r("flex flex-col border border-sand bg-cream p-7", "md:p-9")}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linen">
        <Icon size={26} strokeWidth={1.2} className="text-caramel" />
      </div>
      <h3 className={r("font-display mt-6 text-[22px] leading-snug text-espresso", "md:text-[26px]")}>{title}</h3>
      <p className="font-body mt-3 text-[14px] leading-7 text-cocoa">{summary}</p>
      <p className="font-body mt-4 text-[12px] leading-6 text-caramel">
        <span className="font-medium tracking-[0.15em] uppercase">Best for:</span> {bestFor}
      </p>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={detailsId}
        className="font-body mt-6 inline-flex items-center gap-2 self-start border-b border-latte pb-1 text-[11px] font-medium tracking-[0.2em] text-espresso uppercase hover:border-espresso"
      >
        {open ? "Hide Details" : "What's Included"}
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        id={detailsId}
        className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <ul className="space-y-2.5 overflow-hidden">
          {includes.map((item, i) => (
            <li key={item} className={`font-body flex items-start gap-3 text-[13px] leading-6 text-espresso ${i === 0 ? "mt-5" : ""}`}>
              <Check size={16} strokeWidth={1.5} className="mt-1 shrink-0 text-caramel" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Services() {
  const r = useR();
  return (
    <section id="services" className={r("scroll-mt-20 bg-linen px-5 py-16", "md:px-10 md:py-24")}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 className={r("font-display mt-4 text-[30px] leading-tight text-espresso", "md:text-[42px]")}>
            Support Shaped Around Your Business.
          </h2>
          <p className="font-body mt-5 text-[14px] leading-7 text-cocoa">
            Choose full contract-to-close coordination or just the pieces you need. Every service is handled remotely
            for residential transactions across DC, Maryland and Virginia.
          </p>
        </div>

        <div className={r("mt-12 grid grid-cols-1 items-start gap-6", "md:mt-14 md:grid-cols-2 md:gap-8")}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        <p className="font-body mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 border border-sand bg-cream px-5 py-4 text-center text-[13px] leading-6 text-espresso">
          <Receipt size={18} strokeWidth={1.5} className="shrink-0 text-caramel" />
          {PAYMENT_NOTE}
        </p>

        <p className="font-body mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 text-center text-[12px] leading-6 text-caramel">
          <Info size={14} strokeWidth={1.5} className="mt-1 shrink-0" />
          {NOT_INCLUDED}
        </p>
      </div>
    </section>
  );
}
