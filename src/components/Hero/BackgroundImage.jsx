/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const BackgroundImage = ({ tmdbImageBase, selectedMovie }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }

  return (
    <div className="relative w-full h-full">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-300/95 animate-pulse" />
      )}
      <img
        className={`w-full h-full object-cover ${!imageLoaded ? 'hidden' : ''}`}
        src={`${tmdbImageBase}original${selectedMovie?.backdrop_path}`}
        alt=""
        onLoad={handleImageLoaded}
      />
    </div>
  )
}

export default BackgroundImage
