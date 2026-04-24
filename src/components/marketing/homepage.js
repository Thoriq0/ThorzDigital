import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CloudIcon,
  GlobeIcon,
  MailIcon,
  MessageIcon,
  SparkIcon,
  StarIcon,
} from "./icons";
import {
  heroDashboardRows,
  portfolioItems,
  pricingPlans,
  processSteps,
  services,
  testimonials,
} from "@/lib/site-data";

const serviceIcons = {
  globe: GlobeIcon,
  cloud: CloudIcon,
  spark: SparkIcon,
};

const accentStyles = {
  primary: "bg-primary-soft text-primary",
  secondary: "bg-secondary-soft text-secondary",
  accent: "bg-accent text-foreground",
};

export function Homepage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCtaSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-18 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="hero-halo" />
      <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)] lg:gap-18">
        <div className="max-w-2xl">
          <div className="section-kicker">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Software house terpercaya di Indonesia
          </div>

          <h1 className="mt-7 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
            Membangun Solusi Digital yang{" "}
            <span className="text-primary">Skalabel</span> untuk Bisnis Anda
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Kami membantu UMKM, startup, dan pemilik bisnis lewat website,
            produk SaaS, dan automasi yang terasa rapi, cepat, dan siap dipakai
            untuk bertumbuh.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link className="button-primary" href="/contact">
              Konsultasi Gratis
            </Link>
            <Link className="button-secondary" href="/#portfolio">
              Lihat Portfolio
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="absolute inset-0 translate-x-4 translate-y-6 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(77,68,227,0.34),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(126,212,253,0.45),transparent_40%)] blur-3xl" />
          <div className="dashboard-panel relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Weekly Growth</p>
                <p className="mt-2 text-sm font-medium text-white/88">Live data dashboard</p>
              </div>
              <div className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/70">
                17.2M
              </div>
            </div>

            <div className="space-y-3 px-4 py-4">
              {heroDashboardRows.map((row) => (
                <div
                  className="grid grid-cols-[1.3fr_0.7fr_0.55fr] items-center gap-4 rounded-2xl px-3 py-3 text-sm text-white/78 transition hover:bg-white/5"
                  key={row.label}
                >
                  <span className="truncate">{row.label}</span>
                  <span className="text-right font-medium text-white">{row.left}</span>
                  <span className="text-right text-white/56">{row.right}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-white/10 px-4 py-4 text-sm">
              {[
                { label: "Projects", value: "48" },
                { label: "Launches", value: "12" },
                { label: "Clients", value: "26" },
              ].map((item) => (
                <div
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                  key={item.label}
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/44">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-space bg-surface-subtle" id="layanan">
      <div className="container-shell">
        <SectionHeading
          description="Solusi teknologi komprehensif yang dirancang untuk membantu bisnis bergerak lebih cepat dan lebih tertata."
          title="Layanan Kami"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                className="group card-panel flex h-full flex-col p-8 transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_55px_-38px_rgba(11,28,48,0.34)]"
                key={service.title}
              >
                <div
                  className={`mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accentStyles[service.accent]}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="section-space bg-white" id="portfolio">
      <div className="container-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            description="Intip beberapa hasil karya yang membantu klien kami bergerak lebih cepat, lebih terukur, dan lebih siap scale."
            title="Portfolio Terkini"
          />
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-strong"
            href="/contact"
          >
            Diskusikan project serupa
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article className="group" key={item.title}>
              <div className="card-panel relative aspect-[16/10] overflow-hidden rounded-[1.15rem]">
                <Image
                  alt={item.alt}
                  className="object-cover transition duration-500 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  src={item.image}
                />
              </div>
              <div className="mt-5">
                <span className="inline-flex rounded-full bg-surface-muted px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-strong">
                  {item.category}
                </span>
                <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-space bg-surface" id="proses">
      <div className="container-shell">
        <SectionHeading
          description="Bagaimana kami mengubah ide dan kebutuhan operasional menjadi produk digital yang benar-benar siap dipakai."
          title="Proses Kerja Kami"
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-card-muted-border lg:block" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article className="card-panel relative p-7 text-center" key={step.title}>
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading
          description="Partner yang tepat bukan cuma soal teknis, tapi juga soal komunikasi, ritme kerja, dan kualitas keputusan selama project berjalan."
          title="Apa Kata Klien Kami"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article className="card-panel h-full p-7" key={testimonial.name}>
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon className="h-4 w-4" key={`${testimonial.name}-${index}`} />
                ))}
              </div>

              <p className="mt-6 text-sm leading-8 text-muted-strong sm:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Image
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  height={48}
                  src={testimonial.image}
                  width={48}
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section-space bg-surface-subtle" id="harga">
      <div className="container-shell">
        <SectionHeading
          description="Pilihan paket ini jadi titik awal yang gampang dipahami. Scope final akan tetap kami sesuaikan dengan kebutuhan bisnis kamu."
          title="Pilihan Paket Harga"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              className={`relative flex h-full flex-col rounded-[1.25rem] p-8 ${
                plan.featured
                  ? "border-2 border-primary bg-white shadow-[0_28px_50px_-34px_rgba(53,37,205,0.45)] lg:-translate-y-3"
                  : "card-panel"
              }`}
              key={plan.name}
            >
              {plan.featured ? (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white">
                  Terpopuler
                </div>
              ) : null}

              <div className="pt-1">
                <h3 className="text-[1.45rem] font-semibold tracking-tight text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{plan.description}</p>
              </div>

              <div className="mt-7 flex items-end gap-1">
                <span className="text-[2rem] font-semibold tracking-tight text-primary sm:text-[2.35rem]">
                  {plan.price}
                </span>
                {plan.suffix ? (
                  <span className="pb-1 text-sm text-muted">{plan.suffix}</span>
                ) : null}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-3 text-sm leading-7 text-muted" key={feature}>
                    <CheckCircleIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                className={`mt-10 ${plan.featured ? "button-primary" : "button-secondary"}`}
                href="/contact"
              >
                {plan.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="pb-18 pt-8 sm:pb-24">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-6 py-12 text-center text-white shadow-[0_32px_55px_-35px_rgba(53,37,205,0.58)] sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Siap mulai project Anda?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Hubungi tim kami untuk konsultasi gratis, penyelarasan scope, dan
              langkah implementasi awal yang paling realistis untuk bisnis kamu.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link className="button-secondary !bg-white !text-primary" href="/contact">
                <MessageIcon className="h-4 w-4" />
                Chat via WhatsApp
              </Link>
              <Link className="button-ghost" href="/contact">
                <MailIcon className="h-4 w-4" />
                Kirim Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ align = "center", description, title }) {
  const alignmentClass = align === "left" ? "text-left" : "text-center";
  const copyClass = align === "left" ? "" : "mx-auto";

  return (
    <div className={alignmentClass}>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.35rem]">
        {title}
      </h2>
      <p className={`mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base ${copyClass}`}>
        {description}
      </p>
    </div>
  );
}
