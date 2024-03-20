import React from 'react'

function Cards({ actors }) {
  return (
    <div className="flex flex-col pt-16 justify-center items-center p-8">
      <h1 className="text-teal-300 text-5xl font-Roboto font-bold mb-5">
        Actors
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 border-t-2 border-teal-300 pt-8">
        {actors.map((actor) => (
          <div
            key={actor.id}
            className="lg:w-52 w-64 rounded-2xl relative border border-white shadow-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={`${actor.name}`}
              className="object-cover rounded-2xl"
            />
            <div className="absolute rounded-2xl top-0 left-0 w-full h-full pl-3 bg-black bg-opacity-75 text-white transition-opacity duration-300 opacity-0 hover:opacity-100">
              <h1 className='pt-8 pb-4 font-Roboto text-xl font-extrabold '>{actor.name}</h1>
              <div>
              <h5 className='font-Roboto font-semibold text-sm mb-2'>Known for:</h5>
                {actor.known_for.map((movie) => (
                  <div key={movie.id} className="font-Roboto font-medium text-sm pl-2 leading-5">
                   {movie.title && <span>- </span>}
                    {movie.title}
                    </div>
                ))}
                <button className='absolute bottom-0 left-0 mb-5 ml-3 rounded-lg py-1 px-4 items-center justify-center font-medium bg-teal-500 hover:bg-teal-400'>More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards