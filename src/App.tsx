import React from 'react';
import { OutletCard } from './components/OutletCard';
import { outlets } from './data/outlets';

import orderMonkeyLogo from './assets/om_logo.png';

function App() {
  return (
    <div className="min-h-screen bg-black py-4 px-1 flex flex-col justify-between">
      <div>
        <header className="w-full flex flex-col items-center justify-center mb-4">
          <h1 className="text-5xl font-extrabold uppercase text-white tracking-widest mb-2" style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}>
            URBANFOOD
          </h1>
        </header>
        <main className="max-w-full mx-auto">
          <div className="flex flex-col items-center mb-4">
            <span className="text-lg md:text-xl font-bold text-white text-center mb-2">Bitte Outlet auswählen, wo du dein Essen bestellen willst.</span>
            <span className="block w-16 h-1 rounded-full bg-white mt-2"></span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {outlets.map((outlet) => (
              <OutletCard key={outlet.id} outlet={outlet} />
            ))}
          </div>
        </main>
      </div>
      <footer className="w-full flex flex-row items-center justify-center gap-4 mt-8 mb-2">
        <span className="text-white text-xs md:text-sm whitespace-nowrap">Self-Ordering by</span>
        <img src={orderMonkeyLogo} alt="Order Monkey Logo" className="h-16 md:h-20" style={{ objectFit: 'contain' }} />
      </footer>
    </div>
  );
}

export default App; 