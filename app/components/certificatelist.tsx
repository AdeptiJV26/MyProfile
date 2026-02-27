"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import * as Icons from "lucide-react";
import { Settings2, Plus, Award } from "lucide-react";
import { EditCertModal } from "./modals/editcertificatemodal";

interface Certificate {
  id?: string | number;
  name: string;
  issuer: string;
  year_start: string; // Kept as requested
  year_end: string; // Kept as requested
  icon: keyof typeof Icons;
}

export const CertList = () => {
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchCerts = async () => {
    const { data, error } = await supabase
      .from("certification")
      .select("*")
      .order("year_end", { ascending: false }); // Sorted by your actual data column

    if (error) {
      console.error("DB_FETCH_ERROR:", error.message);
      return;
    }
    if (data) setCerts(data as Certificate[]);
  };

  useEffect(() => {
    fetchCerts();
  }, []);

  const emptyCert: Certificate = {
    name: "",
    issuer: "",
    year_start: "2024",
    year_end: "2025",
    icon: "Award",
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="group relative flex items-center justify-center p-3 border border-dashed border-accent/40 bg-accent/5 hover:bg-accent/10 transition-all rounded-lg mb-2"
      >
        <div className="flex items-center gap-2 orbitron text-xs font-black tracking-[0.2em] text-accent/60 group-hover:text-accent">
          <Plus size={16} /> [ REGISTER_NEW_CERTIFICATE ]
        </div>
      </button>

      {certs.map((cert) => {
        const IconComponent = (Icons[cert.icon] as React.ElementType) || Award;
        return (
          <div
            key={cert.id}
            className="flex items-center justify-between p-3 bg-secondary/40 hover:bg-secondary/80 border border-white/10 rounded-lg group transition-all"
          >
            <div className="flex items-center gap-5">
              <IconComponent
                size={24}
                className="text-accent drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]"
              />
              <div>
                <div className="text-heading orbitron font-black text-sm uppercase leading-none mb-1">
                  {cert.name}
                </div>
                <div className="text-[10px] text-txt/60 orbitron uppercase tracking-tighter">
                  ISSUER: {cert.issuer}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[9px] bg-secondary border border-white/10 text-heading font-black px-2 py-1 rounded orbitron">
                {cert.year_start} - {cert.year_end}
              </div>
              <button
                onClick={() => setSelectedCert(cert)}
                className="p-2 hover:bg-accent/20 rounded-md text-white/20 hover:text-accent border border-transparent hover:border-accent/30 transition-colors"
              >
                <Settings2 size={16} />
              </button>
            </div>
          </div>
        );
      })}

      {(selectedCert || isAddModalOpen) && (
        <EditCertModal
          cert={selectedCert || emptyCert}
          onClose={() => {
            setSelectedCert(null);
            setIsAddModalOpen(false);
          }}
          onRefresh={fetchCerts}
        />
      )}
    </div>
  );
};
