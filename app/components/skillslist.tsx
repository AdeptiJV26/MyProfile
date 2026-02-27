"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import * as Icons from "lucide-react";
import { Settings2, Plus, HelpCircle } from "lucide-react";
import { EditSkillModal } from "./modals/editskillsmodal";

interface Skill {
  id?: string | number;
  name: string;
  level: number;
  skill_desc: string;
  icon: keyof typeof Icons;
}

export const SkillList = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchSkills = async () => {
    const { data } = await supabase.from("skills").select("*").order('level', { ascending: false });
    if (data) setSkills(data as Skill[]);
  };

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetchSkills(); }, []);

  const emptySkill: Skill = { name: "", level: 0, skill_desc: "", icon: "Zap" };

  return (
    <div className="flex flex-col gap-3">
      <button 
        onClick={() => setIsAddModalOpen(true)}
        className="group relative flex items-center justify-center p-3 border border-dashed border-accent/40 bg-accent/5 hover:bg-accent/10 transition-all rounded-lg mb-2"
      >
        <div className="flex items-center gap-2 orbitron text-xs font-black tracking-[0.2em] text-accent/60 group-hover:text-accent">
          <Plus size={16} /> [ ADD_NEW_SKILL_SLOT ]
        </div>
      </button>

      {skills.map((skill) => {
        const IconComponent = (Icons[skill.icon] as React.ElementType) || HelpCircle;
        return (
          <div key={skill.id} className="flex items-center justify-between p-3 bg-secondary/40 hover:bg-secondary/80 border border-white/10 rounded-lg group transition-all">
            <div className="flex items-center gap-5">
              <IconComponent size={24} className="text-accent drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]" />
              <div>
                <div className="text-heading orbitron font-black text-sm uppercase leading-none mb-1">{skill.name}</div>
                <div className="text-[10px] text-txt/60 orbitron uppercase tracking-tighter">{skill.skill_desc}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[10px] bg-secondary border border-white/10 text-heading font-black px-2 py-1 rounded orbitron">LVL {skill.level}</div>
              <button 
                onClick={() => setSelectedSkill(skill)} 
                className="p-2 hover:bg-accent/20 rounded-md text-white/20 hover:text-accent border border-transparent hover:border-accent/30 transition-colors"
              >
                <Settings2 size={16} />
              </button>
            </div>
          </div>
        );
      })}

      {(selectedSkill || isAddModalOpen) && (
        <EditSkillModal 
          skill={selectedSkill || emptySkill} 
          onClose={() => { setSelectedSkill(null); setIsAddModalOpen(false); }} 
          onRefresh={fetchSkills}
        />
      )}
    </div>
  );
};