import React from 'react';
import { useGameStore } from '../../store/gameStore';

interface Props {
  onClose: () => void;
}

const StartMenu: React.FC<Props> = ({ onClose }) => {
  const resetToDefault = useGameStore(s => s.resetToDefault);
  const scanlines = useGameStore(s => s.scanlines);
  const audioEnabled = useGameStore(s => s.audioEnabled);
  const toggleScanlines = useGameStore(s => s.toggleScanlines);
  const toggleAudio = useGameStore(s => s.toggleAudio);

  return (
    <div style={{
      position: 'absolute',
      bottom: '30px',
      left: '0',
      width: '250px',
      background: 'white',
      border: '2px solid #245edb',
      borderTopRightRadius: '5px',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 10001
    }}>
      <div style={{
        background: 'linear-gradient(to bottom, #245edb, #1941a5)',
        color: 'white',
        padding: '10px',
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        Cyber Browser RPG
      </div>
      
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <button className="xp-button" onClick={() => { alert('Save feature coming soon'); onClose(); }}>Save Game</button>
        <button className="xp-button" onClick={() => { alert('Load feature coming soon'); onClose(); }}>Load Game</button>
        <hr style={{ width: '100%' }} />
        <button className="xp-button" onClick={toggleScanlines}>Toggle Scanlines ({scanlines ? 'ON' : 'OFF'})</button>
        <button className="xp-button" onClick={toggleAudio}>Toggle Audio ({audioEnabled ? 'ON' : 'OFF'})</button>
        <hr style={{ width: '100%' }} />
        <button className="xp-button" onClick={() => { alert('Codex coming soon'); onClose(); }}>Codex</button>
        <button className="xp-button" onClick={() => {
          if (confirm('Are you sure you want to quit? All unsaved progress will be lost.')) {
            resetToDefault();
          }
          onClose();
        }}>Quit to Title</button>
      </div>
    </div>
  );
};

export default StartMenu;
