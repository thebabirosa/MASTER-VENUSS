import { motion } from "motion/react";
import Section from "./Section";

export default function Footer() {
  return (
    <footer className="bg-venus-black text-white py-16 border-t border-white/10">
      <Section className="py-0 md:py-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0"
          >
            <span className="font-script text-3xl text-venus-gold">Mastermind Vênus</span>
          </motion.div>
          <div className="flex space-x-8 font-condensed text-sm uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
        <div className="mt-12 text-center font-condensed text-xs text-white/30 uppercase tracking-widest">
          © {new Date().getFullYear()} MDN Company. Todos os direitos reservados.
        </div>
      </Section>
    </footer>
  );
}
