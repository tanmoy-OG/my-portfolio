'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

const AsideAdmin = () => (
  <div className="sticky flex h-screen w-1/5 flex-col justify-center gap-4 bg-secondary p-10">
    <Link className="group space-y-1" href="/admin/experience">
      <h1>Experience</h1>
      <div className="h-px w-0 rounded-full bg-foreground transition-all group-hover:w-full" />
    </Link>
    <Link className="group space-y-1" href="/admin/projects">
      <h1>Projects</h1>
      <div className="h-px w-0 rounded-full bg-foreground transition-all group-hover:w-full" />
    </Link>
    <Link className="group space-y-1" href="/admin/skills">
      <h1>Skills</h1>
      <div className="h-px w-0 rounded-full bg-foreground transition-all group-hover:w-full" />
    </Link>
    <Link className="group space-y-1" href="/admin/achievements">
      <h1>Achievements</h1>
      <div className="h-px w-0 rounded-full bg-foreground transition-all group-hover:w-full" />
    </Link>
    <Button
      className="my-2 bg-accent text-accent-foreground transition-all hover:bg-accent-hover active:bg-accent"
      onClick={() => console.log('logout')}
    >
      Logout
    </Button>
  </div>
)

export default AsideAdmin
