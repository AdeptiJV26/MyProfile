
"use client"
import React, { useState, useEffect } from 'react';
import LinkStart from './components/linkstart';
import ProfileCard from './components/profilecard';
import RenderSkills from './pages/renderskills';
import RenderQuest from './pages/renderquest';
import RenderBio from './pages/renderbiography';
import RenderSupport from './pages/rendersupport';
import Footer from './templates/footer';
import Navbar from './templates/navbar';


import { 
} from 'lucide-react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('status');
  const [hp, setHp] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LinkStart />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* BG */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Navigation Bar */}
     <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-6xl mx-auto p-6 md:py-12 relative">
        {/* Content Panel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Panel */}
          <ProfileCard hp={hp} />

          {/* Right Panel na Dynamic */}
          <div className="lg:col-span-8">
            <div className="bg-[#15151a]/80 border border-white/10 rounded-xl p-8 min-h-[500px]">
              {activeTab === 'status' && (
                <RenderBio />
              )}

              {activeTab === 'skills' && (
                <RenderSkills />
              )}

              {activeTab === 'quests' && (
                <RenderQuest />
              )}

              {activeTab === 'message' && (
                <RenderSupport />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer My Ass */}
      <footer className="mt-20 border-t border-white/5 p-6 bg-black/40">
        <Footer />
      </footer>
    </div>
  );
};

export default App;