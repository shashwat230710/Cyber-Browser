import React, { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import StartMenu from './StartMenu';
import { useHiddenButtons } from '../../hooks/useHiddenButtons';

const Taskbar: React.FC = () => {
  const [startOpen, setStartOpen] = useState(false);
  const hp = useGameStore(s => s.hp);
  const maxHp = useGameStore(s => s.maxHp);
  const mp = useGameStore(s => s.mp);
  const maxMp = useGameStore(s => s.maxMp);
  const gold = useGameStore(s => s.gold);
  const currentKingdom = useGameStore(s => s.currentKingdom);
  const { checkButton } = useHiddenButtons();

  const handleClockClick = () => {
    checkButton('hb_desktop_clock');
  };

  return (
    <>
      <div className="taskbar">
        <div 
          className="start-btn" 
          onClick={() => setStartOpen(!startOpen)}
        >
          <img src="data:image/svg+xml;utf8,<svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'><circle cx='8' cy='8' r='7' fill='red'/><circle cx='10' cy='6' r='3' fill='green'/><circle cx='6' cy='10' r='3' fill='blue'/><circle cx='10' cy='10' r='3' fill='yellow'/></svg>" style={{ marginRight: '5px' }} alt="start" />
          start
        </div>
        
        {currentKingdom && (
          <div style={{
            marginLeft: '10px',
            padding: '2px 10px',
            background: 'linear-gradient(to bottom, #f2f2f2, #d8d8d8)',
            border: '1px solid #707070',
            borderRadius: '2px',
            fontSize: '11px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: 'inset 1px 1px 2px white'
          }}>
            <div className={`pixel-icon icon-${currentKingdom}`} style={{ width: '16px', height: '16px', marginRight: '5px' }} />
            {currentKingdom}
          </div>
        )}

        <div className="sys-tray">
          <span style={{ marginRight: '10px', color: '#ffaaaa' }}>HP: {hp}/{maxHp}</span>
          <span style={{ marginRight: '10px', color: '#aaaaff' }}>MP: {mp}/{maxMp}</span>
          <span style={{ marginRight: '10px', color: '#ffffaa' }}>Gold: {gold}</span>
          <span style={{ cursor: 'pointer' }} onClick={handleClockClick}>12:00 PM</span>
        </div>
      </div>
      
      {startOpen && <StartMenu onClose={() => setStartOpen(false)} />}
    </>
  );
};

export default Taskbar;
