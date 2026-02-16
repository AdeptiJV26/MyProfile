import { Wrench, Trash2, Plus } from "lucide-react";

export const DBpanel = () => (
  <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
    <h2 className="text-xl font-black italic uppercase text-blue-400 font-orbitron">
      Data Management
    </h2>

    <div className="flex w-full bg-secondary/20 border border-stylish rounded-[5px_30px_5px_30px] min-h-64 p-6">
      <div className="flex flex-row w-full items-start justify-between">
        <div className="font-orbitron text-lg">Skills</div>

        <button className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-400 text-blue-400 px-4 py-1.5 rounded-lg transition-all h-fit">
          <Plus size={16} />
          <span className="uppercase text-sm font-bold">Add Skill</span>
        </button>
      </div>
    </div>
  </div>
);
