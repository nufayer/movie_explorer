import React from 'react';


const MovieCard = ({ show, onSeeDetails }) => {
  const rating = show.rating?.average || 'N/A';
  const year = show.premiered ? new Date(show.premiered).getFullYear() : 'N/A';
  const image = show.image?.medium || show.image?.original;


  return (

    <div className="bg-dark-100 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group">
      <div className="aspect-[2/3] bg-dark-300 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={show.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            <span className="text-4xl">&#127916;</span>
          </div>
        )}
      </div>


      <div className="p-4">
        <h3 className="font-bold text-lg truncate mb-2">{show.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">&#9733;</span>
            {rating}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <span>&#128197;</span>
            {year}
          </span>
        </div>


        <button
          onClick={() => onSeeDetails(show)}
          className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white py-2 rounded-lg font-medium transition-all duration-200 border border-primary/20 hover:border-primary"
        >
          See Details
        </button>


      </div>

    </div>

  );

};




export default MovieCard;
