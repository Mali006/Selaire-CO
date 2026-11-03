import { OliveBranch, Photo, useR } from "../components/ui.jsx";
import { BENEFITS, IMAGES } from "../content.js";

export default function Benefits() {
  const r = useR();
  return (
    <section className="relative overflow-hidden bg-espresso text-cream">
      <Photo src={IMAGES.benefits} alt="" className="absolute inset-0 h-full w-full opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 to-espresso/90" />
      <OliveBranch className="pointer-events-none absolute -right-6 -top-10 h-72 w-52 rotate-12 opacity-[0.08]" stroke="#dcc7ab" />
      <div className={r("relative mx-auto max-w-6xl px-5 py-16", "md:px-10 md:py-24")}>
        <h2 className={r("font-display text-center text-[26px] leading-snug tracking-[0.12em]", "md:text-[34px]")}>
          A SMOOTHER PROCESS.
          <br />
          HAPPIER CLIENTS.
        </h2>
        <div className={r("mt-12 grid grid-cols-2 gap-y-10", "md:mt-16 md:grid-cols-4")}>
          {BENEFITS.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center px-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/20 transition-colors duration-300 group-hover:border-latte/70 group-hover:bg-cream/5">
                <Icon size={28} strokeWidth={1} />
              </div>
              <p className="font-body mt-5 max-w-[150px] text-[10px] font-medium leading-5 tracking-[0.2em] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
