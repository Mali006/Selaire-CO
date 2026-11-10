import { ArrowRight } from "lucide-react";
import { Button, Eyebrow, OliveBranch, Photo, useR } from "../components/ui.jsx";
import { ABOUT_INTRO, FOUNDER_STORY, IMAGES, SELAIRE_STORY } from "../content.js";

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
              {ABOUT_INTRO.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Button onClick={onCta} className="mt-8">
              Work With Me <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>

      <div className={r("mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-12 px-5 pb-16", "md:mt-24 md:grid-cols-12 md:gap-16 md:px-10 md:pb-0")}>
        <div className={r("bg-linen p-8", "md:sticky md:top-28 md:col-span-5 md:self-start md:p-10")}>
          <OliveBranch className="h-16 w-11" />
          <h3 className="font-display mt-5 text-[28px] leading-tight text-espresso">The Heart Behind Selaire</h3>
          <div className="font-body mt-5 space-y-4 text-[14px] leading-7 text-cocoa">
            {SELAIRE_STORY.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className={r("", "md:col-span-7")}>
          <div className={r("flex flex-col gap-6", "md:flex-row md:items-end md:gap-8")}>
            <Photo
              src={IMAGES.founder}
              alt="Brianna, founder of Selaire & Co., smiling outdoors"
              warm={false}
              className={r("aspect-[4/5] w-48 shrink-0 shadow-[0_20px_40px_-24px_rgba(47,32,24,0.5)]", "md:w-56")}
            />
            <div>
              <Eyebrow>Meet the Founder</Eyebrow>
              <h3 className={r("font-display mt-4 text-[28px] leading-tight text-espresso", "md:text-[34px]")}>
                Hi! I'm Brianna, the founder of Selaire &amp; Co.!
              </h3>
            </div>
          </div>
          <div className="font-body mt-6 space-y-4 text-[14px] leading-7 text-cocoa">
            {FOUNDER_STORY.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>And that is the heart behind our promise:</p>
          </div>
          <p className="font-script mt-4 text-4xl text-caramel">Grace in Every Detail.</p>
        </div>
      </div>
    </section>
  );
}
