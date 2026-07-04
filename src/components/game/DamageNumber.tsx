import React from 'react';

interface Props {
  damage: number;
  isCrit?: boolean;
  type?: 'damage' | 'heal';
  style?: React.CSSProperties;
}

const DamageNumber: React.FC<Props> = ({ damage, isCrit = false, type = 'damage', style }) => {
  return (
    <div 
      className={type === 'heal' ? 'anim-heal' : 'anim-damage'}
      style={{
        fontSize: isCrit ? '24px' : '18px',
        textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
        zIndex: 50,
        ...style
      }}
    >
      {type === 'heal' ? '+' : '-'}{damage}
      {isCrit && '!'}
    </div>
  );
};

export default DamageNumber;
