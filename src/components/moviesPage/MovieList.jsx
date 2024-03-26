'use client'
import React, { useState, useEffect } from 'react'
import { fetchData } from '../../_utils/fetchData'
import MovieCard from './MovieCard'
import LoadingSkeletonCard from '../LoadingSkeletonCard'

const MovieList = ({ category = 'popular' }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await fetchData(`/movie/${category}`)
        setMovies(moviesData.results || [])
        setLoading(false)
      } catch (error) {
        console.error(`Failed to fetch movies:`, error)
        setLoading(false)
      }
    }

    fetchMovies()
  }, [category])

  return (
    <div className="flex flex-row flex-wrap bg-darkGray justify-center gap-10 px-10 lg:pt-28 pt-10 pb-10">
      {movies.length > 0
        ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : Array.from({ length: 10 }).map((_, index) => (
            <LoadingSkeletonCard key={index} />
          ))}
    </div>
  )
}

export default MovieList
