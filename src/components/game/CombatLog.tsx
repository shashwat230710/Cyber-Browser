import React, { useEffect, useRef } from 'react';

interface Props {
  logs: { id: number; text: string; type: string }[];
}

const CombatLog: React.FC<Props> = ({ logs }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const getColor = (type: string) => {
    switch (type) {
      case 'damage': return 'red';
      case 'heal': return 'green';
      case 'system': return 'blue';
      default: return 'black';
    }
  };

  return (
    <div style={{
      height: '100%',
      overflowY: 'auto',
      background: '#fff',
      border: '1px inset #ccc',
      padding: '5px',
      fontFamily: 'monospace',
      fontSize: '12px'
    }}>
      {logs.map(log => (
        <div key={log.id} style={{ color: getColor(log.type), marginBottom: '2px' }}>
          {log.text}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default CombatLog;
