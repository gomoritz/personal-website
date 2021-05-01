import React, { useContext } from "react"
import { css, keyframes } from "@emotion/css"
import { NavigationContext } from "@components/App"

type Props = {}

const bounce = keyframes`
    from {
        transform: translateY(5px);
    }
    
    to {
        transform: translateY(-5px);
    }
`

const style = css`
   position: absolute;
   bottom: 4rem;
   left: 50%;
   transform: translateX(-50%);

   display: flex;
   flex-direction: column;
   align-items: center;

   p {
      margin-top: 0;
      margin-bottom: 0.5rem;

      font-size: 1.75rem;
      font-weight: 500;
      letter-spacing: -0.05em;
   }

   svg {
      width: 3.5rem;
      height: auto;
      animation: ${bounce} 1s alternate infinite ease-out;
      margin: 1rem;
      cursor: pointer;
   }
`

const LandingCTA: React.FC<Props> = () => {
   const { navigateSlide } = useContext(NavigationContext)!

   return (
      <div className={style} onClick={() => navigateSlide(1)}>
         <p>Find out more</p>
         <svg strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#6dd5ed", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#288db8", stopOpacity: 1 }} />
               </linearGradient>
            </defs>
            <path
               fill="url(#grad)"
               d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0122.63-.09L240 303.58V170a16 16 0 0132 0v133.58l52.73-52.32A16 16 0 11347.27 274l-80 79.39a16 16 0 01-22.54 0l-80-79.39a16 16 0 01-.09-22.65z"
            />
         </svg>
      </div>
   )
}

export default LandingCTA
