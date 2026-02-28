import React from 'react';

// Lista de imagens do carrossel
const images = [
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/13-1.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/14.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/15.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/16.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/17.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/18.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/19.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/20.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/21.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/22.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/23.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/24.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/25.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/26.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/27.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/28.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/29.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/30.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/31.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/32.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/33.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/34.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/35.jpg",
  "https://metagenciadigital.com.br/wp-content/uploads/2026/02/36-1.jpg"
];

export const GalleryCarousel: React.FC = () => {
  // Duplicamos as imagens para criar o efeito de loop infinito
  const displayImages = [...images, ...images, ...images];

  return (
    <section 
      className="py-16 overflow-hidden relative border-y border-white/5"
      style={{ backgroundColor: '#986e59' }}
    >
      {/* Estilos inline para a animação (compatível com qualquer projeto React) */}
      <style>{`
        @keyframes galleryScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-gallery-scroll {
          animation: galleryScroll 80s linear infinite;
        }
        .animate-gallery-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Gradientes laterais para suavizar a entrada/saída */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#986e59] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#986e59] to-transparent z-10" />

      {/* Container do Scroll */}
      <div className="flex animate-gallery-scroll w-fit">
        {displayImages.map((src, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-[240px] md:w-[340px] lg:w-[420px] aspect-[9/16] px-2 md:px-3"
          >
            <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-[#111]">
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
