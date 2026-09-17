import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import { fetchAllShows, searchShows } from '../services/api';

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  const loadShows = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllShows();
      setShows(data);
    } catch (err) {
      setError('Failed to load shows. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      loadShows();
      return;
    }

    const searchTimer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await searchShows(searchQuery);
        setShows(data.map((item) => item.show));
      } catch (err) {
        setError('Failed to search shows. Please try again later.');
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [searchQuery, loadShows]);

  return (
    <div className="min-h-screen bg-dark-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Browse <span className="text-primary">Movies</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Search through thousands of TV shows and discover your next favorite series.
          </p>
        </div>

        <div className="mb-10">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search for a movie..."
          />
        </div>

        {error && (
          <div className="text-center py-10">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={loadShows}
              className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="bg-dark-100 rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-[2/3] bg-dark-300" />
                <div className="p-4 space-y-3">
                  <div className="h-5 bg-dark-300 rounded w-3/4" />
                  <div className="h-4 bg-dark-300 rounded w-1/2" />
                  <div className="h-10 bg-dark-300 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onSeeDetails={setSelectedShow}
              />
            ))}
          </div>
        )}

        {!loading && !error && shows.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No shows found.</p>
          </div>
        )}
      </div>

      <MovieModal
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />
    </div>
  );
};

export default Movies;
