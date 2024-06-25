'use client'

import Link from 'next/link'
import UserButton from '@/components/user-button'
import Search from '@/components/search'

export default function Navbar() {
  return (
    <nav className={`top-0 w-full z-50 transition p-5`}>
      <div className=" mx-auto text-baseContent max-w-7xl">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="group text-2xl font-bold ">
              <span>NizzyABI</span>
            </h1>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/courses"
              className="flex items-center hover:bg-white/[0.025] h-full transition duration-300 px-2 sm:px-4 rounded-lg py-2 font-semibold"
            >
              Courses
            </Link>
            <Link
              href="/#testimonials"
              className="flex items-center hover:bg-white/[0.025] h-full transition duration-300 px-2 sm:px-4 rounded-lg py-2 font-semibold"
            >
              Testimonials
            </Link>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  )
}
