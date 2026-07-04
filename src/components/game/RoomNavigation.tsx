import React from 'react';
import { useGameStore } from '../../store/gameStore';

interface Props {
  exits: { direction: string; targetRoom: string }[];
}

const RoomNavigation: React.FC<Props> = ({ exits }) => {
  const setCurrentRoom = useGameStore(s => s.setCurrentRoom);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {exits.map((exit, idx) => (
        <button 
          key={idx} 
          className="xp-button"
          onClick={() => setCurrentRoom(exit.targetRoom)}
        >
          {exit.direction}
        </button>
      ))}
    </div>
  );
};

export default RoomNavigation;
