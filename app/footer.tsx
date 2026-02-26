import { Circle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black/20 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Left Side: System Status */}
        <div className="flex items-center gap-6 text-[10px] text-slate-500 tracking-[0.2em] font-mono">
          <span className="flex items-center gap-2">
            <Circle
              size={7}
              className="fill-green-500 text-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            />
            SYSTEM ONLINE
          </span>
          <span className="hidden sm:inline opacity-50">|</span>
          <span>LOC: LBRDC_PLAZA</span>
        </div>

        {/* Right Side: Credits - Aligned right on desktop */}
        <div className="flex flex-col md:items-end justify-center text-[10px] md:text-right text-slate-600 font-mono uppercase tracking-widest">
          <span className="opacity-80">Developed kasi walang magawa</span>
          <span className="text-accent/60 font-black">© 2026 Aizen // Ver. 1.0.4</span>
        </div>

      </div>
    </footer>
  );
}