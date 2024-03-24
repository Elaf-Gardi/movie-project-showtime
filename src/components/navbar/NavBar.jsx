/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
import MobileNavigation from './MobileNavigation'
import { fetchData } from '@/_utils/fetchData'
import { moviesOptions } from '@/data/constants'
import SearchBar from '../Search/SearchBar'

const Navbar = () => {
  const [movieGenres, setMovieGenres] = useState([])
  const [tvGenres, setTvGenres] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    async function fetchGenres() {
      try {
        const movieGenresData = await fetchData('/genre/movie/list')
        const tvGenresData = await fetchData('/genre/tv/list')

        setMovieGenres(movieGenresData.genres)
        setTvGenres(tvGenresData.genres)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    }

    fetchGenres()
  }, [])
  console.log(movieGenres)
  console.log(tvGenres)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="hidden lg:block text-gray-800 p-2 h-auto rounded-l">
        <div className="flex flex-col md:flex-row items-center w-full justify-between px-12 my-2">
          <Link href="/" className="flex items-center">
            <img
              alt="ShowTime Logo"
              width="120"
              height="120"
              decoding="async"
              src="/showtime-logo2.png"
            />
          </Link>
          {/* buttons */}
          <div className="text-2xl flex gap-3 lg:gap-44 xl:gap-56 font-normal tracking-wider items-center">
            <div className="flex gap-x-8">
              <Link href="/" className="py-2 text-sm sm:text-lg">
                HOME
              </Link>
              <Dropdown
                title="MOVIES"
                options={moviesOptions}
                baseUrl="/movies?type="
              />

              <Dropdown
                title="GENRE"
                options={movieGenres}
                baseUrl="/movies?genre="
              />
              <Dropdown
                title="TV SHOWS"
                options={tvGenres}
                baseUrl="/shows?genre="
              />
            </div>

            <SearchBar />
          </div>
        </div>
      </nav>
      <MobileNavigation isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  )
}

export default Navbar
