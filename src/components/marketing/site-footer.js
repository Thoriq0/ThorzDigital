import Link from "next/link";
import { footerGroups, footerInfo } from "@/lib/site-data";
import { GlobeAltIcon, LinkedinIcon, MailIcon, MessageIcon } from "./icons";

const socialLinks = [
  { label: "Website", href: "/contact", icon: GlobeAltIcon },
  { label: "Email", href: "/contact", icon: MailIcon },
  { label: "LinkedIn", href: "/contact", icon: LinkedinIcon },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border/80 bg-white/70">
      <div className="container-shell py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(2,minmax(0,0.7fr))_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <div>
              <p className="text-lg font-semibold tracking-tight text-foreground">
                Thorz Digital
              </p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
                {footerInfo.summary}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-white text-muted transition hover:border-primary/25 hover:text-primary"
                    href={item.href}
                    key={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-foreground">{group.title}</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition-colors hover:text-primary" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-semibold text-foreground">Kantor</h2>
            <div className="mt-5 space-y-4 text-sm text-muted">
              <p className="leading-7">{footerInfo.officeLines.join(", ")}</p>
              <Link
                className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-strong"
                href="/contact"
              >
                <MessageIcon className="h-4 w-4" />
                Hubungi kami untuk detail project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-card-border/80 pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Thorz Digital. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link className="transition-colors hover:text-primary" href="/#portfolio">
              Portfolio
            </Link>
            <Link className="transition-colors hover:text-primary" href="/contact">
              Email
            </Link>
            <Link className="transition-colors hover:text-primary" href="/contact">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
