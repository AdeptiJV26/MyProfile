"use client";

import * as Icons from "lucide-react";
import { supabase } from "../lib/supabase";
import React, { useState, useEffect } from "react";

interface Skill {
  id: string;
  name: string;
  level: number;
  icon: string;
  skill_desc: string;
}

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data } = await supabase
        .from("skills")
        .select(`id, name, level, icon, skill_desc`);

      if (data) {
        const formattedData = (data as any[]).map((item) => ({
          ...item,
          level: Number(item.level),
        })) as Skill[];

        setSkills(formattedData.sort((a, b) => b.level - a.level));
      }
      setLoading(false);
    };
    fetchSkills();
  }, []);

  if (loading) return <div className="h-20 w-full bg-white/5 animate-pulse rounded-lg" />;

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-secondary shadow-[0_0_8px_#3b82f6]"></div>
        <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-heading">Skill Slots</h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {skills.map((skill) => {
          const IconComponent = (Icons[skill.icon as keyof typeof Icons] as React.ElementType) || Icons.HelpCircle;

          return (
            <div key={skill.id} className="group relative flex items-start gap-4 rounded-lg p-[1px] transition-all overflow-hidden">
              <div className="absolute inset-[-1000%] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,#3b82f6,#1d4ed8,#3b82f6)]" />

              <div className="relative flex w-full items-start gap-4 rounded-lg border p-4 transition-all bg-black border-white/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <IconComponent size={20} />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-end justify-between">
                    <h4 className="font-bold tracking-wide text-slate-100">{skill.name}</h4>
                    <span className="font-mono text-sm italic text-blue-500">LV. {skill.level}</span>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-400 italic opacity-80 group-hover:opacity-100 transition-opacity">
                    &quot;{skill.skill_desc}&quot;
                  </p>

                  <div className="h-1.5 w-full rounded-full bg-slate-900/80 p-[1px] ring-1 ring-white/5 overflow-hidden">
                    <div 
                      className="h-full relative rounded-full transition-all duration-1000 bg-gradient-to-r from-blue-600 to-blue-400"
                      style={{ width: `${skill.level}%` }}
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