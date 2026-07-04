// Web Audio API for procedural sound effects
const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();

export function playTone(frequency: number, type: OscillatorType, duration: number, volume: number = 0.1) {
  if (!audioCtx) return;
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration);
}

export const sfx = {
  hit: () => {
    playTone(150, 'sawtooth', 0.1, 0.2);
    setTimeout(() => playTone(100, 'square', 0.1, 0.2), 50);
  },
  crit: () => {
    playTone(300, 'square', 0.1, 0.3);
    setTimeout(() => playTone(400, 'square', 0.2, 0.3), 50);
  },
  miss: () => {
    playTone(100, 'sine', 0.2, 0.1);
  },
  levelUp: () => {
    playTone(400, 'sine', 0.2, 0.2);
    setTimeout(() => playTone(500, 'sine', 0.2, 0.2), 150);
    setTimeout(() => playTone(600, 'sine', 0.4, 0.2), 300);
  },
  click: () => {
    playTone(600, 'sine', 0.05, 0.05);
  },
  error: () => {
    playTone(150, 'sawtooth', 0.3, 0.2);
  },
  hackSuccess: () => {
    playTone(800, 'square', 0.1, 0.1);
    setTimeout(() => playTone(1200, 'square', 0.2, 0.1), 100);
  }
};

// Simple background loops
let currentLoop: OscillatorNode | null = null;
let currentGain: GainNode | null = null;

export function playBGM(kingdomId: string) {
  stopBGM();
  
  if (!audioCtx) return;
  
  currentLoop = audioCtx.createOscillator();
  currentGain = audioCtx.createGain();
  
  currentGain.gain.value = 0.05; // Low volume for BGM

  switch(kingdomId) {
    case 'google':
      currentLoop.type = 'square';
      currentLoop.frequency.value = 220;
      break;
    case 'yahoo':
      currentLoop.type = 'sawtooth';
      currentLoop.frequency.value = 330;
      break;
    case 'altavista':
      currentLoop.type = 'sine';
      currentLoop.frequency.value = 440;
      break;
    case 'darkweb':
      currentLoop.type = 'sawtooth';
      currentLoop.frequency.value = 55;
      currentGain.gain.value = 0.1;
      // Add a low frequency oscillator to modulate gain for a creepy effect
      const lfo = audioCtx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 2; // 2Hz modulation
      lfo.connect(currentGain.gain);
      lfo.start();
      break;
    default:
      currentLoop.type = 'triangle';
      currentLoop.frequency.value = 261.63; // Middle C
  }

  currentLoop.connect(currentGain);
  currentGain.connect(audioCtx.destination);
  currentLoop.start();
}

export function stopBGM() {
  if (currentLoop) {
    currentLoop.stop();
    currentLoop.disconnect();
    currentLoop = null;
  }
  if (currentGain) {
    currentGain.disconnect();
    currentGain = null;
  }
}
