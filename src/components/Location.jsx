import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import {
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  location,
} from "@/data/site";

export default function Location() {
  return (
    <section id="local" className="border-t border-border bg-card/30 py-24">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Onde estamos
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            No coração da <span className="text-secondary">Ceilândia</span>
          </h2>

          <div className="mt-6 flex items-start gap-3 text-muted-foreground">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <address className="not-italic leading-relaxed">
              <span className="block font-semibold text-foreground">{location.address}</span>
              {location.district}
              <br />
              {location.city} · CEP {location.cep}
            </address>
          </div>

          <div className="mt-4 flex items-center gap-3 text-muted-foreground">
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-semibold text-foreground hover:text-primary"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                <Navigation className="h-4 w-4" /> Traçar rota
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Phone className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-border">
              <img
                src="/fachada.png"
                alt="Fachada da Kane Barber Club na Ceilândia Norte"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width="780"
                height="585"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Mapa da Kane Barber Club"
                src={location.mapEmbed}
                className="h-[300px] w-full grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
