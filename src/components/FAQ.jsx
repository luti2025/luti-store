import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "¿Por qué el mínimo es de 10 unidades?",
    answer: "Para garantizar la máxima calidad y el precio más competitivo, trabajamos con producciones en serie."
  },
  {
    question: "¿Cómo envío mi diseño o logotipo?",
    answer: "Una vez confirmado el pedido vía WhatsApp, nuestro equipo te solicitará el logo en formato vectorial o alta resolución."
  },
  {
    question: "¿Cuál es el tiempo de entrega?",
    answer: "El tiempo estimado es de 35 días: Día 1 (Recepción), Día 10 (Producción), Día 25 (Empaque) y Día 35 (Entrega final)."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias, Mercado Pago y PayPal."
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer: "Sí, realizamos envíos a través de las principales empresas de logística."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-premium-black px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
            Preguntas <span className="text-neon-fuchsia">Frecuentes</span>
          </h2>
          <div className="h-1 w-24 bg-neon-orange mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-dark-grey border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="text-white font-bold uppercase text-sm tracking-wide">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-gray-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-neon-fuchsia' : ''}`} 
                  size={20} 
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
