import { Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function ProfName() {
  const [username, setUsername] = useState("Loading...");

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data } = await supabase.from("player").select("username").single();
      if (data) setUsername(data.username);
    };
    fetchPlayer();
  }, []);

  return (
    <button className="bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 px-4 py-2 rounded-lg flex items-center gap-3">
      <span className="font-bold uppercase tracking-tighter">{username}</span>
      <Wrench size={14} />
    </button>
  );
}