import { ChevronRight } from "lucide-react";

export default function RenderQuest() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-1 bg-blue-500"></div>
        <h3 className="text-xl font-bold uppercase tracking-[0.3em]">
          Campaign History
        </h3>
      </div>
      <div className="grid gap-6">
        {[
          {
            title: "Project: Aincrad Dashboard",
            status: "Completed",
            date: "2024",
          },
          {
            title: "Digital World Overhaul",
            status: "Active",
            date: "Present",
          },
          {
            title: "Link Start Auth Protocol",
            status: "Completed",
            date: "2023",
          },
        ].map((quest, i) => (
          <div
            key={i}
            className="group flex items-center justify-between p-5 border border-white/5 bg-black/20 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-3 h-3 rounded-full ${
                  quest.status === "Completed"
                    ? "bg-blue-500 shadow-[0_0_8px_#3b82f6]"
                    : "bg-yellow-500 shadow-[0_0_8px_#eab308]"
                }`}
              ></div>
              <div>
                <div className="font-bold tracking-tight text-lg">
                  {quest.title}
                </div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-tighter">
                  Status: {quest.status} • {quest.date}
                </div>
              </div>
            </div>
            <ChevronRight className="text-slate-700 group-hover:text-blue-500 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
