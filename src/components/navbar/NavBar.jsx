/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
import MobileNavigation from './MobileNavigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="hidden md:block text-gray-800 p-2 h-auto rounded-l">
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
          <div className="text-2xl flex gap-3 md:gap-44 font-normal tracking-wider mt-2 items-center">
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
                options={genreOptions}
                baseUrl="/movies?genre="
              />
              <Dropdown
                title="TV SHOWS"
                options={tvShowsOptions}
                baseUrl="/tv-shows?genre="
              />
            </div>

            {/* Search */}
            <div className="relative">
              <label
                htmlFor="search"
                className="text-sm font-medium text-gray-800 sr-only"
              >
                Search
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-3 pl-10 text-sm text-black  rounded-lg border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </div>
        </div>
      </nav>
      <MobileNavigation isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  )
}

export default Navbar

const moviesOptions = ['Now Playing', 'Top Rated', 'Upcoming', 'Popular']
const genreOptions = ['Action', 'Comedy', 'Drama', 'Fantasy']
const tvShowsOptions = ['Drama', 'Sci-Fi', 'Thriller', 'Comedy']
