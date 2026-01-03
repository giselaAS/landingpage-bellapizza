

export function About() {
  return (
    <section className="py-24 bg-red-600 px-6" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-5xl text-white mb-6">Nossa História</h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <p className="text-white/90 mb-6">
              Desde 1985, preparamos pizzas autênticas usando receitas tradicionais italianas e os melhores ingredientes.
            </p>
            <p className="text-white/90 mb-6">
              Nossa massa é fermentada naturalmente por 72 horas e assada em forno a lenha a 450°C, garantindo aquela textura crocante por fora e macia por dentro.
            </p>
            <p className="text-white/90">
              Cada pizza é uma obra de arte feita com amor e dedicação pela nossa família para a sua.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white translate-y-4 translate-x-4 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}