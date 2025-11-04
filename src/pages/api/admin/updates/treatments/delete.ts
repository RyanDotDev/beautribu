import { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin, adminEmails } from "../../supabase";

interface DeleteTreatmentBody {
  id: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //* Only allow DELETE for updates
  if (req.method !== "DELETE") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { id } = req.body as DeleteTreatmentBody;

    if (!id) {
      return res.status(400).json({ success: false, error: "Missing treatment ID" });
    }

    //* Verifies admin
    const adminToken = req.headers.authorization?.replace("Bearer", "");
    if (!adminToken) return res.status(401).json({ error: "Unauthorized "});

    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(adminToken);
    if (authError || !user) return res.status(401).json({ error: "Unauthorized" });

    //* Restricts access via email
    const allowedEmails = adminEmails //* DEV_EMAIL for testing/debugging purposes;
    if (!allowedEmails.includes(user.email ?? "")) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const { error } = await supabaseAdmin
      .from("treatments")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, message: "Treatment deleted successfully" });
  } catch (error) {
    //* Catches unknown error
    if (error instanceof Error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(500).json({ success: false, error: "Unexpected error" })
  }
};
