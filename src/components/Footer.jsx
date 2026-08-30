import { Link } from "react-router-dom";
import {
  Instagram,
  MapPin,
  Clock,
  Phone,
  CreditCard,
  Banknote,
  QrCode,
} from "lucide-react";
import {
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  brand,
  payments,
} from "@/data/site";

const payIcon = { Dinheiro: Banknote, PIX: QrCode };

const nav = [
  { href: "#conceito", label: "Conceito" },
  { href: "#servicos", label: "Serviços" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#horarios", label: "Horários" },
  { href: "#local", label: "Local" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <a href="#topo" className="inline-block" aria-label="Kane Barber Club">
            <img
              src="/logo.png"
              alt="Kane Barber Club"
              className="h-14 w-auto"
              width="320"
              height="125"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {brand.tagline}. {brand.claim}.
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          <span className="mb-1 font-semibold uppercase tracking-wide text-muted-foreground">
            Navegação
          </span>
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          <span className="mb-1 font-semibold uppercase tracking-wide text-muted-foreground">
            Contato
          </span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
            <Instagram className="h-4 w-4" /> {brand.handle}
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 hover:text-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> QNQ 2, Conj. 1, 16 — Ceilândia
            Norte, Brasília/DF
          </a>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-foreground">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" /> Seg a Sáb · 09:00 – 19:45
          </span>

          <div className="mt-3">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Formas de pagamento
            </span>
            <ul className="flex flex-wrap gap-2">
              {payments.map((p) => {
                const Icon = payIcon[p] || CreditCard;
                return (
                  <li
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {p}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4">
            <Link to="/privacidade" className="hover:text-foreground">
              Política de Privacidade
            </Link>
            <a href="/sitemap.xml" className="hover:text-foreground">
              Mapa do site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
