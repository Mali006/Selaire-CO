import { useState } from "react";
import { Plus } from "lucide-react";
import { Eyebrow, Photo, useR } from "../components/ui.jsx";
import { FAQS, IMAGES } from "../content.js";

export default function Faq() {
  const r = useR();
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className={r("scroll-mt-20 bg-linen px-5 py-16", "md:px-10 md:py-24")}>
      <div className={r("mx-auto grid max-w-6xl grid-cols-1 gap-10", "md:grid-cols-12 md:gap-14")}>
        <div className={r("", "md:col-span-4")}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className={r("font-display mt-4 text-[30px] leading-tight text-espresso", "md:text-[40px]")}>
            Questions, Answered.
          </h2>
          <p className="font-body mt-5 text-[14px] leading-7 text-cocoa">
            Don't see your question here? Send it through the inquiry form below.
          </p>
          <Photo
            src={IMAGES.faq}
            alt="Hands writing in a planner on an oak desk"
            className={r("mt-8 hidden h-72 w-full", "md:block")}
          />
        </div>

        <div className={r("border-t border-sand", "md:col-span-8")}>
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b border-sand">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={r(
                      "font-display flex w-full items-center justify-between gap-6 py-5 text-left text-[18px] text-espresso hover:text-caramel",
                      "md:text-[20px]"
                    )}
                  >
                    {q}
                    <Plus
                      size={18}
                      strokeWidth={1.5}
                      className={`shrink-0 text-caramel transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <p className="font-body overflow-hidden pr-10 text-[14px] leading-7 text-cocoa">
                    <span className="block pb-6">{a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
