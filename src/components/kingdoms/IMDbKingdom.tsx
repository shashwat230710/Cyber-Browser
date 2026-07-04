import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import { useGameStore } from '../../store/gameStore';

const IMDbKingdom: React.FC = () => {
  const kingdom = KINGDOMS['imdb'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'imdb_lobby';
  const roomData = kingdom?.rooms[currentRoom];

  if (!kingdom || !roomData) return <div>Loading...</div>;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div className="header" style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
        <div className="pixel-icon icon-imdb" style={{ marginRight: '10px' }}>IMDb</div>
        <h2 style={{ margin: 0 }}>Cinema Citadel</h2>
      </div>
      <RoomRenderer room={roomData} kingdomId="imdb" />
    </div>
  );
};

export default IMDbKingdom;
