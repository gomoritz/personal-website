import React from "react"
import colors from "@styles/colors"
import { css } from "@emotion/css"
import { compose } from "@styles/utils"

type Props = {
   background: "white" | "blue"
   rounded: boolean
   className?: string
   index: number
   state: SlideState
}

export type SlideState = "current" | "next" | "hidden"

const Slide: React.FC<Props> = ({ children, background, rounded, className, index, state }) => {
   const style = css`
      position: absolute;
      top: ${state === "current" ? "-2rem" : state === "next" ? "calc(100vh - 2rem)" : "calc(200vh - 2rem)"};
      left: 0;
      width: 100%;
      height: calc(100vh + 2rem);
      transition: top 0.5s cubic-bezier(0.34, 1.2, 0.64, 1);

      background: linear-gradient(
         180deg,
         ${(colors as any)[background + "Bright"]} 0%,
         ${(colors as any)[background + "Dark"]} 100%
      );

      z-index: ${index * 10};
      ${rounded && "border-radius: 2rem 2rem 0 0;"};
   `

   return <div className={compose(style, className ?? "")}>{children}</div>
}

export default Slide
