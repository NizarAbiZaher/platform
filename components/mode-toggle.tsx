'use client'

import * as React from 'react'
import { Moon, Sun, Computer } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="h-[40px] w-[40px]">
        <button className="flex items-center justify-center hover:bg-primary/5 text-primary rounded-lg transition duration-300">
          <Sun className="h-7 w-7 flex dark:hidden" />
          <Moon className="h-7 w-7 hidden dark:flex" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-primary/20">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className="cursor-pointer"
        >
          <Sun className="h-[1rem] w-[1rem] mr-1.5 " /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className="cursor-pointer"
        >
          <Moon className="h-[1rem] w-[1rem] mr-1.5" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="cursor-pointer"
        >
          <Computer className="h-[1rem] w-[1rem] mr-1.5" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
