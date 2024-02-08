import { Loader } from "lucide-react"
import { Info } from "./info"
import { Participants } from "./partcipants"
import { Toolbar } from "./toolbar"

export const CanvasLoading = () => {
   return (
      <main className="flex items-center justify-center h-full w-full relative bg-neutral-100">
         <Loader className="h-12 w-12 animate-spin text-primary/70"/>
         <Info.Skeleton />
         <Participants.Skeleton />
         <Toolbar.Skeleton />
      </main>
   )
}