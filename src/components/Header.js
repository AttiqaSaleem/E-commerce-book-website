import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-between">
    <h1 className="text-lg font-bold">React Shop</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

export default Header;