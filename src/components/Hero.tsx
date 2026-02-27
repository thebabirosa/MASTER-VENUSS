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
          className="mb-6 max-w-3xl mx-auto"
        >
          <h1 className="font-script text-5xl md:text-7xl text-venus-black leading-[0.85]">
            Construa riqueza e<br />legado sem exaustão.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12 max-w-2xl mx-auto"
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
          whileHover={{ scale: 1.05 }}
          className="relative group z-20"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-venus-gold to-[#D4AF37] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Button 
            className="relative !bg-white !text-venus-black border-2 border-venus-gold hover:!bg-venus-gold hover:!text-white px-10 py-5 text-base tracking-[0.2em] font-bold uppercase shadow-2xl transition-all duration-300"
          >
            QUERO ME TORNAR ALIADA FUNDADORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
