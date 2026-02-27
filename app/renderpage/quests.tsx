"use client";
import { ChevronRight, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import * as Icons from "lucide-react";

interface Quest {
  id: string;
  icon: string;
  name: string;
  status: "Completed" | "Ongoing" | "Failed";
  date_start: string;
  date_end?: string | null; // Optional and Nullable
}

export default function QuestPage() {
  const [quests, setQuests] = useState<Quest[]>([]);

  const DynamicIcon = ({
    name,
    className,
  }: {
    name: string;
    className?: string;
  }) => {
    const IconComponent = (Icons as Record<string, Icons.LucideIcon>)[name];
    return IconComponent ? (
      <IconComponent className={className} />
    ) : (
      <HelpCircle className={className} />
    );
  };

  useEffect(() => {
    const fetchQuests = async () => {
      const { data } = await supabase
        .from("quests")
        .select("*")
        .order("id", { ascending: false });
      if (data) setQuests(data as Quest[]);
    };
    fetchQuests();
  }, []);

  const statusStyles: Record<Quest["status"], string> = {
    Completed:
      "text-[#649de9] border-[#649de9]/40 shadow-[0_0_10px_rgba(100,157,233,0.2)] bg-[#649de9]/5",
    Ongoing:
      "text-[#f1c40f] border-[#f1c40f]/40 shadow-[0_0_10px_rgba(241,196,15,0.2)] bg-[#f1c40f]/5 animate-pulse",
    Failed:
      "text-[#ff4b4b] border-[#ff4b4b]/40 shadow-[0_0_10px_rgba(255,75,75,0.2)] bg-[#ff4b4b]/5",
  };

  return (
    <>
      {/* Header - Exact Bio Page Placement */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-6 w-1 bg-accent shadow-[0_0_12px_var(--color-accent)]" />
        <h3 className="orbitron text-xl font-black uppercase tracking-[0.4em] text-heading">
          Quest Log
        </h3>
        <div className="flex-1 h-1 bg-linear-to-r from-accent/50 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="grid gap-6">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className="group uppercase flex items-center justify-between p-5 border border-stylish bg-secondary/40 rounded-xl hover:bg-secondary/60 transition-all cursor-pointer relative overflow-hidden"
          >
            {/* Design Accents */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-5">
              {/* Icon Frame */}
              <div className="relative p-2 bg-black/20 border border-stylish rounded-lg">
                <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-accent opacity-0 group-hover:opacity-100" />
                <DynamicIcon
                  name={quest.icon}
                  className="w-6 h-6 text-heading group-hover:text-accent transition-all group-hover:drop-shadow-[0_0_8px_var(--color-accent)]"
                />
              </div>

              <div className="flex flex-col">
                <div className="orbitron font-bold tracking-tight text-lg text-heading group-hover:text-accent transition-colors">
                  {quest.name}
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span
                    className={`px-2 py-0.5 rounded-md border text-[9px] font-black tracking-tighter ${
                      statusStyles[quest.status]
                    }`}
                  >
                    {quest.status}
                  </span>
                  <span className="text-[10px] text-txt/50 font-mono tracking-tighter uppercase">
                    • {quest.date_start} —{" "}
                    {quest.date_end ? quest.date_end : "ACTIVE_SIGNAL"}
                  </span>
                </div>
              </div>
            </div>

            <ChevronRight className="text-txt/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </div>
        ))}

        {quests.length === 0 && (
          <div className="p-10 border border-dashed border-stylish rounded-xl text-center text-txt/40 font-mono text-xs uppercase tracking-widest">
            Scanning for active quests...
          </div>
        )}
      </div>
    </>
  );
}
