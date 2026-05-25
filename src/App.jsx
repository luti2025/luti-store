import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { Cart } from './components/Cart';
import { FAQ } from './components/FAQ';
import { Benefits } from './components/Benefits';

import { OrderTracking } from './pages/OrderTracking';
import { AdminPanel } from './pages/AdminPanel';
import { ChatAssistant } from './components/ChatAssistant';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-premium-black text-white selection:bg-neon-fuchsia selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Benefits />
                <Catalog />
                <Cart />
                <FAQ />
              </>
            } />
            <Route path="/seguimiento" element={<OrderTracking />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
          <ChatAssistant />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
