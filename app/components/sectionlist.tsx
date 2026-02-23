interface SectionItemProps {
  label: string;
  onClick: () => void;
}

export const SectionItem = ({ label, onClick }: SectionItemProps) => (
  <div className="flex flex-row w-full items-center justify-between mt-2">
    <div className="font-orbitron text-txt">{label}</div>
    <button
      onClick={onClick}
      className="min-w-20 min-h-8 bg-blue-600/20 hover:bg-blue-600/40 border border-secondary rounded-lg font-orbitron text-xs"
    >
      VIEW
    </button>
  </div>
);