'use client'

import { Input } from '@dubble/design-system/components/ui/input'
import { File, LoaderCircle, Mic, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { UploadToolbarPopover } from './upload-toolbar-popover'
import { useAtom } from 'jotai'
import { uploadsSearchAtom } from '@dubble/design-system/atoms/dashboard/upload/uploadsAtom'

export default function Input27() {
  const [inputValue, setInputValue] = useAtom(uploadsSearchAtom)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [inputValue])

  return (
    <div className="relative flex-grow">
      <Input
        id="search"
        className="peer pe-9 ps-9"
        placeholder="Search..."
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        {isLoading ? (
          <LoaderCircle
            className="animate-spin"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
            role="presentation"
          />
        ) : (
          <Search size={16} strokeWidth={2} aria-hidden="true" />
        )}
      </div>
      <UploadToolbarPopover />
    </div>
  )
}
