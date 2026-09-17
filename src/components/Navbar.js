import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-dark-300/95 backdrop-blur-sm fixed w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-primary text-2xl">&#9654;</span>
            <span className="text-xl font-bold tracking-tight">
              Movie<span className="text-primary">Explorer</span>
            </span>
          </Link>
          <Link
            to="/movies"
            className="bg-primary hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
