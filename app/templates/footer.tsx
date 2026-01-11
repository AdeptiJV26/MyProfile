import { Circle } from "lucide-react";

export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4 text-[10px] text-slate-500 tracking-[0.2em] font-mono">
        <span className="flex items-center gap-1">
          <Circle
            size={7}
            className="fill-green-500 text-green-500 animate-pulse"
          />
          SYSTEM ONLINE
        </span>
        <span>Location: LBRDC Plaza</span>
        <span></span>
      </div>
      <div className="flex flex-col justify-center items-center text-xs text-slate-600 font-mono uppercase">
        <span>Developed kasi walang magawa</span>
        <span>© 2026 Aizen</span>
      </div>
    </div>
  );
}
