"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminLoginSchema, type AdminLoginSchema } from '@/lib/schemas/adminLoginSchema';

//* Defines a proper return type
interface LoginResponse {
  success: boolean;
  user?: {
    id: string;
    email?: string;
  }
  error?: string | { path: string; message: string }[];
}

const AdminAuth: React.FC = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<AdminLoginSchema>({
    resolver: zodResolver(adminLoginSchema)
  });

   //* handles login logic
  const onLogin = async (data: AdminLoginSchema) => {
    setServerError(null);
    setLoading(true);
    
    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result: LoginResponse = await res.json();

      if (!result.success) {
        //* handles validation or auth errors
        const errorMessage = 
          typeof result.error === "string"
            ? result.error
            : Array.isArray(result.error)
            ? result.error.map((e) => e.message).join(", ")
            : "Login failed";
        setServerError(errorMessage);
      } else {
        //* Directs to dashboard
        router.push("/admin/dashboard");
      }
    } catch {
      setServerError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  };

  //* Changes background colour
  useEffect(() => {
    const originalBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "var(--main-pink)"
    return () => {
      document.body.style.backgroundColor = originalBackground;
    }
  }, [])

  // TODO: Move beneath logic inside of "/admin/dashboard" directory (handles logout functionality). Pass down as props.

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onLogin)} className="flex flex-col gap-3 w-full">
       
        {/* ADMIN LOGIN INPUT WRAPPER */}
        <div className="flex flex-col gap-3">
          <label className="text-sm">Email</label>
          <input 
            type="email"
            {...register("email")}
            placeholder="Email"
            className="border border-gray-200 rounded-lg p-3 focus:outline-2 focus:outline-blue-200"
          />
          {errors.email && <p className="text-red-600 text-sm">⚠ {errors.email.message}</p>}

          <label className="text-sm">Password</label>
          <input 
            type="password"
            {...register("password")}
            placeholder="Password"
            className="border border-gray-200 rounded-lg p-3 focus:outline-2 focus:outline-blue-200"
          />
          {errors.password && <p className="text-red-600 text-sm">⚠ {errors.password.message}</p>}

          {/* ERROR MESSAGE FOR WRONG PASSWORD */}
          {serverError && <p className="text-red-600 text-xs">⚠ {serverError}</p>}

          <div className="flex justify-between">
            <input 
              type="checkbox"
            />
            <label className="flex-1 text-sm text-gray-600 pl-1">Remember me on this device</label>
            <p className="text-sm text-(--btn-pink) text-right ">
              Forgot your password?
            </p>
          </div>
        </div>

        {/* LOGIN BUTTON */}
        <button 
          type="submit"
          disabled={loading}
          className="cursor-pointer bg-(--btn-pink) rounded-lg p-3 text-white tracking-wider 
            hover:brightness-90 transition-discrete duration-200 mb-3 disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* <button 
        onClick={onLogout}
        className="cursor-pointer"
      >
        Logout
      </button> */}
    </div>
  )
}

export default AdminAuth