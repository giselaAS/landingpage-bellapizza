import { Header } from '../components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <div className="size-full">
      <Header />
      <Hero />
      
      <footer className="bg-red-600 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <p>&copy; 2024 Bella Pizza. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
