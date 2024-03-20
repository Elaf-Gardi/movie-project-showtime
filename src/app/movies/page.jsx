'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchData } from '../../_utils/fetchData'; 
import MovieCard from '../../components/MovieCard'; 


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('popular'); 

  // Map category names to TMDB API endpoints
  const categoryEndpoints = {
    'Top Rated': 'top_rated',
    'Popular': 'popular',
    'Latest': 'latest',
    'Now Playing': 'now_playing',
    'Upcoming': 'upcoming'
  };

  useEffect(() => {
    // Fetch movies based on the selected category
    const endpoint = categoryEndpoints[category] || 'popular';
    fetchData(`/movie/${endpoint}`).then(data => {
      // Ensure to handle 'latest' differently as it returns a single movie object, not an array
      setMovies(endpoint === 'latest' ? [data] : data.results || []);
    }).catch(error => console.error('Failed to fetch movies:', error));
  }, [category]);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <Link href="/">Back to Home
        </Link>
    <h1 className="text-3xl font-bold mb-4">Movies - {category}</h1>
    
    {/* Dropdown menu */}
    <select
      value={category}
      onChange={e => setCategory(e.target.value)}
      className="mb-4 p-2 border border-gray-300 rounded"
    >
      {Object.keys(categoryEndpoints).map(key => (
        <option key={key} value={key}>{key}</option>
      ))}
    </select>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </section>
  );
};

export default MoviesPage;
