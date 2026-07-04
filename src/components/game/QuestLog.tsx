import React from 'react';
import { useQuests } from '../../hooks/useQuests';

const QuestLog: React.FC = () => {
  const { questsActive, questsCompleted } = useQuests();

  return (
    <div style={{ padding: '10px' }}>
      <h3>Active Quests</h3>
      {questsActive.length === 0 ? <p>No active quests.</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {questsActive.map(q => (
            <div key={q.id} style={{ border: '1px solid #aaa', padding: '10px', background: '#fdfdfd' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>{q.name}</h4>
              <p style={{ fontSize: '12px', margin: '0 0 10px 0' }}>{q.description}</p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px' }}>
                {q.objectives.map(obj => (
                  <li key={obj.id} style={{ textDecoration: obj.completed ? 'line-through' : 'none', color: obj.completed ? '#888' : '#000' }}>
                    {obj.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <h3 style={{ marginTop: '20px' }}>Completed Quests</h3>
      <ul style={{ fontSize: '12px', color: '#666' }}>
        {questsCompleted.length === 0 ? <li>None</li> : questsCompleted.map(id => <li key={id}>{id}</li>)}
      </ul>
    </div>
  );
};

export default QuestLog;
