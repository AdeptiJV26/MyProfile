import { Settings, Database } from "lucide-react";

export const DayNight = ({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: string; 
  setActiveTab: (tab: "ui" | "data") => void; 
}) => (
  <div className="flex justify-center mb-10">
    <div className="flex bg-black/20 p-1 rounded-xl border border-white/10">
      <button 
        onClick={() => setActiveTab("ui")}
        className={`flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-black uppercase transition-all ${activeTab === "ui" ? "bg-blue-600 text-white" : "text-gray-500"}`}
      >
        <Settings size={14} /> UI
      </button>
      <button 
        onClick={() => setActiveTab("data")}
        className={`flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-black uppercase transition-all ${activeTab === "data" ? "bg-blue-600 text-white" : "text-gray-500"}`}
      >
        <Database size={14} /> Data
      </button>
    </div>
  </div>
);