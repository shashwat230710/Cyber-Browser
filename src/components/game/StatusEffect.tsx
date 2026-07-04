import React from 'react';

interface Props {
  effect: 'poison' | 'stun' | 'confuse' | 'buff' | 'debuff';
}

const StatusEffect: React.FC<Props> = ({ effect }) => {
  const getIcon = () => {
    switch (effect) {
      case 'poison': return '🤢';
      case 'stun': return '⚡';
      case 'confuse': return '❓';
      case 'buff': return '🔺';
      case 'debuff': return '🔻';
      default: return '';
    }
  };

  return (
    <span style={{ 
      display: 'inline-block', 
      background: 'rgba(255,255,255,0.8)', 
      borderRadius: '50%', 
      width: '20px', 
      height: '20px', 
      textAlign: 'center', 
      lineHeight: '20px',
      fontSize: '12px',
      boxShadow: '0 0 2px black'
    }}>
      {getIcon()}
    </span>
  );
};

export default StatusEffect;
