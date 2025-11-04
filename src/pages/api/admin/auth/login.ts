import { NextApiRequest, NextApiResponse } from "next";
import { adminEmails, supabaseAdmin } from "../supabase";
import { adminLoginSchema } from "@/lib/schemas/adminLoginSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" })
  }

  const parsed = adminLoginSchema.safeParse(req.body);

  if (!parsed.success) {
    const errors = parsed.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));
    return res.status(400).json({ success: false, error: errors });
  }

  const { email, password } = parsed.data;

  if (!adminEmails.includes(email)) {
    return res.status(403).json({ success: false, error: "Unauthorised email" });
  }

  const { data, error } = await supabaseAdmin.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ success: false, error: error.message });
  }

  return res.status(200).json({ success: true, user: data.user });
};
