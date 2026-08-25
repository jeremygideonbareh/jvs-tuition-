import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { SCHEDULE } from "@/lib/site-data";
import { scrollToId } from "@/components/scroll-provider";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Deterministic pseudo-availability (placeholder). [CONFIRM]
function isAvailable(dayIndex: number, sessionIndex: number) {
  const seed = (dayIndex * 3 + sessionIndex * 5 + 2) % 11;
  return seed !== 0 && seed !== 1;
}

export function Schedule() {
  const reduce = useReducedMotion();

  const reserve = (day: string, time: string) => {
    window.dispatchEvent(
      new CustomEvent("jvs:select-batch", {
        detail: { batch: `${day} · ${time}` },
      })
    );
    scrollToId("#inquiry");
  };

  return (
    <section id="schedule" className="container-site py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            When classes run
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Batches across the day — mornings for school-prep, afternoons and
            evenings after school. {SCHEDULE.note}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>Open 8:00 am – 7:00 pm · Mon–Sat</span>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto">
        <div className="min-w-[720px] rounded-xl border border-border">
          <div className="grid grid-cols-[130px_repeat(6,1fr)] border-b border-border bg-white">
            <div className="p-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Session
            </div>
            {SCHEDULE.days.map((day) => (
              <div
                key={day}
                className="p-3 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                {day}
              </div>
            ))}
          </div>

          {SCHEDULE.sessions.map((session, sIdx) => (
            <motion.div
              key={session.time}
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease, delay: 0.05 * sIdx }}
              className="grid grid-cols-[130px_repeat(6,1fr)] border-b border-border/60 last:border-b-0"
            >
              <div className="flex flex-col justify-center p-3">
                <span className="font-mono text-sm font-bold tabular-nums">{session.time}</span>
                <span className="text-[11px] text-muted-foreground">
                  {session.label}
                </span>
              </div>
              {SCHEDULE.days.map((day, dIdx) => {
                const open = isAvailable(dIdx, sIdx);
                return (
                  <div key={day} className="flex items-center justify-center p-2">
                    {open ? (
                      <button
                        onClick={() => reserve(day, session.time)}
                        className="rounded-full border border-accent/50 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                      >
                        Reserve
                      </button>
                    ) : (
                      <span className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                        Waitlist
                      </span>
                    )}
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Tap <span className="font-semibold text-foreground">Reserve</span> to pre-fill the enquiry
        with your preferred slot. Slots shown are indicative.
      </p>
    </section>
  );
}