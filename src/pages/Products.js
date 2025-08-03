import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';
import BookBanner from '../assets/book-banner.jpg';

const products = [
  { id: 1, title: 'The Alchemist', price: 12, image: 'https://covers.openlibrary.org/b/id/8231996-L.jpg' },
  { id: 2, title: '1984', price: 10, image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg' },
  { id: 3, title: 'To Kill a Mockingbird', price: 15, image: 'https://covers.openlibrary.org/b/id/8228691-L.jpg' },
  { id: 4, title: 'Pride and Prejudice', price: 11, image: 'https://covers.openlibrary.org/b/id/8091016-L.jpg' },
  { id: 5, title: 'The Great Gatsby', price: 13, image: 'https://covers.openlibrary.org/b/id/7352161-L.jpg' },
  { id: 6, title: 'Moby-Dick', price: 14, image: 'https://covers.openlibrary.org/b/id/8104946-L.jpg' },
  { id: 7, title: 'Jane Eyre', price: 16, image: 'https://covers.openlibrary.org/b/id/8225631-L.jpg' },
  { id: 8, title: 'The Catcher in the Rye', price: 10, image: 'https://covers.openlibrary.org/b/id/8231856-L.jpg' },
  { id: 9, title: 'War and Peace', price: 18, image: 'https://covers.openlibrary.org/b/id/7222240-L.jpg' },
  { id: 10, title: 'Crime and Punishment', price: 14, image: 'https://covers.openlibrary.org/b/id/8231742-L.jpg' },
];

const ProductList = () => {
  const { dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4 md:px-12"
      style={{ backgroundImage: `url(${BookBanner})` }}
    >
      <div className="bg-black bg-opacity-70 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Books for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={product.image} alt={product.title} className="h-40 w-28 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold text-center mb-2">{product.title}</h3>
              <p className="text-blue-700 font-bold mb-2">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
