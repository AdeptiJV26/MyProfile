"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Lock, ShieldCheck, Eye, EyeOff } from "lucide-react";

interface VerifiedUpdateProps {
  userId: string | null;
  field: string;
  label: string;
  placeholder: string;
}

export default function VerifiedUpdate({ userId, field, label, placeholder }: VerifiedUpdateProps) {
  const [step, setStep] = useState<"verify" | "edit">("verify");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("player").select("pass").eq("id", userId).single();

    if (!error && data?.pass?.toString().trim() === password.trim()) {
      setStep("edit");
    } else {
      alert("Invalid Password");
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    setLoading(true);
    const { error } = await supabase.from("player").update({ [field]: newValue }).eq("id", userId);
    if (!error) {
      alert(`${label} Updated!`);
      setStep("verify");
      setPassword("");
      setNewValue("");
    }
    setLoading(false);
  };

  return (
    <div className="flex gap-4 w-full items-center">
      {step === "verify" ? (
        <>
          <div className="relative flex-1">
            <input
              type={showPass ? "text" : "password"}
              placeholder={`Verify password for ${label}...`}
              className="w-full bg-transparent border-none outline-none text-white text-sm pr-7"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
          <button onClick={handleVerify} disabled={loading} className="text-blue-400 font-bold text-xs uppercase">
            <Lock size={14} className="inline mr-1" /> {loading ? "..." : "Verify"}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-white text-sm"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={handleUpdate} disabled={loading} className="text-green-400 font-bold text-xs uppercase">
            <ShieldCheck size={14} className="inline mr-1" /> Save
          </button>
        </>
      )}
    </div>
  );
}"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Lock, ShieldCheck, Eye, EyeOff } from "lucide-react";

interface VerifiedUpdateProps {
  userId: string | null;
  field: string;
  label: string;
  placeholder: string;
}

export default function VerifiedUpdate({ userId, field, label, placeholder }: VerifiedUpdateProps) {
  const [step, setStep] = useState<"verify" | "edit">("verify");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("player").select("pass").eq("id", userId).single();

    if (!error && data?.pass?.toString().trim() === password.trim()) {
      setStep("edit");
    } else {
      alert("Invalid Password");
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    setLoading(true);
    const { error } = await supabase.from("player").update({ [field]: newValue }).eq("id", userId);
    if (!error) {
      alert(`${label} Updated!`);
      setStep("verify");
      setPassword("");
      setNewValue("");
    }
    setLoading(false);
  };

  return (
    <div className="flex gap-4 w-full items-center">
      {step === "verify" ? (
        <>
          <div className="relative flex-1">
            <input
              type={showPass ? "text" : "password"}
              placeholder={`Verify password for ${label}...`}
              className="w-full bg-transparent border-none outline-none text-white text-sm pr-7"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
          <button onClick={handleVerify} disabled={loading} className="text-blue-400 font-bold text-xs uppercase">
            <Lock size={14} className="inline mr-1" /> {loading ? "..." : "Verify"}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-white text-sm"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={handleUpdate} disabled={loading} className="text-green-400 font-bold text-xs uppercase">
            <ShieldCheck size={14} className="inline mr-1" /> Save
          </button>
        </>
      )}
    </div>
  );
}