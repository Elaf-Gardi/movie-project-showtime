const page = async ({ params }) => {
  const actorId= params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorId}`
  );
  const data = await res.json();

return (
  <div>
    <h1>{data.name}</h1>
  </div>
)

}

export default page;