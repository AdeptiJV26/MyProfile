"use client";

import { useTheme } from "next-themes";

import { Moon, Sun, Monitor } from "lucide-react";

import { useEffect, useState } from "react";

const Dark = Moon;

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { id: "light", icon: Sun, label: "Light Mode" },

    { id: "dark", icon: Dark, label: "Dark Mode" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-full p-6">
      <h2 className="text-2xl text-center font-black italic uppercase tracking-tighter text-blue-400 mb-10">
        System Configuration
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
        <div className="md:col-span-2">
          <p className="text-sm text-txt text-center md:text-right uppercase tracking-widest font-bold">
            Display Theme
          </p>
        </div>

        <div className="md:col-span-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {themes.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setTheme(id)}
                className={`w-full flex items-center justify-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
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
    </div>
  );
}
