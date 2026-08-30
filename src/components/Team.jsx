import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOKING_URL, team } from "@/data/site";

export default function Team() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // A seção surge em fade in conforme entra na viewport (emenda com o escuro
  // do fim da seção anterior).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [48, 0]);

  return (
    <section
      ref={ref}
      id="profissionais"
      className="bg-background py-24"
    >
      <motion.div style={{ opacity, y }} className="container">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          A Equipe
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
          Quem cuida do seu <span className="text-secondary">visual</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Profissionais que respiram cultura urbana e dominam a técnica — do Afro ao
          navalhado, da barba ao freestyle.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <Card
              key={p.name}
              className="h-full text-center transition-colors hover:border-primary/50"
            >
              <CardContent className="flex flex-col items-center pt-8">
                <img
                  src={p.photo}
                  alt={`${p.name} — ${p.role} na Kane Barber Club`}
                  loading="lazy"
                  width="128"
                  height="128"
                  className="h-28 w-28 rounded-full object-cover ring-2 ring-primary/60 ring-offset-4 ring-offset-card"
                />

                <h3 className="mt-5 font-display text-xl uppercase tracking-wide">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>

                <Button asChild size="sm" variant="outline" className="mt-6 w-full">
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                    Agendar com {p.name}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
