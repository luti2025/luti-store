import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Plus, Trash2, Upload } from 'lucide-react';

export const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => { fetchProducts(); }, []);

  async function fetchProducts() {
    const { data } = await supabase.from('products').select('*');
    setProducts(data || []);
  }

  async function uploadImage(file) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('productos')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('productos')
      .getPublicUrl(filePath);

    return publicUrl;
  }

  async function handleAddProduct(e) {
    e.preventDefault();
    setUploading(true);

    try {
      let finalImageUrl = "";
      if (imageFile) {
        finalImageUrl = await uploadImage(imageFile);
      } else {
        alert("Por favor, selecciona una imagen");
        return;
      }

      const { error } = await supabase.from('products').insert([
        { ...newProduct, image_url: finalImageUrl }
      ]);

      if (!error) {
        setNewProduct({ name: '', price: '', category: '' });
        setImageFile(null);
        fetchProducts();
      }
    } catch (error) {
      alert("Error al subir: " + error.message);
    } finally {
      setUploading(false);
    }
  }

  async function deleteProduct(id) {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) fetchProducts();
  }

  return (
    <div className="min-h-screen bg-premium-black pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-white uppercase italic mb-8">
          Panel de <span className="text-neon-fuchsia">Control</span>
        </h2>

        {/* Formulario de Carga */}
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
              placeholder="Ej: 15000" required
            />
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-gray-400 text-xs uppercase font-bold">Imagen del Producto</label>
            <div className="flex items-center gap-4">
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="hidden" 
                id="file-upload"
              />
              <label 
                htmlFor="file-upload" 
                className="cursor-pointer bg-premium-black p-4 rounded-xl border border-dashed border-white/20 text-gray-400 hover:border-neon-fuchsia transition-all flex items-center gap-2 w-full justify-center"
              >
                <Upload size={20} />
                {imageFile ? imageFile.name : "Seleccionar Imagen"}
              </label>
            </div>
          </div>

          <button 
            disabled={uploading}
            className="md:col-span-2 py-4 bg-neon-fuchsia text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-neon-orange transition-all uppercase text-sm disabled:opacity-50"
          >
            {uploading ? "Subiendo..." : <><Plus size={18} /> Agregar Producto</>}
          </button>
        </form>

        {/* Lista de Productos */}
        <div className="grid gap-4">
          <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-4">Productos en Tienda</h3>
          {products.map(p => (
            <div key={p.id} className="flex items-center justify-between bg-dark-grey p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4">
                <img src={p.image_url} className="w-12 h-12 rounded-lg object-cover bg-black" alt={p.name} />
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
