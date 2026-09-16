import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Shield, Clock, Heart, Briefcase, Leaf, ArrowRight, CheckCircle, Sparkles, Phone, MessageSquare, ExternalLink, HelpCircle, ChevronRight 
} from "lucide-react";
import { getPageByIdAction } from "@/app/actions/queries";
import Reveal from "@/components/home/Reveal";
import PageHeroSlider from "@/components/common/PageHeroSlider";
import { extractLocalizedString, extractStringList } from "@/lib/utils";

interface TravelInfoPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const travelInfoData: Record<string, any> = {
  "visa-entry-requirements": {
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format",
    title: { en: "Visa & Entry Requirements", es: "Visa y Requisitos de Entrada", pt: "Visto e Requisitos de Entrada" },
    subtitle: { en: "Official guide to entering India effortlessly with 24/7 concierge support", es: "Guía oficial para ingresar a la India sin complicaciones", pt: "Guia oficial para entrar na Índia sem complicações" },
    specs: [
      { label: "Visa Type", value: "e-Tourist Visa (1 Year / 30 Days)" },
      { label: "Processing Time", value: "72 Hours Online" },
      { label: "Eligible Passport Holders", value: "150+ Countries" },
      { label: "Assistance", value: "Complimentary for Guests" }
    ],
    sections: [
      {
        heading: { en: "e-Visa Overview & Eligibility", es: "Resumen de e-Visa y Elegibilidad", pt: "Visão Geral do e-Visto e Elegibilidade" },
        content: { en: "India offers a seamless electronic visa (e-Visa) system for passport holders of over 150 countries. The e-Tourist Visa allows stays of up to 90 days for tourism, heritage sightseeing, and leisure. Online applications are processed within 72 hours, granting a 1-year multiple entry visa straight to your email.", es: "La India ofrece un sistema de visa electrónica (e-Visa) rápido para ciudadanos de más de 150 países. La e-Visa turística permite estancias de hasta 90 días con múltiple entrada válida por 1 año.", pt: "A Índia oferece um sistema de visto eletrônico (e-Visa) para cidadãos de mais de 150 países. O e-Visa permite estadias de até 90 dias com múltiplas entradas por 1 ano." }
      },
      {
        heading: { en: "Required Travel Documents", es: "Documentos de Viaje Requeridos", pt: "Documentos de Viagem Necessários" },
        bullets: { en: [
          "Original Passport with at least 6 months validity & 2 blank pages",
          "Recent digital passport photo (white background, square crop)",
          "Confirmed round-trip flight booking & hotel vouchers",
          "Copy of approved e-Visa printout upon airport arrival"
        ], es: [
          "Pasaporte original con al menos 6 meses de validez y 2 páginas en blanco",
          "Fotografía digital reciente tamaño pasaporte (fondo blanco)",
          "Boleto de avión de regreso y reservas de hotel",
          "Copia impresa de la e-Visa aprobada al llegar al aeropuerto"
        ], pt: [
          "Passaporte original com pelo menos 6 meses de validade e 2 páginas em branco",
          "Fotografia digital recente tamanho passaporte (fundo branco)",
          "Passagem aérea de regresso e comprovantes de hotel",
          "Cópia impressa do e-Visa aprovado na chegada ao aeroporto"
        ] }
      },
      {
        heading: { en: "Processing Time & Fees", es: "Tiempo de Procesamiento y Tarifas", pt: "Tempo de Processamento e Taxas" },
        content: { en: "Standard online processing takes 3 to 5 business days. Government visa fees range from $25 to $80 depending on nationality and season. We recommend submitting your application at least 14 days before departure. MH India Trips provides complimentary e-Visa application guidance to all booked travelers.", es: "El procesamiento estándar toma de 3 a 5 días hábiles. Las tarifas oficiales oscilan entre $25 y $80 según la nacionalidad. Recomendamos solicitar con al menos 14 días de anticipación.", pt: "O processamento padrão leva de 3 a 5 dias úteis. As taxas variam entre $25 e $80 dependendo da nacionalidade. Recomendamos solicitar com pelo menos 14 dias de antecedência." }
      },
      {
        heading: { en: "Airport VIP Arrival & Fast-Track Assistance", es: "Llegada VIP y Asistencia en Aeropuerto", pt: "Chegada VIP e Assistência no Aeroporto" },
        content: { en: "Upon landing at Delhi (DEL), Mumbai (BOM), or Bengaluru (BLR), proceed to the dedicated e-Visa immigration counters. Our private luxury chauffeur will await you at the arrivals gate holding a personalized name card to assist with luggage and private transfers.", es: "Al aterrizar en Delhi, Mumbai o Bangalore, diríjase a las ventanillas exclusivas de e-Visa. Nuestro chofer privado de lujo lo esperará en la puerta de salidas con un cartel personalizado para gestionar su traslado.", pt: "Ao desembarcar em Delhi, Mumbai ou Bangalore, dirija-se aos balcões exclusivos de e-Visa. Nosso motorista privado estará aguardando na saída com uma placa personalizada." }
      }
    ]
  },
  "best-time-climate": {
    icon: Clock,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format",
    title: { en: "Best Time to Visit & Climate Guide", es: "Mejor Época para Visitar y Guía Climática", pt: "Melhor Época para Visitar e Guia Climático" },
    subtitle: { en: "Season-by-season breakdown for planning your luxury Indian holiday", es: "Desglose estación por estación para planificar sus vacaciones de lujo en la India", pt: "Guia estação por estação para planejar suas férias de luxo na Índia" },
    specs: [
      { label: "Peak Season", value: "October to March (Ideal Weather)" },
      { label: "Himalayas Peak", value: "May to October (Trekking & Views)" },
      { label: "Monsoon Beauty", value: "July to September (Ayurveda Rejuvenation)" },
      { label: "Average Temp", value: "15°C – 28°C (Winter)" }
    ],
    sections: [
      {
        heading: { en: "Peak Season: Golden Winter (October – March)", es: "Temporada Alta: Invierno Dorado (Octubre – Marzo)", pt: "Alta Temporada: Inverno Dourado (Outubro – Março)" },
        content: { en: "The quintessential period to explore India. Expect crisp, sunny days (15°C–28°C) and cool, romantic evenings. Perfect for Rajasthan palace tours, Golden Triangle safaris, Varanasi river rituals, and Kerala backwater cruises. High season bookings fill quickly, so reserve 3–6 months in advance.", es: "El período dorado para explorar la India. Días soleados y agradables (15°C-28°C) y noches frescas. Ideal para palacios de Rajastán, Triángulo de Oro y Kerala. Se recomienda reservar con 3 a 6 meses de anticipación.", pt: "O período ideal para explorar a Índia. Dias ensolarados e agradáveis (15°C-28°C) e noites frescas. Perfeito para palácios do Rajastão, Triângulo de Ouro e Kerala." }
      },
      {
        heading: { en: "Shoulder Season: Mountain Retreats (April – June)", es: "Temporada Media: Retiros de Montaña (Abril – Junio)", pt: "Meia Temporada: Refúgios de Montanha (Abril – Junho)" },
        content: { en: "Temperatures rise in the central plains, making this the prime window for high-altitude Himalayan retreats in Ladakh, Shimla, Manali, and Darjeeling. Wildlife national parks (Ranthambore, Jim Corbett) also offer extraordinary tiger sightings around waterholes during this period.", es: "Las temperaturas suben en las llanuras, convirtiendo este momento en la mejor época para viajar a los Himalayas (Ladakh, Shimla, Darjeeling) y avistar tigres en parques nacionales.", pt: "As temperaturas sobem nas planícies, tornando este o melhor momento para viagens às montanhas do Himalaia (Ladakh, Shimla, Darjeeling) e avistamento de tigres." }
      },
      {
        heading: { en: "Monsoon Magic & Rejuvenation (July – September)", es: "Magia del Monzón y Rejuvenecimiento (Julio – Septiembre)", pt: "Magia da Monção e Rejuvenescimento (Julho – Setembro)" },
        content: { en: "The subcontinent turns into an emerald paradise. Heavy rainfall brings lush greenery to Kerala's backwaters and waterfalls. This is internationally recognized as the optimal season for authentic Ayurvedic wellness therapies, Panchakarma retreats, and monsoon palace stays in Udaipur.", es: "El subcontinente se transforma en un paraíso verde esmeralda. Época ideal para tratamientos de bienestar Ayurveda en Kerala, cascadas y estancias en palacios de Udaipur.", pt: "O subcontinente se transforma em um paraíso verde esmeralda. Época ideal para tratamentos de bem-estar Ayurveda em Kerala e estadias nos palácios de Udaipur." }
      },
      {
        heading: { en: "Regional Travel Recommendations", es: "Recomendaciones de Viaje Regionales", pt: "Recomendações de Viagem Regionais" },
        bullets: { en: [
          "North India (Delhi, Agra, Rajasthan): Best October to March",
          "South India (Kerala, Tamil Nadu, Karnataka): Excellent November to March",
          "Himalayas (Ladakh, Kashmir, Himachal): Best May to October",
          "Goa & Beaches: Ideal November to February for warm sea breezes"
        ], es: [
          "Norte de la India (Delhi, Agra, Rajastán): Excelente de Octubre a Marzo",
          "Sur de la India (Kerala, Tamil Nadu, Karnataka): Ideal de Noviembre a Marzo",
          "Himalayas (Ladakh, Cachemira, Himachal): Mejor de Mayo a Octubre",
          "Goa y Playas: Ideal de Noviembre a Febrero para brisas cálidas"
        ], pt: [
          "Norte da Índia (Delhi, Agra, Rajastão): Excelente de Outubro a Março",
          "Sul da Índia (Kerala, Tamil Nadu, Karnataka): Ideal de Novembro a Março",
          "Himalaia (Ladakh, Caxemira, Himachal): Melhor de Maio a Outubro",
          "Goa e Praias: Ideal de Novembro a Fevereiro"
        ] }
      }
    ]
  },
  "solo-female-travel": {
    icon: Heart,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format",
    title: { en: "Solo Female Travel & Safety Excellence", es: "Viaje de Mujer Sola y Excelencia en Seguridad", pt: "Viagem de Mulher Sozinha e Segurança Excepcional" },
    subtitle: { en: "Pioneering safe, empowering private journeys for female travelers across India", es: "Pioneros en viajes privados seguros y empoderadores para mujeres en la India", pt: "Pioneiros em viagens privadas seguras e inspiradoras para mulheres na Índia" },
    specs: [
      { label: "Verified Drivers", value: "100% Background Checked" },
      { label: "Female Guide Option", value: "Available Upon Request" },
      { label: "Emergency Support", value: "24/7 Active Hotline" },
      { label: "Track Record", value: "500+ Solo Women Hosted Safely" }
    ],
    sections: [
      {
        heading: { en: "Our Ironclad Safety Guarantee", es: "Nuestra Garantía de Seguridad Inquebrantable", pt: "Nossa Garantia Inabalável de Segurança" },
        content: { en: "MH India Trips takes solo female travel with paramount seriousness. Every itinerary features verified private chauffeurs, GPS-monitored luxury vehicles, 24/7 dedicated WhatsApp support, and boutique 5-star hotel stays with female front-desk staff. We have proudly hosted over 500 solo women with an impeccable safety record.", es: "MH India Trips garantiza máxima seguridad para mujeres que viajan solas. Cada itinerario cuenta con choferes privados verificados, vehículos con rastreo GPS, soporte las 24 horas y hoteles boutique de 5 estrellas.", pt: "A MH India Trips garante máxima segurança para mulheres que viajam sozinhas. Cada roteiro possui motoristas privados verificados, veículos com GPS, suporte 24h e hotéis 5 estrelas." }
      },
      {
        heading: { en: "Cultural Attire & Etiquette Guidance", es: "Guía de Etiqueta Cultural y Vestimenta", pt: "Guia de Etiqueta Cultural e Vestuário" },
        content: { en: "India is rich in tradition. While modern attire is widely accepted in cosmopolitan cities like Delhi, Mumbai, and Bangalore, covering shoulders and knees is customary when visiting temples, mosques, and rural heritage villages. Wearing a light scarf adds elegance and comfort during temple entrances.", es: "La India es rica en tradiciones. Si bien la ropa moderna se acepta en ciudades cosmopolitas, se recomienda cubrir hombros y rodillas al visitar templos y aldeas rurales. Un pañuelo ligero aporta comodidad en las visitas.", pt: "A Índia é rica em tradições. Embora a roupa moderna seja aceita em grandes cidades, recomenda-se cobrir ombros e joelhos ao visitar templos e vilarejos. Um lenço leve garante total conforto." }
      },
      {
        heading: { en: "Top Recommended Destinations for Solo Women", es: "Mejores Destinos Recomendados para Mujeres", pt: "Melhores Destinos Recomendados para Mulheres" },
        bullets: { en: [
          "Kerala: Tranquil Ayurvedic backwater cruises and beach wellness resorts",
          "Udaipur & Jaipur: Royal palace hotels with private butler service",
          "Rishikesh: Himalayan yoga retreats and serene Ganges evening ceremonies",
          "Pondicherry: Charming French Quarter heritage villas and seaside cafes"
        ], es: [
          "Kerala: Cruceros tranquilos en los canales y retiros de bienestar Ayurveda",
          "Udaipur y Jaipur: Hoteles palacio reales con servicio de mayordomo privado",
          "Rishikesh: Retiros de yoga en el Himalaya y ceremonias serenas en el Gánges",
          "Pondicherry: Villas coloniales francesas y cafés frente al mar"
        ], pt: [
          "Kerala: Cruzeiros tranquilos nos canais e spas de bem-estar Ayurveda",
          "Udaipur e Jaipur: Hotéis palácio reais com serviço de mordomo privado",
          "Rishikesh: Refúgios de yoga no Himalaia e cerimônias no rio Ganges",
          "Pondicherry: Villas históricas francesas e cafés à beira-mar"
        ] }
      },
      {
        heading: { en: "24/7 Emergency & Concierge Hotline", es: "Línea Directa de Emergencia y Concierge 24/7", pt: "Linha Direta de Emergência e Concierge 24/7" },
        content: { en: "Your dedicated travel manager stays in direct mobile contact throughout your entire tour. Should you need schedule adjustments, medical advice, or restaurant escort, our ground team is accessible within minutes. Emergency Police: 112 | Women Helpline: 1091.", es: "Su asesor de viajes dedicado estará en constante contacto directo. Si necesita hacer cambios de itinerario o requiere asistencia, nuestro equipo está a minutos de distancia. Policía: 112 | Ayuda Mujer: 1091.", pt: "Seu consultor de viagens dedicado estará em contato direto. Se precisar de ajustes no roteiro ou assistência, nossa equipe estará a poucos minutos de você. Polícia: 112 | Apoio à Mulher: 1091." }
      }
    ]
  },
  "vaccinations-health": {
    icon: Shield,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format",
    title: { en: "Vaccinations & Health Concierge", es: "Vacunas y Consejería de Salud", pt: "Vacinação e Guia de Saúde" },
    subtitle: { en: "Complete wellness guide for a safe and energized Indian journey", es: "Guía completa de bienestar para un viaje seguro por la India", pt: "Guia completo de bem-estar para uma viagem segura pela Índia" },
    specs: [
      { label: "Recommended Vaccines", value: "Hepatitis A & Typhoid" },
      { label: "Water Safety", value: "Filtered/Bottled Water Only" },
      { label: "Private Care", value: "Priority Hospital Network" },
      { label: "Vehicles", value: "Equipped with Sanitizers & Bottled Water" }
    ],
    sections: [
      {
        heading: { en: "Recommended Health & Vaccine Checklist", es: "Lista de Vacunas y Salud Recomendadas", pt: "Checklist de Vacinas e Saúde" },
        bullets: { en: [
          "Hepatitis A & Typhoid (strongly advised for all travelers)",
          "Tetanus & Diphtheria booster (within past 10 years)",
          "Hepatitis B (recommended for extended stays)",
          "Routine vaccines: Measles, Mumps, Rubella (MMR) & Polio"
        ], es: [
          "Hepatitis A y Tifoidea (fuertemente recomendadas para todos los viajeros)",
          "Refuerzo de Tétanos y Difteria (en los últimos 10 años)",
          "Hepatitis B (recomendada para estancias prolongadas)",
          "Vacunas de rutina: Sarampión, Paperas, Rubeola (MMR) y Polio"
        ], pt: [
          "Hepatite A e Tifóide (fortemente recomendadas para todos os viajantes)",
          "Reforço de Tétano e Difteria (nos últimos 10 anos)",
          "Hepatite B (recomendada para estadias prolongadas)",
          "Vacinas de rotina: Sarampo, Caxumba, Rubéola (MMR) e Pólio"
        ] }
      },
      {
        heading: { en: "Personal Medical Kit Essentials", es: "Botiquín Médico Personal Esencial", pt: "Kit Médico Pessoal Essencial" },
        content: { en: "We recommend packing personal prescription medications, broad-spectrum antibiotics, oral rehydration salts (ORS), anti-diarrheal tablets (Imodium), insect repellent (20%+ DEET), and SPF50+ sunscreen. Pharmacies in India are well-stocked and accessible in all urban destinations.", es: "Recomendamos llevar medicamentos recetados, antibióticos de amplio espectro, sales de rehidratación oral (SRO), antidiarreicos, repelente de insectos (DEET 20%+) y protector solar FPS50+. Las farmacias en la India están bien abastecidas.", pt: "Recomendamos levar medicamentos de uso contínuo, antibióticos de amplo espectro, sais de reidratação oral, antidiarreicos, repelente de insetos (DEET 20%+) e protetor solar FPS50+." }
      },
      {
        heading: { en: "Food, Water & Dining Hygiene", es: "Higiene en Comidas, Agua y Restaurantes", pt: "Higiene em Alimentação e Água" },
        content: { en: "Drink exclusively bottled or UV-purified water (all MH India Trips vehicles and partner hotels provide unlimited complimentary purified water). Enjoy street food at vetted heritage food tours recommended by our local culinary guides.", es: "Beba exclusivamente agua embotellada o purificada (nuestros vehículos y hoteles ofrecen agua purificada ilimitada). Disfrute de la gastronomía en recorridos culinarios seleccionados por nuestros guías.", pt: "Beba exclusivamente água engarrafada ou purificada (nossos veículos e hotéis oferecem água purificada cortesia). Aproveite a gastronomia em tours culinários selecionados." }
      },
      {
        heading: { en: "Private Medical Network Access", es: "Acceso a Red Médica Privada de Elite", pt: "Acesso a Rede Médica Privada VIP" },
        content: { en: "India houses world-class private hospital networks (Apollo, Fortis, Max Healthcare) with English-speaking doctors. MH India Trips maintains priority medical access protocols for all guests, ensuring immediate 24/7 physician visits if required.", es: "La India cuenta con redes hospitalarias privadas de primer nivel internacional (Apollo, Fortis, Max) con médicos bilingües. MH India Trips garantiza asistencia médica prioritaria las 24 horas.", pt: "A Índia possui redes hospitalares privadas de alto nível internacional (Apollo, Fortis, Max) com médicos bilíngues. A MH India Trips garante atendimento médico prioritário 24h." }
      }
    ]
  },
  "packing-currency": {
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1600&auto=format",
    title: { en: "Packing Essentials & Currency Guide", es: "Lista de Equipaje y Guía de Moneda", pt: "Lista de Bagagem e Guia de Moeda" },
    subtitle: { en: "Mastering Indian currency, tipping customs, and smart packing for every region", es: "Dominando la moneda india, propinas y equipaje inteligente para cada región", pt: "Dominando a moeda indiana, gorjetas e bagagem inteligente para cada região" },
    specs: [
      { label: "Local Currency", value: "Indian Rupee (INR / ₹)" },
      { label: "Exchange Rate", value: "1 USD ≈ 83 INR (Approx)" },
      { label: "Card Acceptance", value: "Universal in Hotels & Fine Dining" },
      { label: "Electricity", value: "230V / 50Hz (Type C, D, M Plug)" }
    ],
    sections: [
      {
        heading: { en: "Master Travel Packing List", es: "Lista Maestra de Equipaje", pt: "Lista Principal de Bagagem" },
        bullets: { en: [
          "Breathable cotton & linen clothing suitable for layering",
          "Comfortable walking shoes & slip-on footwear for temple entrances",
          "Light scarf or shawl for head/shoulder coverage during monument tours",
          "Polarized sunglasses, sun hat, and SPF50+ sun protection",
          "Universal international power adapter (Type C/D plug)",
          "Lightweight rain shell jacket (essential for monsoon season)"
        ], es: [
          "Ropa fresca de algodón y lino ideal para vestir en capas",
          "Zapatos cómodos para caminar y calzado fácil de quitar para los templos",
          "Pañuelo o chal ligero para cubrirse al ingresar a los monumentos",
          "Gafas de sol polarizadas, sombrero y protector solar FPS50+",
          "Adaptador de corriente internacional universal (enchufe tipo C/D)",
          "Chaqueta cortavientos o impermeable ligera"
        ], pt: [
          "Roupas leves de algodão e linho ideais para vestir em camadas",
          "Sapatos confortáveis para caminhar e calçados fáceis de tirar para templos",
          "Lenço ou xale leve para cobrir ombros ao entrar em monumentos",
          "Óculos de sol polarizados, chapéu e protetor solar FPS50+",
          "Adaptador de tomada internacional universal (plugue tipo C/D)",
          "Jaqueta impermeável leve"
        ] }
      },
      {
        heading: { en: "Indian Rupee (INR) & Payment Methods", es: "Rupia India (INR) y Métodos de Pago", pt: "Rúpia Indiana (INR) e Formas de Pagamento" },
        content: { en: "The official currency is the Indian Rupee (INR / ₹). Credit cards (Visa, Mastercard, Amex) are accepted at all luxury hotels, fine restaurants, and boutique stores. We recommend carrying small cash notes (₹100, ₹200, ₹500) for local markets, rickshaw rides, and temple offerings.", es: "La moneda oficial es la Rupia India (INR / ₹). Se aceptan tarjetas de crédito en todos los hoteles de lujo, restaurantes y tiendas boutique. Se recomienda llevar efectivo en billetes pequeños (₹100, ₹200) para mercados locales.", pt: "A moeda oficial é a Rúpia Indiana (INR / ₹). Cartões de crédito são aceitos em todos os hotéis de luxo e restaurantes. Recomenda-se carregar dinheiro em notas pequenas (₹100, ₹200) para mercados locais." }
      },
      {
        heading: { en: "ATMs & Foreign Currency Exchange", es: "Cajeros Automáticos y Cambio de Divisas", pt: "Caixas Eletrônicos e Câmbio de Moedas" },
        content: { en: "ATMs are widely available in airports, hotel lobbies, and city centers. International debit cards allow cash withdrawals up to ₹10,000 per transaction. Currency exchange is available at international airports and authorized hotel desks.", es: "Los cajeros automáticos abundan en aeropuertos, vestíbulos de hoteles y centros urbanos. Las tarjetas internacionales permiten retirar efectivo fácilmente. El cambio de divisas está disponible en aeropuertos y hoteles.", pt: "Caixas eletrônicos estão disponíveis em aeroportos, hotéis e centros urbanos. Cartões internacionais permitem saques facilmente. O câmbio está disponível em aeroportos e hotéis." }
      },
      {
        heading: { en: "Chauffeur & Guide Tipping Etiquette", es: "Etiqueta de Propinas para Guías y Choferes", pt: "Etiqueta de Gorjetas para Guias e Motoristas" },
        content: { en: "Tipping is customary in the Indian hospitality industry for exceptional service. Suggested benchmarks: Private Chauffeur: ₹600–₹1000/day | Heritage Tour Guide: ₹1000–₹2000/day | Hotel Luggage Porter: ₹100–₹200 | Restaurants: 10% of total bill.", es: "Las propinas son habituales por un excelente servicio. Montos sugeridos: Chofer privado: ₹600–₹1000/día | Guía oficial: ₹1000–₹2000/día | Botones de hotel: ₹100–₹200 | Restaurantes: 10% del total.", pt: "Gorjetas são costumeiras por um serviço excelente. Valores sugeridos: Motorista particular: ₹600–₹1000/dia | Guia oficial: ₹1000–₹2000/dia | Carregador de malas: ₹100–₹200 | Restaurantes: 10% da conta." }
      }
    ]
  }
};

const validSlugs = Object.keys(travelInfoData);

export default async function TravelInfoPage({ params }: TravelInfoPageProps) {
  const { locale, slug } = await params;
  
  if (!validSlugs.includes(slug)) notFound();
  
  const page = travelInfoData[slug];
  const pageData = await getPageByIdAction(`travel-info-${slug}`);
  const dbContent = pageData?.content || {};
  
  const lang = (locale === "es" || locale === "pt") ? locale : "en";
  const Icon = page.icon;

  const title = dbContent.heroTitle?.[locale] || page.title?.[lang] || page.title?.en;
  const subtitle = dbContent.heroSubtitle?.[locale] || page.subtitle?.[lang] || page.subtitle?.en;
  const image = pageData?.heroImage || page.image;
  const sections = dbContent.sections || page.sections;
  const specs = page.specs || [];

  const otherPages = validSlugs.filter(s => s !== slug).map(s => ({
    slug: s,
    title: travelInfoData[s].title?.[lang] || travelInfoData[s].title?.en,
    icon: travelInfoData[s].icon
  }));

  const cleanSubtitle = subtitle.length > 100 ? subtitle.slice(0, 97) + "..." : subtitle;
  const infoSlides = [
    {
      image: image,
      title: title,
      subtitle: "MH India Trips Concierge Guide",
      location: "India Luxury Travel Desk",
      description: cleanSubtitle,
      objectPosition: "center 25%"
    },
    {
      image: "/images/taj_mahal_sunrise.png",
      title: "Bespoke Travel Assistance",
      subtitle: "MH India Trips Concierge",
      location: "24/7 Operations Desk",
      description: "Handcrafted insights, VIP arrival support, and 24/7 ground assistance across India.",
      objectPosition: "center 25%"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1A1E1D]">
      {/* Hero Header */}
      <PageHeroSlider locale={locale} slides={infoSlides} showBreadcrumb={`Travel Info / ${title}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-16">

        {/* SECTION 1: Concierge Quick Specs Grid */}
        <Reveal>
          <div className="bg-[#0A2A1E] text-white p-8 sm:p-10 rounded-3xl border-2 border-[#C5A862] shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#C5A862]/30 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A862]/20 border border-[#C5A862]/40 flex items-center justify-center text-[#C5A862] shrink-0 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A862] block">MH India Trips Concierge Spec</span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">{title}</h2>
                </div>
              </div>
              <span className="bg-[#C5A862] text-[#0A2A1E] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shrink-0 shadow-md">
                Verified Concierge Standard
              </span>
            </div>

            {/* Specs Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {specs.map((spec: any, idx: number) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-[#C5A862]/40 transition-colors">
                  <span className="text-[10px] uppercase font-bold text-[#C5A862] tracking-wider block">{spec.label}</span>
                  <p className="text-xs font-semibold text-white leading-snug">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* SECTION 2: Official Visa Portal Alert (If Visa Page) */}
        {slug === "visa-entry-requirements" && (
          <Reveal delay={50}>
            <div className="bg-gradient-to-r from-[#0A2A1E] via-[#124230] to-[#0A2A1E] text-white p-8 rounded-3xl shadow-xl border-2 border-[#C5A862] space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#C5A862] shrink-0" />
                <h3 className="text-xl font-serif font-bold text-white">Apply Directly on the Official Government e-Visa Portal</h3>
              </div>
              
              <p className="text-xs md:text-sm text-white/85 font-light leading-relaxed">
                {lang === "es"
                  ? "ADVERTENCIA IMPORTANTE: Solicite su e-Visa únicamente a través del sitio web oficial del Gobierno de la India. Tenga cuidado con agencias no autorizadas que cobran tarifas excesivas."
                  : lang === "pt"
                  ? "AVISO IMPORTANTE: Solicite seu e-Visa exclusivamente no site oficial do Governo da Índia. Cuidado com agências não autorizadas que cobram taxas abusivas."
                  : "CRITICAL ADVISORY: Apply for your official Indian e-Visa ONLY via the official Indian Government portal. Beware of fraudulent third-party agency websites charging unauthorized service fees."}
              </p>

              <div className="pt-2">
                <a
                  href="https://indianvisaonline.gov.in/evisa/tvoa.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C5A862] hover:bg-[#D8BE83] text-[#0A2A1E] text-xs font-extrabold uppercase tracking-wider py-3.5 px-7 rounded-full transition-all shadow-lg hover:scale-105"
                >
                  <span>Go to Official Govt Portal (indianvisaonline.gov.in)</span>
                  <ExternalLink className="w-4 h-4 text-[#0A2A1E]" />
                </a>
              </div>
            </div>
          </Reveal>
        )}

        {/* SECTION 3: Content Body & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Rich Sections */}
          <div className="lg:col-span-8 space-y-8">
            {sections.map((section: any, idx: number) => {
              const secHeading = extractLocalizedString(section.heading, lang);
              const secContent = extractLocalizedString(section.content, lang);
              const secBullets = extractStringList(section.bullets, lang);

              return (
                <Reveal key={idx} delay={idx * 60}>
                  <div className="bg-white border border-[#C5A862]/30 p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6">
                    
                    {/* Heading */}
                    <div className="flex items-center gap-3 border-b border-[#C5A862]/15 pb-4">
                      <div className="w-8 h-8 rounded-xl bg-[#0A2A1E] text-[#C5A862] flex items-center justify-center text-xs font-bold shrink-0">
                        0{idx + 1}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A2A1E] leading-snug">
                        {secHeading}
                      </h3>
                    </div>

                    {/* Paragraph Content */}
                    {secContent && (
                      <p className="text-sm sm:text-base text-[#1B1B1B]/80 font-light leading-relaxed">
                        {secContent}
                      </p>
                    )}

                    {/* Bullets as Feature Spec Cards */}
                    {secBullets.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 pt-2">
                        {secBullets.map((item: any, i: number) => {
                          const itemText = extractLocalizedString(item, lang);
                          if (!itemText) return null;
                          return (
                            <div key={i} className="flex items-start gap-3 bg-[#FAF8F5] border border-[#C5A862]/20 p-4 rounded-2xl hover:border-[#C5A862] transition-colors">
                              <CheckCircle className="w-5 h-5 text-[#C5A862] shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm font-medium text-[#0A2A1E] leading-relaxed">{itemText}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}

            {/* Interactive Concierge Callout Footer */}
            <Reveal delay={200}>
              <div className="bg-[#0A2A1E] text-white p-8 rounded-3xl border border-[#C5A862]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-bold text-[#C5A862] tracking-widest block">Custom Itinerary Assistance</span>
                  <h4 className="text-xl font-serif font-bold text-white">Have Specific Questions for Your Journey?</h4>
                  <p className="text-xs text-white/70 font-light max-w-md">Our bilingual luxury travel advisors are ready to answer your questions and customize every detail of your tour.</p>
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className="bg-[#C5A862] hover:bg-[#D8BE83] text-[#0A2A1E] text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shrink-0 hover:scale-105 shadow-md flex items-center gap-2"
                >
                  <span>Speak with Concierge</span>
                  <ArrowRight className="w-4 h-4 text-[#0A2A1E]" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* Quick Navigation to Other Travel Info */}
            <div className="bg-white border border-[#C5A862]/30 p-7 rounded-3xl shadow-xl space-y-5">
              <div className="flex items-center gap-2 border-b border-[#C5A862]/20 pb-3">
                <Sparkles className="w-4 h-4 text-[#C5A862]" />
                <h3 className="text-sm font-serif font-bold uppercase tracking-wider text-[#0A2A1E]">Traveler Resources</h3>
              </div>
              <div className="space-y-2">
                {otherPages.map((p) => {
                  const OtherIcon = p.icon;
                  return (
                    <Link 
                      key={p.slug} 
                      href={`/${locale}/travel-info/${p.slug}`} 
                      className="flex items-center gap-3 p-3.5 hover:bg-[#FAF8F5] transition-all rounded-2xl group border border-transparent hover:border-[#C5A862]/30"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#0A2A1E]/5 group-hover:bg-[#0A2A1E] text-[#0A2A1E] group-hover:text-[#C5A862] flex items-center justify-center transition-colors shrink-0">
                        <OtherIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#0A2A1E] group-hover:text-[#C5A862] transition-colors leading-snug">{p.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A862] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Direct Concierge WhatsApp Card */}
            <div className="bg-gradient-to-br from-[#0A2A1E] to-[#124230] p-7 rounded-3xl text-white space-y-4 shadow-xl border border-[#C5A862]/30">
              <div className="w-10 h-10 rounded-2xl bg-[#C5A862]/20 flex items-center justify-center text-[#C5A862]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white font-serif">24/7 WhatsApp Concierge</h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Direct connection with our on-ground team for instant responses to visa, travel, or itinerary questions.
                </p>
              </div>
              <a
                href="https://wa.me/919314635830"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#C5A862] hover:bg-[#D8BE83] text-[#0A2A1E] text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-all shadow-md hover:scale-105"
              >
                Chat on WhatsApp (+91 9314635830)
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
