
import React from 'react'
import { getMovie } from '@/_utils/fetchData';
import MovieCard from '@/components/MovieCard';

const SearchPage = async ({searchParams}) => {

    
  const searchTerm = searchParams.query;
  const movies = await getMovie(searchTerm)
  console.log(movies);
  return (
    <div className='flex flex-wrap'>
    {movies.map(movie =>{
        return <MovieCard  key={movie.id} movie={movie}/>
    })}

    </div>
  )
}

export default SearchPage