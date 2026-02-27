import { motion } from "motion/react";
import Section from "./Section";

export default function WealthBuilding() {
  return (
    <Section id="wealth-building" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(1).png?raw=true"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
        <div className="text-left space-y-6 order-2 md:order-1">
          <p className="font-condensed text-base md:text-lg text-venus-black uppercase tracking-wide">
            Enquanto as mulheres comuns estão com medo<br />
            das mudanças de 2026, as Líderes Venusiana estão
          </p>
          
          <div className="space-y-2">
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-venus-black">
              CONSTRUINDO RIQUEZA
            </h2>
            <p className="font-script text-4xl md:text-5xl lowercase text-venus-black">
              sem exaustão
            </p>
          </div>

          <div className="pt-4">
            <p className="font-script text-3xl md:text-4xl text-venus-black">
              somos uma aceleradora de<br />
              escala, lucro e legado
            </p>
          </div>

          <p className="font-condensed text-base md:text-lg text-venus-black uppercase tracking-wide max-w-xl leading-relaxed">
            para um grupo seleto de empresárias que já
            faturam bem, mas desejam construir riqueza e
            legado com liberdade, previsibilidade e realização.
          </p>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-md"
          >
            <img 
              src="https://github.com/thebabirosa/images/blob/main/MASTER%20(1).png?raw=true" 
              alt="Sun Symbol" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
