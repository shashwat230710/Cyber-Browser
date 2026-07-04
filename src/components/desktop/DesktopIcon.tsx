import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { useAudio } from '../../hooks/useAudio';

interface Props {
  kingdomId: string;
  name: string;
}

const DesktopIcon: React.FC<Props> = ({ kingdomId, name }) => {
  const setCurrentKingdom = useGameStore(s => s.setCurrentKingdom);
  const setCurrentRoom = useGameStore(s => s.setCurrentRoom);
  const { playClick } = useAudio();

  const handleDoubleClick = () => {
    playClick();
    setCurrentKingdom(kingdomId);
    import('../../data/kingdoms').then(m => {
      const k = m.KINGDOMS[kingdomId];
      if (k) setCurrentRoom(k.startingRoom);
    });
  };

  return (
    <div 
      onDoubleClick={handleDoubleClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        width: '64px',
        textAlign: 'center',
        color: 'white',
        textShadow: '1px 1px 2px black'
      }}
    >
      <div className={`pixel-icon pixel-icon-lg icon-${kingdomId}`} />
      <span style={{ fontSize: '12px', marginTop: '4px' }}>{name}</span>
    </div>
  );
};

export default DesktopIcon;
