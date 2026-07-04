import React from 'react';

const LevelUpScreen: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: 'gold', textShadow: '1px 1px 0 black' }}>LEVEL UP!</h2>
      <p>Your stats have increased automatically.</p>
    </div>
  );
};

export default LevelUpScreen;
