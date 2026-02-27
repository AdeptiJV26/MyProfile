"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import React from "react";

export default function ResumePage() {
  const resumeUrl = "/LordAinz.pdf";

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-8">
      {/* Theme Header - Matches your SkillsPage */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-6 w-1 bg-accent shadow-[0_0_12px_var(--color-accent)]" />
        <h3 className="orbitron text-xl font-black uppercase tracking-[0.4em] text-heading">
          Document Preview
        </h3>
        <div className="flex-1 h-1 bg-linear-to-r from-accent/50 to-transparent" />
      </div>

      {/* Main Container - Matches your Skill Slot styling */}
      <div className="group relative">
        {/* Corner Accents from your Skill Slot design */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-3 border-l-3 border-accent opacity-0 group-hover:opacity-100 transition-all" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-3 border-r-3 border-accent opacity-0 group-hover:opacity-100 transition-all" />

        <div className="relative w-full border border-stylish/50 bg-secondary/10 p-2 rounded-sm transition-all group-hover:bg-secondary/20 group-hover:border-accent/40">
          {/* Top Utility Bar */}
          <div className="flex justify-between items-center p-3 mb-2 border-b border-stylish/30">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-accent" />
              <span className="orbitron uppercase text-[10px] uppercase font-black tracking-widest text-heading/60">
                Data Log // Resume
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href={resumeUrl}
                download
                className="text-heading/60 hover:text-accent transition-colors"
              >
                <Download size={18} />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-heading/60 hover:text-accent transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>


          <div className="relative w-full h-auto bg-black/40 overflow-hidden">
            <object
              data={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
              type="application/pdf"
              className="w-full aspect-[1/1.414] block"
              style={{ width: "100%", height: "auto", minHeight: "80vh" }}
            >
              <div className="flex h-96 items-center justify-center text-accent orbitron">
                RENDER_ERROR: USE_EXTERNAL_LINK
              </div>
            </object>
          </div>

          <div className="relative h-1 w-full bg-black/40 mt-2 overflow-hidden border border-white/5">
            <div className="h-full w-full bg-linear-to-r from-secondary/40 to-secondary animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
