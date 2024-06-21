// utils/supabase.ts
import { createClient, SupabaseClient, AuthResponse, ApiError } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Login user
export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  const { data, error }: AuthResponse = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

// Create user
export async function createUser(email: string, password: string): Promise<AuthResponse> {
  const { data, error }: AuthResponse = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

// Reset password
export async function resetPassword(email: string): Promise<{ data: {} | null, error: ApiError | null }> {
  const { data, error } = await supabase.auth.api.resetPasswordForEmail(email);
  if (error) throw error;
  return { data, error };
}

// Check if the user is authenticated
export async function requireAuth(request: Request): Promise<void> {
  const cookie = request.headers.get("Cookie");
  const { data, error } = await supabase.auth.getSessionFromUrl({ cookie });
  if (error || !data?.session) throw new Error('Unauthorized');
}