import { Sparkles } from "lucide-react";
import { WorkPageHero } from "@/components/ui/work-page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-data";
import { scrollToId } from "@/components/scroll-provider";

export function Hero() {
  return (
    <div id="top" className="relative">
      <WorkPageHero
        videoSrc="assets/hero-video.mp4"
        poster="assets/hero-poster.jpg"
        topWord="JV'S"
        rightWord="TUITION"
        bottomWord="MEGHALAYA"
        showClocks={false}
      />

      <div className="relative z-30 mx-auto max-w-4xl px-4 pb-16 pt-24 text-center sm:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          <span>5.0 ★ · {SITE.reviews} Google reviews</span>
        </div>

        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          One centre for every
          <br />
          <span className="text-primary">exam-ready</span> goal
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Maths, Science, JEE, Banking and all competitive exams — taught with
          dedication in the heart of Law-U-Sib, Shillong.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="font-semibold"
            onClick={() => scrollToId("#inquiry")}
          >
            Book a trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-semibold"
            onClick={() => scrollToId("#schedule")}
          >
            See schedule
          </Button>
        </div>
      </div>
    </div>
  );
}