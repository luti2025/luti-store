import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Importamos el cerebro

export const Navbar = () => {
  const { cart } = useCart(); // 2. Conectamos al cerebro
  
  // Calculamos el total de piezas reales en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-premium-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="text-neon-fuchsia font-black text-2xl tracking-tighter italic">
        LUTI
      </div>
      
      <div className="hidden md:flex gap-8 text-white font-medium uppercase text-xs tracking-widest">
        <Link to="/" className="hover:text-neon-fuchsia transition-colors">Inicio</Link>
        <Link to="/" className="hover:text-neon-fuchsia transition-colors">Catálogo</Link>
        <Link to="/seguimiento" className="hover:text-neon-fuchsia transition-colors">Seguimiento</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer hover:text-neon-orange transition-colors">
          <ShoppingCart size={24} className="text-white" />
          <span className="absolute -top-2 -right-2 bg-neon-fuchsia text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
            {totalItems} {/* <--- AQUÍ EL NÚMERO DEBE CAMBIAR */}
          </span>
        </div>
        <Menu className="md:hidden text-white" />
      </div>
    </nav>
  );
};
