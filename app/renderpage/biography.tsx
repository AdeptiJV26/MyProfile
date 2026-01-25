import { CircleUser, MapPinHouse, BookText, Calendar, VenusAndMars } from "lucide-react";
import Link from "next/link";

export default function BioPage() {
  return (
    <>
      <section className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Senior Full-Stack Engineer
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          Specializing in{" "}
          <span className="text-sky-500 font-medium">Next.js 15</span> and
          <span className="text-sky-500 font-medium"> React 19</span>. I build
          high-performance applications with a focus on type-safety, modular
          architecture, and seamless user experiences.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/resume.pdf"
            className="px-4 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Resume
          </Link>
        </div>
      </section>

      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-borders"></div>
          <h3 className="text-xl font-bold uppercase tracking-[0.3em]">
            Player Info
          </h3>
        </div>
        <p className="text-slate-400 leading-relaxed mb-6">
          Specialized in crafting high-performance interfaces with
          <span className="text-blue-400"> Next.js</span> and
          <span className="text-blue-400"> Tailwind CSS</span>. I bridge the gap
          between code and design to build immersive digital experiences that
          mirror high-fidelity VR systems. Currently pushing the boundaries of
          the browser to master the intersection of pixel-perfection and fluid
          user interactions.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {[
            {
              icon: CircleUser,
              label: "Name",
              desc: "John Vince Berjuega",
            },
            {
              icon: VenusAndMars,
              label: "Gender",
              desc: "Male",
            },
            {
              icon: MapPinHouse,
              label: "Current Address",
              desc: "Malate, Metro Manila",
            },
            {
              icon: BookText,
              label: "Educational Attainment",
              desc: "College Graduate",
            },

            {
              icon: Calendar,
              label: "Year Graduated",
              desc: "2025",
            },
          ].map((stat, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between p-4 border border-highlight/50 bg-primary/50 rounded-lg group hover:border-highlight transition-colors"
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <stat.icon
                      size={20}
                      className="text-main-txt transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--color-highlight)]"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="text-xs text-highlight font-bold uppercase truncate">
                      {stat.label}
                    </div>
                    <div className="text-sm text-txt-primary font-semibold truncate">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
