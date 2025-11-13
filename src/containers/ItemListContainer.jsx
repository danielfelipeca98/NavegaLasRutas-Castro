import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();
    fetchData.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Catálogo de productos"}</h2>
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;