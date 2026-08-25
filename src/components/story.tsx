import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STORY_BEATS } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

function splitWords(text: string) {
  return text.split(" ");
}

export function Story() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const headingWords = React.useMemo(() => splitWords("The JV'S Standard"), []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=320%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        ".story-word",
        { opacity: 0.12, y: 18 },
        { opacity: 1, y: 0, stagger: 0.08, ease: "none", duration: 0.4 }
      )
        .to(
          ".story-line",
          { scaleX: 1, ease: "none", duration: 0.8 },
          0
        );

      const beats = gsap.utils.toArray<HTMLElement>(".story-beat");
      beats.forEach((beat, i) => {
        const isLast = i === beats.length - 1;
        tl.fromTo(
          beat,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
        );
        if (!isLast) {
          tl.to({}, { duration: 0.5 });
          tl.to(beat, { opacity: 0, y: -30, duration: 0.3, ease: "power1.in" });
          tl.to({}, { duration: 0.4 });
        } else {
          tl.to({}, { duration: 0.9 });
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="standard"
      className="relative flex h-screen min-h-[520px] items-center overflow-hidden bg-background"
    >
      <div className="container-site">
        <div className="flex items-center gap-4">
          <span className="micro-label text-primary">The JV'S Standard</span>
          <span className="story-line h-px w-full max-w-[12rem] origin-left scale-x-0 bg-primary/60" />
        </div>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-3">
          {headingWords.map((word, i) => (
            <span
              key={i}
              className="story-word font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="relative mt-12 min-h-[220px] sm:min-h-[240px]">
          {STORY_BEATS.map((beat, i) => (
            <div
              key={beat.kicker}
              className="story-beat absolute inset-0 flex items-start gap-6 opacity-0"
            >
              <span className="font-display text-sm font-bold text-primary tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  {beat.kicker}
                </h3>
                <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
                  {beat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}