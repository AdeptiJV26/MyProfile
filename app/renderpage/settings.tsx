"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { DBpanel } from "../components/dbcrude";
import { DayNight } from "../components/daynighttoggle";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"ui" | "data">("ui");

 useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  
  return (
    <div className="flex flex-col min-h-125 p-6 animate-in fade-in duration-500">
      <DayNight activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 text-xs orbitron">
        {activeTab === "ui" ? (
          <div className="space-y-6 animate-in slide-in-from-left-4 duration-300">
            <h2 className="text-lg font-black italic uppercase text-heading font-orbitron">
              System Settings
            </h2>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="font-bold uppercase tracking-widest">
                Day / Night Toggle
              </span>
              
              <div className="flex gap-2">
                {mounted ? (
                  <>
                    <button
                      onClick={() => setTheme("light")}
                      className={`p-3 rounded-lg border transition-all ${
                        theme === "light"
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-white/5"
                      }`}
                    >
                      <Sun size={18} />
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`p-3 rounded-lg border transition-all ${
                        theme === "dark"
                          ? "border-stylish/50 bg-secondary/50"
                          : "border-stylish/50"
                      }`}
                    >
                      <Moon size={18} />
                    </button>
                  </>
                ) : (
                  /* Skeleton/Placeholder to prevent layout shift during load */
                  <div className="h-11.5 w-24 bg-white/5 rounded-lg animate-pulse" />
                )}
              </div>
            </div>
          </div>
        ) : (
          <DBpanel />
        )}
      </div>
    </div>
  );
}