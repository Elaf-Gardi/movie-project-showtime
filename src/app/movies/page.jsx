import { fetchData } from '@/_utils/fetchData'
import MovieList from '@/components/moviesPage/MovieList'
export const MoviesPage = async ({ category = 'popular' }) => {
  const categoryEndpoints = {
    'Top Rated': 'top_rated',
    Popular: 'popular',
    Latest: 'latest',
    'Now Playing': 'now_playing',
    Upcoming: 'upcoming',
  }

  const endpoint = categoryEndpoints[category] || 'popular'
  const moviesData = await fetchData(`/movie/${endpoint}`)
  const movies = endpoint === 'latest' ? [moviesData] : moviesData.results || []

  return (
    <>
      <MovieList movies={movies} />
    </>
  )
}

export default MoviesPage
