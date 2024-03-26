import React from 'react'
import Link from 'next/link'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie
  const formattedRating = vote_average.toFixed(1)

  return (
    <Link href={`/movies/${id}`} passHref>
      <div className="relative lg:w-52 w-36 lg:h-80 h-48 rounded-2xl transition-transform hover:scale-110">
        <img
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt={`Poster of ${title}`}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          style={{ zIndex: 10 }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 transition-opacity duration-300 z-20 hover:opacity-0"></div>
        <div className="absolute top-0 left-0 bg-yellow-400 text-black rounded-br-lg px-2 py-1 text-sm font-bold z-20">
          {formattedRating}
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
