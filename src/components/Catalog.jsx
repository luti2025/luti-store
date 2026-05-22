import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { PlusCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export const Catalog = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await supabase.from('products').select('*');
        setProducts(data || []);
      } catch (e) { console.error(e); } 
      finally { setLoading(false); }
    }
    fetchProducts();
  }, []);

  return (
    <section id="catalog" className="py-20 bg-premium-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Nuestro <span className="text-neon-fuchsia">Catálogo</span>
          </h2>
          <div className="h-1 w-24 bg-neon-orange mx-auto mt-4 rounded-full"></div>
        </div>
        
        {loading ? (
          <div className="text-center text-white font-bold animate-pulse uppercase tracking-widest">Cargando...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="group bg-dark-grey border border-white/10 rounded-3xl overflow-hidden hover:border-neon-fuchsia transition-all duration-500 shadow-2xl">
                <div className="h-80 overflow-hidden relative">
                  <img src={product.image_url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-premium-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="text-neon-orange font-mono font-bold text-sm">${product.price} / u.</span>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-white text-2xl font-bold uppercase tracking-tight group-hover:text-neon-fuchsia transition-colors">{product.name}</h3>
                  <div className="mt-6 flex flex-col gap-4">
                    <span className="text-[10px] uppercase font-black text-gray-500 tracking-widest">⚠️ Mínimo: 10 unidades</span>
                    <button 
                      onClick={() => {
                        console.log("👉 Botón presionado para:", product.name);
                        addToCart(product);
                      }} 
                      className="w-full py-4 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-neon-fuchsia hover:text-white transition-all duration-300 uppercase text-sm tracking-wider active:scale-95"
                    >
                      <PlusCircle size={18} /> Agregar al Pedido
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
