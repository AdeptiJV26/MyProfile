import { Shield, User, Layers, Mail, Circle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProfileCardProps {
  hp: number;
}

export default function ProfileCard({ hp }: ProfileCardProps) {
  const getHpColor = () => {
    if (hp > 50) return "from-green-600 to-green-400";
    if (hp > 20) return "from-yellow-600 to-yellow-400";
    return "from-red-600 to-red-400 animate-pulse";
  };

  const [imgError, setImgError] = useState(false);

  return (
    <div className="lg:col-span-4 space-y-6">
      <div className="bg-[#15151a]/80 border border-white/10 rounded-xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
          <Circle size={40} className="text-blue-500" />
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full border-4 border-blue-500 p-1 mb-4">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden relative">
              {!imgError ? (
                <Image
                  src="/img/aizen.png" // Path to your public folder
                  alt="Player Avatar"
                  fill // Makes image fill the parent container
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <User size={64} className="text-slate-600" />
              )}
            </div>
          </div>
          <h2 className="text-2xl font-bold uppercase italic tracking-widest">
            Solo Player
          </h2>
          <p className="text-blue-400 text-sm mb-4 tracking-wider">
            Frontend Developer / UI Specialist
          </p>

          {/* Health Bar UI */}

          <div className="w-full space-y-1 mb-6">
            <div className="flex justify-between text-[10px] uppercase font-bold tracking-tighter">
              <span>HP</span>
              <span
                className={
                  hp > 20
                    ? "text-green-400"
                    : "text-red-500 font-bold animate-pulse"
                }
              >
                {Math.round(hp * 142.5).toLocaleString()} / 14,250
              </span>
            </div>

            <div className="h-4 w-full bg-gray-900 border border-white/20 rounded-sm p-[2px]">
              <div
                className={`h-full bg-gradient-to-r transition-all duration-500 rounded-sm ${getHpColor()}`}
                style={{ width: `${hp}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full text-left">
            <div className="bg-black/40 p-3 rounded border border-white/5">
              <div className="text-[10px] text-slate-500 uppercase">Level</div>
              <div className="text-xl font-bold text-blue-400 tracking-tighter">
                28
              </div>
            </div>
            <div className="bg-black/40 p-3 rounded border border-white/5">
              <div className="text-[10px] text-slate-500 uppercase">Server</div>
              <div className="text-xl font-bold text-blue-400 tracking-tighter">
                Eerth
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#15151a]/80 border border-white/10 rounded-xl p-4 flex gap-4 overflow-x-auto">
        {[Shield, Layers, Mail].map((Icon, idx) => (
          <button
            key={idx}
            className="flex-1 bg-white/5 p-4 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500 transition-all border border-transparent"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}
