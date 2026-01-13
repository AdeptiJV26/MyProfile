"use client"
import { motion } from "framer-motion";

export default function Initializer({ tabName }: { tabName: string }) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      // Changed items-center to pt-[200px] (or any fixed distance) 
      // to keep it at the top regardless of total container height
      className="absolute inset-0 z-10 bg-[#0a0a0c] flex flex-col items-center pt-[150px] font-mono pointer-events-none"
    >
      <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mb-2 border border-blue-500/20">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="h-full bg-blue-500"
        />
      </div>
      <div className="text-blue-400 text-[10px] tracking-[0.4em] uppercase">
        Initializing {tabName}...
      </div>
    </motion.div>
  );
}