import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "kbc-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (!stored) setVisible(true);
  }, []);

  const decide = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* armazenamento indisponível — segue sem persistir */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-lg border border-border bg-card/95 p-5 shadow-2xl backdrop-blur sm:flex-row sm:items-center">
          <Cookie className="h-6 w-6 shrink-0 text-primary" />
          <p className="flex-1 text-sm text-muted-foreground">
            Usamos cookies necessários para o funcionamento do site e cookies de
            medição de audiência de forma anônima. Saiba mais na nossa{" "}
            <Link to="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="flex shrink-0 gap-2">
            <Button size="sm" variant="outline" onClick={() => decide("rejected")}>
              Rejeitar
            </Button>
            <Button size="sm" onClick={() => decide("accepted")}>
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
