import { ArrowRight } from "lucide-react";
import BookCallButton from "../components/BookCallButton.jsx";
import { Button, Eyebrow, Logo, Photo, useR } from "../components/ui.jsx";
import { IMAGES } from "../content.js";

export default function Hero({ onCta, onNav }) {
  const r = useR();
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      <Photo
        src={IMAGES.hero}
        alt="Wooden desk with a cup of coffee, an open journal and a laptop"
        className="absolute inset-0 h-full w-full"
        eager
      />
      {/* Cream wash keeps the dark copy crisp over the photo */}
      <div
        className={r(
          "absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/90 to-cream/40",
          "md:bg-gradient-to-r md:from-cream md:via-cream/85 md:to-transparent"
        )}
      />
      {/* Soft shade bottom-right so the script overlay reads on the photo */}
      <div className={r("hidden", "md:block absolute inset-0 bg-gradient-to-tl from-espresso/60 via-transparent to-transparent")} />

      <div className={r("relative mx-auto max-w-7xl px-5 pt-12 pb-40", "md:px-10 md:pt-20 md:pb-32 lg:pt-28 lg:pb-40")}>
        <div className="max-w-xl">
          <Logo size="lg" />
          <div className="my-8 h-px w-16 bg-caramel" />
          <Eyebrow>Real Estate Transaction Coordination</Eyebrow>
          <h1 className={r("font-display mt-5 text-[38px] leading-[1.08] text-espresso", "md:text-6xl lg:text-[64px]")}>
            Organized Support for a Smoother Closing.
          </h1>
          <p className={r("font-body mt-6 max-w-md text-[14px] leading-7 text-cocoa", "md:text-[15px]")}>
            Reliable remote residential transaction coordination for busy real estate agents in the DMV.
            Clear processes, consistent communication, and peace of mind from contract to close.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button onClick={onCta}>
              Work With Me <ArrowRight size={14} />
            </Button>
            <BookCallButton variant="outline" className="bg-cream/70 px-6 py-3" onFallback={() => onNav("contact")} />
          </div>
          <button
            type="button"
            onClick={() => onNav("services")}
            className="font-body mt-6 text-[11px] tracking-[0.2em] text-caramel uppercase underline-offset-4 hover:text-espresso hover:underline"
          >
            Explore Services
          </button>
        </div>
      </div>

      <div className={r("absolute bottom-6 right-5 text-right", "md:bottom-10 md:right-10")}>
        <p className={r("font-script text-4xl leading-none text-espresso", "md:text-5xl md:text-cream")}>
          Grace in Every Detail.
        </p>
        <p className={r("font-body mt-3 text-[10px] tracking-[0.35em] text-espresso", "md:text-cream")}>
          COLOSSIANS 3:23
        </p>
      </div>
    </section>
  );
}
