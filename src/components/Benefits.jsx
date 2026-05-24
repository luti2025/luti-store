import { ShieldCheck, Zap, MessageCircle, Star } from 'lucide-react';

export const Benefits = () => (
  <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 bg-premium-black">
    {[
      { icon: <Star size={24} />, text: "Diseños Propios" },
      { icon: <ShieldCheck size={24} />, text: "Calidad Premium" },
      { icon: <Zap size={24} />, text: "Entrega Rápida" },
      { icon: <MessageCircle size={24} />, text: "Soporte WhatsApp" },
    ].map((item, i) => (
      <div key={i} className="bg-dark-grey p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-white/5 hover:border-neon-fuchsia transition-all group">
        <div className="text-neon-fuchsia group-hover:scale-110 transition-transform">
          {item.icon}
        </div>
        <p className="text-white font-bold uppercase text-[10px] tracking-widest">
          {item.text}
        </p>
      </div>
    ))}
  </section>
);
