import React from 'react';
import { useGameStore, InventoryItem } from '../../store/gameStore';

interface Props {
  shopItems: InventoryItem[];
}

const ShopScreen: React.FC<Props> = ({ shopItems }) => {
  const gold = useGameStore(s => s.gold);
  const spendGold = useGameStore(s => s.spendGold);
  const addItem = useGameStore(s => s.addItem);

  const handleBuy = (item: InventoryItem) => {
    if (!item.price) return;
    if (spendGold(item.price)) {
      addItem(item);
      alert(`Bought ${item.name}!`);
    } else {
      alert("Not enough bandwidth coins.");
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3>Merchant</h3>
      <p>Your Gold: {gold}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {shopItems.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', borderBottom: '1px solid #ccc' }}>
            <div>
              <strong>{item.name}</strong> <span style={{ fontSize: '11px', color: '#666' }}>({item.price}G)</span><br/>
              <span style={{ fontSize: '11px' }}>{item.description}</span>
            </div>
            <button className="xp-button" onClick={() => handleBuy(item)} disabled={gold < (item.price || 9999)}>
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopScreen;
