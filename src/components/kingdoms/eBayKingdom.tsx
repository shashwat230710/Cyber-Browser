import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import { useGameStore } from '../../store/gameStore';

const eBayKingdom: React.FC = () => {
  const kingdom = KINGDOMS['ebay'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'ebay_lobby';
  const roomData = kingdom?.rooms[currentRoom];

  if (!kingdom || !roomData) return <div>Loading...</div>;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div className="banner" style={{ padding: '10px', background: '#f5f5f5' }}>
        <h2>eBay</h2>
      </div>
      <RoomRenderer room={roomData} kingdomId="ebay" />
    </div>
  );
};

export default eBayKingdom;
