import React from 'react';
import PillNav from './PillNav';
import SpecularButton from './SpecularButton';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-8 px-6 md:px-12 w-full max-w-screen-2xl mx-auto flex items-center justify-between text-white">
      {/* Left: Logo */}
      <div className="font-bold text-xl tracking-tight hidden lg:block">
        ManthanSharma
      </div>

      {/* Middle: Links */}
      <div className="flex-1 flex justify-center lg:justify-center justify-start">
        <PillNav
          items={[
            { label: 'About', href: '#about' },
            { label: 'Certificates', href: '#certificates' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' }
          ]}
          baseColor="#000000"
          pillColor="#1a1a1a"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#a3a3a3"
        />
      </div>

      {/* Right: Button */}
      <div className="hidden md:block">
        <SpecularButton
          size="md"
          radius={8}
          tint="#111111"
          tintOpacity={0.5}
          blur={10}
          textColor="#ffffff"
          lineColor="#fb4617"
          baseColor="#333333"
          intensity={1.5}
          shineSize={15}
          shineFade={40}
          thickness={1.5}
          speed={0.35}
          followMouse
          proximity={250}
          autoAnimate={false}
          className="uppercase tracking-widest text-xs font-semibold"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/Manthan_Sharma_CV.pdf';
            link.download = 'Manthan_Sharma_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download CV
        </SpecularButton>
      </div>
    </header>
  );
}
