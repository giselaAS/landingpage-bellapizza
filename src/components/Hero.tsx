import React from 'react'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Bella Pizza
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12">
          Autêntica pizza artesanal feita com paixão
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full transition-colors">
          Ver Cardápio
        </button>
      </div>
    </section>
  );
}