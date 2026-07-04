import { globalRNG } from './rng';

export interface CombatStats {
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  hack: number;
  charm: number;
  luck: number;
}

export interface Enemy {
  id: string;
  name: string;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  hackDifficulty: 'Trivial' | 'Easy' | 'Medium' | 'Hard';
  specialAttack?: string;
  level: number;
}

export function calculateDamage(attackerStats: { attack: number }, defenderStats: { defense: number }, luck: number = 0): { damage: number; isCrit: boolean } {
  let isCrit = false;
  if (globalRNG.randomInt(1, 100) <= luck) {
    isCrit = true;
  }
  
  let baseDamage = attackerStats.attack - Math.floor(defenderStats.defense / 2) + globalRNG.randomInt(-2, 2);
  if (baseDamage < 1) baseDamage = 1;

  if (isCrit) {
    baseDamage = Math.floor(baseDamage * 1.5);
  }

  return { damage: baseDamage, isCrit };
}

export function calculateNegotiationChance(charm: number, luck: number): number {
  const chance = (charm * 3) + luck;
  return Math.min(Math.max(chance, 5), 95); // Cap between 5% and 95%
}

export function attemptNegotiation(chance: number): boolean {
  return globalRNG.randomInt(1, 100) <= chance;
}
