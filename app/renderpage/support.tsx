import {
    Mail
} from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col items-center justify-center text-center">
      <Mail size={48} className="text-stylish mb-4 opacity-70" />
      <h3 className="text-xl font-bold uppercase tracking-[0.3em] mb-4">
        Send Message Request
      </h3>
      <p className="text-txt max-w-sm mb-8">
        Ready to form a party for your next project? My crystals are ready for
        immediate deployment.
      </p>

      <div className="w-full max-w-md space-y-4">
        <input
          className="w-full bg-primary/50 border-stylish border-2 border-stylish/40  transparent rounded-lg p-3 outline-none focus:border-stylish focus:border-2 transition-colors placeholder:text-txt/60 font-mono"
          placeholder="PLAYER_ID"
        />
        <textarea
          rows={4}
          className="w-full bg-primary/50 border-2 border-stylish/40 rounded-lg p-3 outline-none focus:border-stylish focus:border-2 transition-colors placeholder:text-txt/60 font-mono"
          placeholder="MESSAGE_CONTENT..."
        ></textarea>
        <button className="w-full bg-primary/60 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-stylish/70 shadow-lg shadow-blue-500/30 active:scale-95 transition-all">
          Confirm Dispatch
        </button>
      </div>
    </div>
  );
}
