import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "light" | "white" | "dark";
}

export default function Section({ children, className = "", id, background = "light" }: SectionProps) {
  const bgStyles = {
    light: "bg-venus-bg",
    white: "bg-white",
    dark: "bg-venus-black text-white",
  };

  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 ${bgStyles[background]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
