import Link from "next/link";
import { ArrowLeft, Users, Receipt, Split } from "lucide-react";

export default function CreateExpensePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 sticky top-0 z-10">
        <Link href="/dashboard" className="text-slate-500 hover:text-slate-900 transition-colors mr-4">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold text-slate-900">Add an expense</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 flex justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <form className="flex flex-col gap-6">
            
            {/* Group/With */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Users className="w-4 h-4" /> With you and:
              </label>
              <select className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 bg-white">
                <option value="">Select a group or friend...</option>
                <option value="group1">Bali Trip</option>
                <option value="group2">Apartment</option>
                <option value="user1">Alex Johnson</option>
              </select>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Receipt className="w-4 h-4" /> Description
              </label>
              <input 
                type="text" 
                placeholder="e.g. Dinner at Jimbaran"
                className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            {/* Amount */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                <input 
                  type="number" 
                  placeholder="0.00"
                  step="0.01"
                  className="pl-8 pr-4 py-3 w-full rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 font-medium text-lg placeholder:text-slate-300"
                />
              </div>
            </div>

            {/* Split Type Summary */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  <Split className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Paid by <span className="font-semibold text-slate-900">you</span> and split <span className="font-semibold text-slate-900">equally</span>.</div>
                  <button type="button" className="text-emerald-600 text-xs font-medium hover:underline mt-0.5">Change how this is split</button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex gap-4 mt-2">
              <Link href="/dashboard" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-center hover:bg-slate-50 transition-colors">
                Cancel
              </Link>
              <button type="button" className="flex-1 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-sm transition-colors">
                Save Expense
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}
