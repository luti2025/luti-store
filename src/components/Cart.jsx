import { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Send } from 'lucide-react';

export const Cart = () => {
  // 1. PRIMERO VAN TODOS LOS HOOKS (Sin interrupciones)
  const { cart, updateQuantity, removeFromCart } = useCart();
  const whatsappButtonRef = useRef(null);

  // El useEffect debe estar aquí, arriba, antes de cualquier "return"
  useEffect(() => {
    const isOrderValid = cart.length > 0 && cart.every(item => item.quantity >= 10);
    if (isOrderValid) {
      setTimeout(() => {
        whatsappButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [cart]); // Se dispara cada vez que el carrito cambia

  // 2. AHORA VAN LAS CALCULACIONES
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isOrderValid = cart.length > 0 && cart.every(item => item.quantity >= 10);

  // 3. AHORA SÍ, EL RETORNO TEMPRANO (Si el carrito está vacío, no mostramos nada)
  if (cart.length === 0) return null; 

  const sendWhatsApp = () => {
    const phone = "+542995093669"; // CAMBIA ESTO POR TU NÚMERO
    let message = `Hola LUTI! Quiero hacer un pedido premium:\n\n`;
    cart.forEach(item => {
      message += `📦 ${item.name} - Cantidad: ${item.quantity} u.\n`;
    });
    message += `\n💰 Total: $${totalPrice}\n\nConfirmame disponibilidad.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-dark-grey px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-8 uppercase italic text-center">
          Tu <span className="text-neon-fuchsia">Pedido</span>
        </h2>

        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-premium-black p-5 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-bold uppercase text-sm tracking-tight">{item.name}</h3>
                <div className="flex items-center gap-2">
                  {item.quantity >= 10 ? (
                    <span className="text-green-400 text-[10px] font-black uppercase flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Mínimo cumplido
                    </span>
                  ) : (
                    <span className="text-red-500 text-[10px] font-black uppercase flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      Faltan {10 - item.quantity} para el mínimo
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-dark-grey rounded-xl px-3 py-2 border border-white/10">
                  <button onClick={() => updateQuantity(item.id, -1)} className="text-white hover:text-neon-fuchsia transition-colors font-bold px-2">-</button>
                  <span className="text-white px-3 font-mono text-sm font-bold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="text-white hover:text-neon-fuchsia transition-colors font-bold px-2">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-600 hover:text-red-500 transition-colors p-2">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-8 bg-premium-black rounded-3xl border-2 border-white/10 text-center shadow-2xl">
          <p className="text-gray-500 uppercase text-xs tracking-widest">Total Estimado</p>
          <h3 className="text-5xl font-black text-white mt-2">${totalPrice}</h3>
          
          <div className="h-4"></div>

          {isOrderValid ? (
            <button 
              ref={whatsappButtonRef} 
              onClick={sendWhatsApp}
              className="w-full py-4 bg-neon-fuchsia text-white font-black rounded-full flex items-center justify-center gap-2 hover:bg-neon-orange transition-all duration-300 shadow-neon-pink uppercase text-sm tracking-widest animate-bounce"
            >
              <Send size={20} /> Enviar Pedido por WhatsApp
            </button>
          ) : (
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl">
              <p className="text-red-500 font-black uppercase text-[10px] tracking-tighter animate-pulse">
                ⚠️ El pedido se activará cuando todos los productos lleguen a 10 unidades
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
