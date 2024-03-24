'use client'
import React, { useState, useEffect } from 'react'
import { fetchData } from '@/_utils/fetchData'
import Cards from '@/components/Cards'
import ActorCard from '@/components/ActorCard/ActorCard'

const Actors = () => {
  const [actors, setActors] = useState([])
  useEffect(() => {
    const fetchAllActorsInfo = async () => {
      try {
        const data = await fetchData('person/popular')
        setActors(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchAllActorsInfo()
  }, [])

  return (
    <div className="flex flex-row py-12 md:py-24">
      <div className="flex flex-col justify-center items-center p-8">
        <div className="flex flex-row flex-wrap justify-center items-center gap-10">
          {actors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Actors
