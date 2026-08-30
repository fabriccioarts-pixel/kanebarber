import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-grain px-6 text-center">
      <img
        src="/logo.png"
        alt="Kane Barber Club"
        className="mb-8 h-16 w-auto sm:h-20"
        width="320"
        height="125"
      />
      <p className="font-display text-[6rem] leading-none text-primary sm:text-[9rem]">404</p>
      <h1 className="mt-2 font-display text-2xl uppercase tracking-wide">
        Esse corte a gente não faz
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        A página que você procurou não existe ou foi movida. Volte para a home e agende seu
        horário na Kane Barber Club.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/">Voltar para a home</Link>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://www.instagram.com/kanebarberclub/"
            target="_blank"
            rel="noreferrer"
          >
            Falar no Instagram
          </a>
        </Button>
      </div>
    </div>
  );
}
