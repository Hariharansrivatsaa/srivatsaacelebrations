import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ndabevturhrddprzhkcb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kYWJldnR1cmhyZGRwcnpoa2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NjM2NzgsImV4cCI6MjAzOTMzOTY3OH0.sZSnO98cQ1aQwRMe8-xWJ8PMpfQaki2Bl6QwV7U15s0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
