"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function AddSkillModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    level: 0,
    icon: "Sword",
    skill_desc: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("skills").insert([formData]);

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      setIsOpen(false);
      setFormData({ name: "", level: 0, icon: "Sword", skill_desc: "" });
      window.location.reload(); // Quick refresh to show new data
    }
    setLoading(false);
  };

  return (
    <>
      {/* Trigger Button - Put this anywhere */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition-all z-50"
      >
        <Plus size={24} />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-lg border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">New Skill Slot</h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Skill Name</label>
                <input
                  required
                  type="text"
                  className="w-full bg-black border border-white/10 rounded p-2 text-white focus:border-blue-500 outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Level (0-100)</label>
                  <input
                    required
                    type="number"
                    className="w-full bg-black border border-white/10 rounded p-2 text-white focus:border-blue-500 outline-none"
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Icon (Lucide Name)</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-black border border-white/10 rounded p-2 text-white focus:border-blue-500 outline-none"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
                <textarea
                  required
                  className="w-full bg-black border border-white/10 rounded p-2 text-white focus:border-blue-500 outline-none h-24 resize-none"
                  value={formData.skill_desc}
                  onChange={(e) => setFormData({ ...formData, skill_desc: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded transition-colors disabled:opacity-50"
              >
                {loading ? "Inscribing..." : "Add to Skills"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}