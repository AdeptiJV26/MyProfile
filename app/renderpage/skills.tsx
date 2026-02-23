"use client";

import * as Icons from "lucide-react";
import { supabase } from "../lib/supabase";
import React, { useState, useEffect } from "react";

// 1. Define the Skill structure
interface Skill {
  id: string | number;
  name: string;
  level: number;
  skill_desc: string;
  icon: keyof typeof Icons;
}

export default function SkillsPage() {
  // 2. Tell useState to expect an array of Skills
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("skills").select("*");
      if (data) {
        // Sort and cast the data to Skill type
        setSkills((data as Skill[]).sort((a, b) => b.level - a.level));
      }
      setLoading(false);
    })();
  }, []);

  if (loading)
    return <div className="h-24 w-full bg-white/5 animate-pulse rounded-lg" />;

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-6 w-1 bg-secondary shadow-[0_0_12px_var(--color-secondary)]" />
        <h3 className="orbitron text-xl font-black uppercase tracking-[0.4em] text-heading">
          Skill Slots
        </h3>
        <div className="flex-1 h-px bg-linear-to-r from-secondary/50 to-transparent" />
      </div>

      <div className="grid gap-6">
        {skills.map((skill) => {
          // 3. Explicitly cast the Icon lookup
          const IconComponent = (Icons[skill.icon] as React.ElementType) || Icons.HelpCircle;

          return (
            <div key={skill.id} className="group relative">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all" />

              <div className="relative flex w-full items-center gap-5 border border-stylish/50 bg-secondary/10 p-5 rounded-sm transition-all group-hover:bg-secondary/20 group-hover:border-accent/40">
                <div className="relative shrink-0 w-14 h-14 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 bg-accent/0 group-hover:bg-accent/20 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]">
                  <IconComponent
                    size={24}
                    className="rotate-45 group-hover:rotate-0 transition-transform duration-500 text-accent/60 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_var(--color-accent)]"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="orbitron font-black text-sm tracking-widest text-heading uppercase">
                      {skill.name}
                    </h4>
                    <span className="orbitron text-xs font-black italic text-accent drop-shadow-[0_0_5px_var(--color-accent)]">
                      LV.{skill.level}
                    </span>
                  </div>

                  <p className="text-[11px] text-txt/70 font-medium italic leading-relaxed border-l-2 border-accent/20 pl-3">
                    &quot;{skill.skill_desc}&quot;
                  </p>

                  <div className="relative h-2 w-full bg-black/40 rounded-none overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-linear-to-r from-accent/40 to-accent relative transition-all duration-1000 ease-out shadow-[0_0_10px_var(--color-accent)]"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-sao-progress" />
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