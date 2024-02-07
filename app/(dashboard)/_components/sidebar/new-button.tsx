"use client"

import { Hint } from "@/components/hint"
import { Dialog, DialogContent,  DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import { Plus } from "lucide-react"

export  const NewButton = () => {
   return (
      <Dialog>
         <DialogTrigger>
            <Hint 
               label="Create Organization"
               align="start"
               side="right"
               sideOffset={18}
               alignOffset={2}
            >
               <Plus className="h-full w-full aspect-square bg-white/25 p-2 rounded-md opacity-60 hover:opacity-100 transition"/>
            </Hint>
         </DialogTrigger>
         <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
         </DialogContent>
      </Dialog>
   )
}