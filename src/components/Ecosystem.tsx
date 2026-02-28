import { landingPageData } from "../data";
import Section from "./Section";

export default function Ecosystem() {
  const sections = landingPageData.sections.reduce((acc, section) => ({ ...acc, [section.id]: section }), {} as any);
  const { mentor_bio_18 } = sections;

  return (
    <>
      {/* Mentor Bio (Image 17) - Replaced Ecosystem Logos as requested */}
      <Section id="mentor-bio" className="bg-white py-0 md:py-0 px-0 md:px-0 max-w-none w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
          <div className="relative h-[50vh] md:h-full">
            <img
              src="https://github.com/thebabirosa/images/blob/main/13.png?raw=true"
              alt="Paola Andreucci"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <h2 className="font-display text-3xl md:text-4xl uppercase text-venus-black whitespace-nowrap">SOBRE SUA MENTORA</h2>
            <h2 className="font-script text-5xl md:text-6xl text-venus-black mb-8 whitespace-nowrap">Paola Andreucci:</h2>
            
            <div className="space-y-6 font-body text-base text-venus-black leading-relaxed">
              <p>Paola Andreucci é estrategista de marcas valiosas, mentora e especialista em posicionamento magnético.</p>
              <p>Atua com marketing digital desde 2014 e empreende no mercado digital desde 2020, tendo contribuído para a geração de mais de R$15 milhões em vendas através do digital, para diversos nichos.</p>
              <p>É fundadora da MDN Company, um ecossistema voltado ao desenvolvimento de mulheres ambiciosas e à aceleração de negócios valiosos, que integra estratégia, mentalidade, ambiência e networking de alto nível.</p>
              <p>Fundadora do Club MDN, lidera o movimento Mulher de Negócios, impactando mulheres em todo o Brasil.</p>
              <p>Paola também é host do MDNcast, palestrante e escritora, e tem como missão libertar mulheres de negócios que buscam mais liberdade, qualidade de vida e prosperidade, construindo riqueza além do lucro.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
