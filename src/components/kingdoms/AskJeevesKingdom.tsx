import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import { useGameStore } from '../../store/gameStore';

const AskJeevesKingdom: React.FC = () => {
  const kingdom = KINGDOMS['askjeeves'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'ask_entrance';
  const roomData = kingdom?.rooms[currentRoom];

  if (!kingdom || !roomData) return <div>Loading...</div>;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', background: '#800020', color: 'gold', textAlign: 'center', borderBottom: '4px double gold' }}>
        <h2>Ask Jeeves Manor</h2>
      </div>
      <RoomRenderer room={roomData} kingdomId="askjeeves" />
    </div>
  );
};

export default AskJeevesKingdom;
