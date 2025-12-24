import { Header } from '../components/Header';
import { Hero } from '@/components/Hero';
import { Menu } from '@/components/Menu';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="size-full">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      
      <footer className="bg-red-600 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <p>&copy; 2024 Pizzaria. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
