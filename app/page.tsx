import React from 'react';
import { ClipboardCheck, Activity, ShieldCheck } from 'lucide-react';

export default function Page() {
  return (
    <main className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl duration-500">
      {/* Header Section */}
      <div className="bg-slate-900 p-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white/10 p-3 rounded-full mb-3 backdrop-blur-sm">
            <ClipboardCheck className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            ReportFixTest
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            System Status Dashboard
          </p>
        </div>
        
        {/* Decorative background circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
          <div className="flex items-center space-x-3">
            <Activity className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-slate-700">Operational</span>
          </div>
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-slate-600">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>Security checks passed</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-slate-600">
            <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            </div>
            <span>Latest build: <span className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">v1.0.4</span></span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">
          Deployed on Vercel • Next.js App
        </p>
      </div>
    </main>
  );
}