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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="hidden lg:block text-gray-800 h-auto lg:fixed shadow-sm lg:top-0 lg:w-full z-50 bg-transparent">
        <div className="flex flex-col md:flex-row items-center w-full justify-between px-12">
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
          <div className="text-2xl flex gap-3 lg:gap-44 xl:gap-56  items-center">
            <div className="flex gap-x-8 items-center">
              <Dropdown
                title="Movies"
                options={moviesOptions}
                baseUrl="/movies?type="
                className="font-Roboto text-red"
              />

              <Dropdown
                title="Genre"
                options={movieGenres}
                baseUrl="/movies?genre="
              />
              <Dropdown
                title="TV Shows"
                options={tvGenres}
                baseUrl="/shows?genre="
              />
              <Link href="/actors" className="text-lg font-Roboto text-white font-semibold rounded-lg py-2  ">
                Actors
              </Link>
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
