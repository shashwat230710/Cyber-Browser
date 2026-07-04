import React, { useEffect } from 'react';
import { useGameStore } from '../../store/gameStore';

interface Props {
  door: number;
}

const EndingScreen: React.FC<Props> = ({ door }) => {
  const hiddenCount = useGameStore(s => s.hiddenButtonsFound);
  const totalHidden = useGameStore(s => s.totalHiddenButtons);
  const setFlag = useGameStore(s => s.setFlag);

  useEffect(() => {
    setFlag('game_completed', true);
    if (door === 1) setFlag('title_archivist', true);
    if (door === 2) setFlag('title_architect', true);
    if (door === 3) setFlag('title_anarchist', true);
  }, [door, setFlag]);

  const getEndingText = () => {
    switch (door) {
      case 1:
        return "You choose the world of homepages, forums, and freedom. The corruption clears. Websites rebuild as independent, creative, messy, beautiful personal spaces. GeoCities returns. Forums buzz. No algorithms. No centralization. It's chaotic and wonderful.";
      case 2:
        return "You choose intelligence over independence. The internet rebuilds with AI companions guiding every user. Search is perfect. Recommendations are flawless. No spam. No corruption. But... every page feels the same. Every answer is optimized. The quirks are gone.";
      case 3:
        return "You choose freedom, even if it means chaos. The player walks away. The internet stays corrupted. But in the cracks, new things grow. Weird things. Unexpected things. A broken link leads somewhere no one planned. An error page becomes a gathering place. From the wreckage, something nobody designed emerges.";
      default:
        return "You found a secret ending. The simulation ends.";
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }}>
      <h1 style={{ marginBottom: '40px', letterSpacing: '5px' }}>THE END</h1>
      <div style={{ maxWidth: '600px', textAlign: 'center', lineHeight: '1.8', fontSize: '18px' }}>
        <p>{getEndingText()}</p>
      </div>

      <div style={{ marginTop: '60px', color: '#888' }}>
        <p>Hidden Buttons Found: {hiddenCount} / {totalHidden}</p>
        {hiddenCount === totalHidden && <p style={{ color: 'gold' }}>You have unlocked the Archivist's Secret Room!</p>}
      </div>

      <button className="xp-button" style={{ marginTop: '40px' }} onClick={() => window.location.reload()}>
        Reboot System
      </button>
    </div>
  );
};

export default EndingScreen;
