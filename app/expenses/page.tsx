import Link from "next/link";
import { Users, Home, Receipt, ArrowLeft, Plus } from "lucide-react";

export default function ExpensesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col fixed h-full">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2 text-emerald-600">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Receipt className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">SplitIt</span>
          </Link>
        </div>
        <nav className="p-4 flex flex-col gap-1 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/groups" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
            <Users className="w-5 h-5" /> Groups
          </Link>
          <Link href="/expenses" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-medium">
            <Receipt className="w-5 h-5" /> Recent Activity
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-900">All Expenses</h1>
          <Link href="/expenses/create" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-sm transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add
          </Link>
        </header>

        {/* Content */}
        <div className="p-6 max-w-4xl mx-auto w-full flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { title: "Dinner at Jimbaran", group: "Bali Trip", paidBy: "You", amount: "$85.00", split: "You lent $42.50", date: "Oct 26" },
                { title: "Uber to Airport", group: "Non-group", paidBy: "Sarah", amount: "$45.00", split: "You borrowed $22.50", date: "Oct 25" },
                { title: "Monthly Wi-Fi", group: "Apartment", paidBy: "You", amount: "$60.00", split: "You lent $30.00", date: "Oct 24" },
                { title: "Movie Tickets", group: "Non-group", paidBy: "Mike", amount: "$30.00", split: "You borrowed $15.00", date: "Oct 20" },
              ].map((item, i) => (
                <div key={i} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.group} • {item.paidBy} paid {item.amount}</div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right ml-16 sm:ml-0">
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
