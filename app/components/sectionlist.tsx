interface SectionItemProps {
  label: string;
  onClick: () => void;
}

export const SectionItem = ({ label, onClick }: SectionItemProps) => (
  <div className="flex flex-row w-full items-center justify-between mt-2">
    <div className="font-orbitron text-txt text-sm font-black">{label}</div>
    <button
      onClick={onClick}
      className="min-w-20 min-h-8 bg-secondary/30 hover:bg-secondary/60 border border-secondary rounded-lg font-orbitron text-sm font-black"
    >
      VIEW
    </button>
  </div>
);