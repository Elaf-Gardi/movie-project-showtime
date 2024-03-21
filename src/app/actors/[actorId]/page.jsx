import { fetchData } from '@/_utils/fetchData'

const ActorInfo = async ({ params }) => {
  const { actorId } = params
  const actorInfo = await fetchData(`/person/${actorId}`)
  console.log(actorInfo)

  return (
    <div className="container mx-auto py-4">
      <div className="max-w-xl mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}`}
          alt={actorInfo.name}
          className="w-44 h-44 rounded-lg shadow-lg"
        />
        <h1 className="mt-4 text-2xl font-bold">{actorInfo.name}</h1>
        <p className="mt-2 text-gray-600">{actorInfo.birthday}</p>
        <p className="mt-2">{actorInfo.biography}</p>
        <ul className="mt-4">
          {actorInfo.also_known_as.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ActorInfo
