"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import * as Icons from "lucide-react";
import { Settings2, Plus, Sword } from "lucide-react";
import { EditQuestModal } from "./modals/editquestmodal";

interface Quest {
  id?: string | number;
  name: string;
  icon: string;
  status: "Completed" | "Ongoing" | "Failed";
  date_start: string;
  date_end?: string | null;
}

export const QuestList = () => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchQuests = async () => {
    const { data, error } = await supabase
      .from("quests")
      .select("*")
      .order("id", { ascending: false });

    if (error) console.error("DB_FETCH_ERROR:", error.message);
    if (data) setQuests(data as Quest[]);
  };

  useEffect(() => { fetchQuests(); }, []);

  const statusStyles: Record<Quest["status"], string> = {
    Completed: "text-[#649de9] border-[#649de9]/40 bg-[#649de9]/5",
    Ongoing: "text-[#f1c40f] border-[#f1c40f]/40 bg-[#f1c40f]/5 animate-pulse",
    Failed: "text-[#ff4b4b] border-[#ff4b4b]/40 bg-[#ff4b4b]/5",
  };

  const emptyQuest: Quest = {
    name: "",
    status: "Ongoing",
    date_start: new Date().toISOString().split('T')[0],
    date_end: null,
    icon: "Sword",
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="group relative flex items-center justify-center p-3 border border-dashed border-accent/40 bg-accent/5 hover:bg-accent/10 transition-all rounded-lg mb-2"
      >
        <div className="flex items-center gap-2 orbitron text-xs font-black tracking-[0.2em] text-accent/60 group-hover:text-accent">
          <Plus size={16} /> [ INITIALIZE QUEST ]
        </div>
      </button>

      {quests.map((quest) => {
        const IconComponent = (Icons[quest.icon as keyof typeof Icons] as React.ElementType) || Sword;
        return (
          <div key={quest.id} className="flex items-center justify-between p-4 bg-secondary/40 hover:bg-secondary/60 border border-white/10 rounded-lg group transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent/20 transition-all duration-300 group-hover:border-accent z-10" />
            
            <div className="flex items-center gap-5">
              <div className="relative p-2 bg-black/20 border border-stylish rounded-lg group-hover:border-accent/50 transition-colors">
                <IconComponent size={24} className="text-heading group-hover:text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--color-accent)]" />
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="text-heading orbitron font-black text-sm uppercase tracking-tight group-hover:text-accent transition-colors">
                  {quest.name}
                </div>
                
                {/* Aligned Metadata Row */}
                <div className="flex items-center gap-4">
                  {/* Fixed width container for status keeps the date aligned */}
                  <div className="w-20"> 
                    <span className={`inline-block w-full text-center py-0.5 rounded border text-[8px] font-black orbitron uppercase tracking-tighter ${statusStyles[quest.status]}`}>
                      {quest.status}
                    </span>
                  </div>
                  
                  <div className="h-3 w-px bg-white/10" /> {/* Vertical Separator */}
                  
                  <span className="text-[10px] text-txt/40 font-mono tracking-tighter uppercase whitespace-nowrap">
                    {quest.date_start} {quest.date_end ? `// ${quest.date_end}` : ">> PRESENT"}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedQuest(quest)}
              className="p-2 hover:bg-accent/20 rounded-md text-white/10 hover:text-accent border border-transparent hover:border-accent/30 transition-all z-20"
            >
              <Settings2 size={16} />
            </button>
          </div>
        );
      })}

      {(selectedQuest || isAddModalOpen) && (
        <EditQuestModal
          quest={selectedQuest || emptyQuest}
          onClose={() => {
            setSelectedQuest(null);
            setIsAddModalOpen(false);
          }}
          onRefresh={fetchQuests}
        />
      )}
    </div>
  );
};