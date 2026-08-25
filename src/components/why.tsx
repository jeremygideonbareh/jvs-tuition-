import { motion, useReducedMotion } from "framer-motion";
import { Users, Target, ChartLine, Star } from "lucide-react";
import { WHY } from "@/lib/site-data";

const ICONS = { users: Users, target: Target, chart: ChartLine, star: Star };

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Why() {
  const reduce = useReducedMotion();

  return (
    <section id="why" className="container-site py-24 sm:py-32">
      <h2 className="max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
        Why Shillong families trust JV'S
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="relative min-h-[300px] overflow-hidden rounded-xl md:col-span-2 md:row-span-2"
        >
          <img
            src="assets/classroom.jpg"
            alt="Students in a JV'S tuition class"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16255C] via-[#16255C]/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <p className="font-display text-2xl font-bold leading-snug">
              5.0 ★ rated across Law-U-Sib, Shillong
            </p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Just minutes from Risa Higher Sec. School — the neighbourhood's
              own exam coaching hub.
            </p>
          </div>
        </motion.div>

        {WHY.map((item, i) => {
          const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Star;
          return (
            <motion.div
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease, delay: 0.08 * i }}
              className="group rounded-xl border border-border bg-white p-7 transition-colors hover:border-accent/60"
            >
              <Icon
                className="h-6 w-6 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-xl font-bold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}