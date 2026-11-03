import { ArrowRight } from "lucide-react";
import { Button, Eyebrow, Photo, useR } from "../components/ui.jsx";
import { IMAGES, PILLARS } from "../content.js";

export default function About({ onCta }) {
  const r = useR();
  return (
    <section id="about" className={r("scroll-mt-20 bg-cream py-0", "md:py-24")}>
      <div className={r("mx-auto grid max-w-7xl grid-cols-1", "md:grid-cols-12 md:items-center md:px-10")}>
        <div className={r("relative h-80", "md:col-span-6 md:h-[600px]")}>
          <Photo
            src={IMAGES.about}
            alt="Hands typing on a laptop at a warm wooden desk"
            className="h-full w-full"
          />
        </div>
        <div className={r("relative z-10 -mt-14 mx-5", "md:col-span-6 md:mx-0 md:-ml-24 md:mt-0")}>
          <div className={r("border border-sand/70 bg-cream p-8 shadow-[0_24px_60px_-30px_rgba(47,32,24,0.4)]", "md:p-14")}>
            <Eyebrow>About Selaire &amp; Co.</Eyebrow>
            <h2 className={r("font-display mt-5 text-[30px] leading-[1.18] text-espresso", "md:text-[40px]")}>
              Rooted in Grace.
              <br />
              <span className="italic">Guided by Purpose.</span>
            </h2>
            <div className="my-6 h-px w-14 bg-caramel" />
            <div className="font-body max-w-md space-y-4 text-[14px] leading-7 text-cocoa">
              <p>
                Selaire &amp; Co. is a remote transaction coordination business serving residential real estate agents
                across DC, Maryland and Virginia. Once your contract is signed, I step in to manage the paperwork,
                deadlines and communication that carry a file from contract to close.
              </p>
              <p>
                You take care of your clients. I'll take care of the details, with organized timelines, clear
                updates and a steady hand on every file, so you can focus on building relationships and growing your
                business.
              </p>
              <p>
                This work is guided by Colossians 3:23: whatever you do, work at it with all your heart. That means
                treating every file with care, every deadline with respect, and every client like they matter, because
                they do.
              </p>
            </div>
            <Button onClick={onCta} className="mt-8">
              Work With Me <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>

      <div className={r("mx-auto mt-14 grid max-w-7xl grid-cols-2 border-y border-sand/70", "md:mt-20 md:grid-cols-4 md:border md:mx-10 lg:mx-auto")}>
        {PILLARS.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`group flex flex-col items-center px-4 py-10 text-center ${
              i % 2 === 0 ? "border-r border-sand" : ""
            } ${i < 2 ? r("border-b border-sand", "md:border-b-0") : ""} ${i === 1 ? r("", "md:border-r") : ""}`}
          >
            <Icon size={34} strokeWidth={1} className="text-espresso transition-colors duration-300 group-hover:text-caramel" />
            <p className="font-body mt-5 max-w-[160px] text-[10px] font-medium leading-5 tracking-[0.2em] text-espresso uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
