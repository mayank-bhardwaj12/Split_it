"use client";

import Link from "next/link";
import { PieChart, ArrowRight } from "lucide-react";
import { registerUser } from "@/app/actions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");
    const result = await registerUser(formData);
    
    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/login?registered=true");
    }
  }

  return (
    <div className="min-h-screen flex selection:bg-emerald-500 selection:text-white">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="max-w-sm w-full mx-auto flex flex-col gap-8">
          {/* Header */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 bg-emerald-500 group-hover:bg-emerald-600 transition-colors rounded-lg flex items-center justify-center">
                <PieChart className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">SplitIt</span>
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">Create an account</h1>
            <p className="text-slate-500 mt-2">Sign up to start tracking shared expenses with your friends and family.</p>
          </div>

          {/* Registration Form */}
          <form action={handleSubmit} className="flex flex-col gap-5">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                {error}
              </div>
            )}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="name">Full Name</label>
              <input 
                id="name"
                name="name"
                type="text" 
                placeholder="John Doe"
                required
                className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
              <input 
                id="email"
                name="email"
                type="email" 
                placeholder="you@example.com"
                required
                className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="password">Password</label>
              <input 
                id="password"
                name="password"
                type="password" 
                placeholder="••••••••"
                required
                className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="mt-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-70 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98] flex justify-center items-center gap-2 group"
            >
              {loading ? "Signing up..." : "Sign Up"}
              {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-slate-500 text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-600 font-medium hover:text-emerald-700 hover:underline">
              Log in instead
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-slate-50 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50" />
        
        {/* Decorative elements */}
        <div className="relative z-10 max-w-lg bg-white/60 backdrop-blur-xl p-10 rounded-[2rem] border border-white/50 shadow-2xl shadow-emerald-900/5">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">"No more spreadsheet nightmares."</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            SplitIt makes it ridiculously easy to keep track of shared expenses on trips, with roommates, or just going out for dinner.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-emerald-700 font-medium text-xs">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-slate-500">
              Join thousands of users
            </div>
          </div>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
