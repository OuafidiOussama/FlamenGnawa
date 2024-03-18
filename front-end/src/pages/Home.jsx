import React from 'react'
import LandingHero from '../components/cards/LandingHero'
import BiographyHero from '../components/cards/BiographyHero'

export default function Home() {
  return (
    <>
      <LandingHero />
      <div className='-translate-y-10'>
        <BiographyHero />
      </div>
    </>
  )
}
