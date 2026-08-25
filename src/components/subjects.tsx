import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SUBJECT_TRACKS, CLASS_LEVELS } from "@/lib/site-data";
import { scrollToId } from "@/components/scroll-provider";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Subjects() {
  const reduce = useReducedMotion();
  const track = SUBJECT_TRACKS.concat(SUBJECT_TRACKS);

  return (
    <section id="subjects" className="overflow-hidden border-y border-border/60 bg-white py-24 sm:py-28">
      <div className="container-site">
        <h2 className="max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          School subjects and competitive tracks
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          From Class I foundations to JEE, Banking and every competitive exam —
          taught by teachers who know your syllabus.
        </p>
      </div>

      <div
        className="mt-12 border-y border-border/60 py-6"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="group relative flex w-max">
          <div
            className="flex w-max shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "38s" }}
          >
            {track.map((subject, i) => (
              <span
                key={i}
                className="flex items-center gap-8 whitespace-nowrap font-display text-3xl font-bold text-foreground/80 sm:text-4xl"
              >
                {subject}
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site mt-14">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CLASS_LEVELS.map((level, i) => (
            <motion.div
              key={level.range}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease, delay: 0.06 * i }}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-6"
            >
              <div>
                <p className="font-display text-base font-bold">{level.range}</p>
                <p className="mt-1 text-xs text-muted-foreground">{level.note}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scrollToId("#inquiry")}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Ask about a subject <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}