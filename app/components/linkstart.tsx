export default function LinkStart() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden font-mono">
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4 border border-blue-500/30">
        <div
          className="h-full bg-blue-500 animate-sao-load"
          style={{ width: "100%" }}
        ></div>
      </div>
      <div className="text-blue-400 animate-pulse text-xl tracking-widest">
        LINK START
      </div>
      <div className="text-blue-900 text-xs mt-2 uppercase">
        Initializing Full-Dive Environment...
      </div>
      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
