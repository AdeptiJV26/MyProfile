import {
  Sword,
  Shield,
  Terminal,
  Zap,
  Palette,
  Flame,
  Sparkles,
} from "lucide-react";

export default function RenderSkills() {
  const skills = [
    {
      name: "Next.js & React",
      level: "19%",
      type: "Runtime Skill",
      icon: <Zap size={20} />,
      desc: "Instant Transmission of components. Re-renders faster than Kirito's dual-wielding.",
    },
    {
      name: "TypeScript",
      level: "12%",
      type: "Passive Parser",
      icon: <Shield size={20} />,
      desc: "Auto-deflects 'undefined is not a function' before they hit your HP bar.",
    },
    {
      name: "Tailwind CSS",
      level: "18%",
      type: "Runtime Skill",
      icon: <Sword size={20} />,
      desc: "Speed-running UI design. No CSS files, no survivors.",
    },
    {
      name: "Git & Deployment",
      level: "100%",
      type: "Ultimate Skill",
      icon: <Flame size={20} />,
      desc: "Attempting a git reset --hard to a version from 6 months ago without a backup.",
    },
    {
      name: "Node.js",
      level: "25%",
      type: "System Support",
      icon: <Terminal size={20} />,
      desc: "The backbone of the Aincrad server. Occasionally leaks memory like a glitchy floor boss.",
    },
    {
      name: "Figma",
      level: "11%",
      type: "Visual Unique",
      icon: <Palette size={20} />,
      desc: "Where the 'Vision' is crafted before the developers inevitably nerf it.",
    },
    {
      name: "Vibe Coding",
      level: "100%",
      type: "Divine Manifestation",
      icon: <Sparkles size={20} />,
      desc: "An Illegal Skill that bypasses the Aincrad System's source code. You don't debug errors; you simply gaslight the compiler until it apologizes and executes the 'intended' logic.",
    },
  ];

  const sortedSkills = [...skills].sort((a, b) => {
    const lvlA = parseInt(a.level) || 0;
    const lvlB = parseInt(b.level) || 0;
    return lvlA - lvlB; // Change to lvlA - lvlB for Ascending
  });

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
        <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-slate-100">
          Skill Slots
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sortedSkills.map((skill, i) => {
          const isUltimate = skill.type === "Ultimate Skill";
          const isDivine = skill.type === "Divine Manifestation";

          return (
            <div
              key={i}
              className={`group relative flex items-start gap-4 rounded-lg p-[1px] transition-all overflow-hidden ${
                isDivine ? "shadow-[0_0_20px_rgba(168,85,247,0.4)]" : ""
              }`}
            >
              {/*  Glowing Border  */}
              <div
                className={`absolute inset-[-1000%] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${
                  isDivine
                    ? "bg-[conic-gradient(from_0deg,#ff0000,#ffea00,#00ffea,#ff00e5,#ff0000)]"
                    : "bg-[conic-gradient(from_0deg,#3b82f6,#1d4ed8,#3b82f6)]"
                }`}
              />

              <div
                className={`relative flex w-full items-start gap-4 rounded-lg border p-4 transition-all bg-black/90 ${
                  isUltimate
                    ? "border-orange-500/40"
                    : isDivine
                    ? "border-purple-500/50"
                    : "border-white/5"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded border transition-all ${
                    isDivine
                      ? "border-purple-500/50 bg-purple-500/20 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                      : isUltimate
                      ? "border-orange-500/30 bg-orange-500/10 text-orange-400"
                      : "border-blue-500/20 bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {skill.icon}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-end justify-between">
                    <div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                          isDivine
                            ? "text-purple-400 animate-pulse"
                            : isUltimate
                            ? "text-orange-400"
                            : "text-blue-400"
                        }`}
                      >
                        {skill.type}
                      </span>
                      <h4
                        className={`font-bold tracking-wide ${
                          isDivine ? "text-white text-lg" : "text-slate-100"
                        }`}
                      >
                        {skill.name}
                      </h4>
                    </div>
                    <span
                      className={`font-mono text-sm italic ${
                        isDivine
                          ? "text-purple-400 font-black"
                          : isUltimate
                          ? "text-orange-400"
                          : "text-blue-500"
                      }`}
                    >
                      {isDivine
                        ? "LV. ∞"
                        : `LV. ${skill.level.replace("%", "")}`}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-400 italic opacity-80 group-hover:opacity-100 transition-opacity">
                    &quot;{skill.desc}&quot;
                  </p>

                  <div className="h-1.5 w-full rounded-full bg-slate-900/80 p-[1px] ring-1 ring-white/5 overflow-hidden">
                    <div
                      className={`h-full relative rounded-full transition-all duration-1000 ${
                        isDivine
                          ? "bg-gradient-to-r from-purple-600 via-pink-500 to-white shadow-[0_0_15px_#fff]"
                          : isUltimate
                          ? "bg-gradient-to-r from-orange-600 to-yellow-400"
                          : "bg-gradient-to-r from-blue-600 to-blue-400"
                      }`}
                      style={{ width: isDivine ? "100%" : skill.level }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-sao-progress" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
