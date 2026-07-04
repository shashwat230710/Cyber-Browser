import { useGameStore, InventoryItem } from '../store/gameStore';

export function useInventory() {
  const inventory = useGameStore(s => s.inventory);
  const equipped = useGameStore(s => s.equipped);
  const equipItem = useGameStore(s => s.equipItem);
  const unequipItem = useGameStore(s => s.unequipItem);
  const heal = useGameStore(s => s.heal);
  const restoreMp = useGameStore(s => s.restoreMp);
  const removeItem = useGameStore(s => s.removeItem);

  const useConsumable = (item: InventoryItem) => {
    if (item.type !== 'consumable') return;
    
    if (item.effect?.type === 'heal') {
      heal(item.effect.amount || 0);
    } else if (item.effect?.type === 'restoreMp') {
      restoreMp(item.effect.amount || 0);
    }
    // More effect types...

    removeItem(item.id);
  };

  const handleEquipToggle = (item: InventoryItem) => {
    if (item.type === 'consumable' || item.type === 'quest' || item.type === 'lore') return;
    
    const slot = item.type as 'weapon' | 'armor' | 'accessory';
    if (equipped[slot]?.id === item.id) {
      unequipItem(slot);
    } else {
      equipItem(item);
    }
  };

  return {
    inventory,
    equipped,
    useConsumable,
    handleEquipToggle
  };
}
