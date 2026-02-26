import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Audience() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { target_audience_11, mindset_shift_12 } = sections;

  return (
    <>
      {/* Target Audience (Image 11) */}
      <Section id="audience" className="bg-[#F9F9F9] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F9F9F9]">
            <h2 className="font-display text-4xl md:text-6xl mb-4 uppercase">PARA QUEM É:</h2>
            <p className="font-condensed text-lg mb-8 uppercase tracking-wide">
              {target_audience_11.description}
            </p>
            
            <div className="space-y-4">
              {["Já são autoridade", "Já têm clientes", "Já faturam", "Mas querem escalar sem exaustão"].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-full px-8 py-3 text-center hover:bg-venus-black hover:text-white transition-colors cursor-default">
                  <span className="font-condensed uppercase tracking-widest text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop"
              alt="Target Audience"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Mindset Shift (Image 12) */}
      <Section id="mindset" className="bg-[#F5F5F5] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="relative h-[50vh] md:h-full order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop"
              alt="Mindset Shift"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F5F5] order-1 md:order-2">
            <h2 className="font-display text-4xl md:text-6xl mb-8 uppercase">E SABEM QUE:</h2>
            
            <div className="space-y-4">
              {mindset_shift_12.points.map((point: string, i: number) => (
                <div key={i} className="border border-venus-black rounded-full px-8 py-3 text-center hover:bg-venus-black hover:text-white transition-colors cursor-default">
                  <span className="font-condensed uppercase tracking-widest text-sm">{point}</span>
                </div>
              ))}
              <div className="border border-venus-black rounded-full px-8 py-3 text-center hover:bg-venus-black hover:text-white transition-colors cursor-default">
                 <span className="font-condensed uppercase tracking-widest text-sm">O maior tesouro está no longo prazo</span>
              </div>
            </div>
            
            <div className="mt-12 text-right">
              <p className="font-condensed text-sm uppercase tracking-wide">
                Esse chamado não é para quem está começando.<br/>
                <span className="font-bold">É para quem já construiu e agora quer escalar com liberdade.</span>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
