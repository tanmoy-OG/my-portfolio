import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PopupProps {
  type: string
  topic: string
  name: string
}

const Popup = ({ type, topic, name }: PopupProps) => {
  const [newName, setNewName] = useState<string>(name)
  const onSubmit = () => {
    console.log(newName)
    if (type === 'add') {
      console.log('Add', topic)
    } else {
      console.log('Edit', topic)
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        {type === 'Add' ? (
          <Button className="bg-accent text-accent-foreground transition-all hover:bg-accent-hover active:bg-accent">
            Add {topic}
          </Button>
        ) : (
          <Button
            className="border-accent bg-background text-accent-foreground transition-all hover:bg-accent-hover hover:text-accent-foreground active:bg-accent"
            variant="outline"
          >
            Edit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {type} {topic}
          </DialogTitle>
          <DialogDescription>
            {type === 'Add'
              ? "Add your skill here. Click save when you're done."
              : `Make changes to your ${topic} here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              {topic} Name
            </Label>
            <Input
              className="col-span-3"
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-accent text-accent-foreground transition-all hover:bg-accent-hover active:bg-accent"
            type="submit"
            onClick={() => onSubmit()}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Popup
