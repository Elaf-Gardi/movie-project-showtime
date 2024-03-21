import React from 'react'
import { fetchData } from '@/_utils/fetchData'

export const getStaticPaths = async () => {
  const data = await fetchData(`person/popular`)

  const paths = data.map(actor => {
    return {
      params: { id: actor.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await fetchData(`person/${id}`)
  
    return {
      props: { actor: data }
    }
}

function SingleActor({actor}) {
  return (
    <div>
      <h1>{actor.name}</h1>
    </div>
  )
}

export default SingleActor;
