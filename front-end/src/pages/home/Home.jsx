import React from 'react'
import LandingHero from '../../components/cards/home/LandingHero'
import BiographyHero from '../../components/cards/home/BiographyHero'
import EventHero from '../../components/cards/home/EventHero'
import MembersHero from '../../components/cards/home/MembersHero'

export default function Home() {
  return (
    <>
      <LandingHero />
      <div className='-translate-y-10'>
        <BiographyHero />
      </div>
      <EventHero />
      <div className='py-10'>
        <MembersHero />
      </div>
    </>
  )
}
