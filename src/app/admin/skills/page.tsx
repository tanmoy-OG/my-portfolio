'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import Popup from './popup'

const data = [
  {
    id: '1',
    name: 'Javascript'
  },
  {
    id: '2',
    name: 'Python'
  },
  {
    id: '3',
    name: 'Ruby'
  }
]

const Skills = () => {
  const [selected, setSelected] = useState<string[]>([])
  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((e) => e !== id))
    } else {
      setSelected([...selected, id])
    }
  }
  const handleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([])
    } else {
      setSelected(data.map((e) => e.id))
    }
  }
  return (
    <div className="mx-auto w-4/5 px-10 py-20">
      <Table>
        <TableCaption>Your skill list.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="flex items-center gap-4">
              <Checkbox
                checked={selected.length === data.length}
                className="border-foreground stroke-foreground"
                onCheckedChange={handleSelectAll}
              />
              Select all
            </TableHead>
            <TableHead className="text-right">
              {selected.length > 0 ? (
                <Button
                  className="bg-accent text-accent-foreground transition-all hover:bg-accent-hover active:bg-accent"
                  onClick={() => console.log(selected)}
                >
                  Delete
                </Button>
              ) : (
                <Popup name="" topic="skill" type="Add" />
              )}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell className="space-x-4">
                <Checkbox
                  checked={selected.includes(e.id)}
                  className="border-foreground stroke-foreground"
                  onCheckedChange={() => handleSelect(e.id)}
                />
                <span>{e.name}</span>
              </TableCell>
              <TableCell className="text-right">
                <Popup name={e.name} topic="skill" type="Edit" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Skills
