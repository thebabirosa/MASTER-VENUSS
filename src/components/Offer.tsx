import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";
import Button from "./ui/Button";

export default function Offer() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { stakes_19, cta_20, deliverables_21, bonus_22, investment_23 } = sections;

  return (
    <>
      {/* Stakes (Image 19) - Replaced with new layout as requested */}
      <Section id="stakes" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-8 text-venus-black uppercase">O QUE ESTÁ EM JOGO?</h2>
            
            <div className="space-y-6 font-body text-lg text-venus-black mb-12 max-w-xl mx-auto">
              <p>Você pode continuar sustentando um modelo que depende de você, sem liberdade e com esforço e fragilidade.</p>
              <p>Ou pode construir um ecossistema escalável, lucrativo, previsível, que ger legado e que sustenta você.</p>
            </div>
            
            <p className="font-body text-xl text-venus-black mb-2">Riqueza não é só faturamento.</p>
            <p className="font-script text-5xl text-venus-black mb-8">Riqueza é:</p>
            
            <div className="space-y-3 max-w-md mx-auto w-full mb-12">
              {["Liberdade", "Tempo de qualidade", "Paz de espírito", "Construir Legado"].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-xl px-6 py-3 bg-white shadow-sm">
                  <span className="font-body text-xl font-medium text-venus-black">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="font-body text-xl font-medium text-venus-black">
              O Mastermind VÊNUS é a estrutura para isso.
            </p>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://github.com/thebabirosa/images/blob/main/14.png?raw=true"
              alt="O que está em jogo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* CTA (Image 20) - Replaced with full image as requested */}
      <Section id="cta" className="relative h-screen md:h-[120vh] p-0 max-w-none w-full overflow-hidden">
        <img
          src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(9).png?raw=true"
          alt="CTA"
          className="w-full h-full object-cover"
        />
      </Section>

      {/* Deliverables (Image 21) - Replaced with full image as requested */}
      <Section id="deliverables" className="relative h-screen md:h-[120vh] p-0 max-w-none w-full overflow-hidden">
        <img
          src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(10).png?raw=true"
          alt="Deliverables"
          className="w-full h-full object-cover"
        />
      </Section>

      {/* Bonus (Image 22) - Replaced with full image as requested */}
      <Section id="bonus" className="relative h-screen md:h-[120vh] p-0 max-w-none w-full overflow-hidden">
        <img
          src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(11).png?raw=true"
          alt="Bonus"
          className="w-full h-full object-cover"
        />
      </Section>

      {/* Investment (Image 23) - Replaced with "Aliadas Fundadoras" Bonus Layout as requested */}
      <Section id="investment" className="bg-white py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h2 className="font-display text-4xl md:text-6xl text-venus-black uppercase tracking-tight">
              BÔNUS EXCLUSIVO
            </h2>
            <p className="font-script text-6xl md:text-8xl text-venus-black absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Aliadas fundadoras
            </p>
          </div>
          
          <div className="mt-16 space-y-2">
            <p className="font-body text-xl md:text-2xl text-venus-black">
              As 5 primeiras aliadas venusians receberão:
            </p>
            <p className="font-body text-xl md:text-2xl font-bold text-venus-black">
              ✓ Acesso integral aos eventos institucionais do Clube Mulher de Negócios realizados em 2025
            </p>
            <p className="font-body text-xl md:text-2xl text-venus-black">
              Valor estimado dessas experiências ao longo do ano: R$ 3.500 por 00,00
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative aspect-[9/16] rounded-2xl overflow-hidden group shadow-lg">
              <img
                src={`https://picsum.photos/seed/event-${i}/400/711`}
                alt={`Event ${i}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-1">
          <p className="font-body text-sm text-venus-muted">
            Eventos sujeitos à realização mediante número mínimo de participantes.*
          </p>
          <p className="font-body text-sm text-venus-muted">
            Não inclui experiências premium extraordinárias ou viagens internacionais.*
          </p>
        </div>
      </Section>
    </>
  );
}
