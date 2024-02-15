"use client"

import { memo } from "react"

import { useOthersConnectionIds } from "@/liveblocks.config"

import { Cursor } from "./cursor"


export const Cursors = () => {
   const ids = useOthersConnectionIds()

   return (
      <>
         {ids.map((connectionId) => (
            <Cursor 
               key={connectionId}
               connectionId={connectionId}
            />
         ))}
      </>
   )
}

export const CursorsPresence = memo(() => {
   return (
      <>
         {/* TODO: Draft pencil */}
         <Cursors />
      </>
   )
})

CursorsPresence.displayName = "CursorsPresence"