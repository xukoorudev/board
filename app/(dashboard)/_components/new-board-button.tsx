'use client'
import { toast } from "sonner"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { cn } from "@/lib/utils"


interface NewBoardButtonProps {
   orgId: string
   disabled?: boolean
}

export const NewBoardButton = ({
   orgId,
   disabled
}:NewBoardButtonProps) => {
   const router = useRouter()
   const { mutate, pending } = useApiMutation(api.board.create)

   const onClick = () => {
      mutate({
         orgId,
         title: "Untitled"
      })
      .then((id) => {
         toast.success("Board created")
         router.push(`/board/${id}`)
      })
      .catch(() => {
         toast.error("Failed to create board.")
      })
   }
   return (
      <button 
         disabled={pending || disabled}
         onClick={onClick}
         className={cn(
         "col-span-1 md:aspect-[100/127] bg-amber-500 rounded-lg hover:bg-amber-700 flex md:flex-col justify-center items-center py-2",
         (pending || disabled) && "opacity-65 hover:bg-amber-500"
      )}>
         <div />
         <Plus className="w-6 h-6 mx-2 md:h-12 md:w-12 stroke-1"/>
         <p className="text-xs">
            New board
         </p>

      </button>
   )
}