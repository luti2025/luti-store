import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-100">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-neon-fuchsia p-4 rounded-full shadow-neon-pink hover:scale-110 transition-all"
          aria-label="Abrir chat"
        >
          <MessageCircle className="text-white" size={30} />
        </button>
      )}

      {isOpen && (
        <div className="bg-dark-grey w-80 rounded-3xl border border-white/10 flex flex-col shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="font-semibold">Asistente</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Cerrar chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 text-sm text-white/80">
            <p>Hola, ¿en qué puedo ayudarte?</p>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t border-white/10">
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Escribe un mensaje"
              className="flex-1 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white outline-none focus:border-neon-fuchsia"
            />
            <button
              type="submit"
              className="rounded-full bg-neon-fuchsia p-2 text-black hover:bg-fuchsia-400"
              aria-label="Enviar mensaje"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
