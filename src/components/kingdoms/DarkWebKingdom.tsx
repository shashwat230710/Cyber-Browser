import React, { useState, useEffect } from 'react';
import { KINGDOMS } from '../../data/kingdoms';
import RoomRenderer from '../game/RoomRenderer';
import { useGameStore } from '../../store/gameStore';
import { applyGlitchText } from '../../utils/darkWeb';
import DarkWebBoss from './DarkWebBoss';

const DarkWebKingdom: React.FC = () => {
  const kingdom = KINGDOMS['darkweb'];
  const currentRoom = useGameStore(s => s.currentRoom) || kingdom?.startingRoom || 'dark_threshold';
  const roomData = kingdom?.rooms[currentRoom];
  const [glitchIntensity, setGlitchIntensity] = useState(1);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setGlitchIntensity(prev => (prev === 1 ? 2 : 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  if (!kingdom || !roomData) return <div>Loading...</div>;

  // The boss room replaces standard RoomRenderer completely
  if (currentRoom === 'dark_core') {
    return <DarkWebBoss />;
  }

  // Apply glitch logic to name and description
  const glitchedRoom = {
    ...roomData,
    name: applyGlitchText(roomData.name, glitchIntensity),
    description: applyGlitchText(roomData.description, glitchIntensity)
  };

  return (
    <div className="darkweb-bg" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', borderBottom: '1px solid red', display: 'flex', justifyContent: 'space-between' }}>
        <h2 className="glitch-text" data-text="???">???</h2>
        <span style={{ color: 'red' }}>ERROR OOM</span>
      </div>
      <RoomRenderer room={glitchedRoom} kingdomId="darkweb" />
    </div>
  );
};

export default DarkWebKingdom;
