import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("⚠️ SUPABASE_URL or SUPABASE_ANON_KEY is missing. Database operations will fail.");
}

export const supabase = createClient(supabaseUrl || 'http://missing-url', supabaseAnonKey || 'missing-key');
