import { ContactForm } from "@/components/marketing/contact-form";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { ClockIcon, ShieldIcon, SparkIcon } from "@/components/marketing/icons";
import { contactHighlights } from "@/lib/site-data";

const highlightIcons = {
  clock: ClockIcon,
  spark: SparkIcon,
  shield: ShieldIcon,
};

export const metadata = {
  title: "Contact",
  description:
    "Ceritakan kebutuhan website, SaaS, atau automasi bisnis kamu ke Thorz Digital lewat form konsultasi singkat.",
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden pb-10 pt-16 sm:pt-20 lg:pt-24">
        <div className="hero-halo" />
        <div className="container-shell relative">
          <div className="max-w-2xl">
            <div className="section-kicker">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Konsultasi Project
            </div>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem] lg:leading-[1.06]">
              Mari bahas project yang ingin kamu bangun
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Gunakan halaman ini untuk memulai diskusi seputar website,
              dashboard internal, SaaS, atau automasi workflow. Kami bantu
              rapikan kebutuhan awal supaya langkah berikutnya lebih jelas.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-18 sm:pb-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
          <ContactForm />

          <aside className="space-y-5">
            {contactHighlights.map((item) => {
              const Icon = highlightIcons[item.icon];

              return (
                <div className="card-panel p-6" key={item.title}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              );
            })}

            <div className="card-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Kebutuhan yang sering masuk
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Company profile website",
                  "Custom dashboard",
                  "SaaS MVP",
                  "Automation workflow",
                  "Internal tools",
                ].map((tag) => (
                  <span
                    className="inline-flex rounded-full bg-surface-muted px-3 py-2 text-sm text-muted-strong"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </MarketingShell>
  );
}
