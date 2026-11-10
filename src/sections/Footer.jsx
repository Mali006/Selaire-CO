import { Logo, useR } from "../components/ui.jsx";
import { CONTACT_EMAIL } from "../config.js";

export default function Footer({ sections, onNav }) {
  const r = useR();
  return (
    <footer className="bg-espresso text-sand">
      <div className={r("mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-14 text-center", "md:flex-row md:justify-between md:px-10 md:text-left")}>
        <div>
          <Logo inverse />
          <p className="font-script mt-4 text-3xl text-cream">Grace in Every Detail.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-body mt-3 inline-block text-[12px] tracking-wide hover:text-cream">
            {CONTACT_EMAIL}
          </a>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3" aria-label="Footer">
          {sections.map(({ label, id }) => (
            <button key={id} type="button" onClick={() => onNav(id)} className="font-body text-[12px] tracking-wide hover:text-cream">
              {label}
            </button>
          ))}
        </nav>
      </div>
      <div className="border-t border-cream/10">
        <p className="font-body mx-auto max-w-3xl px-5 pt-5 text-center text-[11px] leading-5 text-sand/80">
          Services are administrative in nature and subject to applicable licensing requirements and supervising
          brokerage approval. Selaire &amp; Co. does not provide legal advice, contract negotiation, or real estate
          brokerage representation.
        </p>
        <p className="font-body mx-auto max-w-7xl px-5 py-5 text-center text-[10px] tracking-[0.25em] text-latte uppercase">
          © {new Date().getFullYear()} Selaire &amp; Co. · Remote Residential Transaction Coordination · Washington, DC · Maryland · Northern Virginia
        </p>
      </div>
    </footer>
  );
}
