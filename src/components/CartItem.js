import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="border p-4 flex justify-between items-center">
      <div>
        <h4>{item.name}</h4>
        <p>${item.price} × {item.quantity}</p>
      </div>
      <div className="space-x-2">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) =>
            dispatch({
              type: 'UPDATE_CART',
              id: item.id,
              quantity: parseInt(e.target.value),
            })
          }
          className="w-12 border px-1"
        />
        <button
          onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: item.id })}
          className="text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
