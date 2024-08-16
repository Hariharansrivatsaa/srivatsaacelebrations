import { supabase } from "../supabaseClient";

export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        return { success: false, error: "Incorrect email or password" };
      }
      throw error;
    }

    // If login is successful, fetch additional user data from your users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (userError) throw userError;

    return { success: true, user: { ...data.user, ...userData } };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const registerUser = async (name, email, phone, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    // Insert additional user data into the users table
    const { error: insertError } = await supabase
      .from("users")
      .insert([{ name, email, phone }]);

    if (insertError) throw insertError;

    return { success: true, user: data.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
