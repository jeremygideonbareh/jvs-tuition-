import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/site-data";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="container-site py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Find us in Law-U-Sib
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Just minutes from Risa Higher Sec. School. Walk-ins welcome during
            opening hours.
          </p>

          <div className="mt-10 space-y-6">
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">
                  {SITE.address}
                </p>
              </div>
            </a>
            <a href={SITE.phoneHref} className="group flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Phone / WhatsApp</p>
                <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">
                  {SITE.phoneDisplay}
                </p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Hours</p>
                <p className="mt-1 text-sm text-muted-foreground">{SITE.hours}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="min-h-[320px] overflow-hidden rounded-xl border border-border"
        >
          <iframe
            title="JV'S Tuition Center on Google Maps"
            src={SITE.mapEmbed}
            className="h-full min-h-[320px] w-full grayscale-[0.2] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}