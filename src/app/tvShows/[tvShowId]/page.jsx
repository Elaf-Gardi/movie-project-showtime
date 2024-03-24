import { fetchData } from '@/_utils/fetchData';
import TvShowDetails from '@/components/TvShows/TvShowDetails';

const SingleTvShowPage = async ({ params }) => {
  const { tvShowId } = params;
  const movieDetails = await fetchData(`/tv/${tvShowId}`);
  const credits = await fetchData(`/tv/${tvShowId}/credits`);
  const relatedMovies = await fetchData(`/tv/${tvShowId}/similar`);
  const trailers = await fetchData(`/tv/${tvShowId}/videos`);

  // Find the director's name among the crew
  const director = credits.crew.find((member) => member.job === 'Director')?.name;

  // Assuming the first YouTube trailer is the one we want to display
  const mainTrailer = trailers.results.find((trailer) => trailer.site === 'YouTube');

  return (
    <TvShowDetails 
    movieDetails={movieDetails} 
    credits={credits} 
    relatedMovies={relatedMovies} 
    trailers={trailers} 
  />
 
  );
};

export default SingleTvShowPage;
