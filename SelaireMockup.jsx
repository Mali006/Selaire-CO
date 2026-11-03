import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Handshake,
  Heart,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  Quote,
  Smartphone,
  Users,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Selaire & Co. — single-file visual mockup                          */
/*  React + Tailwind CSS + lucide-react. All data is mocked.           */
/* ------------------------------------------------------------------ */

// Brand tokens (mirrored as Tailwind arbitrary values below)
// Ivory #FAF8F4 · Champagne #D9C7B0 · Taupe #A68B78 · Espresso #2E2520 · Sage #6B705A
// Taupe-deep #8A6E5B is used only for small text so it stays readable on Ivory.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMAGES = {
  hero: img("1501504905252-473c47e087f8", 2000), // laptop, notebook, mug, flowers
  branch: img("1466781783364-36c955e42a7f", 1200), // eucalyptus stems in glass vase
  room: img("1513694203232-719a280e022f", 1200), // calm room, plant, pampas
  about: img("1509042239860-f550ce710b93", 800), // coffee + greenery
  services: img("1506880018603-83d5b814b5a6", 800), // sunlit open book
  resources: img("1434030216411-0b793f4b4173", 800), // writing notes with mug
  contact: img("1517705008128-361805f42e86", 800), // chair, plant, mug
};

const NAV = ["Home", "About", "Services", "Reviews", "Process", "Resources", "Contact"];

const PILLARS = [
  { icon: FileText, label: "Accurate Document Management" },
  { icon: CalendarDays, label: "Timely Deadline Tracking" },
  { icon: Home, label: "Contract to Close Support" },
  { icon: Users, label: "A Reliable Partner" },
];

const BENEFITS = [
  { icon: MessageCircle, label: "Clear Communication" },
  { icon: ClipboardCheck, label: "Organized Timelines" },
  { icon: Handshake, label: "Reliable Support" },
  { icon: Heart, label: "A Better Client Experience" },
];

const STEPS = [
  {
    n: "01",
    title: "Contract Received",
    body:
      "Your ratified contract is reviewed, the file is opened, and a timeline of every key date goes out to all parties within 24 hours.",
  },
  {
    n: "02",
    title: "Under Contract",
    body:
      "Earnest money, inspections, appraisal and lender milestones are tracked remotely, with a status update in your inbox each week.",
  },
  {
    n: "03",
    title: "Pre-Closing",
    body:
      "Title, HOA or condo documents, the final walkthrough and closing disclosures are coordinated early, so nothing lands at the last minute.",
  },
  {
    n: "04",
    title: "Closing",
    body:
      "Settlement is confirmed, the file is compiled for broker compliance, and everything is archived neatly for your records.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Working with Selaire & Co. has been such a blessing. The process is always organized, communication is clear, and I can truly count on her to keep everything on track.",
    who: "Real Estate Agent, DMV",
  },
  {
    quote:
      "I closed four files in one month without a single missed deadline. Every party knew exactly what was next, and I got my evenings back.",
    who: "Buyer's Agent, Northern Virginia",
  },
  {
    quote:
      "Fully remote and still the most present coordinator I've worked with. My clients noticed the difference right away.",
    who: "Listing Agent, Montgomery County, MD",
  },
];

const PAGES = [
  {
    key: "About",
    eyebrow: "About Page",
    title: "Rooted in Grace. Guided by Purpose.",
    body: "The story behind Selaire & Co., the meaning of the olive branch, and the heart for this work.",
    cta: "Learn More",
    image: IMAGES.about,
    filled: false,
  },
  {
    key: "Services",
    eyebrow: "Services Page",
    title: "Services",
    body: "What's included in remote transaction coordination, what's not, and how I can support you.",
    cta: "View Services",
    image: IMAGES.services,
    filled: false,
  },
  {
    key: "Resources",
    eyebrow: "Resources Page",
    title: "Helpful Resources",
    body: "Links, checklists and documents for a smoother residential transaction in DC, MD and VA.",
    cta: "View Resources",
    image: IMAGES.resources,
    filled: false,
  },
  {
    key: "Contact",
    eyebrow: "Contact Page",
    title: "Let's Work Together",
    body: "Inquire about working with Selaire & Co. on your next listing or buyer file.",
    cta: "Send an Inquiry",
    image: IMAGES.contact,
    filled: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Preview mode: "mobile" forces the small-screen layout inside a     */
/*  phone frame; "desktop" lets normal Tailwind breakpoints apply.     */
/* ------------------------------------------------------------------ */

const ViewCtx = createContext({ forcedMobile: false });
const useR = () => {
  const { forcedMobile } = useContext(ViewCtx);
  // r(base, desktopOnly): desktopOnly holds md:/lg: classes, dropped in forced-mobile preview
  return (base, desktopOnly = "") => (forcedMobile ? base : `${base} ${desktopOnly}`);
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600&family=Great+Vibes&display=swap');
      .ff-display { font-family: 'Playfair Display', Georgia, serif; }
      .ff-body    { font-family: 'Montserrat', system-ui, sans-serif; }
      .ff-script  { font-family: 'Great Vibes', 'Brush Script MT', cursive; }
      .warm-photo { filter: sepia(0.22) saturate(0.85) brightness(1.02); }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { scrollbar-width: none; }
    `}</style>
  );
}

function OliveBranch({ className = "", stroke = "#A68B78" }) {
  const leaves = [
    [20, 50, -140], [21, 50, -40],
    [21, 40, -150], [22, 39, -30],
    [22, 29, -145], [23, 28, -35],
    [24, 18, -140], [24, 17, -40],
    [25, 8, -95],
  ];
  return (
    <svg viewBox="0 0 44 62" fill="none" className={className} aria-hidden="true">
      <path d="M19 60 C19.5 44 21.5 26 25 6" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
      {leaves.map(([x, y, a], i) => (
        <path
          key={i}
          d="M0 0 C3 -3.2 9 -3.4 13 0 C9 3.4 3 3.2 0 0Z"
          transform={`translate(${x} ${y}) rotate(${a})`}
          stroke={stroke}
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

function Logo({ inverse = false, compact = false }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <OliveBranch className={compact ? "h-7 w-5" : "h-9 w-6"} stroke={inverse ? "#D9C7B0" : "#A68B78"} />
      <div className="leading-none">
        <div
          className={`ff-display tracking-tight ${compact ? "text-lg" : "text-xl"} ${
            inverse ? "text-[#FAF8F4]" : "text-[#2E2520]"
          }`}
        >
          SELAIRE &amp; CO.
        </div>
        {!compact && (
          <div
            className={`ff-body mt-1 text-[8px] tracking-[0.28em] ${
              inverse ? "text-[#D9C7B0]" : "text-[#8A6E5B]"
            }`}
          >
            TRANSACTION COORDINATION
          </div>
        )}
      </div>
    </div>
  );
}

function Button({ children, variant = "solid", onClick, className = "", type = "button" }) {
  const base =
    "ff-body inline-flex items-center gap-2 whitespace-nowrap text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A68B78] focus-visible:ring-offset-2";
  const styles = {
    solid: "bg-[#2E2520] text-[#FAF8F4] px-6 py-3 hover:bg-[#4A3C33]",
    outline: "border border-[#A68B78] text-[#2E2520] px-5 py-2.5 hover:bg-[#2E2520] hover:text-[#FAF8F4] hover:border-[#2E2520]",
    ghost: "text-[#2E2520] hover:text-[#6B705A]",
    light: "bg-[#FAF8F4] text-[#2E2520] px-6 py-3 hover:bg-[#D9C7B0]",
  };
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}

function Eyebrow({ children, className = "", light = false }) {
  return (
    <p
      className={`ff-body text-[10px] font-medium tracking-[0.3em] uppercase ${
        light ? "text-[#D9C7B0]" : "text-[#8A6E5B]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-[#D9C7B0] via-[#E9DFD1] to-[#A68B78] ${className}`}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`warm-photo object-cover ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */

function Navbar({ active, onNav, onCta }) {
  const r = useR();
  const [open, setOpen] = useState(false);
  const go = (item) => {
    setOpen(false);
    onNav(item);
  };
  return (
    <header className="sticky top-0 z-40 border-b border-[#D9C7B0]/60 bg-[#FAF8F4]/95 backdrop-blur">
      <div className={r("mx-auto flex h-16 max-w-7xl items-center justify-between px-5", "lg:h-20 lg:px-10")}>
        <button type="button" onClick={() => go("Home")} aria-label="Selaire & Co. home">
          <Logo compact />
        </button>

        <nav className={r("hidden", "lg:flex lg:items-center lg:gap-7")} aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => go(item)}
              className={`ff-body relative pb-1 text-[12px] tracking-wide transition-colors ${
                active === item ? "text-[#2E2520]" : "text-[#6E5E54] hover:text-[#2E2520]"
              }`}
            >
              {item}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-px bg-[#A68B78] transition-transform duration-300 origin-left ${
                  active === item ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button onClick={onCta} className={r("hidden", "lg:inline-flex")}>
            Work With Me
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={r("p-2 text-[#2E2520]", "lg:hidden")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${r("", "lg:hidden")} overflow-hidden border-t border-[#D9C7B0]/60 bg-[#FAF8F4] transition-[max-height] duration-300 ${
          open ? "max-h-[520px]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => go(item)}
              className={`ff-display border-b border-[#D9C7B0]/50 py-3 text-left text-lg ${
                active === item ? "text-[#2E2520]" : "text-[#6E5E54]"
              }`}
            >
              {item}
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

function Hero({ onCta }) {
  const r = useR();
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      <Photo
        src={IMAGES.hero}
        alt="Sunlit wooden desk with an open notebook, laptop and coffee mug"
        className="absolute inset-0 h-full w-full"
      />
      {/* Left-to-right ivory wash keeps the dark copy crisp */}
      <div
        className={r(
          "absolute inset-0 bg-gradient-to-b from-[#FAF8F4]/95 via-[#FAF8F4]/85 to-[#FAF8F4]/30",
          "md:bg-gradient-to-r md:from-[#FAF8F4] md:via-[#FAF8F4]/85 md:to-transparent"
        )}
      />
      {/* Soft shade bottom-right so the script overlay reads on the photo */}
      <div className={r("hidden", "md:block absolute inset-0 bg-gradient-to-tl from-[#2E2520]/55 via-transparent to-transparent")} />

      <div className={r("relative mx-auto max-w-7xl px-5 pt-14 pb-40", "md:px-10 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40")}>
        <div className="max-w-xl">
          <Eyebrow>Real Estate Transaction Coordination</Eyebrow>
          <h1 className={r("ff-display mt-5 text-[40px] leading-[1.08] text-[#2E2520]", "md:text-6xl lg:text-[68px]")}>
            Organized Support for a Smoother Closing.
          </h1>
          <p className={r("ff-body mt-6 max-w-md text-[14px] leading-7 text-[#4A3E37]", "md:text-[15px]")}>
            Reliable remote residential transaction coordination for busy real estate agents in the DMV.
            Clear processes, consistent communication, and peace of mind from contract to close.
          </p>
          <Button onClick={onCta} className="mt-9">
            Work With Me <ArrowRight size={14} />
          </Button>
        </div>
      </div>

      <div className={r("absolute bottom-6 right-5 text-right", "md:bottom-10 md:right-10")}>
        <p className={r("ff-script text-4xl leading-none text-[#2E2520]", "md:text-5xl md:text-[#FAF8F4]")}>
          Grace in Every Detail.
        </p>
        <p className={r("ff-body mt-3 text-[10px] tracking-[0.35em] text-[#2E2520]", "md:text-[#FAF8F4]")}>
          COLOSSIANS 3:23
        </p>
      </div>
    </section>
  );
}

function PillarStrip() {
  const r = useR();
  return (
    <section className="border-b border-[#D9C7B0]/70 bg-[#FAF8F4]">
      <div className={r("mx-auto grid max-w-7xl grid-cols-2", "md:grid-cols-4")}>
        {PILLARS.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`group flex flex-col items-center px-4 py-10 text-center ${
              i % 2 === 0 ? "border-r border-[#D9C7B0]" : ""
            } ${i < 2 ? r("border-b border-[#D9C7B0]", "md:border-b-0") : ""} ${
              i === 1 ? r("", "md:border-r") : ""
            }`}
          >
            <Icon size={34} strokeWidth={1} className="text-[#2E2520] transition-colors duration-300 group-hover:text-[#6B705A]" />
            <p className="ff-body mt-5 max-w-[160px] text-[10px] font-medium leading-5 tracking-[0.2em] text-[#2E2520] uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueProp({ onNav }) {
  const r = useR();
  return (
    <section id="about" className={r("scroll-mt-20 bg-[#FAF8F4] py-0", "md:py-20")}>
      <div className={r("mx-auto grid max-w-7xl grid-cols-1", "md:grid-cols-12 md:items-center md:px-10")}>
        <div className={r("relative h-80", "md:col-span-6 md:h-[560px]")}>
          <Photo
            src={IMAGES.branch}
            alt="Eucalyptus branches in a clear glass vase"
            className="h-full w-full"
          />
        </div>
        <div className={r("relative z-10 -mt-14 mx-5", "md:col-span-6 md:mx-0 md:-ml-24 md:mt-0")}>
          <div className={r("border border-[#D9C7B0]/70 bg-[#FAF8F4] p-8 shadow-[0_24px_60px_-30px_rgba(46,37,32,0.35)]", "md:p-14")}>
            <Eyebrow>Focused on What Matters Most</Eyebrow>
            <h2 className={r("ff-display mt-5 text-[30px] leading-[1.18] text-[#2E2520]", "md:text-[42px]")}>
              You take care of your clients.
              <br />
              <span className="italic">I'll take care of the details.</span>
            </h2>
            <div className="my-6 h-px w-14 bg-[#A68B78]" />
            <p className="ff-body max-w-md text-[14px] leading-7 text-[#4A3E37]">
              Selaire &amp; Co. provides dependable, detail-oriented remote transaction coordination for residential
              agents across DC, Maryland and Virginia, so you can focus on building relationships and growing your
              business.
            </p>
            <Button onClick={() => onNav("Services")} className="mt-8">
              Learn More <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function DarkBanner() {
  const r = useR();
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-[#2E2520] text-[#FAF8F4]">
      <OliveBranch className="pointer-events-none absolute -right-6 -top-10 h-72 w-52 opacity-[0.08] rotate-12" stroke="#D9C7B0" />
      <div className={r("relative mx-auto max-w-6xl px-5 py-16", "md:px-10 md:py-24")}>
        <h2 className={r("ff-display text-center text-[26px] leading-snug tracking-[0.12em]", "md:text-[34px]")}>
          A SMOOTHER PROCESS.
          <br />
          HAPPIER CLIENTS.
        </h2>
        <div className={r("mt-12 grid grid-cols-2 gap-y-10", "md:mt-16 md:grid-cols-4")}>
          {BENEFITS.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center px-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#FAF8F4]/15 transition-colors duration-300 group-hover:border-[#D9C7B0]/60 group-hover:bg-[#FAF8F4]/5">
                <Icon size={28} strokeWidth={1} />
              </div>
              <p className="ff-body mt-5 max-w-[150px] text-[10px] font-medium leading-5 tracking-[0.2em] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const r = useR();
  const [step, setStep] = useState(0);
  const [full, setFull] = useState(false);
  return (
    <section id="process" className={r("scroll-mt-20 bg-[#FAF8F4] px-5 py-16", "md:px-10 md:py-24")}>
      <div className="mx-auto max-w-5xl text-center">
        <Eyebrow>Process Page</Eyebrow>
        <h2 className={r("ff-display mt-4 text-[30px] text-[#2E2520]", "md:text-[40px]")}>
          From Contract to Close, Step by Step.
        </h2>

        {/* Stepper */}
        <div className={r("relative mt-12", "md:mt-16")}>
          <div className="absolute left-[12.5%] right-[12.5%] top-6 h-px bg-[#D9C7B0]" aria-hidden="true" />
          <div
            className="absolute left-[12.5%] top-6 h-px bg-[#A68B78] transition-all duration-500"
            style={{ width: `${(step / 3) * 75}%` }}
            aria-hidden="true"
          />
        <ol className={r("relative grid grid-cols-4 gap-2", "md:gap-6")}>
          {STEPS.map((s, i) => {
            const done = i <= step;
            return (
              <li key={s.n} className="relative flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setStep(i)}
                  aria-current={i === step ? "step" : undefined}
                  className={`ff-display relative z-10 flex h-12 w-12 items-center justify-center rounded-full border text-[17px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A68B78] focus-visible:ring-offset-2 ${
                    done
                      ? "border-[#A68B78] bg-[#D9C7B0] text-[#2E2520]"
                      : "border-[#D9C7B0] bg-[#FAF8F4] text-[#8A6E5B] hover:border-[#A68B78]"
                  } ${i === step ? "scale-110 shadow-[0_0_0_6px_rgba(217,199,176,0.45)]" : ""}`}
                >
                  {s.n}
                </button>
                <span className={r("ff-body mt-4 text-[10px] leading-4 text-[#4A3E37]", "md:text-[12px] md:tracking-wide")}>
                  {s.title}
                </span>
              </li>
            );
          })}
        </ol>
        </div>

        {/* Active step detail */}
        <div className={r("mx-auto mt-10 max-w-2xl border border-[#D9C7B0] bg-white/40 p-6 text-left", "md:p-8")}>
          <div className="flex items-baseline gap-4">
            <span className="ff-display text-3xl italic text-[#A68B78]">{STEPS[step].n}</span>
            <h3 className="ff-display text-xl text-[#2E2520]">{STEPS[step].title}</h3>
          </div>
          <p className="ff-body mt-3 text-[14px] leading-7 text-[#4A3E37]">{STEPS[step].body}</p>
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="ff-body inline-flex items-center gap-1 text-[11px] tracking-[0.15em] text-[#2E2520] uppercase disabled:opacity-30"
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(3, s + 1))}
              disabled={step === 3}
              className="ff-body inline-flex items-center gap-1 text-[11px] tracking-[0.15em] text-[#2E2520] uppercase disabled:opacity-30"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {full && (
          <ul className={r("mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 text-left", "md:grid-cols-2")}>
            {[
              "Opening email & key-date timeline to all parties",
              "Earnest money deposit confirmation",
              "Inspection & response deadlines",
              "Appraisal and loan commitment tracking",
              "HOA / condo document delivery",
              "Title, survey & settlement scheduling",
              "Final walkthrough coordination",
              "Broker compliance file & digital archive",
            ].map((t) => (
              <li key={t} className="ff-body flex items-start gap-3 bg-[#D9C7B0]/25 px-4 py-3 text-[13px] text-[#2E2520]">
                <Check size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#6B705A]" />
                {t}
              </li>
            ))}
          </ul>
        )}

        <Button variant="outline" onClick={() => setFull((f) => !f)} className="mt-10">
          {full ? "Hide the Full Process" : "See the Full Process"} <ArrowRight size={14} className={full ? "-rotate-90" : ""} />
        </Button>
      </div>
    </section>
  );
}

function Testimonial() {
  const r = useR();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section id="reviews" className={r("scroll-mt-20 bg-[#F3EEE6]", "md:px-10 md:py-20")}>
      <div className={r("mx-auto grid max-w-7xl grid-cols-1 bg-[#FAF8F4]", "md:grid-cols-2")}>
        <Photo src={IMAGES.room} alt="Calm sunlit room with a plant and dried pampas grass" className={r("h-72 w-full", "md:h-full md:min-h-[440px]")} />
        <figure className={r("flex flex-col justify-center px-7 py-12", "md:px-16")}>
          <Quote size={34} strokeWidth={1} className="text-[#A68B78]" aria-hidden="true" />
          <blockquote
            key={i}
            className={r("ff-display mt-5 text-[21px] italic leading-[1.55] text-[#2E2520]", "md:text-[24px]")}
            style={{ animation: "fadeIn .6s ease" }}
          >
            “{t.quote}”
          </blockquote>
          <figcaption className="ff-body mt-7 flex items-center gap-3 text-[10px] font-medium tracking-[0.25em] text-[#8A6E5B] uppercase">
            <span className="h-px w-8 bg-[#A68B78]" /> {t.who}
          </figcaption>
          <div className="mt-8 flex gap-2" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((_, n) => (
              <button
                key={n}
                type="button"
                role="tab"
                aria-selected={n === i}
                aria-label={`Show testimonial ${n + 1}`}
                onClick={() => setI(n)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  n === i ? "w-8 bg-[#2E2520]" : "w-3 bg-[#D9C7B0] hover:bg-[#A68B78]"
                }`}
              />
            ))}
          </div>
        </figure>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}

function PagePreviews({ onCta }) {
  const r = useR();
  return (
    <section id="resources" className={r("scroll-mt-20 bg-[#FAF8F4] px-5 py-16", "md:px-10 md:py-24")}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Eyebrow>Explore Selaire &amp; Co.</Eyebrow>
          <h2 className={r("ff-display mt-4 text-[30px] text-[#2E2520]", "md:text-[40px]")}>Everything in Its Place.</h2>
        </div>
        <div className={r("mt-12 grid grid-cols-1 gap-6", "md:grid-cols-2 md:gap-8")}>
          {PAGES.map((p) => (
            <article
              key={p.key}
              id={p.key === "Contact" ? "contact" : undefined}
              className={`group grid scroll-mt-24 grid-cols-5 overflow-hidden border transition-shadow duration-300 hover:shadow-[0_20px_50px_-28px_rgba(46,37,32,0.45)] ${
                p.filled ? "border-[#2E2520] bg-[#2E2520]" : "border-[#D9C7B0] bg-[#FAF8F4]"
              }`}
            >
              <div className="col-span-2 overflow-hidden">
                <Photo
                  src={p.image}
                  alt=""
                  className="h-full min-h-[220px] w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className={r("col-span-3 flex flex-col justify-center p-5", "md:p-8")}>
                <Eyebrow light={p.filled}>{p.eyebrow}</Eyebrow>
                <h3
                  className={r(
                    `ff-display mt-3 text-[20px] leading-snug ${p.filled ? "text-[#FAF8F4]" : "text-[#2E2520]"}`,
                    "md:text-[24px]"
                  )}
                >
                  {p.title}
                </h3>
                <p className={`ff-body mt-3 text-[13px] leading-6 ${p.filled ? "text-[#D9C7B0]" : "text-[#4A3E37]"}`}>
                  {p.body}
                </p>
                <div className="mt-5">
                  {p.filled ? (
                    <Button variant="light" onClick={onCta} className="px-4 py-2.5 text-[10px]">
                      {p.cta} <Mail size={13} />
                    </Button>
                  ) : (
                    <Button variant="outline" className="px-4 py-2 text-[10px]">
                      {p.cta} <ArrowRight size={13} />
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  const r = useR();
  return (
    <footer className="bg-[#2E2520] text-[#D9C7B0]">
      <div className={r("mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-14 text-center", "md:flex-row md:justify-between md:px-10 md:text-left")}>
        <div>
          <Logo inverse />
          <p className="ff-script mt-4 text-3xl text-[#FAF8F4]">Grace in Every Detail.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3" aria-label="Footer">
          {NAV.map((n) => (
            <button key={n} type="button" onClick={() => onNav(n)} className="ff-body text-[12px] tracking-wide hover:text-[#FAF8F4]">
              {n}
            </button>
          ))}
        </nav>
      </div>
      <div className="border-t border-[#FAF8F4]/10">
        <p className="ff-body mx-auto max-w-7xl px-5 py-5 text-center text-[10px] tracking-[0.25em] text-[#A68B78] uppercase">
          © 2026 Selaire &amp; Co. · Remote Residential Transaction Coordination · DC · MD · VA
        </p>
      </div>
    </footer>
  );
}

function InquiryModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;

  const field =
    "ff-body w-full border border-[#D9C7B0] bg-[#FAF8F4] px-4 py-3 text-[13px] text-[#2E2520] placeholder:text-[#A68B78] focus:border-[#A68B78] focus:outline-none";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="inq-title">
      <div className="absolute inset-0 bg-[#2E2520]/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-[#FAF8F4] p-8 shadow-2xl">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 p-1 text-[#2E2520]" aria-label="Close">
          <X size={20} strokeWidth={1.5} />
        </button>
        {sent ? (
          <div className="py-10 text-center">
            <OliveBranch className="mx-auto h-16 w-11" />
            <h3 className="ff-display mt-6 text-3xl text-[#2E2520]">Thank you.</h3>
            <p className="ff-body mx-auto mt-3 max-w-xs text-[14px] leading-7 text-[#4A3E37]">
              Your inquiry is on its way. Expect a reply within one business day.
            </p>
            <p className="ff-script mt-6 text-3xl text-[#A68B78]">Grace in Every Detail.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Eyebrow>Contact Page</Eyebrow>
            <h3 id="inq-title" className="ff-display mt-3 text-3xl text-[#2E2520]">
              Let's Work Together
            </h3>
            <p className="ff-body mt-2 text-[13px] leading-6 text-[#4A3E37]">
              Tell me a little about your business. This is a mockup, so nothing is actually sent.
            </p>
            <div className="mt-6 space-y-3">
              <input required className={field} placeholder="Full name" aria-label="Full name" />
              <input required type="email" className={field} placeholder="Email address" aria-label="Email address" />
              <input className={field} placeholder="Brokerage" aria-label="Brokerage" />
              <select className={field} defaultValue="" aria-label="Transactions per month">
                <option value="" disabled>
                  Transactions per month
                </option>
                <option>1–2</option>
                <option>3–5</option>
                <option>6–10</option>
                <option>10+</option>
              </select>
              <textarea rows={3} className={field} placeholder="How can I support you?" aria-label="Message" />
            </div>
            <Button type="submit" className="mt-6 w-full justify-center">
              Send Inquiry <ArrowRight size={14} />
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Site + preview shell                                               */
/* ------------------------------------------------------------------ */

const SECTION_FOR = {
  Home: "home",
  About: "about",
  Services: "services",
  Reviews: "reviews",
  Process: "process",
  Resources: "resources",
  Contact: "contact",
};

function Site({ onCta, rootRef }) {
  const [active, setActive] = useState("Home");

  const onNav = (item) => {
    setActive(item);
    const el = rootRef.current?.querySelector(`#${SECTION_FOR[item]}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ff-body bg-[#FAF8F4] text-[#2E2520] antialiased">
      <Navbar active={active} onNav={onNav} onCta={onCta} />
      <main>
        <Hero onCta={onCta} />
        <PillarStrip />
        <ValueProp onNav={onNav} />
        <DarkBanner />
        <Process />
        <Testimonial />
        <PagePreviews onCta={onCta} />
      </main>
      <Footer onNav={onNav} />
    </div>
  );
}

export default function SelaireMockup() {
  const [view, setView] = useState("desktop");
  const [inquiry, setInquiry] = useState(false);
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const openInquiry = () => setInquiry(true);

  return (
    <ViewCtx.Provider value={{ forcedMobile: view === "mobile" }}>
      <GlobalStyles />

      {view === "desktop" ? (
        <div ref={desktopRef}>
          <Site onCta={openInquiry} rootRef={desktopRef} />
        </div>
      ) : (
        <div className="ff-body flex min-h-screen flex-col items-center bg-[#E9DFD1] px-4 pb-28 pt-10">
          <Eyebrow className="mb-6">Mobile View (Homepage)</Eyebrow>
          <div className="relative rounded-[48px] bg-[#1C1612] p-3 shadow-[0_40px_80px_-30px_rgba(46,37,32,0.6)]">
            <div className="absolute left-1/2 top-3 z-50 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#1C1612]" aria-hidden="true" />
            <div
              ref={mobileRef}
              className="no-scrollbar relative h-[780px] max-h-[calc(100vh-180px)] w-[375px] max-w-[calc(100vw-56px)] overflow-y-auto overflow-x-hidden rounded-[38px] bg-[#FAF8F4]"
            >
              <div className="h-6 bg-[#FAF8F4]" aria-hidden="true" />
              <Site onCta={openInquiry} rootRef={mobileRef} />
            </div>
          </div>
        </div>
      )}

      {/* Preview toggle */}
      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-[#D9C7B0] bg-[#FAF8F4]/95 p-1 shadow-lg backdrop-blur">
        {[
          { key: "desktop", label: "Desktop", icon: Monitor },
          { key: "mobile", label: "Mobile", icon: Smartphone },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setView(key);
              window.scrollTo({ top: 0 });
            }}
            aria-pressed={view === key}
            className={`ff-body inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
              view === key ? "bg-[#2E2520] text-[#FAF8F4]" : "text-[#2E2520] hover:bg-[#D9C7B0]/40"
            }`}
          >
            <Icon size={14} strokeWidth={1.5} /> {label}
          </button>
        ))}
      </div>

      <InquiryModal open={inquiry} onClose={() => setInquiry(false)} />
    </ViewCtx.Provider>
  );
}
