import React from 'react';
import MovieCard from './MovieCard'; 

const MovieList = ({ movies }) => {
  return (
    <div className="bg-gray-100 py-6 flex flex-wrap justify-center gap-4 sm:py-12">
      {movies.map(movie => (
        <div key={movie.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
