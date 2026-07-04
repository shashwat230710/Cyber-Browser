import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import { useGameStore } from '../../store/gameStore';

const WikipediaKingdom: React.FC = () => {
  const kingdom = KINGDOMS['wikipedia'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'wiki_hall';
  const roomData = kingdom?.rooms[currentRoom];

  if (!kingdom || !roomData) return <div>Loading...</div>;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', background: '#fff', borderBottom: '1px solid #a2a9b1', display: 'flex', alignItems: 'center' }}>
        <div className="pixel-icon icon-wikipedia" style={{ marginRight: '10px' }} />
        <h2>Wikipedia</h2>
      </div>
      <RoomRenderer room={roomData} kingdomId="wikipedia" />
    </div>
  );
};

export default WikipediaKingdom;
