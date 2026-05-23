import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar = () => {

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (

    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">

      {/* LOGO */}

      <Link
        to="/"
        className="group"
      >

        <h1 className="text-3xl md:text-4xl font-black tracking-[3px] italic text-white transition duration-300 group-hover:text-yellow-400">

          LUTI

        </h1>

        <p className="text-[10px] md:text-xs tracking-[4px] uppercase text-zinc-400">

          Luana & Tiziano

        </p>

      </Link>

      {/* MENU DESKTOP */}

      <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[3px] font-semibold">

        <Link
          to="/"
          className="text-white hover:text-yellow-400 transition duration-300"
        >
          Inicio
        </Link>

        <Link
          to="/"
          className="text-white hover:text-yellow-400 transition duration-300"
        >
          Catálogo
        </Link>

        <Link
          to="/seguimiento"
          className="text-white hover:text-yellow-400 transition duration-300"
        >
          Seguimiento
        </Link>

      </div>

      {/* DERECHA */}

      <div className="flex items-center gap-5">

        {/* CARRITO */}

        <div className="relative group cursor-pointer">

          <div className="bg-zinc-900 border border-zinc-700 p-3 rounded-2xl group-hover:border-yellow-400 transition duration-300">

            <ShoppingCart
              size={22}
              className="text-white group-hover:text-yellow-400 transition"
            />

          </div>

          {/* CONTADOR */}

          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] rounded-full min-w-5 h-5 px-1 flex items-center justify-center font-black shadow-lg">

            {totalItems}

          </span>

        </div>

        {/* MENU MOBILE */}

        <button className="md:hidden bg-zinc-900 border border-zinc-700 p-3 rounded-2xl hover:border-yellow-400 transition">

          <Menu className="text-white" size={22} />

        </button>

      </div>

    </nav>

  );
};