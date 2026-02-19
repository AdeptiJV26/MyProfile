"use client";

import { useState } from "react";
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

const CERTIFICATIONS = [
  {
    name: "Mechatronics NC2",
    issuer: "BSAT TESDA",
    year: "2022",
  },
  {
    name: "Computer System Servicing NC2",
    issuer: "BSAT TESDA",
    year: "2022",
  },
];

export default function BioPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-6 w-1 bg-secondary shadow-[0_0_12px_var(--color-secondary)]" />
        <h3 className="orbitron text-xl font-black uppercase tracking-[0.4em] text-heading">
          Bio Page
        </h3>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-secondary/50 to-transparent" />
      </div>

      <section className="p-6 rounded-lg border border-stylish bg-secondary/20">
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
            href="/resume.pdf"
            className="group relative flex items-center justify-center h-12 w-48 bg-accent/10 border-r border-b border-t border-accent/20 text-accent font-mono text-xs tracking-[0.4em] transition-all hover:bg-accent/20 hover:border-accent/90"
          >
            {/* Tech Accent: Thick Left Bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-accent group-hover:shadow-[0_0_8px_var(--color-accent)] transition-shadow" />

            <span className="orbitron font-black uppercase text-sm">
              <span className="opacity-50 mr-2">/</span>
              Resume
            </span>
            <div className="absolute right-0 top-0 h-full w-1 bg-accent group-hover:shadow-[0_0_8px_var(--color-accent)] transition-shadow" />
          </Link>
        </div>
      </section>

      <div className="mt-12 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-4 w-full p-4 border border-b-3 border-stylish bg-secondary/40 rounded-lg group hover:border-stylish transition-all"
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
              {CERTIFICATIONS.length} Achievements Unlocked
            </div>
          </div>
          <div
            className={`ml-auto transition-transform duration-500 ${
              isOpen ? "rotate-150" : ""
            }`}
          >
            <Cog size={28} className="text-heading" />
          </div>
        </button>

        {/* Smooth Transition Container */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-1"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-1 pb-1">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="group flex flex-col p-3 border border-stylish bg-secondary/20 rounded-lg ml-10 relative transition-colors hover:bg-secondary/40 
                   before:content-[''] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-[2px] before:bg-secondary/5 
                   hover:before:bg-secondary hover:before:shadow-[0_0_8px_var(--color-secondary)] before:transition-all"
                >
                  <span className="orbitron text-sm font-bold text-heading tracking-wide uppercase">
                    {cert.name}
                  </span>
                  <div className="flex text-txt/90 justify-between text-xs mt-1">
                    <span className="uppercase font-medium">{cert.issuer}</span>
                    <span className="font-mono text-txt">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-right-4 duration-500 mt-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-secondary shadow-[0_0_10px_var(--color-secondary)]"></div>
          <h3 className="orbitron text-xl font-black uppercase text-heading tracking-[0.3em]">
            Player Info
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: CircleUser, label: "Name", value: "John Vince Berjuega" },
            {
              icon: MapPinHouse,
              label: "Address",
              value: "Malate, Metro Manila",
            },
            { icon: BookText, label: "Education", value: "College Graduate" },
            { icon: Calendar, label: "Year", value: "2025" },
            { icon: Zap, label: "Energy", value: "Caffeine & Spaghetti Code" },
            { icon: LocateFixed, label: "Hobby", value: "Exploring... online" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative flex items-center p-4 border-l-4 border-secondary/40 bg-secondary/20 transition-all duration-300 hover:border-secondary hover:bg-secondary/50"
            >
              {/* Top-right corner accent */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary/10 group-hover:border-accent group-hover:drop-shadow-[0_0_8px_var(--color-secondary)]" />

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
          ))}
        </div>
      </div>
    </>
  );
}
