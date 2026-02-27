import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "light" | "white" | "dark";
  fullWidth?: boolean;
}

export default function Section({ children, className = "", id, background = "light", fullWidth = false }: SectionProps) {
  const bgStyles = {
    light: "bg-venus-bg",
    white: "bg-white",
    dark: "bg-venus-black text-white",
  };

  const paddingStyles = fullWidth ? "p-0" : "py-20 md:py-32 px-6 md:px-12";
  const containerStyles = fullWidth ? "w-full" : "max-w-7xl mx-auto";

  return (
    <section id={id} className={`${paddingStyles} ${bgStyles[background]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={containerStyles}
      >
        {children}
      </motion.div>
    </section>
  );
}
