import { ArrowRight } from "lucide-react";
import BookCallButton from "../components/BookCallButton.jsx";
import { Button, Eyebrow, useR } from "../components/ui.jsx";
import { PROCESS_INTRO, STEPS } from "../content.js";

export default function Process({ onCta, onNav }) {
  const r = useR();
  return (
    <section id="process" className={r("scroll-mt-20 bg-cream px-5 py-16", "md:px-10 md:py-24")}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className={r("font-display mt-4 text-[30px] leading-tight text-espresso", "md:text-[40px]")}>
            A Thoughtful Approach to Every Detail.
          </h2>
          <div className="font-body mt-5 space-y-3 text-[14px] leading-7 text-cocoa">
            {PROCESS_INTRO.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <ol className={r("mt-12", "md:mt-16")}>
          {STEPS.map((s, i) => (
            <li key={s.n} className={r("relative flex gap-5", "md:gap-8")}>
              <div className="flex flex-col items-center">
                <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-caramel bg-sand text-[17px] text-espresso">
                  {s.n}
                </span>
                {i < STEPS.length - 1 && <span className="w-px flex-1 bg-sand" aria-hidden="true" />}
              </div>
              <div className={i < STEPS.length - 1 ? "pb-10" : ""}>
                <h3 className={r("font-display pt-2 text-[22px] leading-snug text-espresso", "md:text-[24px]")}>{s.title}</h3>
                <p className="font-display mt-1 text-[15px] italic text-caramel">{s.tagline}</p>
                <div className="font-body mt-3 space-y-3 text-[14px] leading-7 text-cocoa">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className={r("mt-14 bg-linen px-6 py-10 text-center", "md:px-12 md:py-12")}>
          <h3 className={r("font-display text-[26px] leading-tight text-espresso", "md:text-[32px]")}>
            Ready to Experience Grace in Every Detail?
          </h3>
          <p className="font-body mx-auto mt-4 max-w-lg text-[14px] leading-7 text-cocoa">
            We'd love to learn more about your transaction coordination needs and explore how Selaire &amp; Co. may
            support your business.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button onClick={onCta}>
              Work With Me <ArrowRight size={14} />
            </Button>
            <BookCallButton variant="outline" className="px-6 py-3" onNav={onNav} />
          </div>
        </div>
      </div>
    </section>
  );
}
