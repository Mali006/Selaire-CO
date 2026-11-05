import { useContext, useEffect, useRef, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";
import InquiryModal from "./components/InquiryModal.jsx";
import { Eyebrow, ViewCtx } from "./components/ui.jsx";
import { REVIEWS, SECTIONS } from "./content.js";
import About from "./sections/About.jsx";
import Booking from "./sections/Booking.jsx";
import Contact from "./sections/Contact.jsx";
import Faq from "./sections/Faq.jsx";
import Footer from "./sections/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";
import Process from "./sections/Process.jsx";
import Reviews from "./sections/Reviews.jsx";
import Services from "./sections/Services.jsx";
import Values from "./sections/Values.jsx";

/* ------------------------------------------------------------------ */
/*  Selaire & Co. — React + Tailwind CSS + lucide-react                */
/* ------------------------------------------------------------------ */

// The Reviews link only appears once there are real reviews to show.
const NAV_SECTIONS = SECTIONS.filter((s) => s.id !== "reviews" || REVIEWS.length > 0);

function Site({ onCta, rootRef }) {
  const { forcedMobile } = useContext(ViewCtx);
  const [active, setActive] = useState("home");

  // Keep the nav underline on whichever section is in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { root: forcedMobile ? rootRef.current : null, rootMargin: "-45% 0px -50% 0px" }
    );
    rootRef.current?.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [forcedMobile, rootRef]);

  const onNav = (id) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = rootRef.current?.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="font-body bg-cream text-espresso antialiased">
      <Navbar sections={NAV_SECTIONS} active={active} onNav={onNav} onCta={onCta} />
      <main>
        <Hero onCta={onCta} onNav={onNav} />
        <Services />
        <Booking onNav={onNav} />
        <About onCta={onCta} />
        <Values />
        <Process onCta={onCta} onNav={onNav} />
        <Reviews reviews={REVIEWS} />
        <Faq />
        <Contact />
      </main>
      <Footer sections={NAV_SECTIONS} onNav={onNav} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dev-only preview toggle: renders the site inside a phone frame.    */
/*  Not included in production builds.                                 */
/* ------------------------------------------------------------------ */

function PreviewToggle({ view, setView }) {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-sand bg-cream/95 p-1 shadow-lg backdrop-blur">
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
          className={`font-body inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
            view === key ? "bg-espresso text-cream" : "text-espresso hover:bg-sand/40"
          }`}
        >
          <Icon size={14} strokeWidth={1.5} /> {label}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("desktop");
  const [inquiry, setInquiry] = useState(false);
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const openInquiry = () => setInquiry(true);

  return (
    <ViewCtx.Provider value={{ forcedMobile: view === "mobile" }}>
      {view === "desktop" ? (
        <div ref={desktopRef}>
          <Site onCta={openInquiry} rootRef={desktopRef} />
        </div>
      ) : (
        <div className="font-body flex min-h-screen flex-col items-center bg-linen px-4 pb-28 pt-10">
          <Eyebrow className="mb-6">Mobile View (Homepage)</Eyebrow>
          <div className="relative rounded-[48px] bg-[#1c1410] p-3 shadow-[0_40px_80px_-30px_rgba(47,32,24,0.6)]">
            <div className="absolute left-1/2 top-3 z-50 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#1c1410]" aria-hidden="true" />
            <div
              ref={mobileRef}
              className="no-scrollbar relative h-[780px] max-h-[calc(100vh-180px)] w-[375px] max-w-[calc(100vw-56px)] overflow-y-auto overflow-x-hidden rounded-[38px] bg-cream"
            >
              <div className="h-6 bg-cream" aria-hidden="true" />
              <Site onCta={openInquiry} rootRef={mobileRef} />
            </div>
          </div>
        </div>
      )}

      {import.meta.env.DEV && <PreviewToggle view={view} setView={setView} />}

      <InquiryModal open={inquiry} onClose={() => setInquiry(false)} />
    </ViewCtx.Provider>
  );
}
