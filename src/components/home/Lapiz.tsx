/** Lápiz amarillo dibujado (punta en el origen). Se usa en el hero y en el mapa. */
export default function Lapiz({ scale = 1 }: { scale?: number }) {
  return (
    <g transform={`rotate(38) scale(${scale})`}>
      <path d="M-6 -16 L6 -16 L6 -78 L-6 -78 Z" fill="#FFE36E" stroke="#2A2B30" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-2 -16 L-2 -78 M2 -16 L2 -78" stroke="#E0B93A" strokeWidth="1.2" />
      <path d="M-6.4 -78 L6.4 -78 L6.4 -87 L-6.4 -87 Z" fill="#C9CCD3" stroke="#2A2B30" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-6.4 -81 L6.4 -81 M-6.4 -84 L6.4 -84" stroke="#2A2B30" strokeWidth="1" />
      <path d="M-6 -87 L6 -87 L6 -94 C 6 -97, 4 -98, 0 -98 C -4 -98, -6 -97, -6 -94 Z" fill="#F28B82" stroke="#2A2B30" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-6 -16 L0 0 L6 -16 Z" fill="#F3D9B1" stroke="#2A2B30" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-2.2 -5.8 L0 0 L2.2 -5.8 Z" fill="#2A2B30" />
      <path d="M-6 -16 L-4 -13.5 L-2 -16 L0 -13.5 L2 -16 L4 -13.5 L6 -16" fill="none" stroke="#2A2B30" strokeWidth="1.1" strokeLinejoin="round" />
    </g>
  );
}
