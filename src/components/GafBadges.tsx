export function GafCertifiedBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-3 shadow-sm">
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">
          Certified
        </div>
        <div className="text-lg font-black text-[#C8102E] tracking-tight leading-none">
          GAF
        </div>
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
          Contractor
        </div>
      </div>
    </div>
  );
}

export function GafTimberlineBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-3 shadow-sm">
        <div className="text-lg font-black text-[#C8102E] tracking-tight leading-none">
          GAF
        </div>
        <div className="text-[9px] font-bold text-gray-600 uppercase tracking-wider mt-1">
          Timberline HDZ
        </div>
        <div className="text-[8px] font-medium text-gray-400 mt-0.5">
          #1 Selling Shingle
        </div>
      </div>
    </div>
  );
}

export function GafEverGuardBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-3 shadow-sm">
        <div className="text-lg font-black text-[#C8102E] tracking-tight leading-none">
          GAF
        </div>
        <div className="text-[9px] font-bold text-gray-600 uppercase tracking-wider mt-1">
          EverGuard TPO
        </div>
        <div className="text-[8px] font-medium text-gray-400 mt-0.5">
          Commercial Systems
        </div>
      </div>
    </div>
  );
}

export function GafBadgeRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <GafCertifiedBadge />
      <GafTimberlineBadge />
      <GafEverGuardBadge />
    </div>
  );
}
