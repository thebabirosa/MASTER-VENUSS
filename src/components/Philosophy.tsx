import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Philosophy() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { process_evolution_07, feminine_wealth_08, definition_scale_09, mastermind_focus_10 } = sections;

  return (
    <>
      {/* Process Evolution (Image 7) */}
      <Section id="evolution" className="bg-[#F9F9F9]">
        <div className="text-center mb-16">
          <p className="font-condensed text-sm uppercase tracking-widest text-venus-muted max-w-2xl mx-auto mb-4">
            O que acontece quando você usa a experiência ruim como aprendizado e toma decisões com mais consciência e faz investimentos mais inteligentes:
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-venus-black">Escala e Legado</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-0 relative">
          {["DESEJO RESULTADO", "IDENTIDADE", "COMPORTAMENTO", "DESCONFORTO", "RECOMPENSA"].map((step: string, i: number) => (
            <div key={i} className="flex flex-col md:flex-row items-center relative z-10">
              <div className="w-40 h-40 rounded-full border border-venus-black bg-white flex flex-col items-center justify-center text-center p-4 transition-all duration-300 hover:bg-venus-black hover:text-white group">
                <span className="font-condensed font-bold uppercase text-xs tracking-widest">{step}</span>
                {i === 4 && <span className="text-[10px] mt-2 leading-tight">TRANSFORMOU SEU NEGÓCIO EM UM ECOSSISTEMA ESCALÁVEL</span>}
              </div>
              {i < 4 && (
                <div className="h-12 w-[1px] md:h-[1px] md:w-8 bg-venus-black" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Feminine Wealth (Image 8) */}
      <Section id="feminine_wealth" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white order-2 md:order-1">
            <h2 className="font-display text-4xl md:text-6xl mb-2 uppercase leading-none">
              A FORMA FEMININA
            </h2>
            <p className="font-script text-4xl md:text-5xl mb-8">de construir riqueza</p>
            
            <div className="space-y-6 font-condensed text-sm uppercase tracking-wider text-venus-muted">
              <p>Enquanto mulheres comuns crescem na base do esforço e força bruta, as mulheres de negócios sábias estão construindo riqueza e legado sem exaustão.</p>
              
              <div className="mt-8">
                <strong className="block text-venus-black mb-2">Escalar não é sobre se esforçar mais.</strong>
                <ul className="space-y-4">
                  {feminine_wealth_08.points.map((point: string, i: number) => (
                    <li key={i}>É {point.toLowerCase()}.</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <strong className="block text-venus-black mb-2">Não é sobre vender mais.</strong>
                <p>É sobre estruturar um sistema que escala e se alimenta, capaz de sustentar riqueza sem exaustão.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1549289237-77d34c013c84?q=80&w=1964&auto=format&fit=crop"
              alt="Feminine Wealth"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Definition Scale (Image 9) */}
      <Section id="scale" className="relative bg-[#F5F5F5] min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" 
             alt="Shell texture" 
             className="w-full h-full object-cover"
           />
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-md w-full">
          <h2 className="font-display text-5xl md:text-6xl uppercase mb-4">ESCALAR É:</h2>
          
          {definition_scale_09.list.map((item: string, i: number) => (
            <div key={i} className="w-full border border-venus-black bg-white/50 backdrop-blur-sm px-8 py-4 text-center rounded-lg hover:bg-venus-black hover:text-white transition-colors duration-300">
              <p className="font-condensed text-lg uppercase tracking-wide">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mastermind Focus (Image 10) */}
      <Section id="focus" className="bg-[#D8D3CD] py-32 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap justify-center items-center content-center gap-8 overflow-hidden">
           {Array.from({ length: 20 }).map((_, i) => (
             <span key={i} className="font-display text-9xl text-venus-gold rotate-12">VÊNUS</span>
           ))}
        </div>

        <div className="relative z-10 bg-white max-w-3xl mx-auto p-16 md:p-24 text-center shadow-xl">
          <h2 className="font-display text-4xl md:text-5xl mb-6 uppercase leading-tight">
            O MASTERMIND VÊNUS<br/>É SOBRE ISSO.
          </h2>
          <p className="font-condensed text-xl mb-6">Não é sobre vender mais.</p>
          <p className="font-display text-2xl md:text-3xl uppercase leading-tight">
            É sobre construir um negócio que sustenta riqueza sem exaustão.
          </p>
        </div>
      </Section>
    </>
  );
}
