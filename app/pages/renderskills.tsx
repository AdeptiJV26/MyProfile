import * as Icons from "lucide-react";
import { supabase } from "../lib/supabase";
import React, { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: string;
  icon: string;
  skill_type: string;
  skill_desc: string;
}

export default function RenderSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data } = await supabase
        .from("skills")
        .select("*")
        .returns<Skill[]>(); // 2. Tell TS to expect Skill array
      if (data) {
        const sortedData = [...data].sort((a, b) => 
          parseInt(a.level .replace("%", "")) - parseInt(b.level.replace("%", "")));
        setSkills(sortedData);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-primary shadow-[0_0_8px_#3b82f6]"></div>
        <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-slate-100">
          Skill Slots
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {skills.map((skill, i) => {
          const IconComponent =
            (Icons[skill.icon as keyof typeof Icons] as React.ElementType) ||
            Icons.HelpCircle;
          const isUltimate = skill.skill_type === "Ultimate Skill";
          const isDivine = skill.skill_type === "Divine Manifestation";

          return (
            <div
              key={i}
              className={`group relative flex items-start gap-4 rounded-lg p-[1px] transition-all overflow-hidden ${
                isDivine ? "shadow-[0_0_20px_rgba(168,85,247,0.4)]" : ""
              }`}
            >
              <div
                className={`absolute inset-[-1000%] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDivine
                    ? "bg-[conic-gradient(from_0deg,#ff0000,#ffea00,#00ffea,#ff00e5,#ff0000)]"
                    : "bg-[conic-gradient(from_0deg,#3b82f6,#1d4ed8,#3b82f6)]"
                }`}
              />

              <div
                className={`relative flex w-full items-start gap-4 rounded-lg border p-4 transition-all bg-black/90 ${
                  isUltimate
                    ? "border-orange-500/40"
                    : isDivine
                    ? "border-purple-500/50"
                    : "border-white/5"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded border transition-all ${
                    isDivine
                      ? "border-purple-500/50 bg-purple-500/20 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                      : isUltimate
                      ? "border-orange-500/30 bg-orange-500/10 text-orange-400"
                      : "border-blue-500/20 bg-blue-500/10 text-blue-400"
                  }`}
                >
                  <IconComponent size={20} />{" "}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-end justify-between">
                    <div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                          isDivine
                            ? "text-purple-400 animate-pulse"
                            : isUltimate
                            ? "text-orange-400"
                            : "text-blue-400"
                        }`}
                      >
                        {skill.skill_type}
                      </span>
                      <h4
                        className={`font-bold tracking-wide ${
                          isDivine ? "text-white text-lg" : "text-slate-100"
                        }`}
                      >
                        {skill.name}
                      </h4>
                    </div>
                    <span
                      className={`font-mono text-sm italic ${
                        isDivine
                          ? "text-purple-400 font-black"
                          : isUltimate
                          ? "text-orange-400"
                          : "text-blue-500"
                      }`}
                    >
                      {isDivine
                        ? "LV. ∞"
                        : `LV. ${skill.level.replace("%", "")}`}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-400 italic opacity-80 group-hover:opacity-100 transition-opacity">
                    &quot;{skill.skill_desc}&quot;
                  </p>

                  <div className="h-1.5 w-full rounded-full bg-slate-900/80 p-[1px] ring-1 ring-white/5 overflow-hidden">
                    <div
                      className={`h-full relative rounded-full transition-all duration-1000 ${
                        isDivine
                          ? "bg-gradient-to-r from-purple-600 via-pink-500 to-white shadow-[0_0_15px_#fff]"
                          : isUltimate
                          ? "bg-gradient-to-r from-orange-600 to-yellow-400"
                          : "bg-gradient-to-r from-blue-600 to-blue-400"
                      }`}
                      style={{ width: isDivine ? "100%" : skill.level }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-sao-progress" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
