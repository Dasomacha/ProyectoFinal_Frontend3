// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/getCharacters'; // Importar la función del servicio
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters(); // Llamar a la función del servicio
      setProducts(data); // Establecer los productos obtenidos
    };
    fetchData();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
