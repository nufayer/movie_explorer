import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-300 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary text-xl">&#9654;</span>
            <span className="text-lg font-bold">
              Movie<span className="text-primary">Explorer</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MovieExplorer. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.tvmaze.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Powered by TVMaze
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
