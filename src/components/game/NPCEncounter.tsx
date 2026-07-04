import React from 'react';
import { useDialogue } from '../../hooks/useDialogue';

interface Props {
  npcId: string;
  onComplete: () => void;
}

const NPCEncounter: React.FC<Props> = ({ npcId, onComplete }) => {
  const { currentNode, handleOptionSelect, npcName } = useDialogue(npcId, onComplete);

  if (!currentNode) {
    return <div>(NPC not found) <button onClick={onComplete}>Leave</button></div>;
  }

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>{npcName}</h3>
      
      <div style={{ 
        flex: 1, 
        background: '#f9f9f9', 
        border: '1px inset #ccc', 
        padding: '15px', 
        margin: '20px 0',
        fontFamily: 'Georgia, serif',
        fontSize: '16px',
        lineHeight: '1.6'
      }}>
        "{currentNode.text}"
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {currentNode.options.map((opt, idx) => (
          <button 
            key={idx}
            className="xp-button"
            style={{ textAlign: 'left', padding: '10px' }}
            onClick={() => handleOptionSelect(opt.nextDialogId, opt.triggerEvent)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NPCEncounter;
