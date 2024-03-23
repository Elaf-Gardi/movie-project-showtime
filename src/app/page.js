import NavBar from '@/components/Sidebar/Sidebar'
import React from 'react'
import Actors from '@/components/Actors'
import HeroSection from '@/components/Hero/Hero'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Actors />
    </main>
  )
}
