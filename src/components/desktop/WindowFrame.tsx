import React, { ReactNode } from 'react';
import { useGameStore } from '../../store/gameStore';
import { KINGDOMS } from '../../data/kingdoms';
import { useAudio } from '../../hooks/useAudio';

interface Props {
  kingdomId: string;
  children: ReactNode;
}

const WindowFrame: React.FC<Props> = ({ kingdomId, children }) => {
  const setCurrentKingdom = useGameStore(s => s.setCurrentKingdom);
  const kingdom = KINGDOMS[kingdomId];
  const { playClick } = useAudio();

  const handleClose = () => {
    playClick();
    setCurrentKingdom(null);
  };

  return (
    <div className={`xp-window anim-window-open ${kingdom?.themeClass || ''}`} style={{
      top: '5%', left: '10%', right: '10%', bottom: '40px',
      zIndex: 100
    }}>
      <div className="xp-titlebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div className={`pixel-icon icon-${kingdomId}`} style={{ width: '16px', height: '16px' }} />
          <span>{kingdom?.title || 'Unknown Window'}</span>
        </div>
        <div className="xp-titlebar-buttons">
          <div className="xp-btn xp-btn-min">0</div>
          <div className="xp-btn xp-btn-max">1</div>
          <div className="xp-btn xp-btn-close" onClick={handleClose}>r</div>
        </div>
      </div>
      <div className="xp-content" style={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;
