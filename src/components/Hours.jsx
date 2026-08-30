import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { BOOKING_URL, hours } from "@/data/site";

export default function Hours() {
  return (
    <section id="horarios" className="border-t border-border py-24">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Funcionamento
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            Horários de <span className="text-secondary">atendimento</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Estamos abertos de segunda a sábado. Chegue com folga ou garanta seu horário
            pelo agendamento online.
          </p>
          <Button asChild className="mt-6">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <CalendarClock className="h-4 w-4" /> Agendar agora
            </a>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <ul className="divide-y divide-border rounded-lg border border-border bg-card">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between px-5 py-4 text-sm"
              >
                <span className="font-medium uppercase tracking-wide">{h.day}</span>
                <span
                  className={
                    h.closed ? "text-muted-foreground" : "font-semibold text-primary"
                  }
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
