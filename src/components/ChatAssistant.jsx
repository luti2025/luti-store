import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ producto: '', cantidad: '', detalle: '' });

  // Definición de los pasos del flujo
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

  // Función para avanzar de paso y guardar la respuesta
  const handleOptionClick = (option) => {
    const currentStep = steps[step];
    if (currentStep && currentStep.key) {
      setUserData(prev => ({ ...prev, [currentStep.key]: option }));
    }
    setStep(prev => prev + 1);
  };

  const sendWhatsApp = () => {
    const phone = "+542995093669"; // TU NUMERO
    const message = `Hola LUTI! El asistente me ayudó con mi pedido:\n\n` +
                    `📦 *Producto:* ${userData.producto || 'No especificado'}\n` +
                    `🔢 *Cantidad:* ${userData.cantidad || 'No especificado'}\n` +
                    `🎨 *Detalle:* ${userData.detalle || 'No especificado'}\n\n` +
                    `Me gustaría coordinar el presupuesto.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const resetChat = () => {
    setStep(0);
    setUserData({ producto: '', cantidad: '', detalle: '' });
  };

  return (
    <div className="fixed bottom-6 right-z-100 font-sans">
      {/* BOTÓN FLOTANTE */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-neon-fuchsia p-4 rounded-full shadow-lg hover:scale-110 transition-all animate-bounce cursor-pointer"
        >
          <MessageCircle className="text-white" size={30} />
        </button>
      )}

      {/* VENTANA DE CHAT */}
      {isOpen && (
        <div className="bg-dark-grey w-80 h-500ps rounded-3xl border border-white/10 flex flex-col shadow-2xl overflow-hidden animate-fade-in">
          
          {/* HEADER */}
          <div className="bg-neon-fuchsia p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-white" size={24} />
              <span className="text-white font-black uppercase text-xs tracking-widest">LUTI AI Assistant</span>
            </div >
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-all cursor-pointer">
              <X size={20} />
            </button>
          </div >

          {/* CUERPO DEL CHAT */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col">
            {/* Mensaje del Bot */}
            <div className="flex gap-2 max-w-[85%]">
              <div className="bg-premium-black p-3 rounded-2xl rounded-tl-none border border-white/10 text-zinc-300 text-sm leading-relaxed">
                {steps[step]?.bot || "Error en el flujo del chat"}
              </div >
            </div >

            {/* Opciones del Usuario */}
            <div className="flex flex-col gap-2 mt-2">
              {steps[step]?.options?.map((opt, index) => (
                <button 
                  key={index}
                  onClick={() => handleOptionClick(opt)}
                  className="bg-white/5 hover:bg-neon-fuchsia text-white text-left p-3 rounded-xl border border-white/10 text-xs transition-all hover:pl-4 cursor-pointer"
                >
                  {opt}
                </button>
              ))}
              
              {steps[step]?.isFinal && (
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={sendWhatsApp}
                    className="bg-neon-fuchsia text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-neon-orange transition-all uppercase text-xs shadow-neon-pink cursor-pointer"
                  >
                    <Send size={16} /> Enviar a WhatsApp
                  </button>
                  <button 
                    onClick={resetChat}
                    className="text-zinc-500 text-[10px] uppercase tracking-widest hover:text-white transition-all cursor-pointer"
                  >
                    Reiniciar Chat
                  </button>
                </div>
              )}
            </div >
          </div >
        </div >
      )}
    </div >
  );
};
