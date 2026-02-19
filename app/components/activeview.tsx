import { Wrench, Trash2, Plus, ArrowLeft } from "lucide-react";

const ActiveView = ({ activeView, sections, onBack }) => {
  const currentSection = sections.find((s) => s.id === activeView);

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-orbitron text-xs uppercase"
      >
        <ArrowLeft size={14} /> Back to Dashboard
      </button>

      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-black italic uppercase text-blue-400 font-orbitron">
          Manage {currentSection?.label}
        </h2>
        <button className="bg-secondary/20 border border-stylish p-2 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
          <Plus size={20} />
        </button>
      </div>

      <div className="bg-secondary/10 border-2 border-stylish rounded-[5px_30px_5px_30px] p-6 space-y-2">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center justify-between px-3 py-2 bg-white/5 rounded-lg border border-white/50">
            <span className="text-white font-orbitron">Item Example {item}</span>
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
};

export default ActiveView;