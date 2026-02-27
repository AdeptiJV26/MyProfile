"use client";
import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import * as Icons from "lucide-react";

interface Certificate {
  id?: string | number;
  name: string;
  issuer: string;
  year_start: string;
  year_end: string;
  status: "active" | "expired"; // Added status
  icon: keyof typeof Icons;
}

export const EditCertModal = ({
  cert,
  onClose,
  onRefresh,
}: {
  cert: Certificate;
  onClose: () => void;
  onRefresh: () => void;
}) => {
  const [formData, setFormData] = useState(cert);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!formData.name || !formData.issuer) {
      alert("CRITICAL_ERROR: NAME_AND_ISSUER_REQUIRED");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("certification").upsert({
      ...(formData.id ? { id: formData.id } : {}),
      name: formData.name,
      issuer: formData.issuer,
      year_start: formData.year_start,
      year_end: formData.year_end,
      icon: formData.icon,
    });

    if (!error) {
      onRefresh();
      onClose();
    } else {
      console.error("DB_SYNC_ERROR:", error.message);
      alert(`DATABASE_ERROR: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/50 backdrop-blur-sm p-4">
      <div className="bg-secondary/20 border border-stylish p-6 rounded-lg w-full max-w-md space-y-4 shadow-[0_0_20px_rgba(0,154,243,0.2)]">
        <h2 className="orbitron text-heading font-bold uppercase tracking-tighter">
          {formData.id ? "Modify Certificate" : "Register Certificate"}
        </h2>

        <div className="space-y-3 text-xs">
          <div>
            <label className="text-heading block mb-1 uppercase font-black">Cert Name</label>
            <input
              className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-stylish transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="text-heading font-black block mb-1 uppercase">Issuer</label>
            <input
              className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-stylish transition-colors"
              value={formData.issuer}
              onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-heading font-black block mb-1 uppercase">Date Start</label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-stylish transition-colors text-white [color-scheme:dark]"
                value={formData.year_start}
                onChange={(e) => setFormData({ ...formData, year_start: e.target.value })}
              />
            </div>
            <div>
              <label className="text-heading font-black block mb-1 uppercase">Date End</label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-stylish transition-colors text-white [color-scheme:dark]"
                value={formData.year_end}
                onChange={(e) => setFormData({ ...formData, year_end: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={handleSave}
            disabled={loading}
            className="flex-1 bg-secondary/20 p-2 rounded font-orbitron text-sm uppercase font-black transition-all border border-stylish hover:bg-stylish/10"
          >
            {loading ? "Syncing..." : formData.id ? "Update Cert" : "Register"}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-secondary/20 font-orbitron text-sm uppercase border border-stylish rounded hover:bg-white/5"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};