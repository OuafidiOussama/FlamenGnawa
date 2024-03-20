import React from 'react'
import {cities} from '../../../assets/cities'

export default function CitiesInput() {
  return (
    <select className='w-full px-2 py-3 rounded-full outline-none' name="city" id="city">
        {cities.map(city=><option>{city.city}</option>)}
    </select>
  )
}
