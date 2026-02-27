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

      {/* The Problem (Image 4) */}
      <Section id="problem" className="bg-[#3c2d23]" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#3c2d23] order-2 md:order-1 text-white">
            <div className="mb-12">
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-none mb-2 tracking-wide">
                O PROBLEMA NÃO É VOCÊ,
              </h2>
              <p className="font-script text-4xl md:text-5xl lowercase">
                é o sistema que você está operando.
              </p>
            </div>
            
            <div className="space-y-8 font-body text-lg md:text-xl leading-relaxed">
              <p>
                Mulheres competentes não ficam exaustas por incapacidade.<br />
                <span className="font-bold">Ficam exaustas porque operam dentro de modelos mal desenhados.</span>
              </p>
              
              <p>
                É um sistema que foi desenhado para esforço<br />
                não para escala, previsibilidade e legado.
              </p>
              
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-medium">Riqueza sem exaustão não nasce da força bruta.</p>
                <p className="text-2xl md:text-3xl font-medium">Nasce de clareza, inteligência e estratégia.</p>
              </div>
              
              <p>
                Força bruta sustenta resultado no curto prazo.<br />
                <span className="font-bold">Mas nunca vai gerar liberdade que voce deseja.</span>
              </p>
              
              <p>
                O que constrói riqueza, liberdade e legado é a estrutura.<br />
                Se crescer exige mais esforço, mais equipe e mais custo fixo,<br />
                isso não é escala. Isso é sobrecarga que aprisiona.
              </p>
              
              <p>
                E é exatamente por isso que você sente o peso.
              </p>
            </div>
          </div>
          <div className="relative min-h-[50vh] md:min-h-full order-1 md:order-2">
            <img 
              src="https://raw.githubusercontent.com/thebabirosa/images/refs/heads/main/4.png" 
              alt="Woman in desert" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Market Critique (Image 5) */}
      <Section id="critique" className="bg-[#f6f6f6]" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#f6f6f6] text-venus-black order-2 md:order-1">
            <div className="max-w-xl space-y-12">
              <div className="space-y-4">
                <h2 className="font-body text-3xl md:text-4xl font-bold leading-tight">
                  Você já investiu nos maiores players do mercado.
                </h2>
                <div className="space-y-1 text-lg">
                  <p>E não teve os resultados que esperava.</p>
                  <p>Já fez lançamentos caros.</p>
                  <p>Já aumentou a equipe.</p>
                  <p>Já investiu em treinamentos e mentorias.</p>
                  <p>E mesmo assim, continua no platô de faturamento e crescimento.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-body text-3xl md:text-4xl font-bold leading-tight">
                  Talvez você tenha perdido a fé no digital.
                </h2>
                <p className="text-lg">
                  Talvez esteja frustrada, desconfiada e busque por garantias.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-body text-3xl md:text-4xl font-bold leading-tight">
                  Mas a verdade é que:
                </h2>
                <p className="text-lg">
                  A previsibilidade, legado e liberdade não nascem de fórmulas, nascem de estrutura.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-body text-3xl md:text-4xl font-bold leading-tight">
                  Fórmula gera pico.
                </h2>
                <p className="text-lg">
                  Modelo escalável e estruturado sustenta, constroi riqueza, crescimento e gera legado com previsibilidade e lucro.
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[50vh] md:min-h-full order-1 md:order-2">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/5.png?raw=true" 
              alt="Classical Painting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Process Limiting (Image 6) */}
      <Section id="process" className="bg-[#D2C9BD] overflow-hidden" fullWidth>
        <div className="relative w-full min-h-[60vh] md:min-h-screen flex items-center justify-center">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(7).png?raw=true" 
            alt="Market Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
      </Section>
    </>
  );
}
