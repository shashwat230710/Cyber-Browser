import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useGameStore } from './store/gameStore';
import Desktop from './components/desktop/Desktop';

const TitleScreen = ({ onStart }: { onStart: () => void }) => {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (booting) {
    return (
      <div style={{ background: 'black', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'monospace' }}>
        <div>
          <p>Starting Windows...</p>
          <div style={{ width: '200px', height: '10px', border: '1px solid white', marginTop: '10px' }}>
            <div style={{ width: '50%', height: '100%', background: 'blue', animation: 'loadBar 2s ease-in-out' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      style={{ 
        background: 'black', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white' 
      }}
      onClick={onStart}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px', animation: 'stars 20s linear infinite' }} />
      <h1 style={{ background: 'linear-gradient(to bottom, #0058e6, #3a93ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '4rem', zIndex: 10, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        CYBER BROWSER RPG
      </h1>
      <p style={{ zIndex: 10, fontSize: '1.2rem', color: '#ccc' }}>The Internet Is Now A Dungeon Crawler</p>
      
      <p style={{ zIndex: 10, marginTop: '50px', animation: 'blink 1s step-end infinite' }}>
        Click anywhere to start _
      </p>

      <style>{`
        @keyframes loadBar { from { width: 0; } to { width: 100%; } }
        @keyframes stars { from { background-position: 0 0; } to { background-position: -100px -100px; } }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
};

function App() {
  const [started, setStarted] = useState(false);
  const scanlines = useGameStore(s => s.scanlines);
  const incrementPlayTime = useGameStore(s => s.incrementPlayTime);
  const setCurrentKingdom = useGameStore(s => s.setCurrentKingdom);

  useEffect(() => {
    // Force reset to desktop on load
    setCurrentKingdom(null);
    document.body.classList.remove('darkweb-active');
  }, [setCurrentKingdom]);

  useEffect(() => {
    if (started) {
      const timer = setInterval(() => {
        incrementPlayTime();
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [started, incrementPlayTime]);

  return (
    <BrowserRouter>
      {scanlines && <div className="scanlines"></div>}
      <Routes>
        <Route path="/" element={
          !started ? <TitleScreen onStart={() => setStarted(true)} /> : <Desktop />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
