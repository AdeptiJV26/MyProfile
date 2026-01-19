"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swords } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const tabs = ["Biography", "Skills", "Quests", "Support", "Settings"];

  return (
    <nav className="sticky top-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white/20">
            <Swords size={20} className="text-white" />
          </div>
          <div>
            <div className="text-xs text-blue-400 font-bold uppercase">
              Player Profile
            </div>
            <div className="text-lg font-black italic">Aizen1497</div>
          </div>
        </div>

        <div className="hidden md:flex gap-8">
          {tabs.map((tab) => {
            const slug = tab.toLowerCase();

            // Mapping "Status" tab to "xbiography" folder, others to "x" + slug
            const href = slug === "status" ? "/xbiography" : `/x${slug}`;

            const isActive = pathname === href;

            return (
              <Link
                key={tab}
                href={href}
                className={`text-sm uppercase tracking-[0.2em] transition-all hover:text-blue-400 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-500"
                    : "text-slate-400"
                }`}
              >
                {tab}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
