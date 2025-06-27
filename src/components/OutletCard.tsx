import React from 'react';
import { FoodOutlet } from '../types';

interface OutletCardProps {
  outlet: FoodOutlet;
}

export const OutletCard = ({ outlet }: OutletCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden relative aspect-[4/3] transition-all duration-500 cursor-pointer group hover:scale-[1.05] hover:shadow-2xl hover:shadow-white/30 hover:bg-white/20 animate-fade-in">
      <a
        href={outlet.orderUrl}
        className="block w-full h-full relative"
      >
        <div className="absolute inset-0">
          <img
            src={outlet.imageUrl}
            alt={outlet.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 border-2 border-white/60 group-hover:border-white/80 rounded-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl group-hover:from-black/70 group-hover:via-black/20 transition-all duration-500"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-base md:text-lg font-bold uppercase text-white tracking-tight text-center drop-shadow-lg font-['Space_Grotesk'] group-hover:text-white/90 transition-all duration-300" style={{ letterSpacing: '0.01em' }}>{outlet.name}</h3>
        </div>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
      </a>
    </div>
  );
}; 