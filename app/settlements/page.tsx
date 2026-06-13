import Link from "next/link";
import { ArrowLeft, ArrowRightLeft, DollarSign } from "lucide-react";

export default function SettleUpPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 sticky top-0 z-10">
        <Link href="/dashboard" className="text-slate-500 hover:text-slate-900 transition-colors mr-4">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold text-slate-900">Settle Up</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 flex justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
              <span className="font-bold text-emerald-700">You</span>
            </div>
            <div className="h-0.5 w-16 bg-slate-200 my-auto -mx-2"></div>
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 text-slate-500">
              <ArrowRightLeft className="w-6 h-6" />
            </div>
            <div className="h-0.5 w-16 bg-slate-200 my-auto -mx-2"></div>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
              <span className="font-bold text-orange-700">Alex</span>
            </div>
          </div>

          <form className="flex flex-col gap-6">
            
            {/* Payer/Receiver */}
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Who is paying?</label>
                <select className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 bg-white">
                  <option value="you">You</option>
                  <option value="alex">Alex Johnson</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">To whom?</label>
                <select className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 bg-white">
                  <option value="alex">Alex Johnson</option>
                  <option value="you">You</option>
                </select>
              </div>
            </div>

            {/* Amount */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 flex items-center justify-between">
                <span>Amount</span>
                <span className="text-xs text-orange-600">You owe Alex $120.00</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                <input 
                  type="number" 
                  placeholder="0.00"
                  step="0.01"
                  defaultValue="120.00"
                  className="pl-8 pr-4 py-3 w-full rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-emerald-600 font-bold text-2xl"
                />
              </div>
            </div>

            {/* Date/Method */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Payment Method / Note</label>
              <input 
                type="text" 
                placeholder="e.g. Venmo, Cash, Bank Transfer"
                className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            {/* Actions */}
            <div className="pt-4 flex gap-4 mt-2">
              <Link href="/dashboard" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-center hover:bg-slate-50 transition-colors">
                Cancel
              </Link>
              <button type="button" className="flex-1 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-sm transition-colors flex items-center justify-center gap-2">
                <DollarSign className="w-5 h-5" /> Record Payment
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}
