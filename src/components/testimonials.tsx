import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS, SITE } from "@/lib/site-data";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      6500
    );
    return () => clearInterval(t);
  }, [reduce]);

  const current = TESTIMONIALS[index];

  return (
    <section id="reviews" className="border-t border-border/60 bg-white py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Parents and students, in their words
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-semibold">{SITE.rating}</span>
              <span className="text-sm text-muted-foreground">
                · {SITE.reviews} Google reviews
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-12 min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease }}
              className="max-w-4xl"
            >
              <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-4xl">
                "{current.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-semibold">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-3 bg-secondary"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}