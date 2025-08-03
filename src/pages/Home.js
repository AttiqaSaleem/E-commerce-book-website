import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookBanner from '../assets/book-banner.jpg';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BookBanner})` }}
    >
      <motion.div
        className="bg-white bg-opacity-80 p-10 rounded-xl shadow-lg text-center space-y-6 max-w-xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold text-blue-900"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Book Haven
        </motion.h1>
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div
            className="bg-green-600 text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link to="/products">Products</Link>
          </motion.div>
          <motion.div
            className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow hover:bg-purple-700 transition"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link to="/cart">Cart</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
