import React from 'react';

// In a real implementation this would draw a grid or map based on kingdom data
const Minimap: React.FC = () => {
  return (
    <div style={{ padding: '10px' }}>
      <div style={{ 
        width: '100%', 
        height: '150px', 
        background: 'black', 
        border: '2px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0f0',
        fontFamily: 'monospace'
      }}>
        MAP DATA CORRUPTED
      </div>
    </div>
  );
};

export default Minimap;
