import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {BiSearchAlt2} from 'react-icons/bi'
import {BiBellMinus} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'

const Header = () => {
   const [scroller, setScroller] = useState(false)

   useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setScroller(true)
      }else{
        setScroller(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return() => window.removeEventListener('scroll', handleScroll)
   }, [])
  return (
  <header className={`${scroller && 'bg-[#111111c8] shadow-lg shadow-indigo-500/50 '}`}>
    <div className='flex items-center space-x-2 md:space-x-10'>
      <Image
      src={'/logo.svg'}
      alt={'logo'}
      width={56}
      height={56}
      className={'cursor-pointer object-contain'}
      />

      <ul className='space-x-4 md:flex hidden'>
        <li className='navLink'>Home</li>
        <li className='navLink'>Movies</li>
        <li className='navLink'>TV Shows</li>
        <li className='navLink'>NEW! News</li>
        <li className='navLink'>Popular</li>
        <li className='navLink'>Nature</li>
      </ul>
    </div>

    <div className='flex items-center space-x-4 text-sm font-light'>
      <BiSearchAlt2 className='h-7 w-7 cursor-pointer'/>
      <p className='hidden lg:inline'>Kids</p>
      <BiBellMinus className='h-7 w-7 cursor-pointer'/>
      <Link href={'/account'}>
      <AiOutlineUser className='h-6 w-6 cursor-pointer'/>
      </Link>
    </div>
  </header>
  )
}

export default Header