"use client";
import {
  Phone,
  User,
  MapPinHouse,
  Mail,
  Circle,
  Brain,
  Zap,
  ShieldAlert,
  Eye,
  Rocket,
  Code2,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "./lib/supabase";

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  // Stats for the Hexagon (0 to 100)
  const stats = {
    frontEnd: 70, // CRI
    flexibility: 85, // ADP
    backEnd: 25, // STR
    Troubleshooting: 85, // VIS
    curiosity: 80, // SPD
    tenacity: 65, // LOG
  };

  return (
    <div className="lg:col-span-4 space-y-6">
      <div className="bg-secondary/20 border border-stylish rounded-xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
          <Circle
            size={40}
            className="text-accent drop-shadow-[0_0_8px_var(--color-accent)]"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* AVATAR */}
          <div className="w-32 h-32 rounded-full border-4 border-stylish p-1 mb-4 relative overflow-hidden">
            <div className="w-full h-full rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden relative">
              {!imgError ? (
                <Image
                  src="/img/aizen.png"
                  alt="Player Avatar"
                  fill
                  sizes="128px"
                  className="object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <User size={64} className="text-slate-600" />
              )}
            </div>
          </div>

          <h2 className="orbitron text-2xl font-bold uppercase italic tracking-widest text-heading">
            lord aizen
          </h2>
          <p className="text-heading text-[10px] mb-6 tracking-[0.3em] uppercase opacity-80">
            Front End Developer / UI Specialist{" "}
          </p>

          <p className="h-1 w-full bg-accent/20 mb-10"></p>

          {/* HEXAGON SKILL DATA SHEET */}
          <div className="relative w-full aspect-square max-w-[220px] mb-8 flex items-center justify-center">
            {/* Stat Labels & Icons */}
            <div className="absolute -top-4 flex flex-col items-center text-accent">
              <Brain size={14} />
              <span className="text-[8px] font-bold">Front End</span>
            </div>
            <div className="absolute top-1/4 -right-4 flex flex-col items-center text-accent">
              <Zap size={14} />
              <span className="text-[8px] font-bold">Flexibility</span>
            </div>
            <div className="absolute bottom-1/4 -right-4 flex flex-col items-center text-accent">
              <ShieldAlert size={14} />
              <span className="text-[8px] font-bold">Back end</span>
            </div>
            <div className="absolute -bottom-4 flex flex-col items-center text-accent">
              <Eye size={14} />
              <span className="text-[8px] font-bold">Troubleshooting</span>
            </div>
            <div className="absolute bottom-1/4 -left-6 flex flex-col items-center text-accent">
              <Rocket size={14} />
              <span className="text-[8px] font-bold">Curiosity</span>
            </div>
            <div className="absolute top-1/4 -left-4 flex flex-col items-center text-accent">
              <Code2 size={14} />
              <span className="text-[8px] font-bold">LOG</span>
            </div>

            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.3)]"
            >
              {/* Grid Web Pattern-hamnida */}
              <defs>
                <pattern
                  id="web-grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="1"
                    cy="1"
                    r="0.5"
                    fill="white"
                    fillOpacity="0.1"
                  />
                </pattern>
                <mask id="hex-mask">
                  <polygon
                    points="50,5 90,25 90,75 50,95 10,75 10,25"
                    fill="white"
                  />
                </mask>
              </defs>

              {/* Background Hexagon Rings-hamnida */}
              {[1, 0.8, 0.6, 0.4, 0.2].map((r, i) => (
                <polygon
                  key={i}
                  points="50,5 90,25 90,75 50,95 10,75 10,25"
                  fill="transparent"
                  stroke="var(--color-accent)"
                  strokeOpacity="0.5"
                  strokeWidth="0.5"
                  transform={`scale(${r})`}
                  style={{
                    transform: `scale(${r})`,
                    transformOrigin: "center",
                  }}
                />
              ))}

              {/* Spoke Lines */}
              <g
                stroke="var(--color-accent)"
                strokeOpacity="0.5"
                strokeWidth="0.2"
              >
                <line x1="50" y1="5" x2="50" y2="95" />
                <line x1="90" y1="25" x2="10" y2="75" />
                <line x1="90" y1="75" x2="10" y2="25" />
              </g>

              {/* The Data Polygon-hamnida */}
              <polygon
                points={`
                  50,${50 - stats.frontEnd * 0.45} 
                  ${50 + stats.flexibility * 0.4},${
                  50 - stats.flexibility * 0.25
                } 
                  ${50 + stats.backEnd * 0.4},${50 + stats.backEnd * 0.25} 
                  50,${50 + stats.Troubleshooting * 0.45} 
                  ${50 - stats.curiosity * 0.4},${50 + stats.curiosity * 0.25} 
                  ${50 - stats.tenacity * 0.4},${50 - stats.tenacity * 0.25}
                `}
                className="fill-accent/20 stroke-accent/60 stroke-[1.5] transition-all duration-1000"
                style={{ filter: "url(#web-grid)" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full text-left">
            <div className="bg-secondary/30 p-3 rounded-lg border border-stylish group/stat">
              <div className="text-[10px] text-heading uppercase opacity-50">
                Status
              </div>
              <div className="text-md font-bold text-heading tracking-tighter italic uppercase">
                Level 29
              </div>
            </div>

            <div className="bg-secondary/30 p-3 rounded-lg border border-stylish">
              <div className="text-[10px] text-heading uppercase opacity-50">
                Server
              </div>
              <div className="text-md font-bold text-heading tracking-tighter italic uppercase">
                LBRDC
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary/30 border border-stylish text-icons rounded-xl p-4 flex gap-4 overflow-x-auto">
        {[Phone, MapPinHouse, Mail].map((Icon, idx) => (
          <button
            key={idx}
            className="flex-1 bg-secondary/20 border-stylish p-4 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-stylish transition-all border group"
          >
            <Icon
              size={20}
              strokeWidth={2.5}
              className="group-hover:text-accent transition-colors"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
