import { motion } from "motion/react";
import { landingPageData } from "../data";
import Button from "./ui/Button";

export default function Hero() {
  const { hero_01 } = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#EAE0D5]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://github.com/thebabirosa/images/blob/main/PV%20MASTERMIND.jpg?raw=true"
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAE0D5]/90 via-[#EAE0D5]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2">
        <div className="text-left pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col items-start">
              <img 
                src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master.png?raw=true" 
                alt="O Círculo de Vênus Mastermind" 
                className="w-64 md:w-80 h-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 max-w-xl"
          >
            <h2 className="font-body font-bold text-lg md:text-xl leading-relaxed uppercase text-venus-black tracking-wide">
              {hero_01.headline} {hero_01.subheadline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
             <p className="font-script text-4xl md:text-5xl text-venus-black">
              {hero_01.script_highlight}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="font-body text-base md:text-lg max-w-md mb-8 leading-relaxed text-venus-black">
              {hero_01.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
