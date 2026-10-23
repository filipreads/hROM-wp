import React from 'react';

interface HromLogoProps {
  className?: string;
  showText?: boolean;
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const HromLogo: React.FC<HromLogoProps> = ({
  className = '',
  showText = true,
  inverted = false,
  size = 'md',
}) => {
  const sizeMap = {
    sm: { wheel: 32, viewBox: showText ? '0 0 460 120' : '0 0 120 120', h: 'h-8' },
    md: { wheel: 44, viewBox: showText ? '0 0 460 120' : '0 0 120 120', h: 'h-11' },
    lg: { wheel: 56, viewBox: showText ? '0 0 460 120' : '0 0 120 120', h: 'h-14' },
    xl: { wheel: 72, viewBox: showText ? '0 0 460 120' : '0 0 120 120', h: 'h-20' },
  };

  const current = sizeMap[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={current.viewBox}
      className={`${current.h} w-auto ${className}`}
      fill="none"
      role="img"
      aria-label="hROM České Budějovice"
    >
      <defs>
        <filter id={`hrom-shadow-${size}`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Segmented Color Wheel */}
      <g transform="translate(60, 60)" filter={`url(#hrom-shadow-${size})`}>
        <circle cx="0" cy="0" r="14" fill={inverted ? '#ffffff' : '#1E2229'} />
        <circle cx="0" cy="0" r="7" fill={inverted ? '#111418' : '#FDFDFC'} />

        {/* 12 Color Wheel Segments */}
        <path d="M 0,-16 L 0,-48 A 48 48 0 0 1 24,-41.5 L 8,-13.8 A 16 16 0 0 0 0,-16 Z" fill="#FAC503" />
        <path d="M 8,-13.8 L 24,-41.5 A 48 48 0 0 1 41.5,-24 L 13.8,-8 A 16 16 0 0 0 8,-13.8 Z" fill="#FFB703" />
        <path d="M 13.8,-8 L 41.5,-24 A 48 48 0 0 1 48,0 L 16,0 A 16 16 0 0 0 13.8,-8 Z" fill="#ED7503" />
        <path d="M 16,0 L 48,0 A 48 48 0 0 1 41.5,24 L 13.8,8 A 16 16 0 0 0 16,0 Z" fill="#E63312" />
        <path d="M 13.8,8 L 41.5,24 A 48 48 0 0 1 24,41.5 L 8,13.8 A 16 16 0 0 0 13.8,8 Z" fill="#CE2E85" />
        <path d="M 8,13.8 L 24,41.5 A 48 48 0 0 1 0,48 L 0,16 A 16 16 0 0 0 8,13.8 Z" fill="#8E44AD" />
        <path d="M 0,16 L 0,48 A 48 48 0 0 1 -24,41.5 L -8,13.8 A 16 16 0 0 0 0,16 Z" fill="#2E5BFF" />
        <path d="M -8,13.8 L -24,41.5 A 48 48 0 0 1 -41.5,24 L -13.8,8 A 16 16 0 0 0 -8,13.8 Z" fill="#1F4E9E" />
        <path d="M -13.8,8 L -41.5,24 A 48 48 0 0 1 -48,0 L -16,0 A 16 16 0 0 0 -13.8,8 Z" fill="#0CACDB" />
        <path d="M -16,0 L -48,0 A 48 48 0 0 1 -41.5,-24 L -13.8,-8 A 16 16 0 0 0 -16,0 Z" fill="#16A085" />
        <path d="M -13.8,-8 L -41.5,-24 A 48 48 0 0 1 -24,-41.5 L -8,-13.8 A 16 16 0 0 0 -13.8,-8 Z" fill="#669538" />
        <path d="M -8,-13.8 L -24,-41.5 A 48 48 0 0 1 0,-48 L 0,-16 A 16 16 0 0 0 -8,-13.8 Z" fill="#84CC16" />

        <circle cx="0" cy="0" r="48" stroke={inverted ? '#ffffff' : '#1E2229'} strokeWidth="2.5" fill="none" opacity="0.2" />
      </g>

      {/* Brand Typography */}
      {showText && (
        <g transform="translate(130, 26)">
          <text
            x="0"
            y="44"
            fontFamily="'Outfit', sans-serif"
            fontWeight="400"
            fontSize="46"
            fill={inverted ? '#ffffff' : '#1E2229'}
            letterSpacing="-1"
          >
            <tspan fill="#ED7503" fontWeight="700">h</tspan>
            <tspan fontWeight="900" fill={inverted ? '#FFFFFF' : '#1E2229'}>ROM</tspan>
          </text>
          
          <text
            x="3"
            y="68"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="14.5"
            fill={inverted ? '#CBD5E1' : '#525A66'}
            letterSpacing="1.5"
          >
            ČESKÉ BUDĚJOVICE<tspan fill="#0CACDB">, z.s.</tspan>
          </text>
        </g>
      )}
    </svg>
  );
};
