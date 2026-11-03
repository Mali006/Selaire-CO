import { useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Eyebrow, useR } from "../components/ui.jsx";
import { FULL_PROCESS, STEPS } from "../content.js";

export default function Process() {
  const r = useR();
  const [step, setStep] = useState(0);
  const [full, setFull] = useState(false);
  const last = STEPS.length - 1;
  return (
    <section id="process" className={r("scroll-mt-20 bg-cream px-5 py-16", "md:px-10 md:py-24")}>
      <div className="mx-auto max-w-5xl text-center">
        <Eyebrow>The Process</Eyebrow>
        <h2 className={r("font-display mt-4 text-[30px] text-espresso", "md:text-[40px]")}>
          From Contract to Close, Step by Step.
        </h2>

        {/* Stepper */}
        <div className={r("relative mt-12", "md:mt-16")}>
          <div className="absolute left-[12.5%] right-[12.5%] top-6 h-px bg-sand" aria-hidden="true" />
          <div
            className="absolute left-[12.5%] top-6 h-px bg-caramel transition-all duration-500"
            style={{ width: `${(step / last) * 75}%` }}
            aria-hidden="true"
          />
          <ol className={r("relative grid grid-cols-4 gap-2", "md:gap-6")}>
            {STEPS.map((s, i) => {
              const done = i <= step;
              return (
                <li key={s.n} className="relative flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setStep(i)}
                    aria-current={i === step ? "step" : undefined}
                    className={`font-display relative z-10 flex h-12 w-12 items-center justify-center rounded-full border text-[17px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-latte focus-visible:ring-offset-2 ${
                      done
                        ? "border-caramel bg-sand text-espresso"
                        : "border-sand bg-cream text-caramel hover:border-caramel"
                    } ${i === step ? "scale-110 shadow-[0_0_0_6px_rgba(220,199,171,0.5)]" : ""}`}
                  >
                    {s.n}
                  </button>
                  <span className={r("font-body mt-4 text-[10px] leading-4 text-cocoa", "md:text-[12px] md:tracking-wide")}>
                    {s.title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Active step detail */}
        <div className={r("mx-auto mt-10 max-w-2xl border border-sand bg-linen/50 p-6 text-left", "md:p-8")}>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-3xl italic text-caramel">{STEPS[step].n}</span>
            <h3 className="font-display text-xl text-espresso">{STEPS[step].title}</h3>
          </div>
          <p className="font-body mt-3 text-[14px] leading-7 text-cocoa">{STEPS[step].body}</p>
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="font-body inline-flex items-center gap-1 text-[11px] tracking-[0.15em] text-espresso uppercase disabled:opacity-30"
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(last, s + 1))}
              disabled={step === last}
              className="font-body inline-flex items-center gap-1 text-[11px] tracking-[0.15em] text-espresso uppercase disabled:opacity-30"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {full && (
          <ul className={r("mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 text-left", "md:grid-cols-2")}>
            {FULL_PROCESS.map((t) => (
              <li key={t} className="font-body flex items-start gap-3 bg-sand/30 px-4 py-3 text-[13px] text-espresso">
                <Check size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-caramel" />
                {t}
              </li>
            ))}
          </ul>
        )}

        <Button variant="outline" onClick={() => setFull((f) => !f)} className="mt-10">
          {full ? "Hide the Full Process" : "See the Full Process"} <ArrowRight size={14} className={full ? "-rotate-90" : ""} />
        </Button>
      </div>
    </section>
  );
}
