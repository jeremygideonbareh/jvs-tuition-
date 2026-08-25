import { SITE, NAV } from "@/lib/site-data";
import { scrollToId } from "@/components/scroll-provider";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="container-site grid grid-cols-1 gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold tracking-tight">
            JV<span className="text-accent"></span>S Tuition
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {SITE.tagline}. Coaching the next generation of Shillong since day
            one — with dedication.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="micro-label text-muted-foreground">Explore</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.href);
                  }}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="micro-label text-muted-foreground">Contact</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li>
              <a href={SITE.phoneHref} className="transition-colors hover:text-primary">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>{SITE.address}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-site flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>5.0 ★ on Google</span>
        </div>
      </div>
    </footer>
  );
}