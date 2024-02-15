"use client"
import { Hint } from "@/components/hint";
import {
   Avatar,
   AvatarFallback,
   AvatarImage,
 } from "@/components/ui/avatar"

 interface UserAvatarProps {
   src?: string
   name?: string
   fallback?: string
   borderColor?: string

 }
  
 export const UserAvatar = ({
   src,
   name,
   fallback,
   borderColor
 }:UserAvatarProps) => {
   return (
      <Hint label={name || "Teammate"} side="bottom" sideOffset={18}>
         <Avatar
            className="h-10 w-10 border-2"
            style={{borderColor}}
         >
            <AvatarImage src={src} alt="avatar" className="rounded-full p-0.5"/>
            <AvatarFallback className="text-sm font-semibold">
               {fallback}
            </AvatarFallback>
         </Avatar>
      </Hint>

   )
 }