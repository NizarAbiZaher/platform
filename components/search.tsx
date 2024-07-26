'use client'
import * as React from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import SearchIcon from '@mui/icons-material/Search'
import {
  Book,
  Circle,
  Github,
  Home,
  Settings,
  Shapes,
  TrafficCone,
  Youtube
} from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { CircleBackslashIcon } from '@radix-ui/react-icons'

const commandInputs = [
  {
    title: 'Frontend Analytics Dashboard',
    link: '/courses/frontend-analytics-dashboard/info'
  },
  {
    title: 'Stripe Payment',
    link: '/courses/stripe/info'
  },
  {
    title: 'NextJS Landing Page',
    link: '/courses/nextjs-landing/info'
  },
  {
    title: 'Functional Backend & Database',
    link: '/courses/functional-backend-database/info'
  },
  {
    title: 'Settings',
    link: '/settings'
  },
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Github',
    link: 'https://github.com/nizzyabi'
  },
  {
    title: 'Youtube',
    link: 'https://www.youtube.com/@NizzyABI'
  },
  {
    title: 'Discord',
    link: '/roadmap'
  }
]

export default function Search() {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleClick = () => {
    setOpen(true)
  }

  const router = useRouter()
  const handleItemClick = (url: any) => {
    setOpen(false)
    router.push(url)
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="flex md:hidden items-center justify-center rounded-lg cursor-pointer transition duration-300 hover:bg-primary/5 px-2 py-2"
      >
        <SearchIcon className="h-6 w-6" />
      </div>

      <div
        onClick={handleClick}
        className="hidden md:flex w-[125px] lg:w-[200px] h-full max-h-10 items-center justify-between bg-primary/10 group rounded-lg cursor-pointer px-2.5 py-2 transition duration-300 md:ml-3 hover:opacity-70"
      >
        <SearchIcon className="text-primary/30 h-5 w-5" />
        <p className="flex-1 text-primary/30 ml-2 font-medium text-base lg:text-lg transition duration-300">
          Search
        </p>
        <div className="text-primary">
          <span className=" no-wrap bg-primary/20 hidden lg:inline-block py-1 px-1.5 rounded bg-opacity-80 text-xs">
            ⌘ K
          </span>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search"
          className="w-[400px] text-primary placeholder:text-primary/50 text-sm"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {commandInputs.map((item) => (
              <div onClick={() => handleItemClick(item.link)} key={item.link}>
                <CommandItem>
                  <Circle className="h-3 w-3 mr-2" /> <p>{item.title}</p>
                </CommandItem>
              </div>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
