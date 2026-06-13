"use client";

import Link from "next/link";
import { PieChart, ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
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
              <span className="font-bold text-xl tracking-tight text-slate-900">
                SplitIt
              </span>
            </Link>

            <h1 className="text-3xl font-bold text-slate-900">Welcome back</h1>
            <p className="text-slate-500 mt-2">
              Log in to your account to continue tracking your expenses.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
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
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700" htmlFor="password">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

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
              className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-emerald-500/20 disabled:opacity-70 active:scale-[0.98] flex justify-center items-center gap-2 group"
            >
              {loading ? "Logging in..." : "Log In"}
              {!loading && (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-slate-500 text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-slate-900 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-slate-900 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />

        <div className="relative z-10 max-w-lg bg-white/10 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            It literally saved our friendship.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Money gets awkward. SplitIt makes it transparent and fair. No more reminding people to pay you back.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
              <div className="w-full h-full bg-slate-900 rounded-full border-2 border-transparent" />
            </div>
            <div>
              <div className="font-medium text-white text-sm">Alex Johnson</div>
              <div className="text-xs text-slate-400">Power User</div>
            </div>
          </div>
        </div>

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}