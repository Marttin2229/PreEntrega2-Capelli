// src/components/ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Item from './Items';
import ItemList from './Itemlist.css';

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const mockProducts = [
        { 
          id: 1, 
          title: 'Teclado blanco bluetooth', 
          description: 'Teclado bluetooth ideal oficinas', 
          price: 20.99, 
          imageUrl: '/images/teclado-blanco2.jpg',
        },
        { 
          id: 2, 
          title: 'Mouse Logitech', 
          description: 'Mouse Logitech ideal juegos', 
          price: 15.99, 
          imageUrl: '/images/mouse-logitech.jpg',
        },
        { 
          id: 3, 
          title: 'Cable C iPhone', 
          description: 'Cable tipo C carga rapida iPhone', 
          price: 25.99, 
          imageUrl: '/images/cable-iphone.jpg',
        },
      ];

      const filteredProducts = id
        ? mockProducts.filter((product) => product.categoryId === id)
        : mockProducts;

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      <h2>Productos</h2>
      <div className="product-container">
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

