import React, { useEffect } from 'react';

const MovieModal = ({ show, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!show) return null;

  const rating = show.rating?.average || 'N/A';
  const year = show.premiered ? new Date(show.premiered).getFullYear() : 'N/A';
  const image = show.image?.original || show.image?.medium;
  const genres = show.genres?.join(', ') || 'N/A';
  const summary = show.summary?.replace(/<[^>]*>/g, '') || 'No description available.';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-dark-100 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {image ? (
            <img
              src={image}
              alt={show.name}
              className="w-full h-64 sm:h-80 object-cover"
            />
          ) : (
            <div className="w-full h-64 sm:h-80 bg-dark-300 flex items-center justify-center">
              <span className="text-6xl text-gray-600">&#127916;</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-dark-300/80 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            &times;
          </button>
        </div>

        <div className="p-6 sm:p-8 -mt-16 relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{show.name}</h2>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-lg text-sm font-medium">
              <span>&#9733;</span> {rating}
            </span>
            <span className="flex items-center gap-1 bg-white/5 text-gray-400 px-3 py-1 rounded-lg text-sm">
              <span>&#128197;</span> {year}
            </span>
            {genres !== 'N/A' && (
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm">
                {genres}
              </span>
            )}
          </div>

          {show.network && (
            <p className="text-gray-500 text-sm mb-4">
              Network: {show.network?.name || show.webChannel?.name || 'N/A'}
            </p>
          )}

          {show.runtime && (
            <p className="text-gray-500 text-sm mb-4">
              Runtime: {show.runtime} min
            </p>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Overview</h3>
            <p className="text-gray-400 leading-relaxed">{summary}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
