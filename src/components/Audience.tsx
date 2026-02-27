import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Audience() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { target_audience_11, mindset_shift_12 } = sections;

  return (
    <>
      {/* Target Audience (Image 11) */}
      <Section id="audience" className="bg-[#F4F4F4]" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F4F4F4]">
            <h2 className="font-display text-3xl md:text-5xl mb-4 text-venus-black">PARA QUEM É:</h2>
            <p className="font-body text-xl md:text-2xl mb-8 font-semibold text-venus-black">
              Somos uma aceleradora estratégica para líderes que:
            </p>
            
            <div className="space-y-4 max-w-md">
              {[
                "Já validaram seu posicionamento no mercado",
                "Já têm clientes pagantes e autoridade construída",
                "Já faturam de forma consistente",
                "Mas sentem que o modelo atual chegou no limite",
                "E estão prontas para transformar faturamento em legado"
              ].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-xl px-6 py-4 bg-white/50 shadow-sm">
                  <span className="font-body text-lg md:text-xl font-medium text-venus-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://github.com/thebabirosa/images/blob/main/7.png?raw=true"
              alt="Target Audience"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Mindset Shift (Image 12) */}
      <Section id="mindset" className="bg-[#F5F5F5]" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="relative h-[50vh] md:h-full order-2 md:order-1">
            <img
              src="https://github.com/thebabirosa/images/blob/main/8.png?raw=true"
              alt="Mindset Shift"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F5F5] order-1 md:order-2">
            <h2 className="font-display text-3xl md:text-5xl mb-8 uppercase">E SABEM QUE:</h2>
            
            <div className="space-y-4">
              {[
                "Podem faturar mais do que estão faturando hoje",
                "Não nasceram para depender de lançamentos",
                "Grupo e comunidade são ativos de escala",
                "O presencial cria autoridade que o digital não sustenta sozinho",
                "Esforço sem estrutura não gera liberdade",
                "O verdadeiro tesouro está na construção de longo prazo"
              ].map((point, i) => (
                <div key={i} className="border border-venus-black rounded-full px-8 py-3 text-center hover:bg-venus-black hover:text-white transition-colors cursor-default">
                  <span className="font-condensed uppercase tracking-widest text-sm">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
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
