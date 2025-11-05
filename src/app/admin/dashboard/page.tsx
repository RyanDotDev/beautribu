import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { supabaseAdmin, adminEmails } from '@/pages/api/admin/supabase';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("sb-access-token")?.value;

  if (!accessToken) {
    redirect("/admin"); //* if not logged in
  }

  const { data: { user }, error } = await supabaseAdmin.auth.getUser(accessToken);

  if (error) {
    console.error("Supabase getUser error:", error.message)
    redirect("/admin")
  }

  if (!user || !adminEmails.includes(user.email ?? "")) {
    redirect("/unauthorized");
  }

  return (
    <div className="min-h-screen p-8">
      <h1>Welcome, {user.email}</h1>
      <p>You are securley logged into the admin dashboard ✅</p>
    </div>
  );
};
