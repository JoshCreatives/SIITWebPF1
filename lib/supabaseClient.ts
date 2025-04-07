import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://your-supabase-url.supabase.co'; // Replace with your actual Supabase URL
const supabaseAnonKey: string = 'your-anon-key'; // Replace with your actual Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
