import React from 'react';
import { useInventory } from '../../hooks/useInventory';

const InventoryScreen: React.FC = () => {
  const { inventory, equipped, handleEquipToggle, useConsumable } = useInventory();

  return (
    <div style={{ padding: '10px' }}>
      <h3>Equipped</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '5px', flex: 1 }}>
          <strong>Weapon:</strong> {equipped.weapon?.name || 'None'}
        </div>
        <div style={{ border: '1px solid #ccc', padding: '5px', flex: 1 }}>
          <strong>Armor:</strong> {equipped.armor?.name || 'None'}
        </div>
        <div style={{ border: '1px solid #ccc', padding: '5px', flex: 1 }}>
          <strong>Accessory:</strong> {equipped.accessory?.name || 'None'}
        </div>
      </div>

      <h3>Inventory</h3>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc' }}>
        {inventory.length === 0 ? <div style={{ padding: '10px' }}>Empty</div> : inventory.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '5px' }}>
            <div>
              <strong>{item.name}</strong> ({item.type})<br/>
              <span style={{ fontSize: '11px', color: '#666' }}>{item.description}</span>
            </div>
            <div>
              {item.type === 'consumable' && (
                <button className="xp-button" onClick={() => useConsumable(item)}>Use</button>
              )}
              {['weapon', 'armor', 'accessory'].includes(item.type) && (
                <button className="xp-button" onClick={() => handleEquipToggle(item)}>
                  {Object.values(equipped).find(e => e?.id === item.id) ? 'Unequip' : 'Equip'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryScreen;
