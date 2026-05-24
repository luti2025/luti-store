export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-premium-black relative overflow-hidden">
      
      {/* Efecto de luz de fondo para darle profundidad (Opcional pero Pro) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-fuchsia/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-neon-fuchsia uppercase tracking-[6px] mb-6 text-xs font-bold animate-fade-in">
          Sublimados & Bordados Premium
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter text-white">
          LUANA <span className="text-neon-fuchsia">&</span> TIZIANO TEST
        </h1>

        <p className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
          Diseños personalizados para marcas, equipos, eventos y emprendimientos con calidad premium.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a
            href="https://wa.me/5490000000000"
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
