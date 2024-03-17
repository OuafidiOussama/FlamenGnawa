import React, { useState } from 'react'
import {Icon} from '@iconify/react'
import {NavLink} from 'react-router-dom'
import PathConstants from '../../routes/PathConstants'
import logo from '../../assets/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <nav className={`transparent font-main w-full h-20 flex flex-col gap-5 md:gap-0 py-4 md:py-0 md:flex-row justify-start  md:items-center md:px-10 flex-no-wrap relative shadow-md shadow-black/5 md:flex-wrap md:justify-between`}>
        <div className="flex z-10">
            <button
            className="block border-0 bg-transparent px-2 text-white md:hidden"
            type="button"
            onClick={toggleMenu}
            >
            <Icon icon="material-symbols:menu" className="h-9 w-9" />
            </button>
            <NavLink className='flex items-center gap-3 font-black text-3xl' to={PathConstants.HOME}>
                <p><span className='text-red'>F</span>lamen</p>
                <img src={logo} alt="logo" className='w-8'/>
                <p>Gnawa</p>
            </NavLink>
        </div>
        <ul className={`${isMenuOpen ? 'top-20': '-top-80'} text-lg py-5 md:py-0 transition-all duration-300 md:top-0 flex gap-5 items-center md:flex-row uppercase flex-col w-full md:w-auto bg-indigo-950 md:bg-transparent absolute left-0 md:relative z-10 `}>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'bg-white text-red py-2 px-4 rounded-md' : 'py-2 px-4 rounded-md' )} to={PathConstants.HOME}>home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'bg-white text-red py-2 px-4 rounded-md' : 'py-2 px-4 rounded-md' )} to={PathConstants.STORE}>members</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'bg-white text-red py-2 px-4 rounded-md' : 'py-2 px-4 rounded-md' )} to={PathConstants.BLOG}>shop</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'bg-white text-red py-2 px-4 rounded-md' : 'py-2 px-4 rounded-md' )} to={PathConstants.BLOG}>blog</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'bg-white text-red py-2 px-4 rounded-md' : 'py-2 px-4 rounded-md' )} to={PathConstants.BLOG}>events</NavLink>
            </li>
            <button className='rounded-full py-2 px-8 bg-red'>LOGIN</button>
        </ul>
    </nav>
  )
}
