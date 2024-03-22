import React from 'react'
import Actors from '@/components/Actors'

import Link from 'next/link';

export default function Home() {
  return (
    <div>
    <Link href='movies'> movies </Link>
      <Actors />

    </div>
  )
}
