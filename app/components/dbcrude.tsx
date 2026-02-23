import { useState } from "react";
import { SectionItem } from "./sectionlist";
import ActiveView from "./activeview";
import ProfName from "./profilename"; // Imported from your separate file

export const DBpanel = () => {
  const [activeView, setActiveView] = useState<string | null>(null);

  const sections = [
    { id: "skills", label: "Skills" },
    { id: "certs", label: "Certificates" },
    { id: "quests", label: "Quests" },
  ];

  if (activeView) {
    return (
      <ActiveView
        activeView={activeView}
        sections={sections}
        onBack={() => setActiveView(null)}
      />
    );
  }

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
      <h2 className="text-lg font-black italic uppercase text-heading font-orbitron">
        Data Management
      </h2>
      <div className="flex flex-col w-full bg-secondary/10 border-2 border-stylish gap-3 rounded-[5px_30px_5px_30px] p-6">
        {/* Profile Header */}
        <div className="flex flex-row w-full items-center justify-between min-h-10 border-b border-white/5 pb-3">
          <div className="font-orbitron text-heading">Profile</div>
          <ProfName />
        </div>

        {/* Sections List */}
        <div className="flex flex-col">
          {sections.map((section) => (
            <SectionItem
              key={section.id}
              label={section.label}
              onClick={() => setActiveView(section.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};