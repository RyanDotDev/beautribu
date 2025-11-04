import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin, adminEmails } from "../../supabase";

//* interface rules for treatments object
interface UpdateTreatmentBody {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  duration: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

//* ---------------------------- MAIN FUNCTION -------------------------------------
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //* Only allow POST for updates
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  //* try/catch method
  try {
    const { id, name, description, price, category, duration, image_url, created_at, updated_at } = req.body as UpdateTreatmentBody;

    //* Validates input
    if (!id || typeof price !== "number") {
      return res.status(400).json({ success: false, error: "Missing or invalid parameters" });
    }

    //* Verifies if the user is an admin
    const adminToken = req.headers.authorization?.replace("Bearer", "");
    if (!adminToken) return res.status(401).json({ error: "Unauthorized" });

    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(adminToken);
    if (authError || !user) return res.status(401).json({ error: "Unauthorized" });

    //* Restricts by email or role
    const allowedEmails = adminEmails //* DEV_EMAIL for testing/debugging purposes
    if (!allowedEmails.includes(user.email ?? "")) {
      return res.status(403).json({ error: "Forbidden" });
    }

    //* Performs the update
    const { data, error } = await supabaseAdmin
      .from("treatments")
      .update({ name, price, description, category, duration, image_url, created_at, updated_at })
      .eq("id", id)
      .select();

    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    //* Success
    return res.status(200).json({ success: true, treatment: data?.[0] ?? null });

  } catch (error) {
    //* Catches unexpected errors
    if (error instanceof Error) {
      return res.status(500).json({ success: false, error: error.message || "Unknown Error" });
    }

    return res.status(500).json({ success: false, error: "Unexpected server error" });
  }
};
