import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";
import Button from "./ui/Button";

export default function Offer() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { stakes_19, cta_20, deliverables_21, bonus_22, investment_23 } = sections;

  return (
    <>
      {/* Stakes (Image 19) */}
      <Section id="stakes" className="bg-[#F5F5F5] min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <img 
             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" 
             alt="Texture" 
             className="w-full h-full object-cover"
           />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-4 uppercase">O QUE ESTÁ EM JOGO?</h2>
          <p className="font-condensed text-sm mb-8 max-w-2xl mx-auto">
            Você pode continuar sustentando um modelo que depende de você, sem liberdade e com esforço e fragilidade.<br/><br/>
            Ou pode construir um ecossistema escalável, lucrativo, previsível, que gera legado e que sustenta você.
          </p>
          
          <p className="font-condensed text-sm mb-4">Riqueza não é só faturamento.</p>
          <p className="font-script text-4xl mb-8">Riqueza é:</p>
          
          <div className="space-y-4">
            {["Liberdade", "Tempo de qualidade", "Paz de espírito", "Construir Legado"].map((item, i) => (
              <div key={i} className="border border-venus-black rounded-lg px-12 py-3 bg-white/50 backdrop-blur-sm hover:bg-venus-black hover:text-white transition-colors cursor-default">
                <span className="font-condensed uppercase tracking-widest text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-12 font-condensed text-sm uppercase tracking-wide">
            O Mastermind VÊNUS é a estrutura para isso.
          </p>
        </div>
      </Section>

      {/* CTA (Image 20) */}
      <Section id="cta" className="relative min-h-screen flex items-center justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute top-1/2 left-20 -translate-y-1/2 hidden md:block">
           <div className="flex flex-col items-start">
              <img 
                src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master.png?raw=true" 
                alt="O Círculo de Vênus Mastermind" 
                className="w-64 md:w-80 h-auto object-contain brightness-0 invert"
              />
            </div>
        </div>

        <div className="relative z-10 bg-white p-12 md:p-16 max-w-md mr-0 md:mr-20 shadow-xl">
          <div className="text-center space-y-4 mb-8">
            <p className="font-condensed text-sm">Se você já tem clientes</p>
            <p className="font-condensed text-sm">já tem ticket</p>
            <p className="font-condensed text-sm">já tem autoridade</p>
            <p className="font-condensed text-sm mt-4">Então talvez o próximo nível<br/>não seja vender mais.</p>
            <p className="font-condensed text-sm mt-4">Seja estruturar.<br/>Escalar com inteligência.<br/>Sem exaustão.<br/>Com legado.</p>
          </div>
          
          <p className="text-center font-condensed text-xs uppercase tracking-widest mb-6">
            O Círculo de VÊNUS está aberto. 🔥
          </p>
          
          <Button className="w-full bg-[#B08D55] text-white hover:bg-[#9A7B4A]">
            APLICAR AGORA
          </Button>
        </div>
      </Section>

      {/* Deliverables (Image 21) */}
      <Section id="deliverables" className="bg-[#F9F9F9]">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl uppercase leading-tight">
            AO ENTRAR NO CÍRCULO DE<br/>VÊNUS VOCÊ RECEBE:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Acesso integral ao Clube Mulher de Negócios (12 meses)", img: "https://picsum.photos/seed/d1/400/300" },
            { title: "12 Hotseats online e ao vivo - acompanhamento e aceleração", img: "https://picsum.photos/seed/d2/400/300" },
            { title: "4 Encontros Individuais anuais - com plano de ação 90 dias", img: "https://picsum.photos/seed/d3/400/300" },
            { title: "Grupo fechado exclusivo para líderes - acesso e ambiência de líderes", img: "https://picsum.photos/seed/d4/400/300" },
            { title: "1 Imersão presencial exclusiva por ano - Mansão de Vênus", img: "https://picsum.photos/seed/d5/400/300" },
            { title: "plano de implementação personalizado", img: "https://picsum.photos/seed/d6/400/300" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <p className="font-condensed font-bold text-sm uppercase">{item.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bonus (Image 22) */}
      <Section id="bonus" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Bonus Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 bg-white p-12 md:p-16 max-w-2xl text-center shadow-2xl">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-2">BÔNUS EXCLUSIVO DE</h2>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">PRÉ-LANÇAMENTO</h2>
          
          <p className="font-condensed text-lg mb-8">
            As 5 primeiras aliadas venusians receberão:
          </p>
          
          <div className="mb-8">
            <p className="font-display text-xl uppercase leading-tight">
              ✓ Acesso integral aos eventos institucionais do Clube Mulher de Negócios realizados em 2025
            </p>
          </div>
          
          <p className="font-condensed text-lg">
            Valor estimado dessas experiências ao longo do ano: R$ 3.500 por 00,00
          </p>
          
          <p className="mt-8 text-[10px] text-gray-500 uppercase">
            Eventos sujeitos à realização mediante número mínimo de participantes.*<br/>
            Não inclui experiências premium extraordinárias ou viagens internacionais.*
          </p>
        </div>
      </Section>

      {/* Investment (Image 23) */}
      <Section id="investment" className="relative min-h-screen flex items-center justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
            alt="Investment Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute top-1/2 left-20 -translate-y-1/2 hidden md:block">
           <div className="flex flex-col items-start">
              <img 
                src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master.png?raw=true" 
                alt="O Círculo de Vênus Mastermind" 
                className="w-64 md:w-80 h-auto object-contain brightness-0 invert"
              />
            </div>
        </div>

        <div className="relative z-10 bg-white p-12 md:p-16 max-w-md mr-0 md:mr-20 shadow-xl text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-8">INVESTIMENTO:</h2>
          
          <p className="font-condensed font-bold text-sm mb-2">
            Oferta especial de pré-lançamento para as aliadas fundadoras:
          </p>
          <p className="font-condensed text-sm mb-8">
            Investimento anual oficial: R$ 30.000
          </p>
          
          <p className="font-condensed text-sm mb-8 leading-relaxed">
            Faça sua aplicação e acesse a condição especial de pré-lançamento e torne-se uma aliada fundadora do circulo de vênus.
          </p>
          
          <Button className="w-full bg-[#B08D55] text-white hover:bg-[#9A7B4A]">
            APLICAR AGORA
          </Button>
        </div>
      </Section>
    </>
  );
}
