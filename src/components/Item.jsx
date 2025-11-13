import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;