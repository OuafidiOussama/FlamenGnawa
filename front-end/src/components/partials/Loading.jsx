import { Icon } from '@iconify/react'
import React from 'react'

export default function Loading() {
  return (
    <div data-cy="loading" className='w-screen h-screen top-0 left-0 absolute flex flex-col gap-5 justify-center items-center'>
        <p className='bg-black opacity-50 w-full h-full absolute'></p>
        <Icon icon="material-symbols:hourglass" className='text-6xl animate-spin ' />
        <h1 className='text-2xl font-bold animate-pulse'>Loading ...</h1>
    </div>
  )
}
