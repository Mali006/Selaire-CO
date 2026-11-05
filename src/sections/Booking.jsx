import { ExternalLink } from "lucide-react";
import BookCallButton from "../components/BookCallButton.jsx";
import { Eyebrow, OliveBranch, Photo, useR } from "../components/ui.jsx";
import { BOOKING_EMBED_SRC, BOOKING_LINK } from "../booking.js";
import { IMAGES } from "../content.js";

const BOOKING_STEPS = [
  { n: "01", title: "Pick a time", body: "Choose an open slot on my Google Calendar booking page." },
  { n: "02", title: "Get confirmed", body: "A calendar invite with the meeting details lands in your inbox." },
  { n: "03", title: "Let's talk", body: "Meet me, learn about my services, and see whether I'm a good fit." },
];

function BookingCalendar() {
  const r = useR();
  return (
    <div className={r("px-4 pb-14", "md:px-10 md:py-16 lg:pr-16")}>
      <div className="bg-cream p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
        <iframe
          src={BOOKING_EMBED_SRC}
          title="Book an introductory call with Selaire & Co. on Google Calendar"
          loading="lazy"
          className={r("block h-[680px] w-full border-0", "md:h-[720px]")}
        />
      </div>
      <a
        href={BOOKING_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body mt-4 inline-flex items-center gap-2 text-[12px] text-sand underline-offset-4 hover:text-cream hover:underline"
      >
        Calendar not loading? Open the booking page in a new tab <ExternalLink size={13} strokeWidth={1.5} />
      </a>
    </div>
  );
}

export default function Booking({ onNav }) {
  const r = useR();
  const embedded = Boolean(BOOKING_EMBED_SRC);
  return (
    <section id="booking" className="relative scroll-mt-20 overflow-hidden bg-espresso text-cream">
      <OliveBranch className="pointer-events-none absolute -left-8 -bottom-10 h-72 w-52 -rotate-12 opacity-[0.08]" stroke="#dcc7ab" />
      <div className={r("relative mx-auto grid max-w-7xl grid-cols-1", "md:grid-cols-2 md:items-stretch")}>
        {embedded ? (
          <div className={r("", "md:order-2")}>
            <BookingCalendar />
          </div>
        ) : (
          <div className={r("relative h-64", "md:order-2 md:h-auto md:min-h-[520px]")}>
            <Photo src={IMAGES.booking} alt="Monthly planner open beside a cup of coffee" className="absolute inset-0 h-full w-full" />
          </div>
        )}
        <div className={r(`px-6 ${embedded ? "pt-14 pb-10" : "py-14"}`, "md:px-14 md:py-24 lg:px-20")}>
          <Eyebrow light>Book a Call</Eyebrow>
          <h2 className={r("font-display mt-4 text-[30px] leading-tight", "md:text-[40px]")}>
            Let's Find a Time to Talk.
          </h2>
          <p className="font-body mt-5 max-w-md text-[14px] leading-7 text-sand">
            Book a complimentary 15-minute introductory call to meet me, learn about my services, and determine
            whether Selaire &amp; Co. is a good fit for you.
          </p>
          <ol className="mt-9 space-y-6">
            {BOOKING_STEPS.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="font-display text-2xl italic text-latte">{s.n}</span>
                <div>
                  <p className="font-body text-[11px] font-medium tracking-[0.2em] uppercase">{s.title}</p>
                  <p className="font-body mt-1 text-[13px] leading-6 text-sand">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          {!embedded && (
            <BookCallButton variant="light" className="mt-10" onNav={onNav}>
              Book on Google Calendar
            </BookCallButton>
          )}
        </div>
      </div>
    </section>
  );
}
