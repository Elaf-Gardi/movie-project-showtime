'use client'
import { fetchData } from '@/_utils/fetchData'
import TvCard from '@/components/TvShows/TVCard'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import React, { useEffect, useState } from 'react'
import HeroSection from '@/components/tvShowsHero/Hero'
import LoadingSkeletonCard from '@/components/LoadingSkeletonCard'

const TvShowsPage = () => {
  const [loading, setLoading] = useState(true)
  const [tvShows, setTvShows] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const TvShowsData = await fetchData(`/tv/popular?page=${currentPage}`)
        setTvShows(TvShowsData.results || [])
        setLoading(false)
      } catch (error) {
        console.error(`Failed to fetch tv Shows:`, error)
      }
    }
    fetchTvShows()
  }, [currentPage])

  function goToNextPage() {
    setCurrentPage(currentPage + 1)
  }

  function goToPreviousPage() {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="bg-[#262626]">
      <HeroSection />
      {/* <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-black/70 shadow-inner " />
          <img
          className="w-full h-full object-cover"
          src="/tvShows-hero-img.jpg"
          alt="hero"
          />
      </div> */}

      <div className="pagination-buttons flex justify-between px-10  mt-10">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center bg-gray-800  ${currentPage === 1 ? 'cursor-not-allowed bg-gray-500/60 text-gray-400' : 'hover:bg-gray-700'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <IoIosArrowBack className="mr-2" /> Previous
        </button>
        <button
          onClick={goToNextPage}
          className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next <IoIosArrowForward className="ml-2" />
        </button>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 px-10  mt-10 pb-10">
        <div className="flex flex-row flex-wrap justify-center gap-10 px-10  mt-10 pb-10">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <LoadingSkeletonCard key={index} />
              ))
            : tvShows.map((tvShow) => (
                <TvCard key={tvShow.id} tvShow={tvShow} />
              ))}
        </div>
      </div>
    </div>
  )
}

export default TvShowsPage
