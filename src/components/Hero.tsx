import { motion } from "motion/react";
import { landingPageData } from "../data";
import Button from "./ui/Button";

export default function Hero() {
  const { hero_01 } = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#EAE0D5]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND.png?raw=true"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <img 
            src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master.png?raw=true" 
            alt="O Círculo de Vênus Mastermind" 
            className="w-48 md:w-64 h-auto object-contain brightness-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="font-script text-5xl md:text-7xl text-venus-black leading-tight">
            Construa riqueza e<br />legado sem exaustão.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="font-body text-lg md:text-xl text-venus-black leading-relaxed">
            através de uma marca forte, um ecossistema<br className="hidden md:block" />
            lucrativo, como uma líder de movimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button 
            className="bg-white text-venus-black hover:bg-gray-100 px-8 py-4 text-sm tracking-widest font-bold uppercase shadow-lg"
          >
            QUERO ME TORNAR ALIADA FUNDADORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
