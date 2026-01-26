"use client";

import { useState } from "react";
import {
  CircleUser,
  MapPinHouse,
  BookText,
  Calendar,
  ShieldCheck,
  Zap,
  ChevronDown,
  LocateFixed
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
      {/* Bio Section */}
      <section className="p-6 rounded-2xl border border-stylish bg-secondary/10 backdrop-blur-md">
        <h1 className="text-2xl font-bold tracking-tight text-heading">
          Senior Full-Stack Engineer
        </h1>
        <p className="mt-4 text-txt leading-relaxed">
          Specializing in
          <span className="text-accent font-black"> Next.js 15</span> and
          <span className="text-accent font-black"> React 19</span>. I build
          high-performance applications with a focus on type-safety.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/resume.pdf"
            className="px-4 py-2 border border-stylish bg-buttons/40 backdrop-blur-md rounded-md text-sm font-black hover:bg-buttons/90 hover:border-accent transition-all"
          >
            View Resume
          </Link>
        </div>
      </section>

      <div className="mt-4 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-4 w-full p-4 border border-stylish bg-secondary/10 rounded-lg group hover:border-stylish transition-all"
        >
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
            <ShieldCheck
              size={20}
              className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--color-highlight)] group-hover:animate-pulse"
            />
          </div>
          <div className="flex flex-col min-w-0 text-left">
            <div className="text-xs text-titles font-black  uppercase">
              Certificates
            </div>
            <div className="text-sm text-txt-primary font-semibold">
              {CERTIFICATIONS.length} Achievements Unlocked
            </div>
          </div>
          <div
            className={`ml-auto transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown size={20} className="text-highlight" />
          </div>
        </button>

        {/* Smooth Transition Container */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-2"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-2 pb-1">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 border border-stylish bg-secondary/10 rounded-lg ml-4 relative before:content-[''] before:absolute before:-left-4 before:top-1/2 before:w-4 before:h-[1px] before:bg-primary/30 hover:bg-primary/40 transition-colors"
                >
                  <span className="text-sm font-bold text-txt-primary tracking-wide">
                    {cert.name}
                  </span>
                  <div className="flex justify-between text-xs text-txt-primary mt-1">
                    <span className="uppercase">{cert.issuer}</span>
                    <span className="font-mono">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-right-4 duration-500 mt-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-stylish"></div>
          <h3 className="text-xl font-bold uppercase tracking-[0.3em]">
            Player Info
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: CircleUser, label: "Name", value: "John Vince Berjuega" },
            {
              icon: MapPinHouse,
              label: "Current Address",
              value: "Malate, Metro Manila",
            },
            {
              icon: BookText,
              label: "Educational Attainment",
              value: "College Graduate",
            },
            { icon: Calendar, label: "Year Graduated", value: "2025" },
            {
              icon: Zap,
              label: "Energy Source",
              value: "Caffeine & Spaghetti Code",
            },
            {
              icon: LocateFixed,
              label: "Hobby",
              value: "Discovering the world... online...",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center p-4 border-2 border-stylish bg-secondary/10 rounded-lg group hover:border-highlight transition-colors"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <stat.icon
                    size={20}
                    className="text-title transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--color-highlight)] group-hover:animate-pulse"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="text-xs font-black text-title uppercase truncate">
                    {stat.label}
                  </div>
                  <div className="text-sm text-title font-semibold truncate">
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
