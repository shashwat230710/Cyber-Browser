import React from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import { useGameStore } from '../../store/gameStore';

const AltaVistaKingdom: React.FC = () => {
  const kingdom = KINGDOMS['altavista'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'alta_entrance';
  const roomData = kingdom?.rooms[currentRoom];

  if (!kingdom || !roomData) return <div>Loading...</div>;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', background: '#2B1055', color: '#00BFFF', textAlign: 'center', borderBottom: '2px solid silver' }}>
        <h2>AltaVista Observatory</h2>
      </div>
      <RoomRenderer room={roomData} kingdomId="altavista" />
    </div>
  );
};

export default AltaVistaKingdom;
