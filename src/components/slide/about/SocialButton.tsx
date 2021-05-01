import React from "react"
import { IconType } from "react-icons"
import { css } from "@emotion/css"

type Props = {
   icon: IconType
   link: string
}

const style = css`
   width: 60px;
   height: 60px;
   margin: 0 1rem;

   background-color: rgba(255, 255, 255, 5%);
   border: 3px solid rgba(255, 255, 255, 40%);
   border-radius: 100%;

   display: flex;
   justify-content: center;
   align-items: center;

   cursor: pointer;
   transition: all 0.15s ease-in-out;

   svg {
      width: 35px;
      height: 35px;
      transition: all 0.15s ease-in-out;
   }

   &:hover {
      background-color: rgba(255, 255, 255, 100%);

      svg {
         fill: #288db8;
      }
   }
`

const SocialButton: React.FC<Props> = ({ icon: Icon, link }) => {
   return (
      <div className={style} onClick={() => window.open(link, "_blank")}>
         <Icon />
      </div>
   )
}

export default SocialButton
