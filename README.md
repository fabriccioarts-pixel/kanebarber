# Kane Barber Club — Site

Landing page da barbearia **Kane Barber Club** (Ceilândia / DF).
Stack: **React + Vite + Tailwind + shadcn/ui (Radix)** com **scroll suave (Lenis)**.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

- `src/data/site.js` — todo o conteúdo (serviços, horários, FAQ, endereço). Edite aqui.
- `src/components/ui/` — componentes shadcn (button, card, accordion).
- `src/components/SmoothScroll.jsx` — scroll suave global + âncoras `#secao`.
- `src/pages/NotFound.jsx` — página 404.
- `public/robots.txt`, `public/sitemap.xml` — SEO.
- `public/gallery/` — imagens (1–3).

## Conteúdo baseado nos .txt

Conceito, ID visual (azul claro + amarelo leite + marrom, fonte de impacto),
serviços e preços, horários (Seg–Sáb 09:00–19:45), localização (QNQ 2, Conj. 1, 16),
bio do Instagram e frase regente "Barbearia Conceito e Cultura".

Checklist "necessário ter": FAQ (5 perguntas), robots.txt, CTAs claros,
página 404, SEO (meta tags + JSON-LD HairSalon), mapa do site (sitemap.xml).

## Ajustes rápidos

- Link de agendamento: `BOOKING_URL` em `src/data/site.js` (hoje aponta pro Instagram).
- Domínio nas meta tags / sitemap: trocar `kanebarberclub.com.br`.
