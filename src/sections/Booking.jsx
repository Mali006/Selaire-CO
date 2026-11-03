import BookCallButton from "../components/BookCallButton.jsx";
import { Eyebrow, OliveBranch, Photo, useR } from "../components/ui.jsx";
import { IMAGES } from "../content.js";

const BOOKING_STEPS = [
  { n: "01", title: "Pick a time", body: "Choose an open slot on my Google Calendar booking page." },
  { n: "02", title: "Get confirmed", body: "A calendar invite with the meeting details lands in your inbox." },
  { n: "03", title: "Let's talk", body: "We'll walk through your files, your workflow and how I can help." },
];

export default function Booking({ onNav }) {
  const r = useR();
  return (
    <section id="booking" className="relative scroll-mt-20 overflow-hidden bg-espresso text-cream">
      <OliveBranch className="pointer-events-none absolute -left-8 -bottom-10 h-72 w-52 -rotate-12 opacity-[0.08]" stroke="#dcc7ab" />
      <div className={r("relative mx-auto grid max-w-7xl grid-cols-1", "md:grid-cols-2 md:items-stretch")}>
        <div className={r("relative h-64", "md:order-2 md:h-auto md:min-h-[520px]")}>
          <Photo src={IMAGES.booking} alt="Monthly planner open beside a cup of coffee" className="absolute inset-0 h-full w-full" />
        </div>
        <div className={r("px-6 py-14", "md:px-14 md:py-24 lg:px-20")}>
          <Eyebrow light>Book a Call</Eyebrow>
          <h2 className={r("font-display mt-4 text-[30px] leading-tight", "md:text-[40px]")}>
            Let's Find a Time to Talk.
          </h2>
          <p className="font-body mt-5 max-w-md text-[14px] leading-7 text-sand">
            Schedule a discovery call to talk through your business and see whether Selaire &amp; Co. is the
            right fit. Booking takes less than a minute.
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
          <BookCallButton variant="light" className="mt-10" onFallback={() => onNav("contact")}>
            Book on Google Calendar
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}
