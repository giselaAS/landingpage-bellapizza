import React from 'react'
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img 
        src="hero-bg.jpg"
        alt="Hero Image"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-9xl text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Pizzaria
        </h1>
        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-14 py-6 transition-colors mb-6">
          <p className='md:text-lg'>Ver Cardápio</p>
        </Button>
        <p className="text-xl md:text-1xl text-white/90 ">
          Autêntica pizza artesanal feita com paixão
        </p>
      </div>
    </section>
  );
}