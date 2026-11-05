import { Eyebrow, OliveBranch, Photo, useR } from "../components/ui.jsx";
import { IMAGES, VALUES } from "../content.js";

export default function Values() {
  const r = useR();
  return (
    <section className="relative overflow-hidden bg-espresso text-cream">
      <Photo src={IMAGES.values} alt="" className="absolute inset-0 h-full w-full opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 to-espresso/90" />
      <OliveBranch className="pointer-events-none absolute -right-6 -top-10 h-72 w-52 rotate-12 opacity-[0.08]" stroke="#dcc7ab" />
      <div className={r("relative mx-auto max-w-6xl px-5 py-16", "md:px-10 md:py-24")}>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow light>Our Approach</Eyebrow>
          <h2 className={r("font-display mt-4 text-[26px] leading-snug", "md:text-[36px]")}>
            Thoughtful Organization. Clear Communication. Grace in Every Detail.
          </h2>
          <p className="font-body mt-5 text-[14px] leading-7 text-sand">
            We believe that dependable support starts with a commitment to excellence, integrity, and genuine care.
          </p>
        </div>

        <h3 className="font-body mt-14 text-center text-[11px] font-medium tracking-[0.25em] text-sand uppercase">
          Our Values
        </h3>
        <div className={r("mt-8 grid grid-cols-1 gap-10", "md:grid-cols-2 lg:grid-cols-4 lg:gap-8")}>
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 group-hover:border-latte/70 group-hover:bg-cream/5">
                <Icon size={28} strokeWidth={1} />
              </div>
              <h4 className="font-display mt-5 text-[20px]">{title}</h4>
              <p className="font-body mt-3 max-w-xs text-[13px] leading-6 text-sand">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
