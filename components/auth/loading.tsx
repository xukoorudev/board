import Image from "next/image"

export const Loading = () => {
   return (
      <div className="h-full w-full flex  justify-center items-center gap-y-6">
         <Image 
            src="/logo.svg"
            alt="Logo"
            width={70}
            height={70}
            className="animate-pulse duration-700"
         />
         <h1 className="text-6xl font-extralight text-orange-900 italic animate-pulse duration-700">
            BOARDY
         </h1>
      </div>
   )
}