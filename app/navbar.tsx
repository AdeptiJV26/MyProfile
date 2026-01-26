"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swords } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const tabs = ["Biography", "Skills", "Quests", "Support", "Settings"];

  return (
    <nav className="sticky top-0 z-40 bg-secondary/30 backdrop-blur-md border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center border-2 border-white/20">
            <Swords size={20} className="text-white" />
          </div>
          <div>
            <div className="text-xs text-tite font-bold uppercase">
              Player Profile
            </div>
            <div className="text-lg font-black italic">Aizen1497</div>
          </div>
        </div>

        <div className="hidden md:flex gap-8">
          {tabs.map((tab) => {
            const slug = tab.toLowerCase();

            const href = slug === "status" ? "/xbiography" : `/x${slug}`;

            const isActive = pathname === href;

            return (
              <Link
                key={tab}
                href={href}
                className="relative text-md uppercase tracking-[0.2em] py-1 group hover:text-hover"
              >
                {tab}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-select transition-all duration-500 ease-out ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
                <span
                  className={`absolute top-0 right-0 h-[2px] bg-select transition-all duration-500 ease-out ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
