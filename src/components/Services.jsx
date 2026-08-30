import { useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import { BOOKING_URL, serviceGroups } from "@/data/site";

export default function Services() {
  const [active, setActive] = useState(serviceGroups[0].id);
  const groups =
    active === "todos"
      ? serviceGroups
      : serviceGroups.filter((g) => g.id === active);

  return (
    <section id="servicos" className="border-t border-border bg-card/30 py-24">
      <div className="container">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Serviços & Preços
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            Escolha o seu <span className="text-secondary">corte</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Valores e tempo médio de cada serviço. Cortes navalhados têm acréscimo de R$5.
            Agendamento online pelo botão “Agendar”.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {[{ id: "todos", label: "Todos" }, ...serviceGroups].map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                active === g.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-12">
          {groups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-4 font-display text-xl uppercase tracking-wide text-secondary">
                {group.label}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((s, i) => (
                  <Reveal key={s.name} delay={(i % 3) * 70}>
                    <Card className="flex h-full flex-col transition-colors hover:border-primary/50">
                      <CardContent className="flex flex-1 flex-col pt-6">
                        <h4 className="font-semibold leading-snug">{s.name}</h4>
                        {s.note && (
                          <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
                        )}
                        <div className="mt-4 flex items-end justify-between">
                          <div>
                            {s.from && (
                              <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">
                                A partir de
                              </span>
                            )}
                            <span className="font-display text-2xl text-primary">
                              R$ {s.price}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" /> {s.time}
                          </span>
                        </div>
                        <Button asChild size="sm" variant="outline" className="mt-5">
                          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                            Agendar
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
