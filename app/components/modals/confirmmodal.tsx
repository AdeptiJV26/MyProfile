"use client";

interface ConfirmModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export const ConfirmModal = ({ title, message, onConfirm, onCancel, loading }: ConfirmModalProps) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
    <div className="bg-secondary border border-red-500/50 p-6 rounded-xl max-w-sm w-full space-y-4 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
      <h2 className="orbitron text-red-500 font-black uppercase text-lg italic">! {title}</h2>
      <p className="text-xs text-white/70 leading-relaxed">{message}</p>
      <div className="flex gap-3 pt-2">
        <button 
          onClick={onConfirm}
          disabled={loading}
          className="flex-1 bg-red-500/10 border border-red-500 text-red-500 p-2 rounded orbitron text-[10px] font-black hover:bg-red-500 hover:text-white transition-all"
        >
          {loading ? "WIPING..." : "CONFIRM_DELETE"}
        </button>
        <button 
          onClick={onCancel}
          className="px-4 border border-white/10 rounded orbitron text-[10px] hover:bg-white/5"
        >
          ABORT
        </button>
      </div>
    </div>
  </div>
);