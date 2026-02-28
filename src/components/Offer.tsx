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
      <Section id="stakes" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white text-left">
            <h2 className="font-display text-3xl md:text-4xl mb-8 text-venus-black uppercase whitespace-nowrap text-center md:text-left">O QUE ESTÁ EM JOGO?</h2>
            
            <div className="space-y-8 font-body text-lg md:text-xl text-venus-black mb-12 max-w-xl">
              <div className="space-y-1">
                <p>Não é uma mentoria de marketing.</p>
                <p>Não é um grupo de networking.</p>
                <p>Não é sobre fazer mais.</p>
              </div>

              <div className="space-y-1">
                <p>É sobre deixar de operar no limite.</p>
                <p>É sobre sair do modelo que depende de você e construir um ativo que trabalha a seu favor.</p>
              </div>

              <div className="space-y-1">
                <p className="font-bold">É sobre estruturar o negócio que você vai sustentar pelos próximos 10 anos.</p>
                <p>Porque riqueza não é pico.</p>
              </div>

              <div className="space-y-1">
                <p className="font-bold mb-2">Riqueza é:</p>
                <p>Liberdade</p>
                <p>Tempo de qualidade</p>
                <p>Paz de espírito</p>
                <p>Legado</p>
              </div>
              
              <p className="pt-4">
                O Mastermind VÊNUS é a estrutura para isso.
              </p>
            </div>
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

      {/* Feminine Wealth (Image 8) - Moved from Philosophy as requested */}
      <Section id="feminine_wealth" className="bg-white overflow-hidden" fullWidth>
        <div className="relative w-full min-h-[60vh] md:min-h-screen flex items-center justify-center">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(8).png?raw=true" 
            alt="O que você acessa como aliada" 
            className="w-full h-full object-cover"
          />
        </div>
      </Section>

      {/* Club MDN Access (Section 20) */}
      <Section id="club-mdn-access" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl text-venus-black text-center mb-16 uppercase tracking-tight">
            o que você acessa dentro do Club MDN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://github.com/thebabirosa/images/blob/main/01im5.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im6.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im7.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01imimag.jpg?raw=true"
            ].map((img, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={img} 
                  alt={`Club MDN Access ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Venus Circle Access (Section 21) */}
      <Section id="venus-circle-access" className="bg-[#F5F5F5] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl text-venus-black text-center mb-16 uppercase tracking-tight">
            o que você acessa dentro do Círculo de Vênus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://github.com/thebabirosa/images/blob/main/01im1.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im2.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im3.jpg?raw=true",
              "https://github.com/thebabirosa/images/blob/main/01im4.jpg?raw=true"
            ].map((img, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={img} 
                  alt={`Venus Circle Access ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bonus (Image 22) - Replaced with full image as requested */}
      <Section id="bonus" className="relative h-screen md:h-[120vh] p-0 max-w-none w-full overflow-hidden" fullWidth>
        <img
          src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(11).png?raw=true"
          alt="Bonus"
          className="w-full h-full object-cover block"
        />
      </Section>


    </>
  );
}
