import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Ecosystem() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { brand_ecosystem_17, mentor_bio_18 } = sections;

  return (
    <>
      {/* Brand Ecosystem - Logos (Image 17) */}
      <Section id="ecosystem" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2010&auto=format&fit=crop"
            alt="Ecosystem Background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex flex-col items-center justify-center space-y-4">
             <div className="font-display text-5xl">MDN</div>
             <div className="font-script text-3xl">academy</div>
             <div className="font-condensed text-xs uppercase tracking-widest">BUSINESS SCHOOL</div>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
             <div className="font-display text-4xl">MDNcast</div>
             <div className="font-condensed text-xs uppercase tracking-widest">EMPREENDEDORISMO FEMININO</div>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
             <div className="font-display text-5xl">MDN</div>
             <div className="font-condensed text-xs uppercase tracking-widest">CLUB</div>
             <div className="font-condensed text-xs uppercase tracking-widest">MULHER DE NEGÓCIOS</div>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
             <img 
                src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master.png?raw=true" 
                alt="O Círculo de Vênus Mastermind" 
                className="w-48 h-auto object-contain brightness-0 invert"
             />
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
             <div className="font-script text-3xl">The</div>
             <div className="font-display text-6xl">MDN</div>
             <div className="font-display text-4xl">& Co.</div>
             <div className="font-display text-6xl mt-4">V</div>
             <div className="font-condensed text-xs uppercase tracking-widest">AGÊNCIA</div>
             <div className="font-script text-xl">high branding</div>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
             <div className="font-display text-5xl">PAOLA</div>
             <div className="font-script text-4xl">Andreucci</div>
             <div className="font-condensed text-xs uppercase tracking-widest">MENTORA DE POSICIONAMENTO</div>
          </div>
        </div>
      </Section>

      {/* Mentor Bio (Image 18) */}
      <Section id="mentor" className="bg-[#F9F9F9] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="relative h-[50vh] md:h-full order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
              alt={mentor_bio_18.mentor}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F9F9F9] order-1 md:order-2">
            <h2 className="font-display text-4xl md:text-5xl mb-8 uppercase">SOBRE SUA MENTORA:</h2>
            
            <div className="space-y-6 font-condensed text-sm text-venus-black">
              <p>Paola Andreucci é estrategista de marcas valiosas, mentora e especialista em posicionamento magnético.</p>
              <p>Atua com marketing digital desde 2014 e empreende no mercado digital desde 2020, tendo contribuído para a geração de mais de R$15 milhões em vendas através do digital, para diversos nichos.</p>
              <p>É fundadora da MDN Company, um ecossistema voltado ao desenvolvimento de mulheres ambiciosas e à aceleração de negócios valiosos, que integra estratégia, mentalidade, ambiência e networking de alto nível.</p>
              <p>Fundadora do Club MDN, lidera o movimento Mulher de Negócios, impactando mulheres em todo o Brasil.</p>
              <p>Paola também é host do MDNcast, palestrante e escritora, e tem como missão libertar mulheres de negócios que buscam mais liberdade, qualidade de vida e prosperidade, construindo riqueza além do lucro.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
