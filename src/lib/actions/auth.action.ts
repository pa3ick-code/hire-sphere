"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(params: SignUpParams) {
  const { name, email, password } = params;
  const supabase = await createClient();

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        }
      }
    });

    if (error) throw error;

    if (data.user) {
      // Logic for inserting into public.users if needed
      // Note: Usually handled by Supabase trigger, but we can do it here too
      const { error: dbError } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          name,
          email,
        });
      
      if (dbError) {
        console.error("Error creating user profile:", dbError);
        // We don't necessarily want to fail sign-up if profile creation fails
        // but it's good to log.
      }
    }

    return {
      success: true,
      message: "Account created successfully. Please check your email for confirmation.",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to create account. Please try again.",
    };
  }
}

export async function signIn(params: { email: string; password?: string }) {
  const { email, password } = params;
  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: password || "",
    });

    if (error) throw error;

    return {
      success: true,
      message: "Signed in successfully.",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to log into account. Please try again.",
    };
  }
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/sign-in");
}

export async function getCurrentUser(): Promise<User | null> {
  const supabase = await createClient();

  try {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) return null;

    // Get profile info from 'users' table
    const { data: userProfile, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (error || !userProfile) {
      // Fallback to auth metadata if profile doesn't exist yet
      return {
        id: authUser.id,
        email: authUser.email!,
        name: authUser.user_metadata?.name || "User",
      };
    }

    return {
      ...userProfile,
      id: userProfile.id,
    } as User;
  } catch (error) {
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}
