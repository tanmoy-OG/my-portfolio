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
    name: 'Rebase<01>',
    link: 'https://rebase01.tech',
    date: '2021-10-01'
  },
  {
    id: '2',
    name: 'Hack4Bengal2.0',
    link: 'https://hack4bengal.tech',
    date: '2021-10-02'
  },
  {
    id: '3',
    name: 'Bits2Bytes',
    link: 'https://bits2bytes.tech',
    date: '2021-10-03'
  }
]

const Achievements = () => {
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
        <TableCaption>Your achievements list.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="space-x-4">
              <Checkbox
                checked={selected.length === data.length}
                className="border-foreground stroke-foreground"
                onCheckedChange={handleSelectAll}
              />
              <span>Select all</span>
            </TableHead>
            <TableHead>
              Date
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
                <Popup name="" link="" date="" topic="achievement" type="Add" />
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
              <TableCell className='text-nowrap'>
                {e.date}
              </TableCell>
              <TableCell className="text-right">
                <Popup name={e.name} link={e.link} date={e.date} topic="achievement" type="Edit" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Achievements
