import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgress() {
  const barRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!barRef.current) return;

    const setWidth = gsap.quickSetter(barRef.current, "width", "%");
    ScrollTrigger.create({
      start: 0,
      end: () => ScrollTrigger.maxScroll(window),
      onUpdate: (self) => setWidth(self.progress * 100),
    });
  });

  return (
    <div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-0 origin-left bg-primary"
        style={{ width: "0%" }}
      />
    </div>
  );
}