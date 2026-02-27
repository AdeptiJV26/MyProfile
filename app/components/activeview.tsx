import { ArrowLeft } from "lucide-react";
import { SkillList } from "./skillslist";
import { CertList } from "./certificatelist";
import { QuestList } from "./questlist"; // You'll create this next
import ProfName from "./profilename";

interface ActiveViewProps {
  activeView: string;
  sections: { id: string; label: string }[];
  onBack: () => void;
}

const ActiveView = ({ activeView, sections, onBack }: ActiveViewProps) => {
  const currentSection = sections.find((s) => s.id === activeView);

  const renderContent = () => {
    switch (activeView) {
      case "skills": return <SkillList />;
      case "certs":  return <CertList />;
      case "quests": return <QuestList />;
      default:       return <SkillList />;
    }
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft className="text-heading" size={20} />
        </button>
        <h2 className="text-xl font-black italic uppercase text-blue-400 orbitron">
          {currentSection?.label}
        </h2>
      </div>

      <div className="flex flex-col w-full bg-secondary/10 border-2 border-stylish gap-3 rounded-[5px_30px_5px_30px] p-6">
        <div className="flex flex-row w-full items-center justify-between min-h-10 border-b border-white/5 pb-3">
          <div className="text-heading font-black text-md orbitron">Profile Data</div>
          <ProfName />
        </div>

        <div className="flex flex-col mt-4">
          <div className="text-[10px] text-accent font-black uppercase mb-4 tracking-[0.2em]">
            [ ACCESSING_{currentSection?.id?.toUpperCase()}_DATABASE ]
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ActiveView;