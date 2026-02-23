import { ArrowLeft } from "lucide-react";
import { SkillList } from "./skillslist";
import ProfName from "./profilename"; // Imported from your separate file


interface Section {
  id: string;
  label: string;
}

interface ActiveViewProps {
  activeView: string;
  sections: Section[];
  onBack: () => void;
}

const ActiveView = ({ activeView, sections, onBack }: ActiveViewProps) => {
  const currentSection = sections.find((s) => s.id === activeView);

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ArrowLeft className="text-heading" size={20} />
        </button>
        <h2 className="text-xl font-black italic uppercase text-blue-400 font-orbitron">
          {currentSection?.label || "Data Management"}
        </h2>
      </div>

      <div className="flex flex-col w-full bg-secondary/10 border-2 border-stylish gap-3 rounded-[5px_30px_5px_30px] p-6">
        <div className="flex flex-row w-full items-center justify-between min-h-10 border-b border-white/5 pb-3">
          <div className="font-orbitron text-white/70">Profile</div>
          <ProfName />
        </div>

        <div className="flex flex-col mt-4">
          <div className="font-orbitron text-xs text-white/30 uppercase mb-3">
            Active {currentSection?.label}
          </div>
          <SkillList />
        </div>
      </div>
    </div>
  );
};

export default ActiveView;