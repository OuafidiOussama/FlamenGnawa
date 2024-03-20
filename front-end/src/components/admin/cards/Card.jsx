import React from 'react'
import {Icon} from '@iconify/react'

export default function Card({bg, circleS, circleB, income, label, icon}) {
  return (
    <div className={'w-64 h-36 '+bg+' text-white rounded-xl relative overflow-hidden p-4 uppercase'}>
        <div className={circleS+' w-[150px] h-[150px] rounded-full absolute -top-[75px] -right-0 '}></div>
        <div className={circleB+' w-[200px] h-[200px] rounded-full absolute -top-[100px] -right-[100px] '}></div>
        <div className={circleB+' w-12 h-12 rounded-xl flex justify-center items-center mb-2'}>
            <Icon icon={icon} className='w-8 h-8'/>
        </div>
        <p className='font-black text-3xl pb-1'>{income}</p>
        <p className='opacity-50 font-bold text-lg'>{label}</p>
    </div>
  )
}