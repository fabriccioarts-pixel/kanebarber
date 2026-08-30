import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  brand,
  location,
} from "@/data/site";

const UPDATED = "29 de agosto de 2026";

const sections = [
  {
    title: "1. Quem somos",
    body: (
      <>
        <p>
          A <strong>{brand.name}</strong> ({brand.tagline}) é responsável pelo
          tratamento dos dados pessoais coletados por meio deste site e dos nossos
          canais de atendimento. Endereço: {location.address}, {location.district},{" "}
          {location.city}, CEP {location.cep}.
        </p>
        <p>
          Contato do encarregado / responsável pelo tratamento de dados:{" "}
          <a className="text-primary hover:underline" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>{" "}
          ou pelo Instagram{" "}
          <a
            className="text-primary hover:underline"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            {brand.handle}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "2. Dados que coletamos",
    body: (
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Dados de contato e agendamento:</strong> nome, telefone/WhatsApp e,
          quando informado, e-mail — fornecidos por você ao agendar um horário ou
          falar conosco.
        </li>
        <li>
          <strong>Dados de navegação:</strong> endereço IP, tipo de dispositivo e
          navegador, páginas visitadas e dados de cookies estritamente necessários ao
          funcionamento do site.
        </li>
        <li>
          <strong>Interações públicas:</strong> comentários e mensagens enviadas pelas
          nossas redes sociais.
        </li>
      </ul>
    ),
  },
  {
    title: "3. Para que usamos seus dados",
    body: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Realizar e confirmar agendamentos e lembrá-lo do horário marcado.</li>
        <li>Responder solicitações, dúvidas e pedidos de atendimento.</li>
        <li>Melhorar a experiência do site e entender como ele é utilizado.</li>
        <li>Cumprir obrigações legais, fiscais e regulatórias.</li>
      </ul>
    ),
  },
  {
    title: "4. Base legal",
    body: (
      <p>
        Tratamos seus dados com base na <strong>execução de procedimentos
        preliminares e prestação de serviço</strong> (art. 7º, V, da LGPD), no{" "}
        <strong>consentimento</strong> (art. 7º, I), no cumprimento de{" "}
        <strong>obrigação legal</strong> (art. 7º, II) e no{" "}
        <strong>legítimo interesse</strong> (art. 7º, IX) para segurança e melhoria
        dos nossos serviços.
      </p>
    ),
  },
  {
    title: "5. Compartilhamento com terceiros",
    body: (
      <>
        <p>
          Não vendemos seus dados. Podemos compartilhá-los apenas com prestadores que
          viabilizam a operação, tais como:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Plataforma de agendamento (AppBarber)</strong>, quando você agenda
            pelo botão “Agendar”.
          </li>
          <li>
            <strong>Google Maps</strong>, para exibição do mapa da unidade.
          </li>
          <li>
            <strong>Meta / Instagram</strong>, quando você interage com nossos perfis.
          </li>
          <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cookies",
    body: (
      <p>
        Utilizamos cookies necessários para o funcionamento do site e podemos usar
        cookies de medição de audiência de forma anonimizada. Você pode bloquear ou
        apagar cookies nas configurações do seu navegador; algumas funções podem
        deixar de operar corretamente.
      </p>
    ),
  },
  {
    title: "7. Por quanto tempo guardamos",
    body: (
      <p>
        Mantemos os dados pelo tempo necessário para as finalidades acima e para o
        cumprimento de obrigações legais. Encerrado esse prazo, os dados são
        eliminados ou anonimizados.
      </p>
    ),
  },
  {
    title: "8. Seus direitos",
    body: (
      <>
        <p>Nos termos da LGPD, você pode solicitar a qualquer momento:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>confirmação da existência de tratamento e acesso aos dados;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            anonimização, bloqueio ou eliminação de dados desnecessários ou tratados
            em desconformidade;
          </li>
          <li>portabilidade e informação sobre compartilhamentos;</li>
          <li>revogação do consentimento.</li>
        </ul>
        <p className="mt-2">
          Para exercer seus direitos, fale conosco pelo telefone{" "}
          <a className="text-primary hover:underline" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "9. Segurança",
    body: (
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados
        contra acessos não autorizados, perda ou destruição. Nenhum sistema é 100%
        seguro, mas trabalhamos continuamente para reduzir riscos.
      </p>
    ),
  },
  {
    title: "10. Alterações desta política",
    body: (
      <p>
        Esta Política de Privacidade pode ser atualizada a qualquer momento. A versão
        vigente estará sempre nesta página, com a data da última atualização.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Kane Barber Club">
            <img src="/logo.png" alt="Kane Barber Club" className="h-9 w-auto" />
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> Voltar ao site
            </Link>
          </Button>
        </div>
      </header>

      <main className="container max-w-3xl py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
          Política de <span className="text-secondary">Privacidade</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: {UPDATED}
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl uppercase tracking-wide text-foreground">
                {s.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14">
          <Button asChild>
            <Link to="/">Voltar para a home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
