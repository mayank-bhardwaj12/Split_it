import Link from "next/link";
import { Users, Home, Receipt, ArrowLeft, Plus, Settings } from "lucide-react";

export default function GroupDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col fixed h-full">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2 text-emerald-600">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Users className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">SplitIt</span>
          </Link>
        </div>
        <nav className="p-4 flex flex-col gap-1 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/groups" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-medium">
            <Users className="w-5 h-5" /> Groups
          </Link>
          <Link href="/expenses" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <Receipt className="w-5 h-5" /> Recent Activity
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Link href="/groups" className="text-slate-500 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-slate-900">Bali Trip 🌴</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 max-w-4xl mx-auto w-full flex flex-col gap-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex flex-col gap-1">
              <span className="text-sm font-medium text-emerald-800">You are owed</span>
              <span className="text-3xl font-bold text-emerald-600">$45.50</span>
              <span className="text-xs text-emerald-700 mt-2">from 2 people in this group</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center gap-4">
              <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add Expense
              </button>
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2">
                Settle Up
              </button>
            </div>
          </div>

          {/* Expenses List */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mt-4">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-bold text-slate-900">Group Expenses</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { title: "Dinner at Jimbaran", date: "Oct 26", paidBy: "You", amount: "$85.00", split: "You lent $42.50" },
                { title: "Surf Rental", date: "Oct 25", paidBy: "Alex", amount: "$40.00", split: "You borrowed $20.00" },
                { title: "Groceries", date: "Oct 24", paidBy: "Maria", amount: "$30.00", split: "You borrowed $10.00" },
              ].map((item, i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{item.title}</div>
                      <div className="text-sm text-slate-500">{item.paidBy} paid {item.amount}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${item.split.includes('lent') ? 'text-emerald-600' : 'text-orange-600'}`}>
                      {item.split}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{item.date}</div>
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
