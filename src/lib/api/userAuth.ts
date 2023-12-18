import { writable } from 'svelte/store';
import { supabase } from "$lib/supabaseClient";

const user = writable(null);

export const login = async (email: string, password: string) => {
  try {
    const { user: authUser, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    user.set(authUser);
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  }
};

export const logout = async () => {
  await supabase.auth.signOut();
  user.set(null);
};

export { user };error };
  }
}