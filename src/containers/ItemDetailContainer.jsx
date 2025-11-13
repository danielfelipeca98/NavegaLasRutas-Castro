import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((res) => setProduct(res));
  }, [itemId]);

  return product ? <ItemDetail item={product} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;