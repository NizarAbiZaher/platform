'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import UserButton from './user-button'
import { MobileSidebar } from '@/components/mobile-sidebar'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Search from './search'

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 25
      setHasScrolled(window.pageYOffset > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarChange = hasScrolled
    ? 'backdrop-blur border-b border-slate-100/20 bg-[#2e2e2e]/90'
    : 'bg-transparent border-b border-transparent'

  return (
    <nav className={`fixed top-0 w-full z-50 ${navbarChange} transition`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          <MobileSidebar />

          <Link href="/" className="flex items-center">
            <h1 className='text-2xl font-bold text-white'>
              <span className=' transition-all duration-300 ease-in-out'>
                nizzy
              </span>
              <span className='transition-all duration-300 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500  '>
                abi
              </span>
            </h1>
          </Link>


          <div className="hidden md:flex h-[40px] items-center text-lg md:text-lg font-medium mr-2 gap-4 navbar transition-all">
            <div className="flex items-center lg:gap-4 h-full text-base lg:text-lg font-medium">
              <Link
                href="/roadmap"
                className="flex items-center hover:bg-white/5 h-full transition duration-300 px-4 rounded-lg"
              >
                Roadmap
              </Link>
              <Link
                href="/courses"
                className="flex items-center hover:bg-white/5 h-full transition duration-300 px-4 rounded-lg"
              >
                Courses
              </Link>
              <Link
                href="/tutoring"
                className="flex items-center hover:bg-white/5 h-full transition duration-300 px-4 rounded-lg"
              >
                Tutoring
              </Link>
            </div>
            <div className="flex h-full gap-6 lg:gap-7">
              <Search />
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
