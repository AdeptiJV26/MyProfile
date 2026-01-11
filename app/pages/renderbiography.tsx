
export default function RenderBio() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-1 bg-blue-500"></div>
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
          { label: "Strength", value: "98/100", desc: "React Frameworks" },
          { label: "Agility", value: "95/100", desc: "UI Performance" },
          { label: "Intelligence", value: "92/100", desc: "Problem Solving" },
          { label: "Luck", value: "88/100", desc: "Edge Cases" },
        ].map((stat, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 border border-white/5 bg-black/20 rounded-lg group hover:border-blue-500/50 transition-colors"
          >
            <div>
              <div className="text-xs text-slate-500 uppercase">
                {stat.label}
              </div>
              <div className="text-sm font-semibold">{stat.desc}</div>
            </div>
            <div className="text-xl font-black text-blue-500 italic">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
