"use client";
import React, { useState, useEffect } from "react";
import LinkStart from "./components/linkstart";
import ProfileCard from "./components/profilecard";
import RenderSkills from "./pages/renderskills";
import RenderQuest from "./pages/renderquest";
import RenderBio from "./pages/renderbiography";
import RenderSupport from "./pages/rendersupport";
import RenderSettings from "./pages/rendersettings"
import Footer from "./templates/footer";
import Navbar from "./templates/navbar";
import Initializer from "./components/initializer";
import { motion } from "framer-motion";

const App = () => {
  const [activeTab, setActiveTab] = useState("status");
  const [hp, setHp] = useState(100);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LinkStart />;
  }

  return (
    <div className="min-h-screen bg-primary text-slate-200 selection:bg-blue-500/30">
      {/* Background Dot Dot */}
      <div
        className="fixed inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-main-accent) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-6xl mx-auto p-6 md:py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ProfileCard hp={hp} />

          <div className="lg:col-span-8">
            <div className="relative bg-secondary/80 border border-white/10 rounded-xl p-8 min-h-125s overflow-hidden">
              <Initializer key={`load-${activeTab}`} tabName={activeTab} />

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scaleY: 0, originY: 0 }}
                animate={{ opacity: 1, scaleY: 1, originY: 0 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="p-8"
              >
                {activeTab === "status" && <RenderBio />}
                {activeTab === "skills" && <RenderSkills />}
                {activeTab === "quests" && <RenderQuest />}
                {activeTab === "message" && <RenderSupport />}
                {activeTab === "settings" && <RenderSettings />}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
