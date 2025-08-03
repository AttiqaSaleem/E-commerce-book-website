import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [bill, setBill] = useState(0);

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleUpdate = (id, quantity) => {
    const qty = parseInt(quantity);
    if (!isNaN(qty) && qty > 0) {
      dispatch({ type: 'UPDATE_CART', payload: { id, quantity: qty } });
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    setBill(total);
    setCheckoutDone(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {checkoutDone ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded mb-4">
          ✅ <strong>Checkout Successful!</strong>
          <br />
          💰 <strong>Total Bill:</strong> ${bill.toFixed(2)}
        </div>
      ) : cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              {/* Background book image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <div className="relative z-10 p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-700">Price: ${item.price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <label htmlFor={`qty-${item.id}`} className="text-sm">
                      Quantity:
                    </label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleUpdate(item.id, e.target.value)}
                      className="w-16 p-1 text-center border rounded"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
