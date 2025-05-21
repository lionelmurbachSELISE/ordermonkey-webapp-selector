import React from 'react';
import { FoodOutlet } from '../types';

interface OutletCardProps {
  outlet: FoodOutlet;
}

export const OutletCard = ({ outlet }: OutletCardProps) => {
  return (
    <div className="bg-[#e5e8de] border border-gray-300 rounded-lg overflow-hidden relative aspect-[4/3] transition cursor-pointer group">
      <a
        href={outlet.orderUrl}
        className="block w-full h-full relative"
      >
        <div className="absolute inset-0">
          <img
            src={outlet.imageUrl}
            alt={outlet.name}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-base md:text-lg font-bold uppercase text-white tracking-tight text-center" style={{ letterSpacing: '0.01em' }}>{outlet.name}</h3>
        </div>
      </a>
    </div>
  );
}; 