const products = [
  { id: 1, name: "Remera React", category: "ropa", price: 25, stock: 10, description: "Remera con logo React" },
  { id: 2, name: "Taza JS", category: "accesorios", price: 15, stock: 5, description: "Taza con logo JavaScript" },
  { id: 3, name: "Gorra Frontend", category: "ropa", price: 30, stock: 8, description: "Gorra para devs frontend" }
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products.find(p => p.id === parseInt(id))), 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products.filter(p => p.category === category)), 1000);
  });
};