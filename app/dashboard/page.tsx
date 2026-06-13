import Link from "next/link";
import { PieChart, Home, Users, Receipt, UserCircle, Bell, Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const initials = session.user?.name 
    ? session.user.name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)
    : "U";
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2 text-emerald-600">
            <PieChart className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight text-slate-900">SplitIt</span>
          </Link>
        </div>
        <nav className="p-4 flex flex-col gap-1 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-medium">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/groups" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <Users className="w-5 h-5" /> Groups
          </Link>
          <Link href="/expenses" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <Receipt className="w-5 h-5" /> Recent Activity
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <UserCircle className="w-5 h-5" /> Profile
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 text-white flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer" title={session.user?.name || "User"}>
              {initials}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 max-w-5xl mx-auto w-full flex flex-col gap-8">
          
          {/* Balance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Balance</span>
              <span className="text-3xl font-bold text-slate-900">+$45.50</span>
              <span className="text-xs font-medium text-emerald-600 mt-2">You are owed in total</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">You Owe</span>
              <span className="text-3xl font-bold text-orange-600">$120.00</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">You are Owed</span>
              <span className="text-3xl font-bold text-emerald-600">$165.50</span>
            </div>
          </div>

          <div className="flex gap-4">
             <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2">
               <Plus className="w-5 h-5" /> Add Expense
             </button>
             <button className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium py-3 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2">
               Settle Up
             </button>
          </div>

          {/* Activity Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Recent Activity</h2>
              <Link href="/expenses" className="text-sm text-emerald-600 font-medium hover:underline">View all</Link>
            </div>
            <div className="divide-y divide-slate-100">
              {/* Dummy Activity Items */}
              {[
                { title: "Dinner at Jimbaran", group: "Bali Trip", amount: "You owe $25.00", date: "Today", type: "owe" },
                { title: "Groceries", group: "Apartment", amount: "You paid $80.00", date: "Yesterday", type: "paid" },
                { title: "Internet Bill", group: "Apartment", amount: "Alex owes you $30.00", date: "Oct 24", type: "owed" }
              ].map((item, i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{item.title}</div>
                      <div className="text-xs text-slate-500">{item.group} • {item.date}</div>
                    </div>
                  </div>
                  <div className={`font-medium ${
                    item.type === 'owe' ? 'text-orange-600' : 
                    item.type === 'paid' ? 'text-slate-900' : 'text-emerald-600'
                  }`}>
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
