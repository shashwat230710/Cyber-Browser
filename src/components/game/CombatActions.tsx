import React from 'react';
import { useGameStore } from '../../store/gameStore';

interface Props {
  onFight: () => void;
  onNegotiate: () => void;
  onHack: () => void;
}

const CombatActions: React.FC<Props> = ({ onFight, onNegotiate, onHack }) => {
  const mp = useGameStore(s => s.mp);
  const equipped = useGameStore(s => s.equipped);
  
  const canAsk = equipped.weapon?.id === 'w_butlers_cane';

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button className="xp-button" style={{ fontWeight: 'bold' }} onClick={onFight}>
        ⚔️ FIGHT
      </button>
      
      {canAsk ? (
        <button className="xp-button" onClick={onNegotiate}>
          ❓ ASK
        </button>
      ) : (
        <button className="xp-button" onClick={onNegotiate}>
          🤝 NEGOTIATE
        </button>
      )}

      <button className="xp-button" disabled={mp < 5} onClick={onHack} title="Costs 5 MP">
        💻 HACK (5 MP)
      </button>
    </div>
  );
};

export default CombatActions;
