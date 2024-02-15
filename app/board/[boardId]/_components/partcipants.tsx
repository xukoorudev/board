"use client"
import { connectionIdToColor } from "@/lib/utils";
import { useOthers, useSelf } from "@/liveblocks.config"

import { UserAvatar } from "./user-avatar"

import { Skeleton } from "@/components/ui/skeleton"

const MAX_SHOWN_OTHER_USERS = 2;

export const Participants = () => {
   const users = useOthers()
   const currentUser = useSelf()
   const hasMoreUsers = users.length > MAX_SHOWN_OTHER_USERS;

   return (
      <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
         <div className="flex gap-x-2">
            {users.slice(0, MAX_SHOWN_OTHER_USERS)
               .map(({connectionId, info}) => {
                  return (
                     <UserAvatar 
                        borderColor={connectionIdToColor(connectionId)}
                        key={connectionId}
                        src={info?.picture}
                        name={info?.name}
                        fallback={info?.name?.[0] || "T"}
                     />
                  )
               })
            }

            {currentUser && (
               <UserAvatar 
               borderColor={connectionIdToColor(currentUser.connectionId)}
                  src={currentUser.info?.picture}
                  name={`${currentUser.info?.name} (You)`}
                  fallback={currentUser.info?.name?.[0]}
               />
            )}

            {hasMoreUsers && (
               <UserAvatar 
                  name={`${users.length - MAX_SHOWN_OTHER_USERS} more`}
                  fallback={`+${users.length - MAX_SHOWN_OTHER_USERS}`}
               />
            )}
         </div>
      </div>
   )
}

export const ParticipantSkeleton = () => {
   return (
      <div className="absolute top-2 right-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md md:w-[200px] w-[100px] animate-pulse">
         <Skeleton className="h-full w-full bg-muted-400"/>
      </div>
   )
}