// ...existing code...
    <div className="fixed bottom-6 right-6 z-100">
      {/* BOTÓN FLOTANTE */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-neon-fuchsia p-4 rounded-full shadow-neon-pink hover:scale-110 transition-all animate-bounce"
        >
          <MessageCircle className="text-white" size={30} />
        </button>
      )}

      {/* VENTANA DE CHAT */}
      {isOpen && (
        <div className="bg-dark-grey w-80 h-125 rounded-3xl border border-white/10 flex flex-col shadow-2xl overflow-hidden animate-fade-in">
          {/* HEADER */}
          ...
        </div>
      )}
    </div>