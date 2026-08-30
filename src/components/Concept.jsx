import { Scissors, Sparkles, Users, Music2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import { concept } from "@/data/site";

const icons = [Scissors, Sparkles, Users, Music2];

export default function Concept() {
  return (
    <section id="conceito" className="border-t border-border py-24">
      <div className="container">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            O Conceito
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-tight sm:text-5xl">
            Barbearia, <span className="text-secondary">conceito</span> e{" "}
            <span className="text-primary">cultura</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{concept.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {concept.pillars.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={p.title} delay={i * 90}>
                <Card className="h-full transition-colors hover:border-primary/50">
                  <CardContent className="pt-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg uppercase tracking-wide">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
