// removeStockItem
const removeStockItem = (id, count) => (
  {
    type: 'REMOVE_STOCK_ITEM',
    id,
    count,
  }
);

export default removeStockItem;