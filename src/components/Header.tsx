"use client";
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-3xl text-red-600"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Pizzaria
        </div>

        <nav className="hidden md:flex gap-8">
          <a
            href="#"
            className="text-black hover:text-red-600 transition-colors"
          >
            Início
          </a>
          <a
            href="#menu"
            className="text-black hover:text-red-600 transition-colors"
          >
            Cardápio
          </a>
          
          <a
            href="#about"
            className="text-black hover:text-red-600 transition-colors"
          >
            Sobre
          </a>

          <a
            href="#contact"
            className="text-black hover:text-red-600 transition-colors"
          >
            Contato
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}