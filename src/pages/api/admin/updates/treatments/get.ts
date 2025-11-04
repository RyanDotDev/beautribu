import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin, adminEmails } from "../../supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const adminToken = req.headers.authorization?.replace("Bearer", "");
    if (!adminToken) return res.status(401).json({ error: "Unauthorized" });

    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(adminToken);
    if (authError || !user) return res.status(401).json({ error: "Unauthorized" });

    const allowedEmails = adminEmails;
    if (!allowedEmails.includes(user.email ?? "")) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const { data, error } = await supabaseAdmin.from("treatments").select("*").order("id", { ascending: true });

    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
 
    return res.status(200).json({ success: true, treatments: data });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(500).json({ success: false, error: "Unexpected error" });
  }
};
