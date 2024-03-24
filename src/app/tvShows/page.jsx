'use client'
import { fetchData } from '@/_utils/fetchData'
import TvCard from '@/components/TvShows/TVCard'
import React, { useEffect, useState } from 'react'

const TvShowsPage = () => {
  const [tvShows, setTvShows] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const TvShowsData = await fetchData(`/tv/popular?page=${currentPage}`)
        setTvShows(TvShowsData.results || [])
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
    <div>
      <div className="pagination-buttons flex justify-between">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tvShows.map((tvShow) => (
          <TvCard key={tvShow.id} tvShow={tvShow} />
        ))}
      </div>
    </div>
  )
}

export default TvShowsPage
