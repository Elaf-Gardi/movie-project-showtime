'use client'
import React, { useState, useEffect } from 'react'
import { fetchData } from '@/_utils/fetchData'
import ActorCard from '@/components/ActorCard/ActorCard'
import LoadingSkeletonCard from '@/components/LoadingSkeletonCard'

const Actors = () => {
  const [loading, setLoading] = useState(true)
  const [actors, setActors] = useState([])

  useEffect(() => {
    const fetchAllActorsInfo = async () => {
      try {
        const data = await fetchData('person/popular')
        setActors(data.results)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchAllActorsInfo()
  }, [])

  return (
    <div className="flex flex-row py-16 md:py-52 bg-[#080B12]">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-row flex-wrap justify-center items-center gap-10">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <LoadingSkeletonCard key={index} />
              ))
            : actors.map((actor) => <ActorCard key={actor.id} actor={actor} />)}
        </div>
      </div>
    </div>
  )
}

export default Actors
