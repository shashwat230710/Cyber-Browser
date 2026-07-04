import React from 'react';
import { useCombat } from '../../hooks/useCombat';
import CombatLog from './CombatLog';
import CombatActions from './CombatActions';
import HackPuzzle from './HackPuzzle';
import { useGameStore } from '../../store/gameStore';

interface Props {
  enemyId: string;
  onComplete: () => void;
}

const CombatScreen: React.FC<Props> = ({ enemyId, onComplete }) => {
  const combat = useCombat(enemyId, onComplete);
  const playerHp = useGameStore(s => s.hp);
  const maxHp = useGameStore(s => s.maxHp);
  const playerName = useGameStore(s => s.playerName) || 'User';

  React.useEffect(() => {
    combat.initCombat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enemyId]);

  if (combat.state === 'INIT') return <div>Loading encounter...</div>;

  if (combat.state === 'HACK_MINIGAME') {
    return <HackPuzzle onComplete={combat.onHackComplete} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '10px' }}>
        <div style={{ width: '40%' }}>
          <h3>{playerName}</h3>
          <div style={{ background: '#ddd', height: '20px', width: '100%', border: '1px solid black' }}>
            <div style={{ background: 'green', height: '100%', width: `${(playerHp / maxHp) * 100}%` }} />
          </div>
          <span style={{ fontSize: '12px' }}>HP: {playerHp}/{maxHp}</span>
        </div>
        
        <div style={{ fontSize: '32px' }}>⚔️</div>

        <div style={{ width: '40%', textAlign: 'right' }}>
          <h3>{combat.enemyStats?.name}</h3>
          <div style={{ background: '#ddd', height: '20px', width: '100%', border: '1px solid black', marginLeft: 'auto' }}>
            <div style={{ background: 'red', height: '100%', width: `${((combat.enemyStats?.hp || 0) / (combat.enemyStats?.maxHp || 1)) * 100}%` }} />
          </div>
          <span style={{ fontSize: '12px' }}>HP: {combat.enemyStats?.hp}/{combat.enemyStats?.maxHp}</span>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        <CombatLog logs={combat.log} />
      </div>

      <div style={{ marginTop: '10px' }}>
        {combat.state === 'VICTORY' && <div style={{ color: 'green', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}>VICTORY!</div>}
        {combat.state === 'DEFEAT' && <div style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}>DEFEAT...</div>}
        {combat.state === 'PLAYER_TURN' && (
          <CombatActions 
            onFight={combat.handleFight}
            onNegotiate={combat.handleNegotiate}
            onHack={combat.handleHack}
          />
        )}
        {combat.state === 'ENEMY_TURN' && <div style={{ textAlign: 'center', padding: '10px' }}>Enemy is attacking...</div>}
      </div>
    </div>
  );
};

export default CombatScreen;
