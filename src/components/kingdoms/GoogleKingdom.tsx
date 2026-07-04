import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import HiddenButton from '../game/HiddenButton';
import { useGameStore } from '../../store/gameStore';

const GoogleKingdom: React.FC = () => {
  const kingdom = KINGDOMS['google'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'google_home';

  if (!kingdom) return <div>Loading...</div>;
  const roomData = kingdom.rooms[currentRoom];

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Kingdom-specific header */}
      <div style={{ padding: '10px', background: '#fff', borderBottom: '1px solid #ccc', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>
          <span style={{ color: '#4285f4' }}>G</span>
          <span style={{ color: '#ea4335' }}>o</span>
          <span style={{ color: '#fbbc05' }}>o</span>
          <span style={{ color: '#4285f4' }}>g</span>
          <span style={{ color: '#34a853' }}>l</span>
          <span style={{ color: '#ea4335' }}>e</span>
          {currentRoom === 'google_home' && (
            <HiddenButton id="hb_google" style={{ fontSize: '28px', color: '#ea4335', verticalAlign: 'bottom' }}>.</HiddenButton>
          )}
        </h1>
      </div>
      
      {roomData ? (
        <RoomRenderer room={roomData} kingdomId="google" />
      ) : (
        <div>Room not found</div>
      )}
    </div>
  );
};

export default GoogleKingdom;
