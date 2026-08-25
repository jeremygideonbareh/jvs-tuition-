import * as React from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/components/scroll-provider";

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between">
        <a
          href="#"
          onClick={(e) => go(e, "#top")}
          className="font-display text-lg font-extrabold tracking-tight"
        >
          JV<span className="text-accent"></span>S
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#inquiry"
            onClick={(e) => go(e, "#inquiry")}
            className="hidden lg:block"
          >
            <Button size="sm" variant="accent">Book a trial</Button>
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-md text-foreground lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={(e) => go(e, "#inquiry")}
              className="mt-2"
            >
              <Button className="w-full" variant="accent">Book a trial</Button>
            </a>
          </div>
        </div>
      )}

      <span className="sr-only">{SITE.name}</span>
    </header>
  );
}