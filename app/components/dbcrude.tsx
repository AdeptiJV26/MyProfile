import { useEffect, useState } from "react";
import { Wrench } from "lucide-react";
import { supabase } from "../lib/supabase";
import ActiveView from "./activeview";
export const DBpanel = () => {
  const [username, setUsername] = useState("Loading...");
  const [activeView, setActiveView] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data } = await supabase.from("player").select("username").single();
      if (data) setUsername(data.username);
    };
    fetchPlayer();
  }, []);

  const sections = [
    { id: "skills", label: "Skills" },
    { id: "certs", label: "Certificates" },
    { id: "quests", label: "Quests" },
  ];

  if (activeView) {
    return <ActiveView activeView={activeView} sections={sections} onBack={() => setActiveView(null)} />;
  }

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
      <h2 className="text-xl font-black italic uppercase text-blue-400 font-orbitron">Data Management</h2>
      <div className="flex flex-col w-full bg-secondary/10 border-2 border-stylish gap-3 rounded-[5px_30px_5px_30px] p-6">
        <div className="flex flex-row w-full items-center justify-between min-h-10 border-b border-white/5 pb-3">
          <div className="font-orbitron text-white/70">Profile</div>
          <button className="bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 px-4 py-2 rounded-lg flex items-center gap-3">
            <span className="font-bold uppercase tracking-tighter">{username}</span>
            <Wrench size={14} />
          </button>
        </div>

        <div className="flex flex-col">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-row w-full items-center justify-between mt-2">
              <div className="font-orbitron text-txt">{section.label}</div>
              <button
                onClick={() => setActiveView(section.id)}
                className="min-w-20 min-h-8 bg-blue-600/20 hover:bg-blue-600/40 border border-secondary rounded-lg font-orbitron text-xs"
              >
                VIEW
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};