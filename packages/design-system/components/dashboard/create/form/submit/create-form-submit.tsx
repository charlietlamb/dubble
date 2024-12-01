import { Button } from '@dubble/design-system/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@dubble/design-system/components/ui/dialog'
import {
  createCaptionAtom,
  createFilesAtom,
  createScheduleAtom,
  createSelectedConnectsAtom,
  createCaptionPlatformAtom,
} from '@dubble/design-system/atoms/dashboard/create/create-atom'
import { useState } from 'react'
import { toast } from 'sonner'
import { useAtomValue } from 'jotai'

export default function CreateFormSubmit() {
  const [open, setOpen] = useState(false)
  const files = useAtomValue(createFilesAtom)
  const date = useAtomValue(createScheduleAtom)
  const accounts = useAtomValue(createSelectedConnectsAtom)
  const caption = useAtomValue(createCaptionAtom)
  const captionProvider = useAtomValue(createCaptionPlatformAtom)

  function handleTriggerClick() {
    if (
      !caption.length &&
      !Array.from(captionProvider.values()).some((caption) => caption.length)
    ) {
      toast.error('Please select a caption provider', {
        description: 'You can select this in the caption section.',
      })
      return
    }
    if (files.length === 0) {
      toast.error('Please add files to submit', {
        description: 'You can get these from your uploads or upload directly.',
      })
      return
    }
    if (accounts.length === 0) {
      toast.error('Please select at least one account', {
        description: 'You can select these in the accounts section.',
      })
      return
    }
    if (!date || date <= new Date()) {
      toast.error('Please set a future date to schedule your post', {
        description: 'You can set this in the schedule section.',
      })
      return
    }
    setOpen(true)
  }
  return (
    <div className="flex p-4 mt-auto w-full sticky bottom-0 bg-background">
      <Dialog open={open} onOpenChange={setOpen}>
        <Button
          className="w-full font-heading font-bold"
          variant="shine"
          onClick={handleTriggerClick}
        >
          Submit
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Post summary</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
