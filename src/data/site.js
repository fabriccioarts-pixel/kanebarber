export const BOOKING_URL = "https://sites.appbarber.com.br/kanebarberclub";
export const INSTAGRAM_URL = "https://www.instagram.com/kanebarberclub/";
export const PHONE_DISPLAY = "(61) 98454-9371";
export const PHONE_TEL = "+5561984549371";
export const WHATSAPP_URL = "https://wa.me/5561984549371";

export const payments = ["Dinheiro", "PIX", "Cartão de Crédito", "Cartão de Débito"];
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Quadra+QNQ+2+Conjunto+1+16+Ceil%C3%A2ndia+Norte+Bras%C3%ADlia+DF";

export const brand = {
  name: "Kane Barber Club",
  handle: "@kanebarberclub",
  tagline: "Barbearia Conceito e Cultura",
  claim: "Aqui seu cabelo é respeitado",
  bio: "Especialistas em Afro. Estilo urbano, HipHop e cultura de rua no coração da Ceilândia.",
};

export const concept = {
  intro:
    "Mais que um corte: um ponto de encontro da cultura urbana da Ceilândia. Cabelo masculino tratado com técnica, referência e respeito à sua identidade.",
  pillars: [
    {
      title: "Estilo Urbano",
      text: "Cortes que conversam com a rua, o streetwear e o movimento da cidade.",
    },
    {
      title: "Especialistas em Afro",
      text: "Técnica de verdade para cabelo crespo e cacheado — em camadas, com volume e forma.",
    },
    {
      title: "Cabelo Masculino",
      text: "Degradê, navalhado, barba e visagismo pensados para o seu rosto e rotina.",
    },
    {
      title: "HipHop & Cultura",
      text: "Som, atitude e comunidade. A barbearia é palco da cultura que representa Ceilândia.",
    },
  ],
};

export const hours = [
  { day: "Segunda-feira", time: "09:00 – 19:45" },
  { day: "Terça-feira", time: "09:00 – 19:45" },
  { day: "Quarta-feira", time: "09:00 – 19:45" },
  { day: "Quinta-feira", time: "09:00 – 19:45" },
  { day: "Sexta-feira", time: "09:00 – 19:45" },
  { day: "Sábado", time: "09:00 – 19:45" },
  { day: "Domingo", time: "Fechado", closed: true },
];

export const location = {
  address: "Quadra QNQ 2, Conjunto 1, 16",
  district: "Ceilândia Norte (Ceilândia)",
  city: "Brasília / DF",
  cep: "72270-201",
  mapEmbed:
    "https://www.google.com/maps?q=Quadra%20QNQ%202%20Conjunto%201%2016%20Ceil%C3%A2ndia%20Norte%20Bras%C3%ADlia%20DF&output=embed",
};

export const serviceGroups = [
  {
    id: "cortes",
    label: "Cortes",
    items: [
      { name: "Corte Simples / Degradê", note: "Navalhado +R$5", price: "40,00", time: "45 min" },
      { name: "Cortes Texturizados", note: "Em camadas", price: "60,00", from: true, time: "45 min" },
      { name: "Corte Afro / Cacheado", note: "Em camadas", price: "60,00", from: true, time: "60 min" },
      { name: "Corte Navalhado", price: "45,00", time: "45 min" },
      { name: "Degradê", price: "40,00", time: "45 min" },
      { name: "Degradê Navalhado", price: "45,00", time: "45 min" },
      { name: "Corte Infantil", price: "40,00", time: "45 min" },
      { name: "Corte Simples (Assinante)", price: "40,00", time: "30 min" },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    items: [
      { name: "Corte Simples + Barba", price: "75,00", time: "60 min" },
      { name: "Corte Simples + Sobrancelha", price: "55,00", time: "45 min" },
      { name: "Corte Simples + Cavanhaque ou Sobrancelha", price: "55,00", time: "45 min" },
      { name: "Corte Simples + Freestyle", price: "45,00", time: "45 min" },
      { name: "Corte Simples + Pigmentação", price: "65,00", time: "45 min" },
      { name: "Corte + Waves", note: "Escovação e ativação com durag", price: "55,00", time: "60 min" },
      { name: "Corte + Luzes", price: "130,00", from: true, time: "75 min" },
      { name: "Nevou + Corte", price: "155,00", from: true, time: "90 min" },
      { name: "Navalhado + Barba", price: "80,00", time: "60 min" },
      { name: "Navalhado + Sobrancelha", price: "60,00", time: "45 min" },
      { name: "Navalhado + Cavanhaque", price: "60,00", time: "45 min" },
    ],
  },
  {
    id: "barba",
    label: "Barba",
    items: [
      { name: "Barba na Toalha Quente", price: "40,00", time: "45 min" },
      { name: "Barba Simples", price: "35,00", time: "30 min" },
      { name: "Cavanhaque", price: "15,00", time: "30 min" },
    ],
  },
  {
    id: "tratamentos",
    label: "Tratamentos & Detalhes",
    items: [
      {
        name: "Lavagem + Hidratação Completa",
        note: "Shampoo antirresíduo + condicionador de mandioca",
        price: "20,00",
        time: "15 min",
      },
      {
        name: "Limpeza Facial c/ Máscara Black",
        note: "Remove cravos, reduz oleosidade e revitaliza a pele",
        price: "20,00",
        time: "30 min",
      },
      { name: "Finalização de Cachos (DedoLiss)", price: "25,00", time: "30 min" },
      { name: "Luzes", price: "90,00", time: "75 min" },
      { name: "Sobrancelha", price: "15,00", time: "15 min" },
      { name: "Pezinho", price: "10,00", time: "15 min" },
      { name: "Freestyle personalizado", price: "20,00", time: "15 min" },
      { name: "Freestyle", price: "5,00", time: "15 min" },
      { name: "Listra Freestyle", price: "5,00", time: "15 min" },
    ],
  },
  {
    id: "promocoes",
    label: "Promoções",
    items: [
      {
        name: "SEGUNDA É DIA DE KANE!",
        note: "Corte + Sobrancelha — válida apenas às segundas",
        price: "50,00",
        time: "45 min",
      },
      {
        name: "TERÇA — Quem Indica, Amigo é!",
        note: "Válida apenas às terças",
        price: "35,00",
        time: "45 min",
      },
    ],
  },
];

// Fotos em /public/barbeiros. Ajuste função/especialidades e @ conforme necessário.
export const team = [
  {
    name: "Kane",
    role: "Barbeiro-chefe & fundador",
    photo: "/barbeiros/kane.jpg",
    specialties: ["Afro", "Navalhado", "Freestyle"],
    instagram: "https://www.instagram.com/kanebarberclub/",
  },
  {
    name: "Alex",
    role: "Barbeiro",
    photo: "/barbeiros/alex.jpg",
    specialties: ["Degradê", "Waves", "Barba"],
    instagram: "https://www.instagram.com/kanebarberclub/",
  },
  {
    name: "JN",
    role: "Barbeiro",
    photo: "/barbeiros/jn.jpg",
    specialties: ["Afro", "Cachos", "Pigmentação"],
    instagram: "https://www.instagram.com/kanebarberclub/",
  },
  {
    name: "João",
    role: "Barbeiro",
    photo: "/barbeiros/joao.jpg",
    specialties: ["Degradê", "Navalhado", "Sobrancelha"],
    instagram: "https://www.instagram.com/kanebarberclub/",
  },
  {
    name: "Pedrin",
    role: "Barbeiro",
    photo: "/barbeiros/pedrin.jpg",
    specialties: ["Texturizado", "Luzes", "Freestyle"],
    instagram: "https://www.instagram.com/kanebarberclub/",
  },
  {
    name: "Robert",
    role: "Barbeiro",
    photo: "/barbeiros/robert.jpg",
    specialties: ["Corte infantil", "Degradê", "Barba"],
    instagram: "https://www.instagram.com/kanebarberclub/",
  },
];

export const faq = [
  {
    q: "Preciso agendar ou posso chegar e esperar?",
    a: "O ideal é agendar online pelo botão “Agendar” aqui do site (AppBarber) para garantir seu horário com o profissional que você quer. Encaixes dependem da fila do dia.",
  },
  {
    q: "Vocês são especialistas em cabelo Afro e cacheado?",
    a: "Sim. Cabelo crespo e cacheado é a nossa especialidade — trabalhamos corte em camadas, forma e volume, além de finalização de cachos e waves.",
  },
  {
    q: "Qual o horário de funcionamento?",
    a: "De segunda a sábado, das 09:00 às 19:45. Aos domingos não abrimos.",
  },
  {
    q: "Onde fica a barbearia?",
    a: "Na Quadra QNQ 2, Conjunto 1, nº 16 — Ceilândia Norte, Brasília/DF. CEP 72270-201. Tem mapa e rota nesta página.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos dinheiro, PIX e cartões de débito e crédito. As promoções de segunda e terça não acumulam com outros descontos.",
  },
];

export const gallery = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
];
