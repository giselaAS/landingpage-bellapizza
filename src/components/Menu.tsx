

const pizzas = [
  {
    name: "Margherita",
    description: "Molho de tomate, mozzarella, manjericão fresco",
    price: "R$ 45",
    image: "https://images.unsplash.com/photo-1707896543317-da87bde75ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMG1hcmdoZXJpdGElMjBmcmVzaHxlbnwxfHx8fDE3NjY0NTA2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Pepperoni",
    description: "Molho de tomate, mozzarella, pepperoni premium",
    price: "R$ 52",
    image: "https://images.unsplash.com/photo-1597715469889-dd75fe4a1765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMGNsb3NlfGVufDF8fHx8MTc2NjM2NzI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmesão, provolone",
    price: "R$ 58",
    image: "https://images.unsplash.com/photo-1684823906761-30fd02a961cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWF0dHJvJTIwZm9ybWFnZ2klMjBwaXp6YXxlbnwxfHx8fDE3NjY0MDE3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Diavola",
    description: "Molho de tomate, mozzarella, calabresa picante",
    price: "R$ 54",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHRvcCUyMHZpZXd8ZW58MXx8fHwxNzY2NDUxMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Prosciutto",
    description: "Molho de tomate, mozzarella, presunto de parma, rúcula",
    price: "R$ 62",
    image: "https://images.unsplash.com/photo-1707896543317-da87bde75ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMG1hcmdoZXJpdGElMjBmcmVzaHxlbnwxfHx8fDE3NjY0NTA2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Vegetariana",
    description: "Molho de tomate, mozzarella, legumes grelhados",
    price: "R$ 48",
    image: "https://images.unsplash.com/photo-1617343251257-b5d709934ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emF8ZW58MXx8fHwxNzY2MzY3MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-black mb-4">Nosso Cardápio</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pizzas.map((pizza, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-red-600 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-black">{pizza.name}</h3>
                  <span className="text-red-600">{pizza.price}</span>
                </div>
                <p className="text-gray-600">{pizza.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}