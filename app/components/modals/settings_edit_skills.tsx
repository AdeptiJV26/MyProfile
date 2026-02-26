"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { SkillForm } from "./SkillForm";

export default function ActiveView({ activeView, onBack }: any) {
  const [items, setItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);

  const fetchItems = async () => {
    const { data } = await supabase.from(activeView).select("*");
    setItems(data || []);
  };

  useEffect(() => { fetchItems(); }, [activeView]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-accent/20 pb-2">
        <button onClick={onBack} className="text-accent text-[10px] orbitron">{"<"} BACK</button>
        <button 
          onClick={() => { setSelectedItem(null); setShowForm(true); }}
          className="bg-accent/10 px-3 py-1 text-accent border border-accent/40 text-[10px] orbitron"
        >
          [ ADD_NEW ]
        </button>
      </div>

      {showForm ? (
        <SkillForm 
          initialData={selectedItem} 
          onSuccess={() => { setShowForm(false); fetchItems(); }} 
        />
      ) : (
        <div className="grid gap-2">
          {items.map((item) => (
            <div 
              key={item.id}
              onClick={() => { setSelectedItem(item); setShowForm(true); }}
              className="p-3 bg-secondary/10 border border-stylish flex justify-between cursor-pointer hover:bg-accent/5"
            >
              <span className="text-heading font-bold">{item.name}</span>
              <span className="text-accent">LV.{item.level}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}