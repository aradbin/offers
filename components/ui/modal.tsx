'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"

export function Modal({ trigger, title, description, footer, children }: { trigger: React.ReactNode, title: string, description?: string, footer?: React.ReactNode, children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div>{trigger}</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
          <div className="overflow-y-auto" style={{ maxHeight: '60vh' }}>
            {children}
          </div>
          {footer && <DialogFooter>
            {footer}
          </DialogFooter>}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div>{trigger}</div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className="px-4 overflow-y-auto" style={{ maxHeight: '60vh' }}>
          {children}
        </div>
        {footer && <DrawerFooter>
          {footer}
        </DrawerFooter>}
      </DrawerContent>
    </Drawer>
  )
}
