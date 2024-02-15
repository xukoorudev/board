"use client"
import Link from "next/link"
import Image from "next/image"
import { useQuery } from "convex/react"
import { Poppins } from "next/font/google"

import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Hint } from "@/components/hint"
import { Actions } from "@/components/actions"

import { cn } from "@/lib/utils"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { useRenameModal } from "@/store/use-rename-modal"
import { Menu } from "lucide-react"

interface InfoProps {
   boardId: string
}

const font = Poppins({
   subsets: ["latin"],
   weight: ["600"]
})

const TabSeparator = () => { 
   return (
      <div className="text-neutral-300 px-1.5">
         |
      </div>
   )
}

export const Info = ({
   boardId
}:InfoProps) => {

   const { onOpen } = useRenameModal()
   const data = useQuery(api.board.get, {
      id: boardId as Id<"boards">,
   })

   if (!data) {
      return <InfoSkeleton/>
   }
   return (
      <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
         <Hint label="Go to home" sideOffset={10} side="bottom">
            <Button asChild className="px-2" variant="board">
               <Link href="/">
                  <Image 
                     src="/logo.svg"
                     alt="Board logo"
                     height={40}
                     width={40}
                     />
                  <span className={cn(
                     "font-semibold text-xl ml-2 text-black",
                     font.className
                  )}>
                     Boardy
                  </span>
               </Link>
            </Button>
         </Hint>
         <TabSeparator />
         <Hint label="Edit title" sideOffset={10} side="bottom">
            <Button 
               className="px-2 text-base font-normal"
               variant="board"
               onClick={() => onOpen(data._id, data.title)}
            >
               {data.title}
            </Button>
         </Hint>
         <TabSeparator />
            <Actions
               id={data._id}
               title={data.title}
               side="bottom"
               sideOffset={10}
            >
               <div>
                  <Hint label="Main menu" sideOffset={10} side="bottom">
                     <Button size="icon" variant="board">
                        <Menu className="h-6 w-6"/>
                     </Button>
                  </Hint>
               </div>
            </Actions>
      </div>
   )
}

export const InfoSkeleton = () => {
   return (
      <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px] animate-pulse">
         <Skeleton className="h-full w-full bg-muted-400"/>
      </div>
   )
}