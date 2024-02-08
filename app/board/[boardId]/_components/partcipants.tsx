import { Skeleton } from "@/components/ui/skeleton"

export const Participants = () => {
   return (
      <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
         List of users
      </div>
   )
}

Participants.Skeleton = function ParticipantSkeleton() {
   return (
      <div className="absolute top-2 right-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md md:w-[200px] w-[100px] animate-pulse">
         <Skeleton className="h-full w-full bg-muted-400"/>
      </div>
   )
}