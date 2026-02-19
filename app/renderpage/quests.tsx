import { ChevronRight } from "lucide-react";

export default function QuestPage() {
  const statusConfig: Record<string, string> = {
    Completed: "bg-(--color-status-completed) shadow-[0_0_8px_#649de9]",
    Ongoing:
      "bg-(--color-status-ongoing) shadow-[0_0_8px_#f1c40f] animate-pulse",
    Failed: "bg-(--color-status-failed) shadow-[0_0_8px_#ff4b4b]",
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-6 w-1 bg-secondary shadow-[0_0_12px_var(--color-secondary)]" />
        <h3 className="orbitron text-xl font-black uppercase tracking-[0.4em] text-heading">
          Quests
        </h3>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-secondary/50 to-transparent" />
      </div>
      <div className="grid gap-6">
        {[
          { title: "Personal Portfolio", status: "Ongoing", date: "2025" },
          { title: "FishPrawn", status: "Ongoing", date: "Present" },
          {
            title: "MSC Capstone E-Clearance",
            status: "Completed",
            date: "2023",
          },
          { title: "Tree Swipe Project", status: "Failed", date: "2022" },
          { title: "Parallax Project", status: "Completed", date: "2025" },
        ].map((quest, i) => (
          <div
            key={i}
            className="group flex items-center justify-between p-5 border border-stylish bg-primary/40 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-3 h-3 rounded-full transition-all ${
                  statusConfig[quest.status] || "bg-slate-500"
                }`}
              ></div>
              <div>
                <div className="font-bold tracking-tight text-lg">
                  {quest.title}
                </div>
                <div className="text-xs text-txt/90 font-mono uppercase tracking-tighter">
                  Status: {quest.status} • {quest.date}
                </div>
              </div>
            </div>
            <ChevronRight className="text-txt/90 group-hover:text-blue-500 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
