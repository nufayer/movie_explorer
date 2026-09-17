import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const banners = [
  '/joker.jpg',
  '/john-wick.jpg',
  '/avatar.jpg',
  '/avengers.jpg',
  '/matrix.jpg',
  '/parabellum.webp',
];



const HeroBanner = () => {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {banners.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === current ? 1 : 0 }}
        >

          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

      ))}

      <div className="absolute inset-0 bg-black/60" />


      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6">
          DISCOVER
          <br />

          <span className="text-primary">MOVIES</span>

        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore and discover your favorite movies from around the world.
          Browse thousands of titles, check ratings, and find your next watch.
        </p>

        <Link
          to="/movies"
          className="inline-block bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
        >

          Explore Now

        </Link>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">

        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}

            className={`w-3 h-3 rounded-full transition-all duration-300 ${

              index === current ? 'bg-primary w-8' : 'bg-white/40 hover:bg-white/60'
            }`}

          />

        ))}

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-200 to-transparent" />

    </section>
    
  );


};



export default HeroBanner;
