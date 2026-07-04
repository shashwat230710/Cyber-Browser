import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import { useGameStore } from '../../store/gameStore';

const AmazonKingdom: React.FC = () => {
  const kingdom = KINGDOMS['amazon'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'amazon_storefront';
  const roomData = kingdom?.rooms[currentRoom];

  if (!kingdom || !roomData) return <div>Loading...</div>;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div className="header" style={{ padding: '10px' }}>
        <h2>Amazon.com</h2>
      </div>
      <RoomRenderer room={roomData} kingdomId="amazon" />
    </div>
  );
};

export default AmazonKingdom;
