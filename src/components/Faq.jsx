import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";
import { faq } from "@/data/site";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Dúvidas
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            Perguntas <span className="text-secondary">frequentes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não achou o que procurava? Chama no direct do{" "}
            <a
              href="https://www.instagram.com/kanebarberclub/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              @kanebarberclub
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
