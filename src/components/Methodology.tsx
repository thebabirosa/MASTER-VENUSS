import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";

export default function Methodology() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { methodology_13, transformation_14, future_vision_15, automatic_demand_16 } = sections;

  return (
    <>
      {/* Methodology - Spheres (Image 13) - Replaced with "PARA QUEM NÃO É" as requested */}
      <Section id="methodology" className="bg-[#F4F4F4] py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F4F4F4]">
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-venus-black whitespace-nowrap">PARA QUEM NÃO É:</h2>
            <p className="font-body text-xl md:text-2xl mb-8 font-semibold text-venus-black">
              Somos uma aceleradora estratégica para líderes que:
            </p>
            
            <div className="space-y-4 max-w-md">
              {[
                "Ainda não validou produto ou modelo de negócio",
                "Está buscando fórmula rápida",
                "Quer aumentar faturamento sem estruturar base",
                "Espera que alguém faça por ela",
                "Quer crescer mantendo o mesmo modelo que já chegou no limite"
              ].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-xl px-6 py-4 bg-white hover:bg-venus-black hover:text-white transition-colors cursor-default shadow-sm">
                  <span className="font-body text-lg md:text-xl font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://github.com/thebabirosa/images/blob/main/9.png?raw=true"
              alt="Not for who"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Transformation (Image 14) */}
      <Section id="transformation" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-display text-3xl md:text-5xl mb-8 uppercase leading-snug tracking-wide">
              O QUE MUDA QUANDO VOCÊ OCUPA<br/>
              <span className="font-script text-3xl md:text-5xl lowercase">o lugar de escala e legado?</span>
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
              src="https://github.com/thebabirosa/images/blob/main/10.png?raw=true"
              alt="Transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Future Vision (Image 15) */}
      <Section id="vision" className="bg-[#F5F5F5] py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="relative h-[50vh] md:h-full order-2 md:order-1">
            <img
              src="https://github.com/thebabirosa/images/blob/main/11.png?raw=true"
              alt="Future Vision"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F5F5] order-1 md:order-2">
            <h2 className="font-display text-2xl md:text-4xl mb-8 uppercase leading-tight max-w-2xl">
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
      <Section id="demand" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-script text-3xl md:text-4xl mb-2">Escala não é sobre volume,</h2>
            <h2 className="font-display text-3xl md:text-4xl mb-8 uppercase leading-tight max-w-3xl">
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
              src="https://github.com/thebabirosa/images/blob/main/12.png?raw=true"
              alt="Automatic Demand"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Investment (Image 23) - Replaced with "Aliadas Fundadoras" Bonus Layout as requested */}
      <Section id="investment" className="bg-white py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-venus-black uppercase tracking-tight relative z-10">
              BÔNUS EXCLUSIVO
            </h2>
            <p className="font-script text-6xl md:text-8xl text-venus-black absolute -bottom-10 md:-bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
              Aliadas fundadoras
            </p>
          </div>
          
          <div className="mt-16 space-y-2">
            <p className="font-body text-xl md:text-2xl text-venus-black">
              As 5 primeiras aliadas venusians receberão:
            </p>
            <p className="font-body text-xl md:text-2xl font-bold text-venus-black">
              ✓ Acesso integral aos eventos institucionais do Clube Mulher de Negócios realizados em 2025
            </p>
            <p className="font-body text-xl md:text-2xl text-venus-black">
              Valor estimado dessas experiências ao longo do ano: R$ 3.500 por 00,00
            </p>
          </div>
        </div>

        {/* Gallery Grid - YouTube Shorts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            "BB4GMXu5wGA",
            "H-tHhUfcuWg",
            "Q277sMT96OQ",
            "aNj5sIG37_8",
            "4-Beml51_BE",
            "Q277sMT96OQ"
          ].map((videoId, i) => (
            <div key={i} className="relative aspect-[9/16] rounded-2xl overflow-hidden group shadow-lg bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}&controls=0&rel=0`}
                title={`YouTube Short ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <div className="text-center space-y-1">
          <p className="font-body text-sm text-venus-muted">
            Eventos sujeitos à realização mediante número mínimo de participantes.*
          </p>
          <p className="font-body text-sm text-venus-muted">
            Não inclui experiências premium extraordinárias ou viagens internacionais.*
          </p>
        </div>
      </Section>
    </>
  );
}
