import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS, PERKS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/components/scroll-provider";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Pricing() {
  const reduce = useReducedMotion();
  const [term, setTerm] = React.useState(false);

  return (
    <section id="pricing" className="border-t border-border/60 bg-white py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="micro-label text-primary">Admissions 2026</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Simple, honest fees
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              One subscription per subject, no hidden charges. Free trial class
              before you commit. Indicative pricing — final confirmation with the
              centre.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border bg-background p-1">
            <button
              onClick={() => setTerm(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                !term ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTerm(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                term ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Term
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = term ? plan.term : plan.monthly;
            return (
              <motion.div
                key={plan.id}
                initial={reduce ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease, delay: 0.08 * i }}
                className={`relative flex flex-col rounded-xl border p-7 ${
                  plan.highlight
                    ? "border-secondary bg-background shadow-[0_0_60px_-18px_rgba(223,108,79,0.4)]"
                    : "border-border bg-background"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    Most chosen
                  </span>
                )}

                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{plan.who}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={price}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease }}
                      className="font-display text-4xl font-extrabold"
                    >
                      {price}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-muted-foreground">/ mo</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{plan.per}</p>

                <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        strokeWidth={2.25}
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button
                    variant={plan.highlight ? "accent" : "default"}
                    className="w-full font-semibold"
                    onClick={() => scrollToId("#inquiry")}
                  >
                    Book a trial
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {PERKS.map((perk) => (
            <span
              key={perk}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Check className="h-4 w-4 text-primary" strokeWidth={2.5} aria-hidden="true" />
              {perk}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}