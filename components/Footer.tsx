// Footer Page
import { Github, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import { BsTwitterX, BsYoutube, BsDiscord, BsGithub } from 'react-icons/bs'
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="flex justify-between footer p-10 bg-neutral text-neutral-content">
  <aside>
   
    <p>
      <span className='text-xl font-bold'>NizzyABI</span>
      <br/>
      <span className='opacity-70'>Build cool sh*t</span>
    </p>
  </aside> 
  <nav>
    <h6 className="footer-title">Socials</h6> 
    <div className="grid grid-flow-col gap-4">
      <Link href='https://github.com/nizzyabi'>
        <BsGithub className='h-7 w-7'/>
      </Link>
      <Link href='https://x.com/NizzyABI'>
        <BsTwitterX className='h-6 w-6 mt-0.5'/>
      </Link>
      <Link href='https://www.youtube.com/@nizzyabi'>
        <BsYoutube className='h-8 w-8'/>
      </Link>
      
    </div>
  </nav>
</footer>
  )
}
