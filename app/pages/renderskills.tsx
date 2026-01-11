import { Sword, Shield, Terminal, Zap, Palette, Flame } from "lucide-react";

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
      desc: "Attempting a git reset --hard to a version from 6 months ago without a backup. If the history is lost, the World Data is deleted.",
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
  ];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
        <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-slate-100">
          Skill Slots
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {skills.map((skill, i) => {
          const isUltimate = skill.type === "Ultimate Skill";
          return (
            <div
              key={i}
              className={`group relative flex items-start gap-4 rounded-lg border p-4 transition-all ${
                isUltimate
                  ? "border-orange-500/40 bg-orange-500/5 shadow-[inset_0_0_20px_rgba(249,115,22,0.05)]"
                  : "border-white/5 bg-black/40 hover:border-blue-500/30"
              }`}
            >
              {/* Icon Container */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded border transition-all ${
                  isUltimate
                    ? "border-orange-500/30 bg-orange-500/10 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                    : "border-blue-500/20 bg-blue-500/10 text-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                }`}
              >
                {skill.icon}
              </div>

              {/* Text & Content Area */}
              <div className="flex-1 space-y-2">
                <div className="flex items-end justify-between">
                  <div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                        isUltimate ? "text-orange-400" : "text-blue-400"
                      }`}
                    >
                      {skill.type}
                    </span>
                    <h4 className="font-bold text-slate-100 tracking-wide">
                      {skill.name}
                    </h4>
                  </div>
                  <span
                    className={`font-mono text-sm italic ${
                      isUltimate ? "text-orange-400" : "text-blue-500"
                    }`}
                  >
                    LV. {skill.level.replace("%", "")}
                  </span>
                </div>

                {/* Memeable Description */}
                <p className="text-xs leading-relaxed text-slate-400 italic opacity-80 group-hover:opacity-100 transition-opacity">
                  &quot;{skill.desc}&quot;
                </p>

                {/* Progress Bar */}
                <div className="h-1.5 w-full rounded-full bg-slate-900/80 p-[1px] ring-1 ring-white/5">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      isUltimate
                        ? "bg-gradient-to-r from-orange-600 to-yellow-400 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                        : "bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                    }`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
