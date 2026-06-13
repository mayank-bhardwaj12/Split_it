import Link from "next/link";
import { ArrowRight, PieChart, Receipt, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <PieChart className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">SplitIt</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Log in
          </Link>
          <Link 
            href="/register" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 w-fit text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Now with real-time updates
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Less stress when <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                sharing expenses.
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family. 
              Settle up easily without the awkwardness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/register" 
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-2xl font-semibold transition-all"
              >
                How it works
              </Link>
            </div>
          </div>
          
          {/* Decorative visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Trip to Bali 🌴</h3>
                  <p className="text-sm text-slate-500">You owe $145.50</p>
                </div>
                <Users className="text-slate-400" />
              </div>
              
              <div className="flex flex-col gap-4">
                {[
                  { name: "Dinner at Jimbaran", amount: "$85.00", icon: <Receipt className="w-4 h-4" />, color: "bg-orange-100 text-orange-600" },
                  { name: "Surf Rental", amount: "$30.50", icon: <PieChart className="w-4 h-4" />, color: "bg-blue-100 text-blue-600" },
                  { name: "Groceries", amount: "$30.00", icon: <Receipt className="w-4 h-4" />, color: "bg-emerald-100 text-emerald-600" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium text-slate-700">{item.name}</span>
                    </div>
                    <span className="font-semibold text-slate-900">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
