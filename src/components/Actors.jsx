'use client'
import React, { useState, useEffect } from 'react'
import { fetchData } from '@/_utils/fetchData'
import Cards from './Cards'
import NavBar from './navbar/NavBar'

function Actors() {
  const [gitActors, setGitActors] = useState([])

  useEffect(() => {
    const fetchAllActorsInfo = async () => {
      try {
        const data = await fetchData('person/popular')
        setGitActors(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchAllActorsInfo()
  }, [])

  return (
    <div className="flex flex-row">
      <div className="w-64 bg-teal-500"></div> <NavBar />
      {/** replace with sideBar component*/}
      <Cards actors={gitActors} />
    </div>
  )
}

export default Actors
