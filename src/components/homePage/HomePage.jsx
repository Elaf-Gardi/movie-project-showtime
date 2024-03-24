"use client"
// Homepage.jsx
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../../components/moviesPage/MovieCard'; // Adjust this path as needed
import { fetchData } from '@/_utils/fetchData'; // Adjust this path as needed

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7, // Items to show on desktop
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5, // Items to show on tablet
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3, // Items to show on mobile
  },
};

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentlyPlayingMovies, setCurrentlyPlayingMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingData = await fetchData('/trending/all/day');
      setTrendingMovies(trendingData.results);

      const currentlyPlayingData = await fetchData('/movie/now_playing');
      setCurrentlyPlayingMovies(currentlyPlayingData.results);

      const comingSoonData = await fetchData('/movie/upcoming');
      setComingSoonMovies(comingSoonData.results);

      const topRatedData = await fetchData('/movie/top_rated');
      setTopRatedMovies(topRatedData.results);
    };

    fetchMovies();
  }, []);

  const renderMoviesCarousel = (movies, title) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <Carousel
        swipeable
        draggable = {false}
        responsive={responsive}
        infinite
        focusOnSelect={false}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl
        additionalTransfrom={0}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container mx-auto"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        
        itemClass="px-1 lg:px-2" // Adjust padding here for space between items
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </div>
  );

  return (
    <div className="p-4">
      {renderMoviesCarousel(trendingMovies, 'Trending')}
      {renderMoviesCarousel(currentlyPlayingMovies, 'Currently Playing')}
      {renderMoviesCarousel(topRatedMovies, 'Top Rated')}
    </div>
  );
};

export default Homepage;
