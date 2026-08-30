import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { BOOKING_URL, brand } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-16 text-center">
        <Reveal>
          <h2 className="font-display text-3xl uppercase leading-tight sm:text-4xl">
            {brand.claim} 👑
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Reserve seu horário na Kane Barber Club e sinta a diferença de quem entende de
            Afro, degradê e cultura.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-7">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              Agendar meu horário
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
