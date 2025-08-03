import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
        onClick={() => dispatch({ type: 'ADD_TO_CART', product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
