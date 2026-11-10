import { createContext, useContext, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Preview mode: "mobile" forces the small-screen layout inside a     */
/*  phone frame; "desktop" lets normal Tailwind breakpoints apply.     */
/* ------------------------------------------------------------------ */

export const ViewCtx = createContext({ forcedMobile: false });

export const useR = () => {
  const { forcedMobile } = useContext(ViewCtx);
  // r(base, desktopOnly): desktopOnly holds md:/lg: classes, dropped in forced-mobile preview
  return (base, desktopOnly = "") => (forcedMobile ? base : `${base} ${desktopOnly}`);
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

export function OliveBranch({ className = "", stroke = "#8a5f3e" }) {
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

const LOGO_SIZES = {
  sm: { branch: "h-7 w-5", word: "text-lg", tagline: null },
  md: { branch: "h-9 w-6", word: "text-xl", tagline: "mt-1 text-[8px]" },
  lg: { branch: "h-20 w-14", word: "text-4xl", tagline: "mt-2 text-[10px]" },
};

export function Logo({ inverse = false, size = "md" }) {
  const s = LOGO_SIZES[size];
  return (
    <div className="flex items-center gap-3 select-none">
      <OliveBranch className={s.branch} stroke={inverse ? "#dcc7ab" : "#8a5f3e"} />
      <div className="leading-none">
        <div className={`font-display tracking-tight ${s.word} ${inverse ? "text-cream" : "text-espresso"}`}>
          SELAIRE &amp; CO.
        </div>
        {s.tagline && (
          <div className={`font-body ${s.tagline} tracking-[0.28em] ${inverse ? "text-sand" : "text-caramel"}`}>
            TRANSACTION COORDINATION
          </div>
        )}
      </div>
    </div>
  );
}

const BUTTON_STYLES = {
  solid: "bg-espresso text-cream px-6 py-3 hover:bg-mocha",
  outline: "border border-latte text-espresso px-5 py-2.5 hover:bg-espresso hover:text-cream hover:border-espresso",
  light: "bg-cream text-espresso px-6 py-3 hover:bg-sand",
  outlineLight: "border border-latte text-cream px-5 py-2.5 hover:bg-cream hover:text-espresso hover:border-cream",
};

// Renders an <a> when given href, otherwise a <button>.
export function Button({ children, variant = "solid", href, className = "", ...props }) {
  const classes = `font-body inline-flex items-center gap-2 whitespace-nowrap text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-latte focus-visible:ring-offset-2 disabled:opacity-60 ${BUTTON_STYLES[variant]} ${className}`;
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external && { target: "_blank", rel: "noopener noreferrer" })} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export function Eyebrow({ children, className = "", light = false }) {
  return (
    <p
      className={`font-body text-[10px] font-medium tracking-[0.3em] uppercase ${
        light ? "text-sand" : "text-caramel"
      } ${className}`}
    >
      {children}
    </p>
  );
}

// warm: applies the sepia tint that blends stock photos into the palette. Turn it off for real people.
export function Photo({ src, alt, className = "", eager = false, warm = true }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`bg-gradient-to-br from-sand via-linen to-latte ${className}`} />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={`${warm ? "warm-photo " : ""}object-cover ${className}`}
    />
  );
}
