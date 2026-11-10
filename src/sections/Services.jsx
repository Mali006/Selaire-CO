import { Check, Receipt, X } from "lucide-react";
import { Eyebrow, useR } from "../components/ui.jsx";
import { NOT_INCLUDED, PAYMENT_NOTE, REMOTE_NOTE, SERVICE_DISCLOSURE, SERVICE_INTRO, SERVICES, WHO_WE_SERVE } from "../content.js";

export default function Services() {
  const r = useR();
  return (
    <section id="services" className={r("scroll-mt-20 bg-linen px-5 py-16", "md:px-10 md:py-24")}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Services · The Selaire Signature</Eyebrow>
          <h2 className={r("font-display mt-4 text-[30px] leading-tight text-espresso", "md:text-[42px]")}>
            Contract-to-Close Administrative Coordination
          </h2>
          <p className="font-script mt-4 text-3xl text-caramel">Grace in Every Detail.</p>
          <div className="font-body mt-5 space-y-3 text-[14px] leading-7 text-cocoa">
            {SERVICE_INTRO.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <h3 className="font-body mt-12 text-center text-[11px] font-medium tracking-[0.25em] text-espresso uppercase">
          What's Included
        </h3>
        <div className={r("mt-6 grid grid-cols-1 gap-5", "md:grid-cols-2 lg:grid-cols-3 lg:gap-6")}>
          {SERVICES.map((s) => (
            <article key={s.n} className={r("border border-sand bg-cream p-7", "md:p-8")}>
              <span className="font-display text-3xl italic text-caramel">{s.n}</span>
              <h4 className="font-display mt-3 text-[21px] leading-snug text-espresso">{s.title}</h4>
              <p className="font-body mt-3 text-[14px] leading-7 text-cocoa">{s.body}</p>
            </article>
          ))}
          <article className={r("bg-espresso p-7 text-cream", "md:p-8")}>
            <Eyebrow light>Who We Serve</Eyebrow>
            <p className="font-display mt-4 text-[20px] leading-relaxed">{WHO_WE_SERVE}</p>
            <p className="font-body mt-4 text-[11px] font-medium tracking-[0.2em] text-latte uppercase">{REMOTE_NOTE}</p>
          </article>
        </div>

        <div className={r("mt-6 grid grid-cols-1 gap-5", "md:grid-cols-2 lg:gap-6")}>
          <div className={r("border border-sand p-7", "md:p-8")}>
            <h3 className="font-body text-[11px] font-medium tracking-[0.25em] text-espresso uppercase">Not Included</h3>
            <ul className="mt-4 space-y-2">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="font-body flex items-center gap-3 text-[14px] text-cocoa">
                  <X size={15} strokeWidth={1.5} className="shrink-0 text-caramel" /> {item}
                </li>
              ))}
            </ul>
            <p className="font-body mt-4 text-[12px] leading-6 text-cocoa">{SERVICE_DISCLOSURE}</p>
          </div>
          <div className={r("border border-sand p-7", "md:p-8")}>
            <h3 className="font-body flex items-center gap-2 text-[11px] font-medium tracking-[0.25em] text-espresso uppercase">
              <Receipt size={16} strokeWidth={1.5} className="text-caramel" /> Payment
            </h3>
            <p className="font-body mt-4 flex items-start gap-3 text-[14px] leading-7 text-cocoa">
              <Check size={15} strokeWidth={1.5} className="mt-1.5 shrink-0 text-caramel" /> {PAYMENT_NOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
