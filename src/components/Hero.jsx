export const Hero = () => {
  return (
    <section className="... bg-linear-to-b from-black to-zinc-900">

      <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
        Sublimados & Bordados Premium
      </p>

      <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
        LUANA <span className="text-yellow-400">&</span> TIZIANO
      </h1>

      <p className="max-w-2xl text-zinc-300 text-lg md:text-xl mb-10">
        Diseños personalizados para marcas, equipos, eventos y emprendimientos con calidad premium.
      </p>

      <div className="flex flex-col md:flex-row gap-5">

        <a
          href="https://wa.me/5490000000000"
          className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          Pedir Ahora
        </a>

        <a
          href="#catalogo"
          className="border border-zinc-600 px-8 py-4 rounded-2xl hover:bg-zinc-800 transition"
        >
          Ver Catálogo
        </a>

      </div>

    </section>
  );
};
