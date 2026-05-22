import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Plus, Trash2, Save } from 'lucide-react';

export const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image_url: '', category: '' });

  useEffect(() => { fetchProducts(); }, []);

  async function fetchProducts() {
    const { data } = await supabase.from('products').select('*');
    setProducts(data || []);
  }

  async function handleAddProduct(e) {
    e.preventDefault();
    const { error } = await supabase.from('products').insert([newProduct]);
    if (!error) {
      setNewProduct({ name: '', price: '', image_url: '', category: '' });
      fetchProducts();
    }
  }

  async function deleteProduct(id) {
    await supabase.from('products').delete().eq('id', id);
    fetchProducts();
  }

  return (
    <div className="min-h-screen bg-premium-black pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-white uppercase italic mb-8">
          Panel de <span className="text-neon-fuchsia">Control</span>
        </h2>

        {/* Formulario para agregar productos */}
        <form onSubmit={handleAddProduct} className="bg-dark-grey p-6 rounded-3xl border border-white/10 mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-xs uppercase font-bold">Nombre del Producto</label>
            <input 
              className="bg-premium-black p-3 rounded-xl text-white border border-white/10 outline-none focus:border-neon-fuchsia" 
              value={newProduct.name} 
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} 
              placeholder="Ej: Remera Oversize" required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-xs uppercase font-bold">Precio ($)</label>
            <input 
              className="bg-premium-black p-3 rounded-xl text-white border border-white/10 outline-none focus:border-neon-fuchsia" 
              type="number" 
              value={newProduct.price} 
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} 
              placeholder="Ej: 15" required
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-gray-400 text-xs uppercase font-bold">URL de la Imagen</label>
            <input 
              className="bg-premium-black p-3 rounded-xl text-white border border-white/10 outline-none focus:border-neon-fuchsia" 
              value={newProduct.image_url} 
              onChange={(e) => setNewProduct({...newProduct, image_url: e.target.value})} 
              placeholder="https://..." 
            />
          </div>
          <button className="md:col-span-2 py-4 bg-neon-fuchsia text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-neon-orange transition-all uppercase text-sm">
            <Plus size={18} /> Agregar Producto
          </button>
        </form>

        {/* Lista de productos actuales */}
        <div className="grid gap-4">
          <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-4">Productos en Tienda</h3>
          {products.map(p => (
            <div key={p.id} className="flex items-center justify-between bg-dark-grey p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4">
                <img src={p.image_url} className="w-12 h-12 rounded-lg object-cover bg-black" />
                <div>
                  <p className="text-white font-bold uppercase text-xs">{p.name}</p>
                  <p className="text-neon-orange font-mono text-xs">${p.price}</p>
                </div>
              </div>
              <button onClick={() => deleteProduct(p.id)} className="text-gray-500 hover:text-red-500 transition-colors p-2">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
