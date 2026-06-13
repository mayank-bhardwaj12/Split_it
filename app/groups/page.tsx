import Link from "next/link";
import { Users, Plus, Home, Receipt, UserCircle, Bell, Settings } from "lucide-react";

export default function GroupsPage() {
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
          <h1 className="text-xl font-bold text-slate-900">Your Groups</h1>
          <div className="flex items-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-sm transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" /> New Group
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 text-white flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer">
              JD
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 max-w-5xl mx-auto w-full flex flex-col gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Group Card 1 */}
            <Link href="/groups/1" className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group overflow-hidden flex flex-col">
              <div className="h-24 bg-gradient-to-r from-blue-400 to-indigo-500 p-4 relative">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-medium">
                  3 members
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">Bali Trip 🌴</h3>
                <p className="text-sm text-slate-500 mt-1">Last active 2 days ago</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">A</div>
                    <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-700">J</div>
                    <div className="w-8 h-8 rounded-full bg-orange-200 border-2 border-white flex items-center justify-center text-xs font-bold text-orange-700">M</div>
                  </div>
                  <span className="font-semibold text-emerald-600 text-sm">Owes you $45</span>
                </div>
              </div>
            </Link>

            {/* Group Card 2 */}
            <Link href="/groups/2" className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group overflow-hidden flex flex-col">
              <div className="h-24 bg-gradient-to-r from-rose-400 to-orange-400 p-4 relative">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-medium">
                  2 members
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">Apartment Rent</h3>
                <p className="text-sm text-slate-500 mt-1">Last active today</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-700">J</div>
                    <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">S</div>
                  </div>
                  <span className="font-semibold text-orange-600 text-sm">You owe $120</span>
                </div>
              </div>
            </Link>
            
            {/* Group Card 3 - Settled */}
            <Link href="/groups/3" className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group overflow-hidden flex flex-col">
              <div className="h-24 bg-gradient-to-r from-slate-300 to-slate-400 p-4 relative">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-medium">
                  5 members
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">Dinner Party</h3>
                <p className="text-sm text-slate-500 mt-1">Last active last month</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-500">+3</div>
                  </div>
                  <span className="font-medium text-slate-500 text-sm">Settled up</span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
