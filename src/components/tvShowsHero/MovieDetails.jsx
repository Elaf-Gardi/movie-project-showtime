import React from 'react'

const MovieDetails = ({ selectedMovie, movieDetails }) => {
  const convertRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  console.log(movieDetails)
  return (
    <div className="w-fit sm:w-[600px]">
      <h1 className="text-5xl font-bold font-Poppins text-white mb-6">
        {selectedMovie?.name}
      </h1>
      {movieDetails && (
        <div className="mb-2 text-white/80 flex flex-wrap [&>*]:mx-1">
          <p>{movieDetails.first_air_date?.split('-')[0]} |</p>
          {/* <p>{convertRuntime(movieDetails.runtime)} minutes |</p> */}
          <div className="cursor-pointer rounded-sm text-sm text-white font-bold bg-teal-500 py-1 px-2 flex items-center justify-center">
            <p>{Math.round(movieDetails.vote_average * 10)}%</p>
          </div>
          <p>| {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
        </div>
      )}
      <p className="text-lg text-white line-clamp-4 md:line-clamp-6">
        {selectedMovie?.overview}
      </p>
    </div>
  )
}

export default MovieDetails
