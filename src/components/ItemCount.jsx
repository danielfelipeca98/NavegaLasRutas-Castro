import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const add = () => count < stock && setCount(count + 1);
  const sub = () => count > 1 && setCount(count - 1);

  return (
    <div>
      <button onClick={sub}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
      <br />
      <button onClick={() => alert(`Agregaste ${count} al carrito`)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;