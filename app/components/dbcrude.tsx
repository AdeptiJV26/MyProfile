import { useEffect, useState } from "react";
import { Wrench, Trash2, Plus, List, ArrowLeft } from "lucide-react";
import { supabase } from "../lib/supabase";

export const DBpanel = () => {
  const [username, setUsername] = useState("Loading...");
  const [activeView, setActiveView] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data } = await supabase
        .from("player")
        .select("username")
        .single();
      if (data) setUsername(data.username);
    };
    fetchPlayer();
  }, []);

  const sections = [
    { id: "skills", label: "Skills", color: "text-blue-400" },
    { id: "certs", label: "Certificates", color: "text-emerald-400" },
    { id: "quests", label: "Quests", color: "text-purple-400" },
  ];

  if (activeView) {
    return (
      <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={() => setActiveView(null)}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-orbitron text-xs uppercase"
        >
          <ArrowLeft size={14} /> Back to Dashboard
        </button>

        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-black italic uppercase text-blue-400 font-orbitron">
            Manage {sections.find((s) => s.id === activeView).label}
          </h2>
          <button className="bg-secondary/20 border border-stylish p-2 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
            <Plus size={20} />
          </button>
        </div>

        <div className="bg-secondary/10 border-2 border-stylish rounded-[5px_30px_5px_30px] p-6 space-y-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between px-3 py-2 bg-white/5 rounded-lg border border-white/50"
            >
              <span className="text-white font-orbitron">
                Item Example {item}
              </span>
              <div className="flex gap-2">
                <button className="p-2 h-8 w-8 bg-secondary/20 text-yellow-400 hover:bg-yellow-500/20 rounded-md transition-all">
                  <Wrench size={16} />
                </button>
                <button className="p-2 h-8 w-8 bg-secondary/20 text-red-400 hover:bg-red-500/20 rounded-md transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
      <h2 className="text-xl font-black italic uppercase text-blue-400 font-orbitron">
        Data Management
      </h2>

      <div className="flex flex-col w-full bg-secondary/10 border-2 border-stylish gap-3 rounded-[5px_30px_5px_30px] p-6">
        {/* Profile Name (Static) */}
        <div className="flex flex-row w-full items-center justify-between min-h-10 border-b border-white/5 pb-3">
          <div className="font-orbitron text-white/70">Profile</div>
          <button className="bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 px-4 py-2 rounded-lg transition-all flex items-center gap-3">
            <span className="font-bold uppercase text-heading tracking-tighter">
              {username}
            </span>
            <Wrench size={14} />
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col w-full">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex flex-row w-full items-center justify-between mt-2"
            >
              <div className="font-orbitron text-txt">{section.label}</div>
              <button
                onClick={() => setActiveView(section.id)}
                className="w-32 h-8 flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/40 border border-secondary rounded-lg transition-all font-orbitron text-xs"
              >
                <List size={16} />{" "}
                <span className="flex justify-center items-center text-center">
                  VIEW
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
