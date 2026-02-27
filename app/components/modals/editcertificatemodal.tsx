"use client";
import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { ConfirmModal } from "./confirmmodal"; // Ensure case matches filename
import {
  CircleUser,
  MapPinHouse,
  BookText,
  Calendar,
  ShieldCheck,
  Zap,
  Cog,
  LocateFixed,
  LucideIcon,
  Brain,
  Bookmark,
  Book,
  ScrollText,
  Scroll,
  PenTool,
  HandCoins,
  Cpu,
  Server,
  Trash2,
} from "lucide-react";

const SelectedIcons: Record<string, LucideIcon> = {
  CircleUser,
  MapPinHouse,
  BookText,
  Calendar,
  ShieldCheck,
  Zap,
  Cog,
  LocateFixed,
  Brain,
  Bookmark,
  Book,
  ScrollText,
  Scroll,
  PenTool,
  HandCoins,
  Cpu,
  Server,
};

interface Certificate {
  id?: string | number;
  name: string;
  issuer: string;
  year_start: string;
  year_end: string;
  icon: string;
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
  const [formData, setFormData] = useState<Certificate>(cert);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    if (!formData.id) return;
    setLoading(true);
    const { error } = await supabase
      .from("certification")
      .delete()
      .eq("id", formData.id);
    if (!error) {
      onRefresh();
      onClose();
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!formData.name || !formData.issuer)
      return alert("REQUIRED: NAME_AND_ISSUER");
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
    }
    setLoading(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/50 backdrop-blur-sm p-4 text-white">
        <div className="bg-secondary/20 border border-stylish p-6 rounded-lg w-full max-w-md space-y-4 shadow-[0_0_20px_rgba(0,154,243,0.2)]">
          <h2 className="orbitron text-heading font-bold uppercase tracking-tighter">
            {formData.id ? "Modify Certificate" : "Register Certificate"}
          </h2>

          <div className="space-y-3 text-xs">
            <div>
              <label className="text-heading block mb-1 uppercase font-black">
                Cert Name
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-stylish transition-colors"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-heading font-black block mb-1 uppercase">
                Issuer
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 p-2 rounded outline-none focus:border-stylish transition-colors"
                value={formData.issuer}
                onChange={(e) =>
                  setFormData({ ...formData, issuer: e.target.value })
                }
              />
            </div>

            {/* Icon Picker */}
            <div className="flex flex-col items-center">
              <label className="text-heading block mb-2 uppercase font-black text-[10px] opacity-40 tracking-widest">
                Icon Picker
              </label>
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-700 ease-out border border-stylish/40 ${
                    isOpen
                      ? "scale-105 opacity-100"
                      : "scale-50 opacity-0 pointer-events-none"
                  }`}
                />
                <div
                  className={`grid grid-cols-5 gap-2 p-2 rounded-xl transition-all duration-800 ease-in-out overflow-hidden relative z-10 ${
                    isOpen
                      ? "max-h-[400px] bg-secondary/10 backdrop-blur-md"
                      : "max-h-[56px] bg-transparent"
                  }`}
                >
                  {Object.entries(SelectedIcons).map(([name, Icon]) => {
                    const isSelected = formData.icon === name;
                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => {
                          if (!isOpen) setIsOpen(true);
                          else {
                            setFormData({ ...formData, icon: name });
                            setIsOpen(false);
                          }
                        }}
                        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-500 ${
                          isSelected
                            ? "text-accent border border-stylish/30 bg-stylish/20 z-20 shadow-[0_0_15px_rgba(0,154,243,0.1)]"
                            : "text-txt/50 hover:text-accent/80 hover:bg-white/5"
                        } ${
                          isOpen || isSelected
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-50 pointer-events-none absolute"
                        }`}
                        style={{
                          gridColumn: isSelected ? "3" : "auto",
                          gridRow: isSelected ? "1" : "auto",
                        }}
                      >
                        <Icon size={20} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-heading font-black block mb-1 uppercase">
                  Date Start
                </label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 p-2 rounded text-white [color-scheme:dark]"
                  value={formData.year_start}
                  onChange={(e) =>
                    setFormData({ ...formData, year_start: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-heading font-black block mb-1 uppercase">
                  Date End
                </label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 p-2 rounded text-white [color-scheme:dark]"
                  value={formData.year_end}
                  onChange={(e) =>
                    setFormData({ ...formData, year_end: e.target.value })
                  }
                />
              </div>
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
              className="flex-1 bg-secondary/20 p-2 rounded font-orbitron text-sm uppercase font-black border border-stylish hover:bg-stylish/10"
            >
              {loading
                ? "Syncing..."
                : formData.id
                ? "Update Cert"
                : "Register"}
            </button>
            <button
              onClick={onClose} // FIXED: Removed the double onClick
              className="px-4 py-2 bg-secondary/20 font-orbitron text-sm uppercase border border-stylish rounded hover:bg-white/5"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal
          title="DELETE_CERT?"
          message="This record will be permanently wiped from your credentials."
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
          loading={loading}
        />
      )}
    </>
  );
};
