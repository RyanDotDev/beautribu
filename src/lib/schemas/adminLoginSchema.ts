import { z } from "zod";

export const adminLoginSchema = z.object({
   email: z.string()
    .min(1, "Invalid Email")
    .refine((value) => /^[^@]+@[^@]+\.[^@]+$/.test(value), {
      message: "Invalid email address"
    }),
  password: z.string().min(6, "Password needs to be at least 6 characters"),
})

export type AdminLoginSchema = z.infer<typeof adminLoginSchema>;