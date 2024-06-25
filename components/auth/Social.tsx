'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { IconBrandGoogle, IconBrandGithub } from '@tabler/icons-react'

export const Social = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }
  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        className="bg-base100 rounded-[5px] border-baseContent border-2 text-md text-baseContent hover:bg-white/5 transition"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <IconBrandGoogle className="mr-2" /> Google
      </Button>

      <Button
        size="lg"
        className="bg-base100 rounded-[5px] border-baseContent border-2 text-md text-baseContent hover:bg-white/5 transition"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <IconBrandGithub className="mr-2" /> <span>Github</span>
      </Button>
    </div>
  )
}
