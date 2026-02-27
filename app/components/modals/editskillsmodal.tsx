"use client";
import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import * as Icons from "lucide-react";
import { ConfirmModal } from "./confirmmodal";
import { 
  Zap, Code, Terminal, Cpu, Database, Globe, 
  Shield, Layers, Layout, MousePointer2, 
  Flame, Boxes, Trash2 
} from "lucide-react";

// Filtered icons relevant to Skills
const SkillIcons: Record<string, Icons.LucideIcon> = {
  Zap, Code, Terminal, Cpu, Database, Globe, 
  Shield, Layers, Layout, MousePointer2, 
  Flame, Boxes
};

interface Skill {
  id?: string | number;
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
  const [formData, setFormData] = useState<Skill>(skill);
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    if (!formData.id) return;
    setLoading(true);
    const { error } = await supabase.from("skills").delete().eq("id", formData.id);
    if (!error) {
      onRefresh();
      onClose();
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!formData.name || !formData.skill_desc) return alert("REQUIRED: ALL_FIELDS");
    setLoading(true);
    const { error } = await supabase.from("skills").upsert({
      ...(formData.id ? { id: formData.id } : {}),
      name: formData.name,
      level: formData.level,
      skill_desc: formData.skill_desc,
      icon: formData.icon
    });
    if (!error) { onRefresh(); onClose(); }
    setLoading(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/50 backdrop-blur-sm p-4 text-white">
        <div className="bg-secondary/20 border border-stylish p-6 rounded-lg w-full max-w-md space-y-4 shadow-[0_0_20px_rgba(0,154,243,0.2)]">
          <h2 className="orbitron text-heading font-bold uppercase tracking-tighter">
            {formData.id ? "/ Modify Skill" : "/ Initialize Skill"}
          </h2>
          
          <div className="space-y-3 text-xs">
            {/* Icon Picker Grid */}
            <div className="flex flex-col items-center py-2">
              <label className="text-[10px] text-accent font-black uppercase tracking-[.2em] mb-3 opacity-60">Select Core Icon</label>
              <div className="grid grid-cols-6 gap-2 bg-black/20 p-2 rounded-lg border border-white/5">
                {Object.entries(SkillIcons).map(([name, Icon]) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setFormData({ ...formData, icon: name as keyof typeof Icons })}
                    className={`p-2 rounded transition-all ${
                      formData.icon === name 
                        ? "bg-accent/20 text-accent border border-accent/40 shadow-[0_0_10px_rgba(var(--accent-rgb),0.3)]" 
                        : "text-white/30 hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-heading block mb-1 uppercase font-black">Skill Name</label>
              <input 
                className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-stylish transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="text-heading font-black block mb-1 uppercase text-accent">Proficiency Level: {formData.level}%</label>
              <input 
                type="range" min="0" max="100" className="w-full accent-accent h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                value={formData.level}
                onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})}
              />
            </div>

            <div>
              <label className="text-heading font-black block mb-1 uppercase">Description</label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 p-2 rounded h-20 outline-none focus:border-stylish transition-colors resize-none"
                value={formData.skill_desc}
                onChange={(e) => setFormData({...formData, skill_desc: e.target.value})}
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            {formData.id && (
              <button 
                onClick={() => setShowConfirm(true)}
                className="px-3 border border-red-500/50 text-red-500 rounded hover:bg-red-500/10 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            )}
            <button 
              onClick={handleSave} 
              disabled={loading}
              className="flex-1 bg-accent/10 p-2 rounded orbitron text-xs uppercase font-black transition-all border border-accent text-accent hover:bg-accent hover:text-primary"
            >
              {loading ? "SYNCING..." : formData.id ? "[ UPDATE_CORE ]" : "[ CREATE_ENTRY ]"}
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-white/10 font-orbitron text-xs uppercase rounded hover:bg-white/5"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal 
          title="PURGE_SKILL?" 
          message="Delete this skill node from the database? This cannot be undone." 
          onConfirm={handleDelete} 
          onCancel={() => setShowConfirm(false)} 
          loading={loading} 
        />
      )}
    </>
  );
};