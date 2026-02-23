import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const SkillList = () => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data } = await supabase
        .from("skills")
        .select("id, name, level, icon, skill_desc");
      if (data) setSkills(data);
    };
    fetchSkills();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {skills.map((skill) => (
        <div key={skill.id} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <div className="font-orbitron text-blue-400 text-sm uppercase">{skill.name}</div>
              <div className="text-xs text-white/50">{skill.skill_desc}</div>
            </div>
          </div>
          <div className="font-orbitron text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
            LVL {skill.level}
          </div>
        </div>
      ))}
    </div>
  );
};