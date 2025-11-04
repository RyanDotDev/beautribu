import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY as string; //* service role key

//* For server ONLY based querys
export const supabaseAdmin = createClient(
  SUPABASE_URL, 
  SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
});

//* Allowed email access for admin pages
export const adminEmails = [
  process.env.ADMIN_EMAIL,
  process.env.DEV_EMAIL
];