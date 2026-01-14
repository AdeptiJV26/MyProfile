import { Swords } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const tabs = ['Status', 'Skills', 'Quests', 'Message', 'Settings'];

  return (
    <nav className="sticky top-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white/20">
            <Swords size={20} className="text-white" />
          </div>
          <div>
            <div className="text-xs text-blue-400 font-bold tracking-tighter uppercase">Player Profile</div>
            <div className="text-lg font-black tracking-wider italic">Aizen1497</div>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8">
          {tabs.map((i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i.toLowerCase())}
              className={`text-sm uppercase tracking-[0.2em] transition-all hover:text-blue-400 ${
                activeTab === i.toLowerCase() 
                  ? 'text-blue-400 border-b-2 border-blue-500' 
                  : 'text-slate-400'
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;