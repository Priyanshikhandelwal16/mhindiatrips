import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shield, Clock, Heart, Briefcase, Leaf, ArrowRight, CheckCircle } from "lucide-react";
import { getPageByIdAction } from "@/app/actions/queries";

interface TravelInfoPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const travelInfoData: Record<string, any> = {
  "visa-entry-requirements": {
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format",
    title: { en: "Visa & Entry Requirements", es: "Visa y Requisitos de Entrada", pt: "Visto e Requisitos de Entrada" },
    subtitle: { en: "Everything you need to enter India seamlessly", es: "Todo lo necesario para entrar a India", pt: "Tudo que precisa para entrar na \u00cdndia" },
    sections: [
      {
        heading: { en: "e-Visa Overview", es: "Resumen de e-Visa", pt: "Vis\u00e3o Geral do e-Visto" },
        content: { en: "India offers an electronic visa (e-Visa) system for citizens of 150+ countries. The e-Tourist Visa allows stays of up to 90 days for tourism, sightseeing, and casual visits. Applications are processed online within 72 hours, and the visa is valid for 1 year from the date of issue with double entry permitted.", es: "India ofrece un sistema de visa electr\u00f3nica para ciudadanos de m\u00e1s de 150 pa\u00edses. La e-Visa tur\u00edstica permite estancias de hasta 90 d\u00edas.", pt: "A \u00cdndia oferece um sistema de visto eletr\u00f4nico para cidad\u00e3os de mais de 150 pa\u00edses." }
      },
      {
        heading: { en: "Required Documents", es: "Documentos Necesarios", pt: "Documentos Necess\u00e1rios" },
        bullets: { en: ["Valid passport with 6+ months validity", "Recent passport-size photo (white background)", "Return flight ticket confirmation", "Hotel booking or tour itinerary", "Sufficient funds proof (bank statement)"], es: ["Pasaporte v\u00e1lido con 6+ meses de validez", "Foto reciente tama\u00f1o pasaporte", "Confirmaci\u00f3n de vuelo de regreso", "Reserva de hotel o itinerario", "Prueba de fondos suficientes"], pt: ["Passaporte v\u00e1lido com 6+ meses de validade", "Foto recente tamanho passaporte", "Confirma\u00e7\u00e3o de voo de regresso", "Reserva de hotel ou itiner\u00e1rio", "Prova de fundos suficientes"] }
      },
      {
        heading: { en: "Processing Time & Fees", es: "Tiempo de Procesamiento", pt: "Tempo de Processamento" },
        content: { en: "Standard processing takes 3-5 business days. Urgent processing is available within 24-48 hours. Visa fees range from $25-80 depending on nationality and duration. We recommend applying at least 2 weeks before your travel date. MH India Trips provides complimentary visa assistance for all booked guests.", es: "El procesamiento est\u00e1ndar toma 3-5 d\u00edas h\u00e1biles. Las tarifas var\u00edan de $25-80.", pt: "O processamento padr\u00e3o leva 3-5 dias \u00fateis. As taxas variam de $25-80." }
      },
      {
        heading: { en: "Airport Arrival Tips", es: "Consejos de Llegada", pt: "Dicas de Chegada" },
        content: { en: "Upon arrival at Delhi, Mumbai, or any major airport, proceed to the e-Visa immigration counter. Keep a printed copy of your e-Visa approval. Immigration typically takes 15-30 minutes. Our private chauffeurs will be waiting at the arrivals hall with a personalized name board. All MH India Trips guests receive VIP airport fast-track assistance.", es: "Al llegar a Delhi, Mumbai o cualquier aeropuerto principal, dir\u00edjase al mostrador de e-Visa.", pt: "Ao chegar em Delhi, Mumbai ou qualquer aeroporto principal, dirija-se ao balc\u00e3o de e-Visto." }
      }
    ]
  },
  "best-time-climate": {
    icon: Clock,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format",
    title: { en: "Best Time to Visit & Climate", es: "Mejor \u00c9poca para Visitar", pt: "Melhor \u00c9poca para Visitar" },
    subtitle: { en: "Season-by-season guide to India's diverse climates", es: "Gu\u00eda estaci\u00f3n por estaci\u00f3n del clima de India", pt: "Guia esta\u00e7\u00e3o por esta\u00e7\u00e3o do clima da \u00cdndia" },
    sections: [
      {
        heading: { en: "Peak Season (October - March)", es: "Temporada Alta (Octubre - Marzo)", pt: "Alta Temporada (Outubro - Mar\u00e7o)" },
        content: { en: "The ideal time for most of India. Pleasant temperatures (15-30\u00b0C), clear skies, and minimal rainfall. Perfect for Rajasthan, Kerala, Goa, Delhi, Agra, and most heritage destinations. December-January can be cool in the north (5-15\u00b0C). This is wedding season, so book accommodations and flights well in advance.", es: "El momento ideal para la mayor parte de India. Temperaturas agradables, cielos despejados.", pt: "O momento ideal para a maior parte da \u00cdndia. Temperaturas agrad\u00e1veis, c\u00e9us limpos." }
      },
      {
        heading: { en: "Shoulder Season (April - June)", es: "Temporada Media (Abril - Junio)", pt: "Meia Temporada (Abril - Junho)" },
        content: { en: "Hot in plains (35-45\u00b0C) but excellent for Himalayan hill stations like Shimla, Manali, Darjeeling, and Ladakh. Less crowded, better hotel rates. Ideal for mountain retreats and tea plantation tours. Southern India remains manageable with beach destinations.", es: "Caluroso en las llanuras pero excelente para estaciones de monta\u00f1a del Himalaya.", pt: "Quente nas plan\u00edcies mas excelente para esta\u00e7\u00f5es de montanha do Himalaia." }
      },
      {
        heading: { en: "Monsoon Season (July - September)", es: "Temporada de Monz\u00f3n (Julio - Septiembre)", pt: "Temporada de Mon\u00e7\u00e3o (Julho - Setembro)" },
        content: { en: "Lush green landscapes, Ayurvedic rejuvenation season in Kerala, and dramatic waterfalls. Rajasthan gets refreshing rains. Avoid coastal areas and hill roads during heavy rains. Best for: Kerala Ayurveda retreats, Rajasthan photography, Meghalaya living root bridges.", es: "Paisajes verdes exuberantes, temporada de Ayurveda en Kerala.", pt: "Paisagens verdes exuberantes, temporada de Ayurveda em Kerala." }
      },
      {
        heading: { en: "Regional Climate Guide", es: "Gu\u00eda Clim\u00e1tica Regional", pt: "Guia Clim\u00e1tico Regional" },
        bullets: { en: ["North India (Delhi, Agra, Rajasthan): Best Oct-Mar, hot Apr-Jun", "South India (Kerala, Karnataka, Tamil Nadu): Year-round, peak Nov-Mar", "Himalayas (Ladakh, Himachal, Uttarakhand): May-Oct for trekking", "East India (Kolkata, Darjeeling, NE States): Oct-Mar ideal", "Goa & Beaches: Nov-Feb peak, monsoon Jul-Sep for quiet beauty"], es: ["Norte: Oct-Mar ideal", "Sur: Todo el a\u00f1o, pico Nov-Mar", "Himalaya: May-Oct para senderismo", "Este: Oct-Mar ideal", "Goa y Playas: Nov-Feb pico"], pt: ["Norte: Out-Mar ideal", "Sul: Todo o ano, pico Nov-Mar", "Himalaia: Mai-Out para trekking", "Leste: Out-Mar ideal", "Goa e Praias: Nov-Fev pico"] }
      }
    ]
  },
  "solo-female-travel": {
    icon: Heart,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format",
    title: { en: "Solo Female Travel Safety", es: "Viaje de Mujer Sola por India", pt: "Viagem de Mulher Sozinha na \u00cdndia" },
    subtitle: { en: "India welcomes solo women travelers with warmth and safety", es: "India da la bienvenida a mujeres viajeras solas", pt: "A \u00cdndia d\u00e1 as boas-vindas a mulheres viajantes sozinhas" },
    sections: [
      {
        heading: { en: "Safety With MH India Trips", es: "Seguridad con MH India Trips", pt: "Seguran\u00e7a com MH India Trips" },
        content: { en: "All our solo female travelers receive a dedicated female guide option, verified male drivers with background checks, 24/7 emergency concierge hotline, GPS-tracked vehicles, and vetted luxury hotel accommodations. We've safely hosted 500+ solo female travelers from 40+ countries with zero safety incidents.", es: "Todas nuestras viajeras solas reciben gu\u00eda femenina dedicada, conductores verificados, l\u00ednea de emergencia 24/7.", pt: "Todas as nossas viajantes sozinhas recebem guia feminina dedicada, motoristas verificados, linha de emerg\u00eancia 24/7." }
      },
      {
        heading: { en: "Dress Code & Cultural Tips", es: "C\u00f3digo de Vestimenta", pt: "C\u00f3digo de Vestimenta" },
        content: { en: "India is generally conservative. We recommend covering shoulders and knees at temples and rural areas. In cities like Delhi and Mumbai, western clothing is perfectly fine. Carry a light scarf for temple visits. Our guides will always advise on appropriate attire for each location.", es: "India es generalmente conservadora. Recomendamos cubrir hombros y rodillas en templos.", pt: "A \u00cdndia \u00e9 geralmente conservadora. Recomendamos cobrir ombros e joelhos em templos." }
      },
      {
        heading: { en: "Recommended Destinations for Solo Women", es: "Destinos Recomendados", pt: "Destinos Recomendados" },
        bullets: { en: ["Kerala - Peaceful backwaters and wellness retreats", "Rajasthan - Palace stays with dedicated female staff", "Goa - Safe beach culture with international community", "Himachal Pradesh - Mountain retreats and yoga centers", "Udaipur - Romantic lake city with boutique hotels"], es: ["Kerala - Retiros de bienestar", "Rajast\u00e1n - Palacios con personal femenino", "Goa - Cultura playera segura", "Himachal Pradesh - Retiros de monta\u00f1a", "Udaipur - Ciudad rom\u00e1ntica del lago"], pt: ["Kerala - Retiros de bem-estar", "Rajast\u00e3o - Pal\u00e1cios com staff feminino", "Goa - Cultura praiana segura", "Himachal Pradesh - Retiros de montanha", "Udaipur - Cidade rom\u00e2ntica do lago"] }
      },
      {
        heading: { en: "Emergency Contacts & Support", es: "Contactos de Emergencia", pt: "Contactos de Emerg\u00eancia" },
        content: { en: "Emergency police: 100 | Women helpline: 1091 | Tourist police: 1363. All MH India Trips guests receive our 24/7 WhatsApp concierge number. Our local team is always within 30-minute reach in all operating cities.", es: "Polic\u00eda de emergencia: 100 | L\u00ednea de mujeres: 1091 | Polic\u00eda tur\u00edstica: 1363.", pt: "Pol\u00edcia de emerg\u00eancia: 100 | Linha feminina: 1091 | Pol\u00edcia tur\u00edstica: 1363." }
      }
    ]
  },
  "vaccinations-health": {
    icon: Shield,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format",
    title: { en: "Vaccinations & Health Advice", es: "Vacunas y Salud", pt: "Vacina\u00e7\u00e3o e Sa\u00fade" },
    subtitle: { en: "Stay healthy throughout your India journey", es: "Mantente saludable durante tu viaje a India", pt: "Mantenha-se saud\u00e1vel durante sua viagem \u00e0 \u00cdndia" },
    sections: [
      {
        heading: { en: "Recommended Vaccinations", es: "Vacunas Recomendadas", pt: "Vacinas Recomendadas" },
        bullets: { en: ["Hepatitis A & B (strongly recommended)", "Typhoid fever vaccine", "Tetanus-Diphtheria booster if needed", "Japanese Encephalitis (for rural/extended stays)", "Rabies (if planning wildlife activities)", "COVID-19 (latest booster recommended)"], es: ["Hepatitis A y B", "Vacuna contra fiebre tifoidea", "Refuerzo t\u00e9tanos-difteria", "Encefalitis japonesa (estancias rurales)", "Rabia (actividades con vida silvestre)", "COVID-19 (refuerzo recomendado)"], pt: ["Hepatite A e B", "Vacina contra febre tif\u00f3ide", "Refor\u00e7o t\u00e9tano-difteria", "Encefalite japonesa (estad\u00edas rurais)", "Raiva (atividades com vida selvagem)", "COVID-19 (refor\u00e7o recomendado)"] }
      },
      {
        heading: { en: "Medicine Kit Essentials", es: "Kit M\u00e9dico Esencial", pt: "Kit M\u00e9dico Essencial" },
        content: { en: "Carry: anti-diarrheal (Imodium), rehydration salts, antihistamines, sunscreen SPF50+, insect repellent (DEET-based), hand sanitizer, water purification tablets, and any personal prescriptions. Pharmacies are widely available in India and most medicines are affordable over-the-counter.", es: "Lleve: antidiarreico, sales de rehidrataci\u00f3n, antihistam\u00ednicos, protector solar SPF50+, repelente de insectos.", pt: "Leve: antidiarreico, sais de reidrata\u00e7\u00e3o, anti-histam\u00ednicos, protetor solar SPF50+, repelente de insetos." }
      },
      {
        heading: { en: "Food & Water Safety", es: "Seguridad Alimentaria", pt: "Seguran\u00e7a Alimentar" },
        content: { en: "Drink only bottled or filtered water (our hotels provide complimentary purified water). Street food is an experience but stick to freshly cooked hot items. All MH India Trips restaurant recommendations are vetted for hygiene standards. We provide filtered water bottles in all private vehicles.", es: "Beba solo agua embotellada o filtrada. La comida callejera debe estar reci\u00e9n cocinada.", pt: "Beba apenas \u00e1gua engarrafada ou filtrada. A comida de rua deve estar rec\u00e9m cozinhada." }
      },
      {
        heading: { en: "Travel Insurance", es: "Seguro de Viaje", pt: "Seguro de Viagem" },
        content: { en: "We strongly recommend comprehensive travel insurance covering medical emergencies, trip cancellation, and baggage loss. India has excellent private hospitals in all major cities. MH India Trips maintains partnerships with top hospitals for priority access if needed.", es: "Recomendamos seguro de viaje completo que cubra emergencias m\u00e9dicas.", pt: "Recomendamos seguro de viagem completo que cubra emerg\u00eancias m\u00e9dicas." }
      }
    ]
  },
  "packing-currency": {
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format",
    title: { en: "Packing List & Currency Tips", es: "Lista de Equipaje y Moneda", pt: "Lista de Mala e Moeda" },
    subtitle: { en: "Pack smart for every Indian season and region", es: "Empaque inteligente para cada temporada", pt: "Fa\u00e7a as malas de forma inteligente para cada temporada" },
    sections: [
      {
        heading: { en: "Essential Packing List", es: "Lista Esencial", pt: "Lista Essencial" },
        bullets: { en: ["Light cotton clothing (layerable for temperature changes)", "Comfortable walking shoes and sandals", "Light scarf/shawl for temple visits", "Sunglasses, hat, and SPF50 sunscreen", "Power adapter (Type C/D, 230V)", "Reusable water bottle with filter", "Small daypack for excursions", "Light rain jacket (all seasons)", "Camera with extra memory cards"], es: ["Ropa ligera de algod\u00f3n", "Zapatos c\u00f3modos y sandalias", "Pa\u00f1uelo/chal para templos", "Gafas de sol, sombrero y protector solar", "Adaptador de corriente", "Botella de agua reutilizable", "Mochila peque\u00f1a para excursiones", "Chaqueta impermeable ligera", "C\u00e1mara con tarjetas extra"], pt: ["Roupa leve de algod\u00e3o", "Sapatos confort\u00e1veis e sand\u00e1lias", "Len\u00e7o/xale para templos", "\u00d3culos de sol, chap\u00e9u e protetor solar", "Adaptador de corrente", "Garrafa de \u00e1gua reutiliz\u00e1vel", "Mochila pequena para excurs\u00f5es", "Jaqueta imperme\u00e1vel leve", "C\u00e2mera com cart\u00f5es extra"] }
      },
      {
        heading: { en: "Season-Specific Additions", es: "Adiciones por Temporada", pt: "Adi\u00e7\u00f5es por Temporada" },
        content: { en: "Winter (Nov-Feb): Warm layers, thermal wear for North India mornings. Summer (Mar-Jun): Extra light fabrics, cooling towel. Monsoon (Jul-Sep): Waterproof bag covers, quick-dry clothing, umbrella. Hill stations: Warm fleece/jacket regardless of season.", es: "Invierno: Capas c\u00e1lidas para el Norte. Verano: Telas extra ligeras. Monz\u00f3n: Ropa impermeable.", pt: "Inverno: Camadas quentes para o Norte. Ver\u00e3o: Tecidos extra leves. Mon\u00e7\u00e3o: Roupa imperme\u00e1vel." }
      },
      {
        heading: { en: "Indian Rupee & Currency Exchange", es: "Rupia India y Cambio de Moneda", pt: "R\u00fapia Indiana e C\u00e2mbio" },
        content: { en: "Currency: Indian Rupee (INR/\u20b9). 1 USD \u2248 83 INR (approx). Exchange at airport or authorized dealers. ATMs available everywhere. Visa/Mastercard widely accepted in cities and hotels. Carry small denominations (\u20b9100-500) for tips and local markets. UPI payments (Google Pay) are universal in India. MH India Trips handles all major payments digitally.", es: "Moneda: Rupia India (INR). 1 USD \u2248 83 INR. Cajeros en todas partes. Visa/Mastercard aceptados.", pt: "Moeda: R\u00fapia Indiana (INR). 1 USD \u2248 83 INR. Caixas eletr\u00f4nicos em toda parte. Visa/Mastercard aceitos." }
      },
      {
        heading: { en: "Tipping Guidelines", es: "Gu\u00eda de Propinas", pt: "Guia de Gorjetas" },
        content: { en: "Tipping is appreciated but not mandatory. Suggested: Hotel porter \u20b9100-200, restaurant 10% of bill, private driver \u20b9500-1000/day, guide \u20b91000-2000/day, spa therapist 10-15%. MH India Trips provides tipping guidelines specific to your itinerary.", es: "Las propinas se aprecian pero no son obligatorias. Sugerido: Portero \u20b9100-200, restaurante 10%.", pt: "As gorjetas s\u00e3o apreciadas mas n\u00e3o obrigat\u00f3rias. Sugerido: Porteiro \u20b9100-200, restaurante 10%." }
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

  const otherPages = validSlugs.filter(s => s !== slug).map(s => ({
    slug: s,
    title: travelInfoData[s].title?.[lang] || travelInfoData[s].title?.en,
    icon: travelInfoData[s].icon
  }));

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans text-[#1A1E1D]">
      {/* Hero Header */}
      <section className="relative bg-[#0A2A1E] text-white py-16 md:py-24 flex items-center justify-center text-center w-full">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 bg-[#C5A862]/20 flex items-center justify-center rounded-full shrink-0">
              <Icon className="w-5 h-5 text-[#C5A862]" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">{title}</h1>
          </div>
          <p className="text-xs sm:text-sm text-white/80 font-light max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {sections.map((section: any, idx: number) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-[#1A1E1D]">
                  {section.heading?.[lang] || section.heading?.en}
                </h2>
                {section.content && (
                  <p className="text-sm text-[#1A1E1D]/70 leading-relaxed font-light">
                    {section.content?.[lang] || section.content?.en}
                  </p>
                )}
                {section.bullets && (
                  <ul className="space-y-2.5 pt-1">
                    {(section.bullets?.[lang] || section.bullets?.en || []).map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#1A1E1D]/70">
                        <CheckCircle className="w-4 h-4 text-[#C5A862] shrink-0 mt-0.5" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 h-fit">
            {/* Other Travel Info Pages */}
            <div className="bg-white border border-[#C5A862]/15 p-6 space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1E1D]">More Travel Info</h3>
              <div className="space-y-2">
                {otherPages.map((p) => {
                  const OtherIcon = p.icon;
                  return (
                    <Link key={p.slug} href={`/${locale}/travel-info/${p.slug}`} className="flex items-center gap-3 p-3 hover:bg-[#FAF8F5] transition-colors group">
                      <OtherIcon className="w-4 h-4 text-[#C5A862] shrink-0" />
                      <span className="text-xs font-medium text-[#1A1E1D]/70 group-hover:text-[#C5A862] transition-colors">{p.title}</span>
                      <ArrowRight className="w-3 h-3 text-[#C5A862] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0A2A1E] p-6 space-y-4 text-white">
              <h4 className="text-sm font-bold">Need Help Planning?</h4>
              <p className="text-[11px] text-white/60 font-light leading-relaxed">
                Our travel experts can answer all your questions and help plan the perfect India trip.
              </p>
              <Link href={`/${locale}/contact`} className="block w-full text-center bg-[#C5A862] text-[#0A2A1E] text-[10px] font-bold uppercase tracking-wider py-3 hover:bg-[#D8BE83] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
