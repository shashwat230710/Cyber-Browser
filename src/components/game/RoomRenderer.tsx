import React from 'react';
import { Room } from '../../data/kingdoms';
import RoomNavigation from './RoomNavigation';
import NPCEncounter from './NPCEncounter';
import CombatScreen from './CombatScreen';
import { useGameStore } from '../../store/gameStore';
import { ENCOUNTERS } from '../../data/encounters';
import { globalRNG } from '../../utils/rng';

interface Props {
  room: Room;
  kingdomId: string;
}

const RoomRenderer: React.FC<Props> = ({ room, kingdomId }) => {
  const [encounter, setEncounter] = React.useState<string | null>(null);
  const [npc, setNpc] = React.useState<string | null>(null);
  
  // Very simple random encounter logic on mount
  React.useEffect(() => {
    const possibleEnemies = ENCOUNTERS[room.id];
    if (possibleEnemies && possibleEnemies.length > 0) {
      if (globalRNG.randomInt(1, 100) < 30) { // 30% encounter chance
        const randomEnemy = possibleEnemies[globalRNG.randomInt(0, possibleEnemies.length - 1)];
        setEncounter(randomEnemy);
      }
    }
  }, [room.id]);

  if (encounter) {
    return <CombatScreen enemyId={encounter} onComplete={() => setEncounter(null)} />;
  }

  if (npc) {
    return <NPCEncounter npcId={npc} onComplete={() => setNpc(null)} />;
  }

  return (
    <div className="content-box" style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>{room.name}</h2>
      <p style={{ margin: '15px 0', lineHeight: '1.5' }}>{room.description}</p>
      
      {room.npcIds && room.npcIds.length > 0 && (
        <div style={{ margin: '20px 0', padding: '10px', background: 'rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>People here:</h3>
          {room.npcIds.map(id => (
            <button key={id} className="xp-button" onClick={() => setNpc(id)} style={{ marginRight: '10px' }}>
              Talk to {id}
            </button>
          ))}
        </div>
      )}

      <div style={{ marginTop: 'auto' }}>
        <RoomNavigation exits={room.exits} />
      </div>
    </div>
  );
};

export default RoomRenderer;
