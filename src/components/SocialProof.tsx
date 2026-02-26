import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function SocialProof() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { authority_numbers_24, calendar_2026_25, curriculum_26 } = sections;

  return (
    <>
      {/* Authority Numbers (Image 24) */}
      <Section id="authority" className="bg-[#F9F9F9] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F9F9F9] space-y-6">
            {[
              { num: "+600 PARTICIPANTES E MILHARES DE CONEXÕES", desc: "nos eventos presenciais" },
              { num: "+50 HORAS ENTREGUES", desc: "masterclass online" },
              { num: "+40 HORAS DIVULGANDO", desc: "podcast" },
              { num: "+5 MILHÕES EM", desc: "negócios feitos" }
            ].map((stat, i) => (
              <div key={i} className="border border-venus-black rounded-lg px-8 py-6 text-center hover:bg-venus-black hover:text-white transition-colors cursor-default">
                <p className="font-display text-xl uppercase leading-tight mb-1">{stat.num}</p>
                <p className="font-script text-3xl lowercase">{stat.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
              alt="Social Proof"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Calendar (Image 25) */}
      <Section id="calendar" className="bg-[#F9F9F9]">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-2">CALENDÁRIO CLUB MDN 2026</h2>
          <h2 className="font-display text-4xl md:text-5xl uppercase">ENCONTROS PRESENCIAIS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { month: "FEVEREIRO", event: "Imersão mulher de negócios O Renascimento", img: "https://picsum.photos/seed/c1/300/200" },
            { month: "MARÇO", event: "MDN experiencie especial dia da mulher em alto mar", img: "https://picsum.photos/seed/c2/300/200" },
            { month: "ABRIL", event: "MDN experience - business and wild. Passeio a cavalo na praia.", img: "https://picsum.photos/seed/c3/300/200" },
            { month: "MAIO", event: "IMERSÃO MDN Experience - 2 anos de club", img: "https://picsum.photos/seed/c4/300/200" },
            { month: "JULHO", event: "MDN Experience - Business & Wellness. Spa & Wellness day para empresárias", img: "https://picsum.photos/seed/c5/300/200" },
            { month: "SETEMBRO", event: "Café de Negócios", img: "https://picsum.photos/seed/c6/300/200" },
            { month: "OUTUBRO", event: "Viagem para europa", img: "https://picsum.photos/seed/c7/300/200" },
            { month: "NOVEMBRO", event: "Sunset Club MDN", img: "https://picsum.photos/seed/c8/300/200" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-32 overflow-hidden rounded-lg mb-4">
                <img src={item.img} alt={item.month} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl uppercase mb-2">{item.month}</h3>
              <p className="font-condensed text-xs text-gray-600 uppercase leading-relaxed">{item.event}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Curriculum (Image 26) */}
      <Section id="curriculum" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-2">12 PASSOS PARA CONSTRUIR</h2>
            <p className="font-script text-4xl md:text-5xl mb-12">um negócio valioso</p>
            
            <div className="space-y-2 font-condensed text-sm uppercase tracking-wide text-venus-black">
              {[
                "METAS DECISÃO e DIREÇÃO",
                "COMO MONETIZAR O SEU CAPITAL SOCIAL",
                "PERFIL DE CLIENTE IDEAL",
                "POSICIONAMENTO MAGNÉTICO | mkt vibracional",
                "MODELO DE NEGÓCIO E ESTERIA DE PRODUTOS",
                "ARQUITETURA DE OFERTAS irresistíveis",
                "NARRATIVAS QUE CONVERTEM - STORIES E ROTEIROS",
                "FUNIL DE CONTEÚDO | vendas sistêmicas",
                "CANAIS DE AQUISIÇÃO DE CLIENTES",
                "COMERCIAL: IA E AUTOMAÇÃO",
                "EXPANSÃO E LEGADO: CRIAÇÃO DE COMUNIDADE",
                "DIVULGAÇÃO E CRIAÇÃO DE EVENTOS PRESENCIAIS"
              ].map((step, i) => (
                <p key={i}>MASTERCLASS {i + 1}: {step}</p>
              ))}
            </div>
            
            <div className="mt-12 border border-[#B08D55] rounded-lg p-6 text-center">
              <p className="font-condensed font-bold text-sm uppercase">
                +MASTERCLASS DAS ALIADAS DO CLUB A CONFIRMAR - VOCE TAMBÉM PODE TRANSBORDAR SEU CONHECIMENTO AQUI
              </p>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full bg-gray-100 flex items-center justify-center">
             <div className="w-3/4 h-3/4 bg-black rounded-lg overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop"
                  alt="Camera Screen"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4 text-white text-xs font-mono">REC ●</div>
                <div className="absolute bottom-4 left-4 text-white text-xs font-mono">
                   ISO 800 1/50 F2.8
                </div>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
}
