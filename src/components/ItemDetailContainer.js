// src/components/ItemDetailContainer.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const mockProducts = [
        {
          id: 1,
          title: 'Teclado blanco bluetooth',
          description: 'Teclado bluetooth ideal oficinas',
          price: 20.99,
          images: [
            '/images/teclado-blanco2.jpg',
          ],
          quantity: 10,
          condition: 'Nuevo',
        },
        {
          id: 2,
          title: 'Mouse Logitech',
          description: 'Mouse Logitech ideal juegos',
          price: 15.99,
          images: [
            '/images/mouse-logitech.jpg',
          ],
          quantity: 15,
          condition: 'Nuevo',
        },
        {
          id: 3,
          title: 'Cable tipo C iPhone',
          description: 'Cable cargador tipo C iPhone carga rápida',
          price: 25.99,
          images: [
            '/images/cable-iphone.jpg',
          ],
          quantity: 15,
          condition: 'Nuevo',
        },
      ];

      const selectedProduct = mockProducts.find((product) => product.id === parseInt(id));

      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
        console.error(`No se encontró un producto con el ID ${id}`);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>No se encontró el producto que estas buscando</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <div style={{ display: 'flex', marginBottom: '16px' }}>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.title} - Imagen ${index + 1}`}
            style={{ maxWidth: '80%', height: 'auto', marginRight: '8px' }}
          />
        ))}
      </div>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Cantidad disponible: {product.quantity}</p>
      <p>Condición: {product.condition}</p>
      <button onClick={() => alert('Producto agregado al carrito')}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
