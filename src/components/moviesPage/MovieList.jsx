// DynamicMovieList.js
'use client'
import React, { useState, useEffect } from 'react'
import { fetchData } from '../../_utils/fetchData'
import MovieCard from './MovieCard'

const MovieList = ({ category = 'popular' }) => {
  // Thats a default category, that way it will render regardless of the navbar
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await fetchData(`/movie/${category}`)
        setMovies(moviesData.results || [])
      } catch (error) {
        console.error(`Failed to fetch movies:`, error)
      }
    }

    fetchMovies()
  }, [category])

  return (
    <div className="flex flex-col flex-wrap overflow-hidden bg-black/100 items-center px-10 lg:pt-28 pt-10 pb-10">
      <h1 className="font-Poppins font-bold text-xl tracking-wider text-customeYellow mb-10">
        Movies on <span className='border-b border-customeYellow cursor-pointer'>SHOWTIME</span>
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
