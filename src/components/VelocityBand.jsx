import { ScrollBasedVelocity } from "@/components/ui/scroll-based-velocity";

export default function VelocityBand() {
  return (
    <section
      aria-label="Assinatura da Kane Barber Club"
      className="relative overflow-hidden border-y border-border bg-card/40 py-12 md:py-16"
    >
      <div className="bg-grain absolute inset-0" aria-hidden />
      <ScrollBasedVelocity
        default_velocity={4}
        className="items-center"
        text={
          <span className="flex shrink-0 items-center gap-6 px-10 md:gap-10 md:px-16">
            <img
              src="/logo.png"
              alt="Kane Barber Club"
              className="h-12 w-auto md:h-20"
              width="320"
              height="125"
            />
            <span className="font-display text-3xl font-bold uppercase tracking-[-0.02em] text-foreground/90 drop-shadow-sm md:text-6xl">
              Conceito e Cultura
            </span>
          </span>
        }
      />
    </section>
  );
}
