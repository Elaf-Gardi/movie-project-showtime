import React from 'react'
import Actors from '@/components/Actors'
import HeroSection from '@/components/Hero/Hero'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/movies">Movies</Link>
      <HeroSection />
      <Actors />
    </main>
  )
}
