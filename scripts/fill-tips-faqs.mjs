import fs from "fs";
import path from "path";
const file = path.join(process.cwd(), "src/data/fallback/states.json");
let states = JSON.parse(fs.readFileSync(file, "utf-8"));

const updates = {
  "rajasthan": {
    travelTips: [
      {en:"Buy composite ticket at first monument for multi-site discounts.",es:"Compre boleto combinado.",pt:"Compre bilhete combinado."},
      {en:"Carry water and sunscreen — can reach 45°C in summer.",es:"Lleve agua y protector solar.",pt:"Leve água e protetor solar."},
      {en:"Book desert safari camps in Jaisalmer a week ahead.",es:"Reserve safaris con una semana.",pt:"Reserve safaris com uma semana."},
      {en:"Bargain in markets — initial prices are 3x actual value.",es:"Regatee en los mercados.",pt:"Regateie nos mercados."}
    ],
    faqs: [
      {q:{en:"How many days for Rajasthan?",es:"¿Cuántos días?",pt:"Quantos dias?"},a:{en:"7-10 days for Jaipur (2-3), Jodhpur (2), Udaipur (2-3), Jaisalmer (2).",es:"7-10 días.",pt:"7-10 dias."}},
      {q:{en:"Best month for desert safari?",es:"¿Mejor mes?",pt:"Melhor mês?"},a:{en:"November to February — cool nights, clear skies.",es:"Noviembre a febrero.",pt:"Novembro a fevereiro."}},
      {q:{en:"Is Rajasthan safe?",es:"¿Es seguro?",pt:"É seguro?"},a:{en:"Yes, very tourist-friendly with hospitable locals and excellent tourism infrastructure.",es:"Sí, muy amigable.",pt:"Sim, muito amigável."}}
    ]
  },
  "kerala": {
    travelTips: [
      {en:"Book houseboats on weekdays for better rates.",es:"Reserve casas flotantes entre semana.",pt:"Reserve casas flutuantes durante a semana."},
      {en:"Ayurveda treatments need 7-14 days minimum.",es:"Ayurveda necesita 7-14 días mínimo.",pt:"Ayurveda precisa de 7-14 dias."},
      {en:"Monsoon (Jun-Sep) offers lush scenery and spa deals.",es:"El monzón ofrece paisajes verdes.",pt:"A monção oferece paisagens verdes."},
      {en:"Carry mosquito repellent for backwater areas.",es:"Lleve repelente de mosquitos.",pt:"Leve repelente de mosquitos."}
    ],
    faqs: [
      {q:{en:"Best time to visit Kerala?",es:"¿Mejor época?",pt:"Melhor época?"},a:{en:"October to March for sightseeing. Jun-Sep for Ayurveda retreats.",es:"Octubre a marzo.",pt:"Outubro a março."}},
      {q:{en:"How many days for Kerala?",es:"¿Cuántos días?",pt:"Quantos dias?"},a:{en:"7-10 days: Kochi (2), Munnar (2), Thekkady (1-2), Alleppey houseboat (1-2), beach (2).",es:"7-10 días.",pt:"7-10 dias."}},
      {q:{en:"Is Kerala safe for solo women?",es:"¿Seguro para mujeres?",pt:"Seguro para mulheres?"},a:{en:"Yes, one of India's safest states with high literacy and progressive culture.",es:"Sí, muy seguro.",pt:"Sim, muito seguro."}}
    ]
  },
  "goa": {
    travelTips: [
      {en:"North Goa for nightlife, South Goa for quiet luxury.",es:"Norte para fiestas, Sur para lujo.",pt:"Norte para festas, Sul para luxo."},
      {en:"Rent a scooter — most flexible way to explore.",es:"Alquile una moto.",pt:"Alugue uma moto."},
      {en:"Visit Old Goa churches on weekday mornings.",es:"Visite iglesias entre semana.",pt:"Visite igrejas durante a semana."}
    ],
    faqs: [
      {q:{en:"North or South Goa?",es:"¿Norte o Sur?",pt:"Norte ou Sul?"},a:{en:"North for markets and nightlife, South for luxury and quiet. We recommend both.",es:"Norte para vida nocturna, Sur para lujo.",pt:"Norte para vida noturna, Sul para luxo."}},
      {q:{en:"Best time for Goa?",es:"¿Mejor época?",pt:"Melhor época?"},a:{en:"November to February. Monsoon (Jun-Sep) has lush green charm and resort discounts.",es:"Noviembre a febrero.",pt:"Novembro a fevereiro."}}
    ]
  },
  "karnataka": {
    travelTips: [
      {en:"Hampi needs 2 full days — ruins spread across 26 sq km.",es:"Hampi necesita 2 días completos.",pt:"Hampi precisa de 2 dias completos."},
      {en:"Mysore Palace is illuminated Sundays — do not miss.",es:"Palacio de Mysore iluminado los domingos.",pt:"Palácio de Mysore iluminado aos domingos."},
      {en:"Coorg coffee plantations make perfect 2-day retreats.",es:"Plantaciones de café de Coorg son retiros perfectos.",pt:"Plantações de café de Coorg são retiros perfeitos."}
    ],
    faqs: [
      {q:{en:"How to reach Hampi?",es:"¿Cómo llegar a Hampi?",pt:"Como chegar a Hampi?"},a:{en:"Fly to Hubli (40km) or overnight train from Bangalore to Hospet.",es:"Vuelo a Hubli o tren desde Bangalore.",pt:"Voo para Hubli ou trem de Bangalore."}},
      {q:{en:"Best time for Karnataka?",es:"¿Mejor época?",pt:"Melhor época?"},a:{en:"October to March. Coorg beautiful in monsoon too.",es:"Octubre a marzo.",pt:"Outubro a março."}}
    ]
  },
  "maharashtra": {
    travelTips: [
      {en:"Mumbai local trains are fastest — avoid 8-10 AM and 6-8 PM rush.",es:"Trenes locales más rápidos — evite horas pico.",pt:"Trens locais mais rápidos — evite horários de pico."},
      {en:"Ajanta-Ellora caves need a full day each from Aurangabad.",es:"Las cuevas necesitan un día cada una.",pt:"As cavernas precisam de um dia cada."},
      {en:"Mumbai street food is legendary — try vada pav and pav bhaji.",es:"Comida callejera legendaria.",pt:"Comida de rua lendária."}
    ],
    faqs: [
      {q:{en:"How many days for Mumbai?",es:"¿Cuántos días?",pt:"Quantos dias?"},a:{en:"2-3 days for Mumbai, add 2 for Ajanta-Ellora from Aurangabad.",es:"2-3 días + 2 para Ajanta-Ellora.",pt:"2-3 dias + 2 para Ajanta-Ellora."}},
      {q:{en:"Best time for Maharashtra?",es:"¿Mejor época?",pt:"Melhor época?"},a:{en:"October to March. Monsoon beautiful for Western Ghats.",es:"Octubre a marzo.",pt:"Outubro a março."}}
    ]
  },
  "tamil-nadu": {
    travelTips: [
      {en:"Temple dress code strict — cover shoulders and knees, remove shoes.",es:"Código de vestimenta estricto en templos.",pt:"Código de vestimenta rigoroso nos templos."},
      {en:"South Indian breakfast (idli, dosa, vada) is a must-try.",es:"El desayuno sudindio es imprescindible.",pt:"O café da manhã sul-indiano é imperdível."},
      {en:"Hire a guide at Meenakshi Temple for the rich symbolism.",es:"Contrate guía en Meenakshi.",pt:"Contrate guia em Meenakshi."}
    ],
    faqs: [
      {q:{en:"Best time for Tamil Nadu?",es:"¿Mejor época?",pt:"Melhor época?"},a:{en:"November to March (post-monsoon). Hill stations great year-round.",es:"Noviembre a marzo.",pt:"Novembro a março."}},
      {q:{en:"Is Tamil Nadu vegetarian-friendly?",es:"¿Es vegetariano?",pt:"É vegetariano?"},a:{en:"Absolutely! South India has world-class vegetarian food — dosas, idlis, sambar.",es:"¡Sí! Excelente comida vegetariana.",pt:"Sim! Excelente comida vegetariana."}}
    ]
  },
  "gujarat": {
    travelTips: [
      {en:"Rann Utsav festival (Nov-Feb) is a must — book tent stays early.",es:"Reserve Rann Utsav con anticipación.",pt:"Reserve Rann Utsav com antecedência."},
      {en:"Gujarat is a dry state — no alcohol available publicly.",es:"Estado seco — sin alcohol.",pt:"Estado seco — sem álcool."},
      {en:"Try the Gujarati thali — unlimited vegetarian dishes.",es:"Pruebe el thali gujarati.",pt:"Prove o thali gujarati."}
    ],
    faqs: [
      {q:{en:"When is Rann Utsav?",es:"¿Cuándo es?",pt:"Quando é?"},a:{en:"November to February. Full moon nights most spectacular on white salt desert.",es:"Noviembre a febrero.",pt:"Novembro a fevereiro."}},
      {q:{en:"Is Gujarat worth visiting?",es:"¿Vale la pena?",pt:"Vale a visita?"},a:{en:"Yes! Gir lions, Rann of Kutch, UNESCO stepwells, and incredible vegetarian cuisine.",es:"¡Sí! Leones, Kutch y gastronomía.",pt:"Sim! Leões, Kutch e gastronomia."}}
    ]
  },
  "uttarakhand": {
    travelTips: [
      {en:"Rishikesh is India's yoga capital — book ashram stays in advance.",es:"Rishikesh es la capital del yoga.",pt:"Rishikesh é a capital do yoga."},
      {en:"Char Dham opens May-October — book helicopter services early.",es:"Char Dham abre mayo a octubre.",pt:"Char Dham abre maio a outubro."},
      {en:"Jim Corbett safaris book fast — reserve 2-3 months ahead.",es:"Reserve safaris con 2-3 meses.",pt:"Reserve safaris com 2-3 meses."}
    ],
    faqs: [
      {q:{en:"Best time for Uttarakhand?",es:"¿Mejor época?",pt:"Melhor época?"},a:{en:"March-June and September-November. Winter for snow in Auli.",es:"Marzo-junio y sept-nov.",pt:"Março-junho e set-nov."}},
      {q:{en:"Is rafting in Rishikesh safe?",es:"¿Es seguro el rafting?",pt:"O rafting é seguro?"},a:{en:"Yes with certified operators. Grade 3-4 rapids are safe with proper equipment.",es:"Sí, con operadores certificados.",pt:"Sim, com operadores certificados."}}
    ]
  }
};

for (const [slug, data] of Object.entries(updates)) {
  const idx = states.findIndex(s => s.slug === slug);
  if (idx !== -1) {
    if (!states[idx].travelTips || states[idx].travelTips.length === 0) states[idx].travelTips = data.travelTips;
    if (!states[idx].faqs || states[idx].faqs.length === 0) states[idx].faqs = data.faqs;
  }
}

fs.writeFileSync(file, JSON.stringify(states, null, 2), "utf-8");
console.log("Done!");
for (const s of states) {
  console.log(`  ${s.slug}: ${(s.cities||[]).length} cities, ${(s.travelTips||[]).length} tips, ${(s.faqs||[]).length} FAQs`);
}
