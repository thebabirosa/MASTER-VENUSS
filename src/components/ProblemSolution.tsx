import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function ProblemSolution() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { current_state_02, validation_03, the_problem_04, market_critique_05, process_limiting_06 } = sections;

  return (
    <>
      {/* Current State - Cards (Image 2) */}
      <Section id="current_state" className="bg-[#F9F9F9]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {current_state_02.cards.map((card: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-display text-2xl mb-4 uppercase tracking-wide">{card.title}</h3>
              <div className="w-full mb-6">
                 <img 
                   src={[
                     "https://github.com/thebabirosa/images/blob/main/1.png?raw=true",
                     "https://github.com/thebabirosa/images/blob/main/2.png?raw=true",
                     "https://github.com/thebabirosa/images/blob/main/3.png?raw=true"
                   ][index]} 
                   alt={card.title}
                   className="w-full h-auto object-contain"
                 />
              </div>
              <p className="font-condensed text-sm uppercase tracking-wider text-venus-muted">{card.subtitle}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-script text-4xl mb-4">E isso não é falta de capacidade.</p>
          <p className="font-condensed text-sm uppercase tracking-widest text-venus-muted">
            {current_state_02.footer_text}
          </p>
        </div>
      </Section>

      {/* Validation - Two Columns (Image 3) */}
      <Section id="validation" className="relative bg-[#F5F5F5] min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://github.com/thebabirosa/images/blob/main/PV%20MASTERMIND%20(5).jpg?raw=true"
            alt="Validation Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start w-full max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="font-script text-4xl text-venus-black">{validation_03.left_column.title}</h2>
            <div className="space-y-4">
              {validation_03.left_column.items.map((item: string, i: number) => (
                <div key={i} className="border border-venus-black px-6 py-3 rounded-full text-center font-condensed uppercase tracking-widest text-sm hover:bg-venus-black hover:text-white transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-script text-4xl text-venus-black text-right md:text-left">{validation_03.right_column.title}</h2>
            <div className="space-y-4">
              {validation_03.right_column.items.map((item: string, i: number) => (
                <div key={i} className="border border-venus-black px-6 py-3 rounded-full text-center font-condensed uppercase tracking-widest text-sm bg-gray-100">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center md:text-right">
              <p className="font-display text-xl uppercase tracking-widest mb-2">E ISSO NÃO É ESCALA.</p>
              <p className="font-condensed text-sm uppercase tracking-widest text-venus-muted">ISSO É UM NEGÓCIO ENGESSADO.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Problem (Image 4) */}
      <Section id="problem" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="relative h-[50vh] md:h-full order-1 md:order-1">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/MASTER.png?raw=true" 
              alt="Woman with papers" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white order-2 md:order-2">
            <div className="mb-12">
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-none mb-2">
                O PROBLEMA NÃO É VOCÊ,
              </h2>
              <p className="font-script text-4xl md:text-5xl lowercase">
                é o sistema que você está operando.
              </p>
            </div>
            
            <div className="space-y-6 font-body text-base md:text-lg text-venus-black leading-relaxed">
              <p>
                Mulheres competentes não ficam exaustas por incapacidade.
                Ficam exaustas porque operam dentro de modelos mal desenhados.
              </p>
              <p>
                É um sistema que foi desenhado para esforço
                não para escala, previsibilidade e legado.
              </p>
              <p>
                Riqueza sem exaustão não nasce da força bruta.
                Nasce de clareza, inteligência e estratégia.
              </p>
              <p>
                Força bruta sustenta resultado no curto prazo.
                Mas nunca vai gerar liberdade que voce deseja.
              </p>
              <p>
                O que constrói riqueza, liberdade e legado é a estrutura.
                Se crescer exige mais esforço, mais equipe e mais custo fixo,
                isso não é escala. Isso é sobrecarga que aprisiona.
              </p>
              <p>
                E é exatamente por isso que você sente o peso.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Market Critique (Image 5) */}
      <Section id="critique" className="bg-[#F5F5F5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
             {/* Sun Symbol Placeholder */}
             <div className="w-64 h-64 md:w-96 md:h-96 relative">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sun_symbol_of_Shamash.svg/1200px-Sun_symbol_of_Shamash.svg.png" 
                 alt="Sun Symbol" 
                 className="w-full h-full object-contain opacity-80 sepia"
               />
             </div>
          </div>
          <div>
            <p className="font-script text-3xl mb-4">O Mercado Vende Fórmulas.</p>
            <h2 className="font-display text-4xl md:text-6xl mb-8 uppercase leading-tight">
              VOCÊ PRECISA DE UMA ARQUITETURA DE NEGÓCIO ESCALÁVEL.
            </h2>
            <div className="space-y-4 font-condensed text-sm uppercase tracking-widest text-venus-muted">
              <p>Você já investiu nos maiores players do mercado.</p>
              <p>E não teve os resultados que esperava.</p>
              <p>Já fez lançamentos caros.</p>
              <p>Já aumentou a equipe.</p>
            </div>
            <div className="mt-8 border-l-2 border-venus-black pl-6">
              <p className="font-condensed font-bold uppercase mb-2">Mas a verdade é que:</p>
              <p className="font-condensed text-sm uppercase tracking-wide mb-4">
                {market_critique_05.truth_statement}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Limiting (Image 6) */}
      <Section id="process" className="bg-white">
        <h2 className="font-display text-3xl md:text-5xl text-center mb-4 uppercase max-w-5xl mx-auto leading-tight">
          O MERCADO ESTÁ CHEIO DE PROMESSAS MILAGROSAS, <span className="font-script lowercase text-4xl block mt-2">mas ainda sim tem negócios escalando sem exaustão.</span>
        </h2>
        
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-0 md:gap-0 relative">
          {process_limiting_06.flow.map((step: string, i: number) => (
            <div key={i} className="flex flex-col md:flex-row items-center relative z-10">
              <div className="w-40 h-40 rounded-full border border-venus-black bg-white flex items-center justify-center text-center p-4 transition-all duration-300 hover:bg-venus-black hover:text-white group">
                <span className="font-condensed font-bold uppercase text-xs tracking-widest group-hover:scale-105 transition-transform">{step}</span>
              </div>
              {i < process_limiting_06.flow.length - 1 && (
                <div className="h-12 w-[1px] md:h-[1px] md:w-12 bg-venus-black" />
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
