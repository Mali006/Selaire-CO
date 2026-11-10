import { Mail, MapPin } from "lucide-react";
import InquiryForm from "../components/InquiryForm.jsx";
import { Eyebrow, OliveBranch, Photo, useR } from "../components/ui.jsx";
import { CONTACT_EMAIL } from "../config.js";
import { IMAGES } from "../content.js";

export default function Contact() {
  const r = useR();
  return (
    <section id="contact" className={r("scroll-mt-20 bg-cream px-5 py-16", "md:px-10 md:py-24")}>
      <div className={r("mx-auto grid max-w-6xl grid-cols-1 gap-10", "md:grid-cols-2 md:gap-16")}>
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className={r("font-display mt-4 text-[30px] leading-tight text-espresso", "md:text-[42px]")}>
            Let's Connect.
          </h2>
          <div className="font-body mt-5 max-w-md space-y-3 text-[14px] leading-7 text-cocoa">
            <p>At Selaire &amp; Co., we believe that meaningful partnerships begin with genuine connection.</p>
            <p>
              Whether you're a real estate professional interested in administrative transaction coordination services
              or simply looking to learn more about what we offer, we'd love to hear from you!
            </p>
            <p>
              We look forward to learning about your business, understanding your needs, and exploring how Selaire &amp;
              Co. may support you with care, organization, and intentionality.
            </p>
          </div>

          <div className="mt-8 border-t border-sand pt-6">
            <h3 className="font-body flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-espresso uppercase">
              <MapPin size={16} strokeWidth={1.5} className="text-caramel" /> Our Service Area
            </h3>
            <p className="font-body mt-3 text-[14px] leading-7 text-cocoa">
              Selaire &amp; Co. is preparing to serve residential real estate professionals throughout:
            </p>
            <p className="font-display mt-1 text-[17px] text-espresso">Washington, DC | Maryland | Northern Virginia</p>
            <p className="font-body mt-2 text-[14px] leading-7 text-cocoa">All services are provided fully remotely.</p>
            <p className="font-body mt-2 text-[12px] leading-6 text-cocoa">
              Service availability is subject to applicable real estate regulations and brokerage requirements.
            </p>
          </div>

          <div className="mt-6 border-t border-sand pt-6">
            <h3 className="font-body flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-espresso uppercase">
              <Mail size={16} strokeWidth={1.5} className="text-caramel" /> Email Us
            </h3>
            <p className="font-body mt-3 text-[14px] leading-7 text-cocoa">
              Prefer to reach out directly?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-espresso underline underline-offset-4 hover:text-caramel">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="font-body mt-1 text-[14px] leading-7 text-cocoa">We'd love to hear from you!</p>
          </div>

          <Photo
            src={IMAGES.contact}
            alt="Cozy desk with a laptop, a lit candle and coffee"
            className={r("mt-8 hidden h-64 w-full", "md:block")}
          />
        </div>

        <div className={r("self-start border border-sand bg-linen/60 p-6", "md:p-10")}>
          <div className="border-b border-latte/60 pb-5 text-center">
            <OliveBranch className="mx-auto h-10 w-7" />
            <p className="font-display mt-2 text-lg text-espresso">SELAIRE &amp; CO.</p>
            <p className="font-script text-2xl text-caramel">Grace in Every Detail.</p>
          </div>
          <h3 className="font-display mt-6 text-[24px] text-espresso">Send Us a Message</h3>
          <p className="font-body mb-5 mt-2 text-[13px] leading-6 text-cocoa">
            Have a question or interested in working together? Complete the inquiry form below, and we'll be in touch.
          </p>
          <InquiryForm idPrefix="contact" />
        </div>
      </div>
    </section>
  );
}
