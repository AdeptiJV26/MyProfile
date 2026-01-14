"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function RenderSettings() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, [])
  if (!mounted) return null;

  const themes = [
    { id: "light", icon: Sun, label: "Light Mode" },
    { id: "dark", icon: Dark, label: "Dark Mode" }, // Standardized to "Dark" for UI consistency
    { id: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <h2 className="text-2xl font-black italic uppercase tracking-tighter text-blue-400 mb-6">
        System Configuration
      </h2>

      <div className="space-y-4">
        <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">
          Display Theme
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {themes.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setTheme(id)}
              className={`flex items-center justify-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
                theme === id
                  ? "bg-blue-600/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  : "bg-[#1a1a20] border-white/5 text-slate-500 hover:border-white/20"
              }`}
            >
              <Icon size={18} />
              <span className="text-xs uppercase font-bold tracking-widest">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Simple wrapper for the Moon icon to match your Lucide imports
const Dark = Moon;
