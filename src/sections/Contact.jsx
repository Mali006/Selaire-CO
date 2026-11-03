import { Mail } from "lucide-react";
import InquiryForm from "../components/InquiryForm.jsx";
import { Eyebrow, Photo, useR } from "../components/ui.jsx";
import { CONTACT_EMAIL } from "../config.js";
import { IMAGES } from "../content.js";

export default function Contact() {
  const r = useR();
  return (
    <section id="contact" className={r("scroll-mt-20 bg-cream px-5 py-16", "md:px-10 md:py-24")}>
      <div className={r("mx-auto grid max-w-6xl grid-cols-1 gap-10", "md:grid-cols-2 md:gap-16")}>
        <div>
          <Eyebrow>Send an Inquiry</Eyebrow>
          <h2 className={r("font-display mt-4 text-[30px] leading-tight text-espresso", "md:text-[42px]")}>
            Let's Work Together.
          </h2>
          <p className="font-body mt-5 max-w-md text-[14px] leading-7 text-cocoa">
            Tell me about your business and your next listing or buyer file. I reply to every inquiry within one
            business day.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-body mt-6 inline-flex items-center gap-2 text-[13px] text-espresso underline-offset-4 hover:text-caramel hover:underline"
          >
            <Mail size={16} strokeWidth={1.5} className="text-caramel" /> {CONTACT_EMAIL}
          </a>
          <Photo
            src={IMAGES.contact}
            alt="Cozy desk with a laptop, a lit candle and coffee"
            className={r("mt-8 h-64 w-full", "md:h-80")}
          />
        </div>
        <div className={r("border border-sand bg-linen/60 p-6", "md:p-10")}>
          <InquiryForm idPrefix="contact" />
        </div>
      </div>
    </section>
  );
}
