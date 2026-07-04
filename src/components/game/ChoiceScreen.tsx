import React from 'react';

interface Props {
  onSelect: (door: number) => void;
}

const ChoiceScreen: React.FC<Props> = ({ onSelect }) => {
  return (
    <div style={{ padding: '20px', height: '100%', background: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>THE FINAL CHOICE</h2>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', gap: '20px' }}>
        
        <div style={{ border: '2px solid white', padding: '20px', width: '30%', cursor: 'pointer', textAlign: 'center' }} onClick={() => onSelect(1)}>
          <h3>Door 1</h3>
          <p>Restore the Classic Web</p>
        </div>

        <div style={{ border: '2px solid white', padding: '20px', width: '30%', cursor: 'pointer', textAlign: 'center' }} onClick={() => onSelect(2)}>
          <h3>Door 2</h3>
          <p>Build a New AI Web</p>
        </div>

        <div style={{ border: '2px solid white', padding: '20px', width: '30%', cursor: 'pointer', textAlign: 'center' }} onClick={() => onSelect(3)}>
          <h3>Door 3</h3>
          <p>Leave the Internet Broken</p>
        </div>

      </div>
    </div>
  );
};

export default ChoiceScreen;
