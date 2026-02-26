import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Methodology() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { methodology_13, transformation_14, future_vision_15, automatic_demand_16 } = sections;

  return (
    <>
      {/* Methodology - Spheres (Image 13) */}
      <Section id="methodology" className="bg-[#F9F9F9]">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-2">O MÉTODO VÊNUS É</h2>
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-4">ESTRUTURADO EM TRÊS ESFERAS:</h2>
          <p className="font-script text-3xl md:text-4xl text-venus-black">Como construímos liberdade, lucro e previsibilidade</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "1. MARCA FORTE", img: "https://picsum.photos/seed/m1/400/300", desc: ["Marca pessoal forte.", "Posicionamento magnético.", "Liderança de movimento.", "Narrativa de vendas."] },
            { title: "2. ECOSSISTEMA LUCRATIVO", img: "https://picsum.photos/seed/m2/400/300", desc: ["Produto de escala:", "pertencimento e educação.", "Esteira de produtos lucrativos.", "Criação de Comunidades.", "Criação de eventos presenciais."] },
            { title: "3. ESCALA E LEGADO", img: "https://picsum.photos/seed/m3/400/300", desc: ["Canais de aquisição previsíveis.", "Vendas sistêmicas.", "Funis de vendas", "Tecnologia, automação e ferramentas."] }
          ].map((sphere, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 text-center shadow-sm">
              <h3 className="font-display text-2xl md:text-3xl mb-4 uppercase">{sphere.title}</h3>
              <div className="w-full h-48 overflow-hidden mb-6">
                <img src={sphere.img} alt={sphere.title} className="w-full h-full object-cover grayscale" />
              </div>
              <ul className="space-y-2">
                {sphere.desc.map((item, j) => (
                  <li key={j} className="font-condensed text-sm uppercase tracking-wide text-venus-muted">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Transformation (Image 14) */}
      <Section id="transformation" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-display text-4xl md:text-6xl mb-8 uppercase leading-none">
              O QUE MUDA QUANDO VOCÊ OCUPA<br/>
              <span className="font-script text-4xl md:text-6xl lowercase">o lugar de escala e legado?</span>
            </h2>
            
            <div className="space-y-6 font-condensed text-sm text-venus-black">
              <p>Você para de operar em um modelo que chegou ao platô.</p>
              <p>E constrói um ecossistema que gera lucro e liberdade.<br/>Para de se esforçar tanto para crescer.<br/>E passa a crescer com previsibilidade e lucro.</p>
              <p>Para depender da própria energia.<br/>E passa a operar em um sistema que se retroalimenta automaticamente.</p>
              <p>Escala não é vender mais.<br/>é construir legado além do faturamento, e que gera lucro no curto, médio e principalmente no longo prazo.</p>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://images.unsplash.com/photo-1576504677634-06b2130bd1f3?q=80&w=1974&auto=format&fit=crop"
              alt="Transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Future Vision (Image 15) */}
      <Section id="vision" className="bg-[#F5F5F5] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="relative h-[50vh] md:h-full order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1548586196-aa5803b77379?q=80&w=1974&auto=format&fit=crop"
              alt="Future Vision"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F5F5] order-1 md:order-2">
            <h2 className="font-display text-4xl md:text-5xl mb-8 uppercase leading-tight">
              ONDE SEU NEGÓCIO ESTARÁ APÓS 12 MESES DE REESTRUTURAÇÃO:
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                "Ser apenas especialista e passa a ser uma líder de movimento",
                "Viver de picos de faturamento e passa a ter previsibilidade",
                "Operar no limite e construir um ativo valioso",
                "Crescer com esforço e passa a escalar com estratégia"
              ].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-lg px-6 py-4 text-center bg-white hover:bg-venus-black hover:text-white transition-colors cursor-default">
                  <span className="font-condensed text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="font-condensed text-sm uppercase tracking-wide mb-2">
                Você sai de empresária ou prestadora de serviço para se tornar referência que lidera um ecossistema que gera:
              </p>
              <p className="font-script text-3xl md:text-4xl">liberdade, lucro e legado.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Automatic Demand (Image 16) */}
      <Section id="demand" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-script text-4xl md:text-5xl mb-2">Escala não é sobre volume,</h2>
            <h2 className="font-display text-4xl md:text-5xl mb-8 uppercase leading-tight">
              É SOBRE UM MODELO QUE E GERA DEMANDA AUTOMÁTICA
            </h2>
            
            <div className="space-y-6 font-condensed text-sm text-venus-black">
              <p>A diferença entre vender e construir negócio é simples:<br/>Vender é curto prazo, é fechar mês.</p>
              <p>Construir negócio é criar um sistema que lucra no curto, médio e longo prazo, sem esforço e sem exaustão.</p>
              <p>O Circulou de VÊNUS não ensina você a aplicar mil estratégias mirabolantes e genéricas.</p>
              <p>Construirmos um modelo estável, sustentável e lucrativo sob medida para o seu negócio, com base em um sistema validado que construir o ecossistema mdn company</p>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=2070&auto=format&fit=crop"
              alt="Automatic Demand"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
