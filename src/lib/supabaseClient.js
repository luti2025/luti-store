import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificación de seguridad para evitar la pantalla blanca
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ ERROR: No se encontraron las llaves de Supabase en el archivo .env");
}

// Exportación NOMBRADA (Esto es lo que Vite estaba buscando)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
