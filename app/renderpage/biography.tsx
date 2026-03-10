"use client";

import { useState, useEffect } from "react";
import {
  CircleUser,
  MapPinHouse,
  BookText,
  Calendar,
  ShieldCheck,
  Zap,
  Cog,
  LocateFixed,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

interface Certification {
  name: string;
  year_start: string;
  year_end: string;
  status: string;
  icon: string; // Adjusted to string as Icons lookup was missing
  issuer: string;
}

interface DataSheet {
  id: string | number;
  firstname: string;
  middlename: string;
  lastname: string;
  address: string;
  college: string;
  year_graduated: string;
  hobby: string;
  likes: string;
}

export default function BioPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [datasheet, setDatasheet] = useState<DataSheet[]>([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch Certifications
      const { data: certData } = await supabase
        .from("certification")
        .select("*");
      if (certData) setCertifications(certData);

      // Fetch Datasheet
      const { data: sheetData, error: sheetError } = await supabase
        .from("datasheet")
        .select("*");

      if (!sheetError && sheetData) {
        setDatasheet(sheetData);
      }
    }
    fetchData();
  }, []);

  const profile = datasheet[0];

  const playerStats = profile
    ? [
        {
          icon: CircleUser,
          label: "Name",
          value: `${profile.firstname} ${profile.middlename ? `${profile.middlename.charAt(0)}.` : ""} ${profile.lastname}`,
        },
        { icon: MapPinHouse, label: "Address", value: profile.address },
        { icon: BookText, label: "Education", value: profile.college },
        { icon: Calendar, label: "Year", value: profile.year_graduated },
        { icon: Zap, label: "Likes", value: profile.likes },
        { icon: LocateFixed, label: "Hobby", value: profile.hobby },
      ]
    : [];

  return (
    <>
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-6 w-1 bg-accen t shadow-[0_0_12px_var(--color-accent)]" />
        <h3 className="orbitron text-xl font-black uppercase tracking-[0.4em] text-heading">
          Bio Page
        </h3>
        <div className="flex-1 h-1 bg-linear-to-r from-accent/50 to-transparent" />
      </div>

      {/* Hero Bio Section */}
      <section className="p-6 rounded-lg border border-stylish bg-secondary/40">
        <h1 className="flex flex-row items-center gap-4">
          <span className="text-xl font-bold tracking-tight text-heading">
            Junior Front End Developer
          </span>
        </h1>
        <p className="mt-2 text-txt/80 leading-relaxed">
          Specializing in
          <span className="text-accent font-black"> Next.js 15</span> and
          <span className="text-accent font-black"> React 19</span>. I build
          high-performance applications with a focus on type-safety.
        </p>
        <div className="mt-6 flex gap-4 justify-start items-center">
          <Link
            href="/xresume/"
            className="group relative flex items-center justify-center h-12 w-60 bg-accent/10 border-r border-b border-t border-accent/20 text-accent font-mono text-xs tracking-[0.4em] transition-all hover:bg-accent/20 hover:border-accent/90"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-accent group-hover:shadow-[0_0_8px_var(--color-accent)]" />
            <span className="orbitron font-black uppercase whitespace-nowrap text-xs w-full text-center lg:text-md">
              / View Resume
            </span>
            <div className="absolute right-0 top-0 h-full w-1 bg-accent group-hover:shadow-[0_0_8px_var(--color-accent)]" />
          </Link>
        </div>
      </section>

      {/* Synchronized Certifications Section */}
      <div className="mt-12 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-4 w-full p-4 border border-b-3 border-accent bg-secondary/40 rounded-lg group transition-all"
        >
          <div className="shrink-0 w-10 h-10 flex items-center justify-center">
            <ShieldCheck
              size={20}
              className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--color-highlight)] group-hover:animate-pulse"
            />
          </div>
          <div className="flex flex-col min-w-0 text-left">
            <div className="text-sm text-heading font-black uppercase">
              Certificates
            </div>
            <div className="text-sm text-txt/80 font-semibold">
              {certifications.length} Achievements Unlocked
            </div>
          </div>
          <div
            className={`ml-auto transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <Cog size={28} className="text-heading" />
          </div>
        </button>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-2"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-3 pb-1 pl-1">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col p-4 border border-accent/30 bg-secondary/40 rounded-lg ml-10 transition-all duration-300 ease-out hover:border-accent hover:bg-accent/5"
                >
                  {/* Sync: Timeline Connector Line */}
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 h-[1px] bg-accent/20 w-6 group-hover:w-10 group-hover:bg-accent group-hover:shadow-[0_0_8px_var(--color-accent)] transition-all duration-300 ease-out" />

                  {/* Sync: Corner Bracket Appearance */}
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />

                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        {/* Dynamic Dot Color */}
                        <div
                          className={`w-1.5 h-1.5 rounded-full animate-pulse font-black shadow-[0_0_5px_currentColor] ${
                            cert.status.toLowerCase() === "active"
                              ? "bg-green-500 text-green-500"
                              : "bg-red-500 text-red-500"
                          }`}
                        />

                        {/* Conditional Background Badge */}
                        <span
                          className={`orbitron text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-sm transition-colors duration-300 ${
                            cert.status.toLowerCase() === "active"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-red-500/20 text-red-400 border border-red-500/30"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <span className="orbitron text-sm font-bold text-heading tracking-wide uppercase mt-1 group-hover:text-accent transition-colors duration-300">
                        {cert.name}
                      </span>
                    </div>
                    <div className="font-black text-xs text-heading bg-primary/80 rounded-lg px-2 py-1 border border-accent/20 group-hover:border-accent/50 transition-all duration-300">
                      {cert.year_start} — {cert.year_end}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between border-t border-accent/10 pt-2 transition-colors duration-300 group-hover:border-accent/30">
                    <span className="text-xs uppercase font-bold text-heading tracking-[0.2em]">
                      Issuer:{" "}
                      <span className="text-header orbitron font-black group-hover:text-txt transition-colors duration-300">
                        {cert.issuer}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Player Info Section */}
      <div className="animate-in fade-in slide-in-from-right-4 duration-500 mt-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-accent shadow-[0_0_10px_var(--color-accent)]"></div>
          <h3 className="orbitron text-xl font-black uppercase text-heading tracking-[0.3em]">
            Player Info
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {playerStats.length > 0 ? (
            playerStats.map((stat, i) => (
              <div
                key={i}
                className="group relative flex items-center p-4 border-l-4 border-accent bg-secondary/40 transition-all duration-300 hover:border-accent hover:bg-secondary/60"
              >
                <div className="absolute top-0 right-0 w-4 h-4 border-t-3 border-r-3 border-accent/30 transition-all duration-300 group-hover:border-accent group-hover:drop-shadow-[0_0_12px_var(--color-secondary)] z-10" />
                <div className="flex items-center gap-4 w-full">
                  <div className="shrink-0">
                    <stat.icon
                      size={20}
                      className="text-icons transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_var(--color-accent)]"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="orbitron text-[12px] text-heading/90 font-bold uppercase tracking-widest">
                      [ {stat.label} ]
                    </div>
                    <div className="text-md text-txt font-semibold truncate transition-colors">
                      {stat.value}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-txt/50 font-mono">Loading DataSync...</p>
          )}
        </div>
      </div>
    </>
  );
}
