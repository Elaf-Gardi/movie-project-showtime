import React from 'react';
import Link from 'next/link';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const TvCard = ({ tvShow }) => {
  const { id, name, poster_path, first_air_date, overview, vote_average } = tvShow;
  const formattedDate = new Date(first_air_date).getFullYear(); 
  const formattedRating = vote_average.toFixed(1); 
  

  return (
    <Link href={`/shows/${id}`} passHref>
      <div className="relative w-52 h-80 rounded-2xl transition-transform hover:scale-110 shadow-inner">
        <img
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt={`Poster of ${name}`}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          style={{ zIndex: 10 }}
        />
        <div className="absolute top-0 left-0 bg-yellow-400 text-black rounded-br-lg px-2 py-1 text-sm font-bold z-20">
          {formattedRating}
        </div>
       
      </div>
    </Link>
  );
};

export default TvCard;
