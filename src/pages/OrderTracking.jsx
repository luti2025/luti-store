import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

export const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-premium-black pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white uppercase italic">
            Sigue tu <span className="text-neon-fuchsia">Pedido</span>
          </h2>
          <p className="text-gray-400 mt-2 uppercase text-xs tracking-widest">Ingresa el número de orden para rastrear</p>
        </div>
        <div className="flex gap-2 mb-16">
          <input 
            type="text" 
            placeholder="Ej: LUTI-12345" 
            className="flex-1 bg-dark-grey border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-neon-fuchsia transition-all"
          />
          <button className="px-6 py-4 bg-neon-fuchsia text-white font-black rounded-2xl hover:bg-neon-orange transition-all uppercase text-xs">
            Rastrear
          </button>
        </div>
        <div className="relative space-y-12">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-white/10 rounded-full"></div>
          <div className="relative pl-12 flex gap-4 items-start">
            <div className="absolute left-0 w-8 h-8 bg-neon-fuchsia rounded-full flex items-center justify-center shadow-neon-pink">
              <Clock size={16} className="text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-sm">Pedido Recibido</h4>
              <p className="text-gray-500 text-xs uppercase">Día 1 • Procesando datos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
