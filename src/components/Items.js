// src/components/Item.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, description, price, imageUrl, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ id, title, price, quantity });
    setQuantity(1);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <div className="quantity-container">
          <label>Cantidad:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Añadir al Carrito
        </button>
        <Link to={`/item/${id}`}>
          <button className="view-details-button">Ver Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;




