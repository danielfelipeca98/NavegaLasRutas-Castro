import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
      <p><strong>Stock:</strong> {item.stock}</p>
      <ItemCount stock={item.stock} />
    </div>
  );
};

export default ItemDetail;