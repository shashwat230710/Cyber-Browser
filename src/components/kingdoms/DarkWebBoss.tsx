import React, { useState, useEffect } from 'react';
import ChoiceScreen from '../game/ChoiceScreen';
import EndingScreen from '../game/EndingScreen';

const DarkWebBoss: React.FC = () => {
  const [defeated, setDefeated] = useState(false);
  const [choice, setChoice] = useState<number | null>(null);
  const [btnPos, setBtnPos] = useState({ top: '50%', left: '50%', opacity: 0 });

  useEffect(() => {
    if (defeated) return;

    const moveInterval = setInterval(() => {
      // Jump around but slower and always visible to make it easier to click
      setBtnPos({
        top: `${Math.random() * 60 + 20}%`, // Keep it closer to center
        left: `${Math.random() * 60 + 20}%`,
        opacity: 1 // Always visible
      });
    }, 1200); // Changes every 1.2 seconds instead of 400ms

    return () => clearInterval(moveInterval);
  }, [defeated]);

  if (choice !== null) {
    // When a choice is made, return the screen to normal
    document.body.classList.remove('darkweb-active');
    return <EndingScreen door={choice} />;
  }

  if (defeated) {
    // Show choice screen, but maybe keep some dark vibe
    return <ChoiceScreen onSelect={setChoice} />;
  }

  return (
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: 'black', color: 'red' }}>
      <div style={{ 
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', fontWeight: 'bold',
        opacity: 0.2, textAlign: 'center', animation: 'glitch-anim-text 0.5s infinite linear alternate-reverse'
      }}>
        SYSTEM FAILURE<br/>CORRUPTION 100%
      </div>

      <button 
        style={{
          position: 'absolute',
          top: btnPos.top,
          left: btnPos.left,
          opacity: btnPos.opacity,
          background: 'red',
          color: 'black',
          border: '4px solid white',
          padding: '15px 30px',
          fontSize: '24px',
          fontWeight: '900',
          cursor: 'pointer',
          zIndex: 100,
          fontFamily: 'monospace',
          boxShadow: '0 0 15px red'
        }}
        onClick={() => setDefeated(true)}
      >
        DELETE MALWARE.EXE
      </button>

      <style>{`
        @keyframes glitch-anim-text {
          0% { transform: translate(0) skew(0deg); text-shadow: 2px 2px red, -2px -2px blue; }
          20% { transform: translate(-2px, 2px) skew(10deg); }
          40% { transform: translate(-2px, -2px) skew(-10deg); }
          60% { transform: translate(2px, 2px) skew(0deg); text-shadow: -2px 2px red, 2px -2px blue; }
          80% { transform: translate(2px, -2px) skew(0deg); }
          100% { transform: translate(0) skew(0deg); text-shadow: 2px 2px red, -2px -2px blue; }
        }
      `}</style>
    </div>
  );
};

export default DarkWebBoss;
