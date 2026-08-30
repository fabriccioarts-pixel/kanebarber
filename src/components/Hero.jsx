import { ArrowDown, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL, INSTAGRAM_URL, brand } from "@/data/site";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grain" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-secondary/10 blur-3xl"
        aria-hidden
      />

      <div className="container relative grid min-h-[100svh] items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            💈 Ceilândia · Brasília / DF
          </p>

          <h1 className="font-display text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            <span className="block">{brand.tagline.split(" ")[0]}</span>
            <span className="block text-primary">Conceito</span>
            <span className="block">
              e <span className="text-secondary">Cultura</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">{brand.claim} 👑.</span>{" "}
            {brand.bio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                Agendar meu horário
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicos">Ver serviços e preços</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
              <Instagram className="h-4 w-4" /> {brand.handle}
            </a>
            <a href="#local" className="inline-flex items-center gap-2 hover:text-foreground">
              <MapPin className="h-4 w-4" /> QNQ 2, Conj. 1 — Ceilândia Norte
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
            <img
              src="/gallery/1.jpg"
              alt="Cliente da Kane Barber Club com corte finalizado"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
              width="640"
              height="800"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-40 overflow-hidden rounded-xl border border-border shadow-xl sm:block">
            <img
              src="/gallery/2.jpg"
              alt="Detalhe de degradê navalhado"
              className="aspect-square w-full object-cover"
              loading="lazy"
              width="200"
              height="200"
            />
          </div>
        </div>
      </div>

      <a
        href="#conceito"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground md:inline-flex"
      >
        Rolar <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
