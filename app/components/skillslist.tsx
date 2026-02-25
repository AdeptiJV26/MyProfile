"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import * as Icons from "lucide-react";
import { Settings2 } from "lucide-react";
import { EditSkillModal } from "./modals/editskillsmodal";


interface Skill {
  id: string | number;
  name: string;
  level: number;
  skill_desc: string;
  icon: keyof typeof Icons;
}

export const SkillList = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const fetchSkills = async () => {
    const { data } = await supabase.from("skills").select("*");
    if (data) setSkills(data as Skill[]);
  };

  useEffect(() => { fetchSkills(); }, []);

  return (
    <div className="flex flex-col gap-4">
      {skills.map((skill) => {
        const IconComponent = (Icons[skill.icon] as React.ElementType) || Icons.HelpCircle;
        return (
          <div key={skill.id} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg group">
            <div className="flex items-center gap-4">
              <IconComponent size={24} className="text-blue-400" />
              <div>
                <div className="text-blue-400 text-sm uppercase">{skill.name}</div>
                <div className="text-xs text-white/50">{skill.skill_desc}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">LVL {skill.level}</div>
              <button onClick={() => setSelectedSkill(skill)} className="p-2 hover:bg-blue-500/20 rounded-md text-white/40 hover:text-blue-400 border border-transparent hover:border-blue-500/30">
                <Settings2 size={16} />
              </button>
            </div>
          </div>
        );
      })}

      {selectedSkill && (
        <EditSkillModal 
          skill={selectedSkill} 
          onClose={() => setSelectedSkill(null)} 
          onRefresh={fetchSkills}
        />
      )}
    </div>
  );
};