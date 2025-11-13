import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(p => <Item key={p.id} item={p} />)}
    </div>
  );
};

export default ItemList;