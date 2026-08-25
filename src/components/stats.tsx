import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STATS } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const section = sectionRef.current;
      if (!section) return;

      const targets = gsap.utils.toArray<HTMLElement>("[data-count]");
      targets.forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = obj.value.toFixed(decimals);
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="JV'S by the numbers"
      className="border-y border-border/60 bg-white"
    >
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
              <span data-count={s.value} data-decimals={s.decimals}>
                {s.value.toFixed(s.decimals)}
              </span>
              <span>{s.suffix}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}