import React from 'react';

interface VlsiExpertLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  subText?: string;
}

export const VlsiExpertLogo: React.FC<VlsiExpertLogoProps> = ({
  className = '',
  size = 24,
  showText = true,
  subText = 'Hardware'
}) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Silicon Chip Emblem */}
      <div 
        className="relative flex items-center justify-center rounded-lg bg-[#191a21] border border-[#2b2d39] text-[#e5a93c] shadow-sm shrink-0"
        style={{ width: size + 8, height: size + 8 }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Silicon Chip Die with Pins */}
          <rect x="5" y="5" width="14" height="14" rx="2.5" fill="#16171d" stroke="#e5a93c" strokeWidth="1.8" />
          <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" fill="#e5a93c" fillOpacity="0.18" stroke="#e5a93c" strokeWidth="1.2" />
          {/* Silicon Gate Interconnects */}
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22M7 2V5M7 19V22M17 2V5M17 19V22M2 7H5M19 7H22M2 17H5M19 17H22" stroke="#e5a93c" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="#e5a93c" />
        </svg>
      </div>

      {showText && (
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-white text-base tracking-tight font-sans flex items-center gap-1">
            <span>VLSI</span>
            <span className="text-[#e5a93c]">Expert</span>
          </span>
          {subText && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#191a21] text-[#e5a93c] font-mono font-bold tracking-wide uppercase border border-[#2b2d39]">
              {subText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
