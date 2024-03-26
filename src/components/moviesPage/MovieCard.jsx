/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, overview, vote_average } = movie
  const formattedDate = new Date(release_date).getFullYear()
  const formattedRating = vote_average.toFixed(1)

  return (
    <Link href={`/movies/${id}`} passHref draggable="false">
      <div className="relative w-52 h-80 rounded-2xl transition-transform hover:scale-105 cursor-grabbing">
        <img
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt={`Poster of ${title}`}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl cursor-pointer z-10"
        />
        <div className="absolute top-0 left-0 bg-yellow-400 text-black rounded-br-lg px-2 py-1 text-sm font-bold z-20">
          {formattedRating}
        </div>
        {/**
         * <h3 className="text-lg font-semibold text-black truncate">{title}</h3>
          <p className="text-sm text-black">Release Date: {formattedDate}</p>
         */}
      </div>
    </Link>
  )
}

export default MovieCard
