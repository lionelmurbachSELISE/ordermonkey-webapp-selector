import React from 'react';
import { FoodOutlet } from '../types';

interface OutletCardProps {
  outlet: FoodOutlet;
}

export const OutletCard = ({ outlet }: OutletCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden relative aspect-[4/3] transition-all duration-300 cursor-pointer group hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/20">
      <a
        href={outlet.orderUrl}
        className="block w-full h-full relative"
      >
        <div className="absolute inset-0">
          <img
            src={outlet.imageUrl}
            alt={outlet.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 border-2 border-white/60 group-hover:border-white/80 rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent rounded-xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-base md:text-lg font-bold uppercase text-gray-800 tracking-tight text-center drop-shadow-lg font-['Space_Grotesk']" style={{ letterSpacing: '0.01em' }}>{outlet.name}</h3>
        </div>
      </a>
    </div>
  );
}; 