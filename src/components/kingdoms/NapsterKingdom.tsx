import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import { useGameStore } from '../../store/gameStore';

const NapsterKingdom: React.FC = () => {
  const kingdom = KINGDOMS['napster'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'napster_entrance';
  const roomData = kingdom?.rooms[currentRoom];

  if (!kingdom || !roomData) return <div>Loading...</div>;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', borderBottom: '2px solid #00CC00', textAlign: 'center' }}>
        <h2>Napster</h2>
      </div>
      <RoomRenderer room={roomData} kingdomId="napster" />
    </div>
  );
};

export default NapsterKingdom;
