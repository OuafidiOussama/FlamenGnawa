import React from 'react'
import LandingHero from '../components/cards/LandingHero'
import BiographyHero from '../components/cards/BiographyHero'
import EventHero from '../components/cards/EventHero'

export default function Home() {
  return (
    <>
      <LandingHero />
      <div className='-translate-y-10'>
        <BiographyHero />
      </div>
      <EventHero />
    </>
  )
}
