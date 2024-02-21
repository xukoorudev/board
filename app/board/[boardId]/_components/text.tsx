import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import { TextLayer } from "@/types/canvas";
import { cn, colorToCss } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";

const calculationFontSize = (width: number, height:number) => {
   const maxFontSize = 200;
   const scaleFactor = 0.5;
   const fonstSizeBasedOnHeight = height * scaleFactor;
   const fontSizeBasedOnWidth = width * scaleFactor;

   return Math.min(
      fonstSizeBasedOnHeight,
      fontSizeBasedOnWidth,
      maxFontSize
   )
}

const font = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

interface TextProps {
   id: string
   layer: TextLayer
   onPointerDown: (e: React.PointerEvent, id: string) => void
   selectionColor?: string
}

export const Text = ({
   id,
   layer,
   onPointerDown,
   selectionColor
}:TextProps) => {
   const {x, y, width, height, fill, value} = layer;

   const updateValue = useMutation((
      { storage },
      newValue: string
   ) => {
      const liveLayers = storage.get("layers")

      liveLayers.get(id)?.set("value", newValue)
   },[])

   const handleContentChange = (e: ContentEditableEvent) => {
      updateValue(e.target.value);
   }

   return (
      <foreignObject
         x={x}
         y={y}
         width={width}
         height={height}
         onPointerDown={(e) => onPointerDown(e, id)}
         style={{
            outline: selectionColor ? `1px solid ${selectionColor}` : "none"
         }}
      >
         <ContentEditable 
            html={value || "Text"}
            onChange={handleContentChange}
            className={cn(
               "h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none border-none",
               font.className
            )}
            style={{
               fontSize: calculationFontSize(width, height),
               color: fill ? colorToCss(fill) : "#000"
            }}
            
         />
      </foreignObject>
   )
}