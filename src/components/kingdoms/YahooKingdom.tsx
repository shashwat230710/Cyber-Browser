import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import HiddenButton from '../game/HiddenButton';
import { useGameStore } from '../../store/gameStore';

const YahooKingdom: React.FC = () => {
  const kingdom = KINGDOMS['yahoo'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'yahoo_front';
  const roomData = kingdom?.rooms[currentRoom];

  if (!kingdom || !roomData) return <div>Loading...</div>;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', background: '#400090', color: 'yellow', borderBottom: '1px solid #fff' }}>
        <h1 style={{ margin: 0, fontFamily: 'serif' }}>Yahoo!</h1>
      </div>
      
      {currentRoom === 'yahoo_front' && (
        <div style={{ position: 'absolute', top: '100px', right: '20px' }}>
          <HiddenButton id="hb_yahoo_ad">
            <div style={{ width: '120px', height: '60px', background: 'red', color: 'white', textAlign: 'center', lineHeight: '60px' }}>CLICK HERE!</div>
          </HiddenButton>
        </div>
      )}

      <RoomRenderer room={roomData} kingdomId="yahoo" />
    </div>
  );
};

export default YahooKingdom;
