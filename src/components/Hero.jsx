export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-premium-black relative overflow-hidden">
      
      {/* EFECTO DE LUZ DE FONDO - Ajustado para no tapar el logo */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-fuchsia/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* LOGO PRINCIPAL - Con z-index alto y más espacio */}
        <div className="relative z-20 mb-12 animate-fade-in">
          <img 
            src="/luti.png" 
            alt="Logo Luana & Tiziano" 
            className="h-48 md:h-64 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,0,255,0.3)] transition-transform hover:scale-105 duration-500" 
          />
        </div>

        <p className="text-neon-fuchsia uppercase tracking-[6px] mb-6 text-xs font-bold animate-fade-in">
          Sublimados & Bordados Premium
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter text-white">
          LUANA <span className="text-neon-fuchsia">&</span> TIZIANO
        </h1>

        <p className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
          Diseños personalizados para marcas, equipos, eventos y emprendimientos con calidad premium.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a
            href="https://wa.me/542995093669" 
            className="bg-neon-fuchsia text-white px-10 py-4 rounded-full font-black hover:bg-neon-orange transition-all duration-300 shadow-lg shadow-neon-fuchsia/20 uppercase text-sm tracking-widest"
          >
            Pedir Ahora
          </a>

          <a
            href="#catalogo"
            className="border border-white/20 px-10 py-4 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm tracking-widest"
          >
            Ver Catálogo
          </a>
        </div>
      </div>

    </section>
  );
};
