import {
    Mail
} from 'lucide-react';

export default function RenderSupport() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col items-center justify-center text-center">
      <Mail size={48} className="text-blue-500 mb-4 opacity-50" />
      <h3 className="text-xl font-bold uppercase tracking-[0.3em] mb-4">
        Send Message Request
      </h3>
      <p className="text-slate-500 max-w-sm mb-8">
        Ready to form a party for your next project? My crystals are ready for
        immediate deployment.
      </p>

      <div className="w-full max-w-md space-y-4">
        <input
          className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700 font-mono"
          placeholder="PLAYER_ID"
        />
        <textarea
          rows={4}
          className="w-full bg-black/40 border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700 font-mono"
          placeholder="MESSAGE_CONTENT..."
        ></textarea>
        <button className="w-full bg-blue-600 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-blue-500 shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
          Confirm Dispatch
        </button>
      </div>
    </div>
  );
}
