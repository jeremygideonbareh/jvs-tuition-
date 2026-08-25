import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { SITE, SUBJECT_OPTIONS, BATCH_OPTIONS } from "@/lib/site-data";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

export function Inquiry() {
  const reduce = useReducedMotion();
  const [subject, setSubject] = React.useState(SUBJECT_OPTIONS[0]);
  const [batch, setBatch] = React.useState(BATCH_OPTIONS[4]);
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    message: "",
  });

  React.useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ batch: string }>).detail;
      if (detail?.batch) setBatch(detail.batch);
    };
    window.addEventListener("jvs:select-batch", handler);
    return () => window.removeEventListener("jvs:select-batch", handler);
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/" + SITE.formEmail, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "JV'S Tuition — new enquiry",
          name: form.name,
          phone: form.phone,
          subject,
          batch,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const mailtoFallback = `mailto:${SITE.formEmail}?subject=${encodeURIComponent(
    "JV'S Tuition — new enquiry"
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nPhone: ${form.phone}\nSubject: ${subject}\nBatch: ${batch}\nMessage: ${form.message}`
  )}`;

  return (
    <section id="inquiry" className="container-site py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Reserve a trial class
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Tell us about the student and the subject. We'll call back within a
            day to schedule your free trial and walk you through batches and fees.
          </p>

          <div className="mt-10 space-y-4 border-l-2 border-primary pl-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Call or WhatsApp
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-1 block font-display text-2xl font-bold hover:text-primary"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Visit the centre
              </p>
              <p className="mt-1 max-w-sm text-sm leading-relaxed text-foreground">
                {SITE.address}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Hours
              </p>
              <p className="mt-1 text-sm">{SITE.hours}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-7 sm:p-9">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-2xl font-bold">
                  Enquiry received
                </h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you. The team at JV'S will reach out shortly to schedule
                  your free trial class.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", phone: "", message: "" });
                  }}
                  className="mt-8 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                onSubmit={submit}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inq-name" className="text-sm font-medium">
                      Student / guardian name
                    </label>
                    <input
                      id="inq-name"
                      required
                      className={field}
                      placeholder="e.g. A. Rymbai"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inq-phone" className="text-sm font-medium">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="inq-phone"
                      required
                      type="tel"
                      className={field}
                      placeholder="+91 …"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inq-subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="inq-subject"
                      className={field}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      {SUBJECT_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inq-batch" className="text-sm font-medium">
                      Preferred batch
                    </label>
                    <select
                      id="inq-batch"
                      className={field}
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                    >
                      {BATCH_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="inq-msg" className="text-sm font-medium">
                    Anything else?
                  </label>
                  <textarea
                    id="inq-msg"
                    rows={3}
                    className={field}
                    placeholder="Class, board, goals…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Couldn't send online.{" "}
                    <a href={mailtoFallback} className="underline">
                      Email us instead
                    </a>{" "}
                    or call {SITE.phoneDisplay}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                </button>

                <p className="text-xs text-muted-foreground">
                  We reply within 1 working day. No spam, ever.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}