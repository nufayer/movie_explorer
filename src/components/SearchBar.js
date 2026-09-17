import React from 'react';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Search for a movie...'}
        className="w-full bg-dark-100 border border-white/10 rounded-xl py-4 pl-14 pr-5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;
