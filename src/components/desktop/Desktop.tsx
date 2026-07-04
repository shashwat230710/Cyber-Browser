import React from 'react';
import { useGameStore } from '../../store/gameStore';
import DesktopIcon from './DesktopIcon';
import Taskbar from './Taskbar';
import WindowFrame from './WindowFrame';
import { useHiddenButtons } from '../../hooks/useHiddenButtons';
import { KINGDOMS } from '../../data/kingdoms';

// Import Kingdoms
import GoogleKingdom from '../kingdoms/GoogleKingdom';
import YahooKingdom from '../kingdoms/YahooKingdom';
import AltaVistaKingdom from '../kingdoms/AltaVistaKingdom';
import AskJeevesKingdom from '../kingdoms/AskJeevesKingdom';
import AmazonKingdom from '../kingdoms/AmazonKingdom';
import eBayKingdom from '../kingdoms/eBayKingdom';
import NapsterKingdom from '../kingdoms/NapsterKingdom';
import WikipediaKingdom from '../kingdoms/WikipediaKingdom';
import IMDbKingdom from '../kingdoms/IMDbKingdom';
import DarkWebKingdom from '../kingdoms/DarkWebKingdom';

const getKingdomComponent = (id: string) => {
  switch (id) {
    case 'google': return <GoogleKingdom />;
    case 'yahoo': return <YahooKingdom />;
    case 'altavista': return <AltaVistaKingdom />;
    case 'askjeeves': return <AskJeevesKingdom />;
    case 'amazon': return <AmazonKingdom />;
    case 'ebay': return <eBayKingdom />;
    case 'napster': return <NapsterKingdom />;
    case 'wikipedia': return <WikipediaKingdom />;
    case 'imdb': return <IMDbKingdom />;
    case 'darkweb': return <DarkWebKingdom />;
    default: return <div style={{ padding: '20px' }}>Kingdom Not Found: {id}</div>;
  }
};

const Desktop: React.FC = () => {
  const currentKingdom = useGameStore(s => s.currentKingdom);
  const unlocked = useGameStore(s => s.kingdomsUnlocked);
  const unlockKingdom = useGameStore(s => s.unlockKingdom);
  const { checkButton } = useHiddenButtons();
  
  React.useEffect(() => {
    // For testing purposes, unlock all kingdoms immediately
    const allKingdoms = ['google', 'yahoo', 'altavista', 'askjeeves', 'amazon', 'ebay', 'napster', 'wikipedia', 'imdb', 'darkweb'];
    allKingdoms.forEach(k => unlockKingdom(k));
  }, [unlockKingdom]);

  React.useEffect(() => {
    if (currentKingdom === 'darkweb') {
      document.body.classList.add('darkweb-active');
    } else {
      document.body.classList.remove('darkweb-active');
    }
  }, [currentKingdom]);

  const handleDesktopClick = (e: React.MouseEvent) => {
    if (e.type === 'contextmenu') {
      e.preventDefault();
      checkButton('hb_desktop_rightclick');
    }
  };

  return (
    <div 
      style={{ width: '100%', height: '100%', position: 'relative' }} 
      onContextMenu={handleDesktopClick}
    >
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', width: '100px', height: '100%', flexWrap: 'wrap', alignContent: 'flex-start' }}>
        {unlocked.map(id => (
          <DesktopIcon 
            key={id}
            kingdomId={id} 
            name={KINGDOMS[id]?.name || (id.charAt(0).toUpperCase() + id.slice(1))} 
          />
        ))}
        {unlocked.length >= 9 && !unlocked.includes('darkweb') && (
          <DesktopIcon key="darkweb" kingdomId="darkweb" name="???" />
        )}
      </div>

      {currentKingdom && (
        <WindowFrame kingdomId={currentKingdom}>
          {getKingdomComponent(currentKingdom)}
        </WindowFrame>
      )}

      <Taskbar />
    </div>
  );
};

export default Desktop;
