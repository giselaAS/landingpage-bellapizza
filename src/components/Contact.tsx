import { Instagram } from 'lucide-react';
import { PhoneIcon } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-24 bg-black">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto px-30 items-center" style={{ fontFamily: 'monospace' }}>
          {/* Header da nota */}
          <div className="text-center mb-6 md:mb-8 pb-6 md:pb-8 border-b-2 border-dashed border-gray-700">
            <div className="text-4xl md:text-5xl mb-3 md:mb-4 text-white">
              CONTATO
            </div>
            <p className="text-xs md:text-sm text-gray-500">INFORMAÇÕES DE CONTATO COM PIZZARIA</p>
          </div>

          {/* Corpo da nota */}
          <div className="space-y-8 md:space-y-8 text-xs md:text-sm">
            <div>
              <div className="text-xs text-red-600 mb-2">ENDEREÇO:</div>
              <div className="text-white">
                Rua das Pizzas, 123<br />
                Centro - Picos, PI<br />
                CEP: 01234-567
              </div>
            </div>

            <div className="border-t border-dashed border-gray-700 pt-4 md:pt-6">
              <div className="text-xs text-red-600 mb-2">HORÁRIO DE FUNCIONAMENTO:</div>
              <div className="text-white">
                Terça a Domingo<br />
                18h às 23h
              </div>
            </div>

            <div className="border-t border-dashed border-gray-700 pt-4 md:pt-6">
              <div className="text-xs text-red-600 mb-2">TELEFONE E WHATSAPP:</div>
              <div className="text-white flex items-center gap-1">
              <PhoneIcon className="w-4 h-4" />
                (11) 1234-5678
              </div>
            </div>

            <div className="border-t border-dashed border-gray-700 pt-4 md:pt-6">
              <div className="text-xs text-red-600 mb-2">REDES SOCIAIS:</div>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-red-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@pizzaria</span>
              </a>
            </div>
          </div>

          {/* Footer da nota */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t-2 border-dashed border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              OBRIGADO PELA PREFERÊNCIA!<br />
              VOLTE SEMPRE
            </p>
            <div className="mt-4 text-xl text-red-600">★ ★ ★</div>
          </div>
        </div>
      </div>
    </section>
  );
}