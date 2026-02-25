
"use client";
import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import * as Icons from "lucide-react";

interface Skill {
  id: string | number;
  name: string;
  level: number;
  skill_desc: string;
  icon: keyof typeof Icons;
}

export const EditSkillModal = ({ skill, onClose, onRefresh }: { 
  skill: Skill; 
  onClose: () => void; 
  onRefresh: () => void 
}) => {
  const [formData, setFormData] = useState(skill);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("skills")
      .update({
        name: formData.name,
        level: formData.level,
        skill_desc: formData.skill_desc,
        icon: formData.icon
      })
      .eq("id", skill.id);

    if (!error) {
      onRefresh();
      onClose();
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-blue-500/30 p-6 rounded-lg w-full max-w-md space-y-4 shadow-[0_0_20px_rgba(0,154,243,0.2)]">
        <h2 className="orbitron text-blue-400 font-bold uppercase tracking-tighter">Modify Skill</h2>
        
        <div className="space-y-3 text-xs">
          <div>
            <label className="text-white/50 block mb-1">Skill Name</label>
            <input 
              className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="text-white/50 block mb-1">Level ({formData.level})</label>
            <input 
              type="range" min="1" max="100" className="w-full accent-blue-500"
              value={formData.level}
              onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})}
            />
          </div>
          <div>
            <label className="text-white/50 block mb-1">Description</label>
            <textarea 
              className="w-full bg-white/5 border border-white/10 p-2 rounded h-20 outline-none"
              value={formData.skill_desc}
              onChange={(e) => setFormData({...formData, skill_desc: e.target.value})}
            />
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button 
            onClick={handleUpdate} disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-orbitron text-[10px] uppercase"
          >
            {loading ? "Syncing..." : "Confirm Update"}
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-white/10 hover:bg-white/5 rounded font-orbitron text-[10px] uppercase"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};