import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Photo, useR } from "../components/ui.jsx";
import { IMAGES } from "../content.js";

// Renders nothing until there is at least one real review in content.js.
export default function Reviews({ reviews }) {
  const r = useR();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reviews.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, [reviews.length]);

  if (reviews.length === 0) return null;
  const review = reviews[i % reviews.length];

  return (
    <section id="reviews" className={r("scroll-mt-20 bg-linen", "md:px-10 md:py-20")}>
      <div className={r("mx-auto grid max-w-7xl grid-cols-1 bg-cream", "md:grid-cols-2")}>
        <Photo
          src={IMAGES.reviews}
          alt="Dark wood desk with a notebook, coffee and laptop"
          className={r("h-72 w-full", "md:h-full md:min-h-[440px]")}
        />
        <figure className={r("flex flex-col justify-center px-7 py-12", "md:px-16")}>
          <Quote size={34} strokeWidth={1} className="text-caramel" aria-hidden="true" />
          <blockquote
            key={i}
            className={r("font-display animate-fade-in mt-5 text-[21px] italic leading-[1.55] text-espresso", "md:text-[24px]")}
          >
            “{review.quote}”
          </blockquote>
          <figcaption className="font-body mt-7 flex items-center gap-3 text-[10px] font-medium tracking-[0.25em] text-caramel uppercase">
            <span className="h-px w-8 bg-caramel" /> {review.who}
          </figcaption>
          {reviews.length > 1 && (
            <div className="mt-8 flex gap-2" role="tablist" aria-label="Reviews">
              {reviews.map((_, n) => (
                <button
                  key={n}
                  type="button"
                  role="tab"
                  aria-selected={n === i}
                  aria-label={`Show review ${n + 1}`}
                  onClick={() => setI(n)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    n === i ? "w-8 bg-espresso" : "w-3 bg-sand hover:bg-latte"
                  }`}
                />
              ))}
            </div>
          )}
        </figure>
      </div>
    </section>
  );
}
