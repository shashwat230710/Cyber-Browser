// Dark Web Logic for Lie/Truth mechanic and Curses
import { globalRNG } from './rng';

export function isLyingRoom(roomNumber: number): boolean {
  // NPCs in even-numbered rooms lie, odd-numbered rooms tell truth
  return roomNumber % 2 === 0;
}

export function applyGlitchText(text: string, intensity: number = 1): string {
  const glitchChars = '!<>-_\\\\/[]{}—=+*^?#________';
  let glitched = '';
  for (let i = 0; i < text.length; i++) {
    if (globalRNG.randomInt(1, 100) < intensity * 5) {
      glitched += glitchChars[globalRNG.randomInt(0, glitchChars.length - 1)];
    } else {
      glitched += text[i];
    }
  }
  return glitched;
}

export function generateFakeStats(realStats: any): any {
  return {
    ...realStats,
    hp: realStats.hp * globalRNG.randomInt(1, 3),
    attack: realStats.attack + globalRNG.randomInt(-5, 10),
    defense: realStats.defense + globalRNG.randomInt(-5, 10),
  };
}
