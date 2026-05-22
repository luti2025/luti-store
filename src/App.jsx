import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { FAQ } from './components/FAQ'; // <--- 1. Volvemos a importar la FAQ
import { Cart } from './components/Cart';
import { OrderTracking } from './components/OrderTracking';
import { AdminPanel } from './components/AdminPanel';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-premium-black">
          <Navbar />
          <Routes>
            {/* Página de Inicio: Portada + Catálogo + FAQ + Carrito */}
            <Route path="/" element={
              <>
                <Hero />
                <Catalog />
                <FAQ /> {/* <--- 2. La devolvemos a su lugar */}
                <Cart />
              </>
            } />
            
            {/* Página de Seguimiento */}
            <Route path="/seguimiento" element={<OrderTracking />} />
            
            {/* Página del Administrador */}
            <Route path="/admin" element={<AdminPanel />} /> 
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
