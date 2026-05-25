import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ producto: '', cantidad: '', detalle: '' });

  const steps = [
    {
      id: 0,
      bot: "¡Hola! Bienvenid@ a LUANA & TIZIANO. 🧵 Soy tu asistente virtual. ¿Qué quieres personalizar hoy?",
      options: ["Remeras", "Gorras", "Bordados", "Otro"],
      key: "producto"
    },
    {
      id: 1,
      bot: "¡Excelente elección! Para mantener nuestra calidad premium, trabajamos con un mínimo de 10 unidades. ¿Cuántas necesitas?",
      options: ["10 unidades", "20 unidades", "50+ unidades", "Otro"],
      key: "cantidad"
    },
    {
      id: 2,
      bot: "Perfecto. Para darte un presupuesto exacto, ¿tienes el diseño listo o necesitas que nosotros lo creemos?",
      options: ["Ya tengo el diseño", "Necesito diseño", "No estoy seguro"],
      key: "detalle"
    },
    {
      id: 3,
      bot: "¡Genial! He preparado tu pedido. Haz clic en el botón abajo para enviarme toda la información por WhatsApp y coordinamos la entrega.",
      isFinal: true
    }
  ];

  const handleOptionClick = (option) => {
    const currentStep = steps[step];
    setUserData({ ...userData, [currentStep.key]: option });
    setStep(step + 1);
  };

  const sendWhatsApp = () => {
    const phone = "+542995093669"; 
    const message = `Hola LUTI! El asistente me ayudó con mi pedido:\n\n` +
                    `📦 Producto: ${userData.producto}\n` +
                    `🔢 Cantidad: ${userData.cantidad}\n` +
                    `🎨 Detalle: ${userData.detalle}\n\n` +
                    `Me gustaría coordinar el presupuesto.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-neon-fuchsia p-4 rounded-full shadow-lg hover:scale-110 transition-all animate-bounce"
        >
          <MessageCircle className="text-white" size={30} />
        </button>
      )}

      {isOpen && (
        <div className="bg-dark-grey w-80 h-[500px] rounded-3xl border border-white/10 flex flex-col shadow-2xl overflow-hidden">
          <div className="bg-neon-fuchsia p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-white" size={24} />
              <span className="text-white font-black uppercase text-xs tracking-widest">LUTI AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-all">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col">
            <div className="flex gap-2 max-w-[80%]">
              <div className="bg-premium-black p-3 rounded-2xl rounded-tl-none border border-white/10 text-zinc-300 text-sm">
                {steps[step]?.bot}
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              {steps[step]?.options?.map((opt) => (
                <button 
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  className="bg-white/5 hover:bg-neon-fuchsia text-white text-left p-3 rounded-xl border border-white/10 text-xs transition-all"
                >
                  {opt}
                </button>
              ))}
              
              {steps[step]?.isFinal && (
                <button 
                  onClick={sendWhatsApp}
                  className="bg-neon-fuchsia text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-neon-orange transition-all uppercase text-xs"
                >
                  <Send size={16} /> Enviar a WhatsApp
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
