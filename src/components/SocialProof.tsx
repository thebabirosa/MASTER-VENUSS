import { motion } from "motion/react";
import { landingPageData } from "../data";
import Section from "./Section";
import Button from "./ui/Button";

export default function SocialProof() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { authority_numbers_24, calendar_2026_25, curriculum_26 } = sections;

  return (
    <>
      {/* Authority Numbers (Image 24) - Replaced with full image as requested */}
      <Section id="authority" className="relative h-screen md:h-[120vh] p-0 max-w-none w-full overflow-hidden">
        <img
          src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(12).png?raw=true"
          alt="Authority and Ecosystem"
          className="w-full h-full object-cover"
        />
      </Section>

      {/* Calendar (Image 25) - Replaced with new layout as requested */}
      <Section id="calendar" className="relative py-24 px-6 max-w-none w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(1).png?raw=true"
            alt="Calendar Background"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-venus-black uppercase tracking-tight">
              CALENDÁRIO DE
            </h2>
            <p className="font-script text-5xl md:text-7xl text-venus-black">
              eventos presenciais
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              { month: "Fevereiro", event: "Imersão mulher de negócios O Renascimento", img: "https://picsum.photos/seed/feb/400/300" },
              { month: "março", event: "MDN experiencie especial dia da mulher em alto mar.", img: "https://picsum.photos/seed/mar/400/300" },
              { month: "abril", event: "MDN experience - business and wild. Passeio a cavalo na praia.", img: "https://picsum.photos/seed/apr/400/300" },
              { month: "maio", event: "IMERSÃO MULHER DE NEGÓCIOS - 2 anos de club", img: "https://picsum.photos/seed/may/400/300" },
              { month: "junho", event: "MDN Experience - Business & wine. Pintura em taça e vinho", img: "https://picsum.photos/seed/jun/400/300" },
              { month: "julho", event: "• MDN Experience - Business & Wellness para empresárias", img: "https://picsum.photos/seed/jul/400/300" },
              { month: "setembro", event: "Café de Negócios", img: "https://picsum.photos/seed/sep/400/300" },
              { month: "outubro", event: "Viagem para europa investimento a parte", img: "https://picsum.photos/seed/oct/400/300" },
              { month: "novembro", event: "Sunset de negócios Club MDN", img: "https://picsum.photos/seed/nov/400/300" }
            ].map((item, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-3xl border border-venus-black/10 p-4 shadow-sm hover:shadow-md transition-all group">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <img src={item.img} alt={item.month} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-script text-3xl text-venus-black mb-1">{item.month}</h3>
                <p className="font-body text-[10px] text-venus-black uppercase leading-tight">{item.event}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <p className="font-body text-[10px] text-venus-muted leading-relaxed">
              Essa é uma previsão anual de eventos. A confirmação oficial das datas será feita com os estabelecimentos e divulgada com 20 a 30 dias de antecedência de cada encontro. As datas podem sofrer alterações conforme a disponibilidade dos locais e a relevância dos temas para as aliadas. Este planejamento está sujeito a ajustes sem aviso prévio, sempre com o objetivo de oferecer a melhor experiência possível às participantes.
            </p>
          </div>
        </div>
      </Section>

      {/* Journey (Image 26) - Replaced with "A Sua Jornada" layout as requested */}
      <Section id="curriculum" className="relative py-24 px-6 max-w-none w-full overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(1).png?raw=true"
            alt="Journey Background"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          {/* Sun Icon */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master.png?raw=true" 
              alt="Sun Icon" 
              className="w-24 h-24 object-contain brightness-0"
            />
          </div>

          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-venus-black uppercase tracking-tight inline-flex items-baseline gap-2">
              A SUA JORNADA DENTRO DO 
              <span className="relative">
                VÊNUS
                <span className="absolute -top-4 left-0 text-[8px] font-body tracking-widest whitespace-nowrap">O CÍRCULO DE</span>
              </span>
            </h2>
            <p className="font-script text-5xl md:text-7xl text-venus-black mt-4">
              implementação & plantio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "clareza & personalização",
                desc: "Diagnóstico e plano de implementação individual e personalizado"
              },
              {
                title: "desenvolvimento",
                desc: "Hotseats online e ao vivo mensal: acompanhamento e aceleração personalizado."
              },
              {
                title: "divulgação",
                desc: "acesso a todos conteúdos gravados e do CLUB e MDN academy"
              },
              {
                title: "protagonismo",
                desc: "primeiro evento com aliada, welcome kit e protagonismo."
              }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="w-full aspect-square rounded-full border border-venus-black flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-[2px] relative">
                  {/* Star icons on top/bottom */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-venus-black text-xl">✦</div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-venus-black text-xl">✦</div>
                  
                  <h3 className="font-script text-2xl md:text-3xl text-venus-black mb-4">{item.title}</h3>
                  <div className="w-full h-[1px] bg-venus-black/30 mb-4" />
                  <p className="font-body text-sm md:text-base text-venus-black leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey Part 2 - Aceleração & Colheita */}
      <Section id="journey-part-2" className="relative py-24 px-6 max-w-none w-full overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(1).png?raw=true"
            alt="Journey Background"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          {/* Sun Icon */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://github.com/thebabirosa/images/blob/main/idv%20venus%20master.png?raw=true" 
              alt="Sun Icon" 
              className="w-24 h-24 object-contain brightness-0"
            />
          </div>

          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-venus-black uppercase tracking-tight inline-flex items-baseline gap-2">
              A SUA JORNADA DENTRO DO 
              <span className="relative">
                VÊNUS
                <span className="absolute -top-4 left-0 text-[8px] font-body tracking-widest whitespace-nowrap">O CÍRCULO DE</span>
              </span>
            </h2>
            <p className="font-script text-5xl md:text-7xl text-venus-black mt-4">
              aceleração & colheita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "AUTORIDADE",
                desc: "episódio do mdncast no ar: divulgação, autoridade e impacto"
              },
              {
                title: "EXECUÇÃO",
                desc: "plano de ação e aceleração de trimestral"
              },
              {
                title: "RELACIONAMENTO",
                desc: "multiplique oportunidades com parcerias, relacionamento e conexões valiosas"
              },
              {
                title: "RESULTADOS E RECONHECIMENTO",
                desc: "aceleração de resultados, refinamento de posicionamento, e premiação"
              }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="w-full aspect-square rounded-full border border-venus-black flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-[2px] relative">
                  {/* Star icons on top/bottom */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-venus-black text-xl">✦</div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-venus-black text-xl">✦</div>
                  
                  <h3 className="font-display text-xl md:text-2xl text-venus-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                  <div className="w-full h-[1px] bg-venus-black/30 mb-4" />
                  <p className="font-body text-sm md:text-base text-venus-black leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA (Image 27) - New section as requested */}
      <Section id="final-cta" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="flex flex-col justify-center items-center p-12 md:p-24 bg-white text-center">
            <div className="max-w-md space-y-8">
              <div className="space-y-1">
                <p className="font-body text-xl text-venus-black">Se você já tem clientes</p>
                <p className="font-body text-xl text-venus-black">já tem ticket</p>
                <p className="font-body text-xl text-venus-black">já tem autoridade</p>
              </div>
              
              <div className="space-y-1">
                <p className="font-body text-xl text-venus-black">Então talvez o próximo nível</p>
                <p className="font-body text-xl text-venus-black">não seja vender mais.</p>
              </div>
              
              <div className="space-y-1">
                <p className="font-body text-xl text-venus-black">Seja estruturar.</p>
                <p className="font-body text-xl text-venus-black">Escalar com inteligência.</p>
                <p className="font-body text-xl text-venus-black">Sem exaustão.</p>
                <p className="font-body text-xl text-venus-black">Com legado.</p>
              </div>
              
              <p className="font-body text-xl font-bold text-venus-black pt-4">
                O Círculo de VÊNUS está aberto.
              </p>
              
              <div className="pt-8">
                <Button className="w-full md:w-auto px-12 py-4 bg-[#B08D55] text-white hover:bg-[#9A7B4A] rounded-xl text-2xl font-display uppercase tracking-wider shadow-lg transition-all hover:scale-105">
                  APLICAR AGORA
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-[60vh] md:h-auto">
            <img
              src="https://github.com/thebabirosa/images/blob/main/IMAGENS%20PV%20.png?raw=true"
              alt="Vênus Mastermind Experience"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>
      </Section>
      {/* Investment (Image 28) - New section as requested */}
      <Section id="investment" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full border-t border-venus-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="relative h-[60vh] md:h-auto order-2 md:order-1">
            <img
              src="https://github.com/thebabirosa/images/blob/main/IMAGENS%20PV%20%20(1).png?raw=true"
              alt="Vênus Founder"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-12 md:p-24 bg-white text-center order-1 md:order-2">
            <div className="max-w-md space-y-8">
              <h2 className="font-display text-4xl md:text-6xl text-venus-black uppercase tracking-tight">
                INVESTIMENTO:
              </h2>
              
              <div className="space-y-6">
                <p className="font-body text-xl font-bold text-venus-black leading-tight">
                  Oferta especial de pré-lançamento para as aliadas fundadoras:
                </p>
                
                <p className="font-body text-lg text-venus-black leading-relaxed">
                  Faça sua aplicação e acesse a condição especial de pré-lançamento e torne-se uma aliada fundadora do circulo de vênus.
                </p>
              </div>
              
              <div className="pt-8">
                <Button className="w-full md:w-auto px-12 py-4 bg-[#B08D55] text-white hover:bg-[#9A7B4A] rounded-xl text-2xl font-display uppercase tracking-wider shadow-lg transition-all hover:scale-105">
                  APLICAR AGORA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Stats/Social Proof (Image 29) - New section as requested */}
      <Section id="stats-social-proof" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="relative flex flex-col justify-center items-center p-12 md:p-24 bg-white overflow-hidden">
            <div className="relative z-10 w-full max-w-lg space-y-6">
              {[
                { top: "+600 PARTICIPANTES E MILHARES DE CONEXÕES", bottom: "nos eventos presenciais" },
                { top: "+50 HORAS ENTREGUES", bottom: "masterclass online" },
                { top: "+40 HORAS DIVULGANDO", bottom: "podcast" },
                { top: "+5 MILHÕES EM", bottom: "negócios feitos" }
              ].map((item, i) => (
                <div key={i} className="border border-venus-black rounded-2xl p-6 bg-white/5 backdrop-blur-[2px] text-center">
                  <p className="font-display text-xl md:text-2xl text-venus-black uppercase tracking-tight leading-tight">
                    {item.top}
                  </p>
                  <p className="font-script text-4xl md:text-5xl text-venus-black mt-2">
                    {item.bottom}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[60vh] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="MDN Community"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
      {/* 12 Passos (Image 30) - New section as requested */}
      <Section id="masterclasses" className="bg-[#F5F3F7] py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-[#F5F3F7]">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl text-venus-black uppercase tracking-tight mb-2">
                12 PASSOS PARA CONSTRUIR
              </h2>
              <p className="font-script text-5xl md:text-6xl text-venus-black mb-12">
                um negócio valioso
              </p>
              
              <div className="space-y-3 font-body text-sm md:text-base text-venus-black uppercase tracking-wide">
                {[
                  "METAS DECISÃO e DIREÇÃO",
                  "COMO MONETIZAR O SEU CAPITAL SOCIAL",
                  "PERFIL DE CLIENTE IDEAL",
                  "POSICIONAMENTO MAGNÉTICO | mkt vibracional",
                  "MODELO DE NEGÓCIO & ESTERIA DE PRODUTOS",
                  "ARQUITETURA DE OFERTAS irresistíveis",
                  "NARRATIVAS QUE CONVERTEM - STORIES E ROTEIROS",
                  "FUNIL DE CONTEÚDO | vendas sistêmicas",
                  "CANAIS DE AQUISIÇÃO DE CLIENTES",
                  "COMERCIAL: IA E AUTOMAÇÃO",
                  "EXPANSÃO E LEGADO: CRIAÇÃO DE COMUNIDADE",
                  "DIVULGAÇÃO E CRIAÇÃO DE EVENTOS PRESENCIAIS"
                ].map((step, i) => (
                  <p key={i} className="flex gap-2">
                    <span className="font-bold whitespace-nowrap">MASTERCLASS {i + 1}:</span>
                    <span className="font-medium">{step}</span>
                  </p>
                ))}
              </div>
              
              <div className="mt-16 border border-[#B08D55] rounded-xl p-8 bg-white/40 text-center">
                <p className="font-body font-bold text-sm md:text-lg uppercase tracking-wider text-venus-black">
                  +MASTERCLASS DAS ALIADAS DO CLUB A CONFIRMAR - VOCE TAMBÉM PODE TRANSBORDAR SEU CONHECIMENTO AQUI
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-8 md:p-16 bg-[#F5F3F7]">
            <div className="relative w-full aspect-[3/4] max-w-md rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop"
                alt="Recording Setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-xl">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Protagonismo & Reconhecimento (Image 31) - New section as requested */}
      <Section id="recognition" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-screen">
          <div className="relative h-[60vh] md:h-auto">
            <img
              src="https://github.com/thebabirosa/images/blob/main/17.png?raw=true"
              alt="Vênus Recognition Event"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-12 md:p-24 bg-white">
            <div className="max-w-md w-full space-y-12">
              {/* Stylized Title Box */}
              <div className="border border-venus-black rounded-xl p-8 text-center">
                <h2 className="font-display text-4xl md:text-5xl text-venus-black uppercase tracking-tight leading-none">
                  PROTAGONISMO
                </h2>
                <p className="font-script text-4xl md:text-5xl text-venus-black -mt-2">
                  & reconhecimento
                </p>
              </div>
              
              <div className="space-y-6 text-venus-black">
                <p className="font-body text-xl md:text-2xl font-medium leading-tight">
                  Premiação, reconhecimento & autoridade.
                </p>
                <p className="font-body text-lg md:text-xl leading-relaxed">
                  Premiação 2x ao ano para celebrar suas conquistas, vitórias e dedicação empreendedora, com o <span className="font-bold uppercase">PROTAGONISMO</span> que você merece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Legado & Impacto (Image 32) - New section as requested */}
      <Section id="legacy" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full border-t border-venus-black/5">
        <div className="grid grid-cols-1 md:grid-cols-12 h-auto md:min-h-screen">
          {/* Column 1: Text */}
          <div className="md:col-span-4 flex flex-col justify-center p-12 md:p-20 bg-white">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="font-display text-5xl md:text-6xl text-venus-black uppercase tracking-tighter font-black leading-none">
                  LEGADO
                </h2>
                <p className="font-script text-5xl md:text-6xl text-venus-black">
                  & impacto
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="font-body text-xl md:text-2xl text-venus-black leading-snug">
                  Em 2026, vamos lançar um livro em co-autoria com as aliadas do club, que desejam se tornar escritoras, com lançamentos previstos no Brasil e na Europa, em parceria com uma instituição de impacto social.
                </p>
                <p className="font-body text-sm md:text-base text-venus-black/60 leading-relaxed">
                  Participação opcional, mediante adesão específica e investimento independente da assinatura do Club.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Main Image */}
          <div className="md:col-span-4 relative h-[60vh] md:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
              alt="Vênus Legacy Book"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Column 3: Destination Stack */}
          <div className="md:col-span-4 grid grid-rows-3 h-[90vh] md:h-auto">
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
                alt="Paris"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-script text-5xl md:text-7xl text-white drop-shadow-lg">paris</span>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2073&auto=format&fit=crop"
                alt="Lisboa"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-script text-5xl md:text-7xl text-white drop-shadow-lg">lisboa</span>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1565099824688-e93eb20fe622?q=80&w=2071&auto=format&fit=crop"
                alt="Museu do Louvre"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-script text-4xl md:text-6xl text-white drop-shadow-lg text-center px-4">museu do louvre</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Community Gallery (Image 33) - New section as requested */}
      <Section id="community-gallery" className="bg-[#F8F7F9] py-16 md:py-24 px-4 md:px-8 max-w-none w-full">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
            {/* Row 1: Members portraits */}
            {[
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
              "https://images.unsplash.com/photo-1580489944761-15a19d654956",
              "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f04",
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            ].map((url, i) => (
              <div key={`member-${i}`} className="aspect-[3/4.5] rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={`${url}?q=80&w=800&auto=format&fit=crop`} 
                  alt="Vênus Member"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            
            {/* Row 2: Event moments (mix of color and grayscale) */}
            {[
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
              "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
              "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
              "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
              "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a",
              "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
              "https://images.unsplash.com/photo-1511578314322-379afb476865",
              "https://images.unsplash.com/photo-1523580494863-6f3031224c94"
            ].map((url, i) => (
              <div key={`event-${i}`} className={`aspect-[3/4.5] rounded-xl md:rounded-2xl overflow-hidden shadow-sm ${[1, 2, 3, 4, 5].includes(i) ? 'grayscale' : ''}`}>
                <img 
                  src={`${url}?q=80&w=800&auto=format&fit=crop`} 
                  alt="Vênus Event"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* The Call (Image 35) - Updated with provided image */}
      <Section id="the-call" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="w-full">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(13).png?raw=true" 
            alt="O Chamado - Líderes Magnéticas"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>
      </Section>
      {/* Session 37 - Updated with provided image */}
      <Section id="session-37" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="w-full">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/C%C3%B3pia%20de%20PV%20MASTERMIND%20(14).png?raw=true" 
            alt="Session 37"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>
      </Section>
    </>
  );
}
