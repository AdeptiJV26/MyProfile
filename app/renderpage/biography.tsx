import { BicepsFlexed, Zap, Brain, Clover } from "lucide-react";

export default function BioPage() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-1 bg-borders"></div>
        <h3 className="text-xl font-bold uppercase tracking-[0.3em]">
          Player Biography
        </h3>
      </div>
      <p className="text-slate-400 leading-relaxed mb-6">
        Specialized in dual-wielding{" "}
        <span className="text-blue-400">Next.js</span> and{" "}
        <span className="text-blue-400">Tailwind CSS</span>. I focus on building
        immersive digital experiences that feel like high-fidelity VR
        interfaces. Currently traversing the stack to master the upper floors of
        system architecture.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-12">
        {[
          {
            icon: BicepsFlexed,
            label: "Strength",
            value: "28/100",
            desc: "React Frameworks",
          },
          {
            icon: Zap,
            label: "Agility",
            value: "55/100",
            desc: "UI Performance",
          },
          {
            icon: Brain,
            label: "Intelligence",
            value: "22/100",
            desc: "Problem Solving",
          },

          { icon: Clover, label: "Luck", value: "28/100", desc: "Edge Cases" },
        ].map((stat, i) => {
          const numericValue = parseInt(stat.value);
          const statusColor =
            numericValue > 80
              ? "text-green-500"
              : numericValue >= 40
              ? "text-blue-500"
              : "text-red-500";

          return (
            <div
              key={i}
              className="flex items-center justify-between p-4 border border-highlight/50 bg-primary/50 rounded-lg group hover:border-highlight transition-colors"
            >
              <div className="flex">
                <div className="grid grid-cols-9 gap-4">
                  <div className="col-span-2 flex items-center justify-center">
                    <stat.icon
                      size={20}
                      className="text-main-txt shrink-0 transition-all duration-300 group group-hover:drop-shadow-[0_0_8px_var(--color-highlight)]"
                    />
                  </div>
                  <div className="col-span-5 flex flex-col justify-center items-start">
                    <div className="text-sm text-highlight font-bold uppercase">
                      {stat.label}
                    </div>
                    <div className="text-xs text-txt-primary font-semibold">
                      {stat.desc}
                    </div>
                  </div>
                  <div  
                    className={`col-span-2 flex justify-center items-center text-sm ${statusColor}`}
                  >
                    {stat.value}
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
