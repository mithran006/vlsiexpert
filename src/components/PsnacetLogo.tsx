import React from 'react';

interface PsnacetLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const PsnacetLogo: React.FC<PsnacetLogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    xs: { width: 28, height: 32 },
    sm: { width: 36, height: 40 },
    md: { width: 48, height: 54 },
    lg: { width: 72, height: 80 },
    xl: { width: 88, height: 98 },
    '2xl': { width: 104, height: 116 }
  }[size];

  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 300 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md transition-transform hover:scale-105"
      >
        {/* White outer container for high contrast */}
        <rect x="10" y="10" width="280" height="320" rx="20" fill="#FFFFFF" />

        {/* Shield Outer Header - Red section with Factory Silhouette */}
        <path
          d="M70 30 H230 V90 H70 Z"
          fill="#D31018"
        />
        {/* Factory Chimney White Silhouette */}
        <path
          d="M90 80 V55 L110 55 V80 H120 V50 L140 50 V80 H180 L200 35 V80 Z"
          fill="#FFFFFF"
        />
        <rect x="205" y="38" width="12" height="42" fill="#FFFFFF" />
        {/* Smoke trail */}
        <path d="M210 38 Q218 30 225 35 Q230 30 222 25" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Middle section: Split Blue & Green */}
        <path d="M70 90 H150 V145 H70 Z" fill="#0012D2" />
        <path d="M150 90 H230 V145 H150 Z" fill="#009A1D" />

        {/* Center Open Book */}
        <g transform="translate(118, 93)">
          {/* Left page */}
          <path d="M32 38 Q16 30 2 35 V8 Q16 4 32 10 Z" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
          {/* Right page */}
          <path d="M32 38 Q48 30 62 35 V8 Q48 4 32 10 Z" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
          {/* Book Spine */}
          <line x1="32" y1="10" x2="32" y2="38" stroke="#B45309" strokeWidth="2" />
        </g>

        {/* Bottom Yellow Shield */}
        <path
          d="M70 145 H230 V175 C230 205 180 230 150 238 C120 230 70 205 70 175 Z"
          fill="#FFE600"
        />

        {/* Shield Text - PSNA COLLEGE */}
        <text x="150" y="160" textAnchor="middle" fill="#006400" fontFamily="sans-serif" fontWeight="900" fontSize="16">
          PSNA
        </text>
        <text x="150" y="174" textAnchor="middle" fill="#000000" fontFamily="sans-serif" fontWeight="800" fontSize="10">
          COLLEGE OF
        </text>
        <text x="150" y="186" textAnchor="middle" fill="#000000" fontFamily="sans-serif" fontWeight="800" fontSize="10">
          ENGG. & TECH.
        </text>
        <text x="150" y="198" textAnchor="middle" fill="#000000" fontFamily="sans-serif" fontWeight="800" fontSize="10">
          DINDIGUL.
        </text>

        {/* Scroll Ribbon "TRUST IN GOD" */}
        <g transform="translate(0, 10)">
          {/* Ribbon outline & background */}
          <path
            d="M50 200 C80 235 220 235 250 200 C270 230 220 280 150 290 C80 280 30 230 50 200 Z"
            fill="#FFFFFF"
            stroke="#1E293B"
            strokeWidth="3"
          />
          {/* Ribbon Left Fold */}
          <path d="M45 195 C30 205 40 225 60 220 C50 210 50 200 45 195 Z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2" />
          {/* Ribbon Right Fold */}
          <path d="M255 195 C270 205 260 225 240 220 C250 210 250 200 255 195 Z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2" />
          
          {/* Ribbon Text */}
          <text x="150" y="260" textAnchor="middle" fill="#D31018" fontFamily="sans-serif" fontWeight="900" fontSize="22" letterSpacing="2">
            TRUST IN GOD
          </text>
        </g>

        {/* Estd : 1984 */}
        <text x="150" y="320" textAnchor="middle" fill="#008000" fontFamily="sans-serif" fontWeight="900" fontSize="24">
          Estd : 1984
        </text>
      </svg>
    </div>
  );
};
