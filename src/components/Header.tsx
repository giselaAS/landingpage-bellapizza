

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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
            href="#contact"
            className="text-black hover:text-red-600 transition-colors"
          >
            Contato
          </a>
        </nav>

        <button className="md:hidden text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}