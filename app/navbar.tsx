"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swords, Menu, X } from "lucide-react";
import { supabase } from "./lib/supabase";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [player, setPlayer] = useState<{
    username: string;
    status: string;
  } | null>(null);
  const tabs = ["Biography", "Skills", "Quests", "Support", "Settings"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data } = await supabase
        .from("player")
        .select("username, status")
        .single();
      if (data) setPlayer(data);
    };
    fetchPlayer();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-secondary/30 backdrop-blur-md border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center border-2 border-white/20">
            <Swords size={20} className="text-white" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-bold uppercase text-green-500">
              {player?.status || "Loading..."}
            </div>
            <div className="text-sm sm:text-lg font-black italic">
              {player?.username || "---"}
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          {tabs.map((tab) => (
            <NavLink key={tab} tab={tab} pathname={pathname} />
          ))}
        </div>
      </div>

      {/* SAO Mobile Dropdown */}
      <div
        className={`absolute right-2 top-20 z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10 pointer-events-none"
        }`}
      >
        {/* Set specific width here (e.g., w-48) */}
        <div className="w-32 flex flex-col gap-2 overflow-hidden shadow-2xl">
          {tabs.map((tab) => (
            <Link
              key={tab}
              href={`/x${tab.toLowerCase()}`}
              className={`px-4 py-2 text-right  border-2 border-white pr-8 uppercase tracking-widest rounded-sm text-[8px] bg-white/60 backdrop-blur-xl border-b last:border-none ${
                pathname === `/x${tab.toLowerCase()}`
                  ? "text-primary font-black bg-select"
                  : "text-primary font-black"
              }`}
            >
              {tab}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Extracted NavLink for Desktop
const NavLink = ({ tab, pathname }: { tab: string; pathname: string }) => {
  const href = `/x${tab.toLowerCase()}`;
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`relative text-[10px] lg:text-md uppercase tracking-widest py-1 transition-all ${
        isActive ? "text-select font-black" : "text-heading/80 hover:text-accent font-bold"
      }`}
    >
      <span
        className={`absolute top-0 right-0 h-[2px] bg-select transition-all duration-500 ${
          isActive ? "w-full" : "w-0"
        }`}
      />
      {tab}
      <span
        className={`absolute bottom-0 left-0 h-[2px] bg-select transition-all duration-500 ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

export default Navbar;
