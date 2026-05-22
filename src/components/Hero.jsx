import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-premium-black overflow-hidden">
      {/* Fondo: Luz Neón difuminada */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neon-fuchsia/20 via-transparent to-transparent" />

      
      <div className="z-10 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Marca */}
          <h2 className="text-neon-fuchsia text-xl font-bold tracking-[0.3em] uppercase italic mb-4">
            LUTI
          </h2>
          
          {/* Nombres Principales */}
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            LUANA <span className="text-neon-fuchsia">&</span> TIZIANO
          </h1>
          
          {/* Subtítulo */}
          <p className="text-gray-400 text-sm md:text-lg mt-6 uppercase tracking-[0.2em] font-light">
            Sublimado & Bordados <span className="text-neon-orange font-bold">Premium</span>
          </p>
          
          {/* Botones */}
         <div className="flex flex-col md:flex-row gap-5 justify-center mt-12">
  {/* Botón Pedir Ahora */}
  <a 
    href="#catalog" 
    className="px-10 py-4 bg-neon-fuchsia text-white font-black rounded-full hover:bg-neon-orange transition-all duration-300 shadow-neon-pink uppercase text-xs tracking-widest active:scale-95 text-center"
  >
    Pedir Ahora
  </a>
  
  {/* Botón Ver Catálogo */}
  <a 
    href="#catalog" 
    className="px-10 py-4 border-2 border-white text-white font-black rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-widest active:scale-95 text-center"
  >
    Ver Catálogo
  </a>
</div>

        </motion.div>
      </div>
    </section>
  );
};
