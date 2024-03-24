import { AiFillCloseCircle } from 'react-icons/ai'
import { FaBars, FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'
const moviesOptions = ['Now Playing', 'Top Rated', 'Upcoming', 'Popular']
const genreOptions = ['Action', 'Comedy', 'Drama', 'Fantasy']
const tvShowsOptions = ['Drama', 'Sci-Fi', 'Thriller', 'Comedy']
const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="block lg:hidden">
      <div className="flex justify-between items-center p-4">
        <div>
          <img src="/showtime-logo2.png" alt="Logo" className="w-16" />
        </div>
        <button
          onClick={toggleMenu}
          className="text-3xl text-gray-800 focus:outline-none"
        >
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800  z-50">
          <div className="flex flex-col items-center justify-center h-2/4  space-y-4">
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-3xl text-white absolute top-5 right-5 focus:outline-none"
              >
                <AiFillCloseCircle />
              </button>
            </div>
            <div className="flex flex-col space-y-4 text-white">
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
              <div className="flex items-center rounded-lg bg-gray-700 p-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-gray-100 placeholder-gray-400 flex-grow"
                />
                <button className="text-gray-100">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNavigation
