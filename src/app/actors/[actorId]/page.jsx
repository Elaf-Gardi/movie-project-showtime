import { fetchData } from '@/_utils/fetchData'
import ReadMore from '@/app/components/ReadMore'

const getGenderText = (gender) => {
  switch (gender) {
    case 1:
      return 'Female'
    case 2:
      return 'Male'
    case 3:
      return 'Non-binary'
    default:
      return 'Not set / not specified'
  }
}

const getAge = (birthday) => {
  const currentYear = new Date().getFullYear();
  const birthYear = new Date(birthday).getFullYear();
  return currentYear - birthYear;
};

const ActorInfo = async ({ params }) => {
  const { actorId } = params
  const actorInfo = await fetchData(`/person/${actorId}`)
  
  return (
    <div className="ml-44 mr-20 mt-24">
      <div className="flex flex-row gap-10 flex-1 ">
        <div className="w-72 h-80">
          <img
            src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}`}
            alt={actorInfo.name}
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h1 className="font-Roboto font-extrabold text-4xl text-gray-900 tracking-wider mb-6">
            {actorInfo.name}
          </h1>
          <div>
            <div className="mb-6">
              <p className="flex flex-row items-center gap-1 font-Roboto text-gray-500 text-sm mb-2">
                <span className="text-teal-400 font-bold font-Roboto text-sm">
                  Birthday:
                </span>
                {actorInfo.birthday}
                <span className='font-Roboto text-gray-500 text-sm'>({getAge(actorInfo.birthday)}) years old</span>
              </p>
              <p className="flex flex-row items-center gap-2 font-Roboto text-gray-500 text-sm mb-2">
                <span className="text-teal-400 font-bold font-Roboto text-sm">
                  Gender:
                </span>
                {getGenderText(actorInfo.gender)}
              </p>
              <p className="flex flex-row items-center gap-2 font-Roboto text-gray-500 text-sm">
                <span className="text-teal-400 font-bold font-Roboto text-sm">
                  Popularity:
                </span>
                {actorInfo.popularity}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-Roboto font-semibold text-lg text-gray-900 tracking-wide mb-4">
                Biography:
              </p>
              <p className="font-Roboto text-gray-800 text-sm font-normal mb-6">
                <ReadMore bio={actorInfo.biography}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActorInfo
