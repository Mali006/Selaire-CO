import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button, Logo, useR } from "../components/ui.jsx";

export default function Navbar({ sections, active, onNav, onCta }) {
  const r = useR();
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    onNav(id);
  };
  return (
    <header className="sticky top-0 z-40 border-b border-sand/60 bg-cream/95 backdrop-blur">
      <div className={r("mx-auto flex h-16 max-w-7xl items-center justify-between px-5", "lg:h-20 lg:px-10")}>
        <button type="button" onClick={() => go("home")} aria-label="Selaire & Co. home">
          <Logo size="sm" />
        </button>

        <nav className={r("hidden", "lg:flex lg:items-center lg:gap-7")} aria-label="Primary">
          {sections.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={`font-body relative pb-1 text-[12px] tracking-wide transition-colors ${
                active === id ? "text-espresso" : "text-cocoa hover:text-espresso"
              }`}
            >
              {label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-caramel transition-transform duration-300 ${
                  active === id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Wrapped so "hidden" isn't overridden by the button's own inline-flex */}
          <div className={r("hidden", "lg:block")}>
            <Button onClick={onCta}>Work With Me</Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={r("p-2 text-espresso", "lg:hidden")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${r("", "lg:hidden")} overflow-hidden border-t border-sand/60 bg-cream transition-[max-height] duration-300 ${
          open ? "max-h-[560px]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {sections.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={`font-display border-b border-sand/50 py-3 text-left text-lg ${
                active === id ? "text-espresso" : "text-cocoa"
              }`}
            >
              {label}
            </button>
          ))}
          <Button onClick={() => { setOpen(false); onCta(); }} className="mt-5 justify-center">
            Work With Me <ArrowRight size={14} />
          </Button>
        </nav>
      </div>
    </header>
  );
}
