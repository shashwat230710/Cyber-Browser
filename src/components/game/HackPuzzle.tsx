import React, { useState, useEffect } from 'react';
import { hackPuzzles } from '../../utils/puzzles';
import { globalRNG } from '../../utils/rng';
import { useGameStore } from '../../store/gameStore';

interface Props {
  onComplete: (success: boolean) => void;
}

const HackPuzzle: React.FC<Props> = ({ onComplete }) => {
  const [puzzle, setPuzzle] = useState(hackPuzzles[0]);
  const useMp = useGameStore(s => s.useMp);

  useEffect(() => {
    // Select random puzzle
    const p = hackPuzzles[globalRNG.randomInt(0, hackPuzzles.length - 1)];
    setPuzzle(p);
    useMp(5); // Deduct MP cost when starting hack
  }, [useMp]);

  const handleSelect = (idx: number) => {
    if (idx === puzzle.correctAnswer) {
      onComplete(true);
    } else {
      onComplete(false);
    }
  };

  return (
    <div style={{ padding: '20px', background: '#000', color: '#0f0', fontFamily: 'monospace', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2>TERMINAL // HACK INITIATED</h2>
      <p style={{ marginTop: '20px', fontSize: '16px' }}>{puzzle.question}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '30px' }}>
        {puzzle.options.map((opt, idx) => (
          <button 
            key={idx}
            onClick={() => handleSelect(idx)}
            style={{
              background: '#002200',
              border: '1px solid #0f0',
              color: '#0f0',
              padding: '10px',
              textAlign: 'left',
              cursor: 'pointer',
              fontFamily: 'monospace'
            }}
          >
            &gt; {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HackPuzzle;
