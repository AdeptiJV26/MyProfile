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

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-[500px] p-6 animate-in fade-in duration-500">
      <DayNight activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1">
        {activeTab === "ui" ? (
          <div className="space-y-6 animate-in slide-in-from-left-4 duration-300">
            <h2 className="text-xl font-black italic uppercase text-blue-400 font-orbitron">System Settings</h2>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-xs font-bold uppercase tracking-widest">Appearance Theme</span>
              <div className="flex gap-2">
                <button onClick={() => setTheme("light")} className={`p-3 rounded-lg border ${theme === "light" ? "border-blue-500 bg-blue-500/10" : "border-white/5"}`}><Sun size={18} /></button>
                <button onClick={() => setTheme("dark")} className={`p-3 rounded-lg border ${theme === "dark" ? "border-blue-500 bg-blue-500/10" : "border-white/5"}`}><Moon size={18} /></button>
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