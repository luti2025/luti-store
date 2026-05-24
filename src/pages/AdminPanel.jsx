import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Plus, Trash2, Upload } from 'lucide-react';

export const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-premium-black pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-white uppercase italic mb-8">
          Panel de <span className="text-neon-fuchsia">Control</span>
        </h2>
        <p className="text-gray-400 text-center">Gestiona tus productos desde aquí.</p>
      </div>
    </div>
  );
};
