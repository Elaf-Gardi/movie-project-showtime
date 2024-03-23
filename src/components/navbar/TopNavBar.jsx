"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TopNavBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()
  console.log(searchTerm);

  const handleSearch = (e) => {
    e.preventDefault()
    // Redirect to the search page with the query string
    router.push(`/movie/search?query=${searchTerm}`) 
  }

  return (
    <nav className='p-4'>
      <form className="flex items-center" role='search' onSubmit={handleSearch}>
        <div className="relative lg:w-1/4 w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search on movies..."
            required
          />
        </div>
        <button type='submit' className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </form>
    </nav>
  )
}

export default TopNavBar
