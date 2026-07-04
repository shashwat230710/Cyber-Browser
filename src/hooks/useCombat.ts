import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { calculateDamage, calculateNegotiationChance, attemptNegotiation, Enemy } from '../utils/combat';
import { ALL_ENEMIES } from '../data/enemies';
import { sfx } from '../utils/audio';

export type CombatState = 'INIT' | 'PLAYER_TURN' | 'ENEMY_TURN' | 'HACK_MINIGAME' | 'VICTORY' | 'DEFEAT' | 'FLED';

export function useCombat(enemyId: string, onComplete?: () => void) {
  const [state, setState] = useState<CombatState>('INIT');
  const [log, setLog] = useState<{ id: number; text: string; type: 'info' | 'damage' | 'heal' | 'system' }[]>([]);
  const [logId, setLogId] = useState(0);
  
  const [enemyStats, setEnemyStats] = useState<Enemy | null>(null);

  const playerStats = useGameStore(s => s.stats);
  const playerHp = useGameStore(s => s.hp);
  const equipped = useGameStore(s => s.equipped);
  const takeDamage = useGameStore(s => s.takeDamage);
  const heal = useGameStore(s => s.heal);
  const gainXp = useGameStore(s => s.gainXp);
  const addGold = useGameStore(s => s.addGold);
  const recordEnemyDefeat = useGameStore(s => s.recordEnemyDefeat);

  const addLog = (text: string, type: 'info' | 'damage' | 'heal' | 'system' = 'info') => {
    setLog(prev => [...prev.slice(-49), { id: logId, text, type }]);
    setLogId(id => id + 1);
  };

  const initCombat = () => {
    const e = ALL_ENEMIES[enemyId];
    if (e) {
      setEnemyStats({ ...e });
      setState('PLAYER_TURN');
      addLog(`Encountered ${e.name}!`, 'system');
    }
  };

  const getTotalPlayerAttack = () => {
    let atk = playerStats.attack;
    if (equipped.weapon?.stats?.attack) atk += equipped.weapon.stats.attack;
    if (equipped.accessory?.stats?.attack) atk += equipped.accessory.stats.attack;
    return atk;
  };

  const getTotalPlayerDefense = () => {
    let def = playerStats.defense;
    if (equipped.armor?.stats?.defense) def += equipped.armor.stats.defense;
    if (equipped.accessory?.stats?.defense) def += equipped.accessory.stats.defense;
    return def;
  };

  const getTotalPlayerLuck = () => {
    let luck = playerStats.luck;
    if (equipped.accessory?.stats?.luck) luck += equipped.accessory.stats.luck;
    return luck;
  };

  const handleFight = () => {
    if (!enemyStats) return;
    
    // Player Attacks
    const { damage, isCrit } = calculateDamage(
      { attack: getTotalPlayerAttack() },
      { defense: enemyStats.defense },
      getTotalPlayerLuck()
    );

    if (isCrit) sfx.crit();
    else sfx.hit();

    addLog(`You attack ${enemyStats.name} for ${damage} damage!${isCrit ? ' CRITICAL HIT!' : ''}`, 'damage');
    
    const newEnemyHp = Math.max(0, enemyStats.hp - damage);
    setEnemyStats({ ...enemyStats, hp: newEnemyHp });

    if (newEnemyHp <= 0) {
      handleVictory();
    } else {
      setState('ENEMY_TURN');
      setTimeout(enemyTurn, 1000);
    }
  };

  const enemyTurn = () => {
    setEnemyStats(currentEnemy => {
      if (!currentEnemy) return currentEnemy;

      // Enemy attacks
      const { damage } = calculateDamage(
        { attack: currentEnemy.attack },
        { defense: getTotalPlayerDefense() }
      );

      sfx.hit();
      takeDamage(damage);
      addLog(`${currentEnemy.name} attacks you for ${damage} damage!`, 'damage');

      if (useGameStore.getState().hp <= 0) {
        setState('DEFEAT');
      } else {
        setState('PLAYER_TURN');
      }

      return currentEnemy;
    });
  };

  const handleNegotiate = () => {
    if (!enemyStats) return;
    
    const chance = calculateNegotiationChance(playerStats.charm, getTotalPlayerLuck());
    const success = attemptNegotiation(chance);

    if (success) {
      addLog(`Negotiation successful! ${enemyStats.name} leaves peacefully.`, 'system');
      sfx.levelUp();
      setState('FLED');
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
    } else {
      addLog(`Negotiation failed. ${enemyStats.name} is annoyed.`, 'info');
      sfx.error();
      setState('ENEMY_TURN');
      setTimeout(enemyTurn, 1000);
    }
  };

  const handleHack = () => {
    // Go to mini-game state
    setState('HACK_MINIGAME');
  };

  const onHackComplete = (success: boolean) => {
    if (success) {
      addLog(`Hack successful! Enemy disabled.`, 'system');
      sfx.hackSuccess();
      handleVictory();
    } else {
      addLog(`Hack failed. Took counter-damage.`, 'damage');
      sfx.error();
      if (enemyStats) {
        takeDamage(enemyStats.attack);
      }
      if (useGameStore.getState().hp <= 0) {
        setState('DEFEAT');
      } else {
        setState('ENEMY_TURN');
        setTimeout(enemyTurn, 1000);
      }
    }
  };

  const handleVictory = () => {
    setState('VICTORY');
    if (enemyStats) {
      addLog(`Defeated ${enemyStats.name}!`, 'system');
      const xpGained = enemyStats.level * 15;
      const goldGained = enemyStats.level * 5;
      gainXp(xpGained);
      addGold(goldGained);
      recordEnemyDefeat(enemyStats.id);
      addLog(`Gained ${xpGained} XP and ${goldGained} Gold.`, 'info');
      sfx.levelUp();
    }
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);
  };

  return {
    state,
    log,
    enemyStats,
    initCombat,
    handleFight,
    handleNegotiate,
    handleHack,
    onHackComplete,
    playerHp
  };
}
