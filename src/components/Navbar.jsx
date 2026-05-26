import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur-xl border-b border-white/10">
      
      {/* LOGO Y NOMBRE (Tu código corregido) */}
      <Link to="/" className="flex items-center gap-3 group">
        <img 
          src="/luti.png"
          alt="Logo Luana & Tiziano" 
          className="h-12 w-12 rounded-full object-contain transition-transform group-hover:scale-110 border border-white/10 shadow-lg"
        />
        <div className="flex flex-col leading-none">
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white">
            LUANA <span className="text-neon-fuchsia">&</span> TIZIANO
          </h1>
          <p className="text-[8px] uppercase tracking-[3px] text-zinc-400">Sublimado Textil</p>
        </div>
      </Link>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-8 uppercase text-xs tracking-widest font-medium text-zinc-400">
        <Link to="/" className="hover:text-neon-fuchsia transition">Inicio</Link>
        <a href="#catalogo" className="hover:text-neon-fuchsia transition">Catálogo</a>
        <Link to="/seguimiento" className="hover:text-neon-fuchsia transition">Seguimiento</Link>
      </div>

      {/* CARRITO Y MENU MOBILE */}
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer group">
          <ShoppingCart className="text-white group-hover:text-neon-fuchsia transition" size={24} />
          <span className="absolute -top-2 -right-2 bg-neon-fuchsia text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {totalItems}
          </span>
        </div>
        <Menu className="md:hidden text-white" size={24} />
      </div>

    </nav>
  );
};
