"use client";
import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import * as Icons from "lucide-react";
import { ConfirmModal } from "./confirmmodal";
import { Sword, Shield, Zap, Target, Flame, Trophy, Crown, Compass, Map, Flag, Trash2 } from "lucide-react";

const QuestIcons: Record<string, Icons.LucideIcon> = {
  Sword, Shield, Zap, Target, Flame, Trophy, Crown, Compass, Map, Flag,
  Code: Icons.Code, Terminal: Icons.Terminal, Cpu: Icons.Cpu,
};

interface Quest {
  id?: string | number;
  name: string;
  status: "Completed" | "Ongoing" | "Failed";
  date_start: string;
  date_end?: string | null;
  icon: string;
}

export const EditQuestModal = ({ quest, onClose, onRefresh }: {
  quest: Quest;
  onClose: () => void;
  onRefresh: () => void;
}) => {
  const [formData, setFormData] = useState<Quest>(quest);
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    if (!formData.id) return;
    setLoading(true);
    const { error } = await supabase.from("quests").delete().eq("id", formData.id);
    if (!error) {
      onRefresh();
      onClose();
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!formData.name) return alert("CRITICAL: QUEST_NAME_REQUIRED");
    setLoading(true);
    const { error } = await supabase.from("quests").upsert({
      ...(formData.id ? { id: formData.id } : {}),
      name: formData.name,
      status: formData.status,
      date_start: formData.date_start,
      date_end: formData.date_end || null,
      icon: formData.icon,
    });
    if (!error) { onRefresh(); onClose(); }
    else { alert(`DB_ERROR: ${error.message}`); }
    setLoading(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-md p-4">
        <div className="bg-secondary border border-stylish p-6 rounded-xl w-full max-w-md space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <h2 className="orbitron text-heading font-black uppercase tracking-widest text-lg border-b border-white/5 pb-2">
            {formData.id ? "/ Modify Quest" : "/ New Quest"}
          </h2>

          <div className="space-y-4 text-xs">
            <div>
              <label className="text-heading block mb-1 uppercase font-black opacity-60">Quest Name</label>
              <input className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-accent transition-colors text-white" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>

            <div>
              <label className="text-heading block mb-1 uppercase font-black opacity-60">Status</label>
              <select className="w-full bg-white/5 border border-white/10 p-2 rounded text-white" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value as Quest["status"] })}>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
              </select>
            </div>

            <div className="flex flex-col items-center py-2">
              <label className="text-[10px] text-accent font-black uppercase tracking-[.2em] mb-2">Select Icon</label>
              <div className="grid grid-cols-5 gap-2 bg-black/20 p-2 rounded-lg border border-white/5">
                {Object.entries(QuestIcons).map(([name, Icon]) => (
                  <button key={name} type="button" onClick={() => setFormData({ ...formData, icon: name })} className={`p-2 rounded transition-all ${formData.icon === name ? "bg-accent/20 text-accent border border-accent/40" : "text-txt/40 hover:text-txt"}`}>
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-heading font-black block mb-1 uppercase opacity-60">Start</label>
                <input type="date" className="w-full bg-white/5 border border-white/10 p-2 rounded text-white [color-scheme:dark]" value={formData.date_start} onChange={(e) => setFormData({ ...formData, date_start: e.target.value })} />
              </div>
              <div>
                <label className="text-heading font-black block mb-1 uppercase opacity-60 text-accent">End</label>
                <input type="date" className="w-full bg-white/5 border border-white/10 p-2 rounded text-white [color-scheme:dark]" value={formData.date_end ?? ""} onChange={(e) => setFormData({ ...formData, date_end: e.target.value || null })} />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {formData.id && (
              <button onClick={() => setShowConfirm(true)} className="px-3 border border-red-500/50 text-red-500 rounded hover:bg-red-500/10 transition-colors">
                <Trash2 size={16} />
              </button>
            )}
            <button onClick={handleSave} disabled={loading} className="flex-1 bg-accent/10 border border-accent text-accent p-3 rounded orbitron font-black uppercase text-xs hover:bg-accent hover:text-primary transition-all">
              {loading ? "SYNCING..." : "[ EXECUTE ]"}
            </button>
            <button onClick={onClose} className="px-5 border border-white/10 rounded orbitron text-xs hover:bg-white/5 transition-colors text-white">
              CANCEL
            </button>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal 
          title="PURGE DATA?" 
          message="This quest will be deleted from the database permanently." 
          onConfirm={handleDelete} 
          onCancel={() => setShowConfirm(false)} 
          loading={loading} 
        />
      )}
    </>
  );
};