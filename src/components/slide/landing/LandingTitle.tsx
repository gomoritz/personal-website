import React from "react"
import { css } from "@emotion/css"
import colors from "@styles/colors"

const style = css`
   position: relative;
   top: 23%;

   h1,
   h2,
   p {
      text-align: right;
      margin: 0;
      padding: 0;
      letter-spacing: -0.05em;
   }

   p {
      font-weight: 600;
      font-size: 2rem;
   }

   h1 {
      position: relative;
      text-align: right;

      font-weight: 800;
      font-size: 9rem;
      height: 1.8ch;
   }

   h1:after {
      content: "INCEPTION";
      color: transparent;
      text-shadow: 1px 1px 9px rgba(0, 0, 0, 0.17);
   }

   h1 div {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(to right bottom, ${colors.blueBright}, ${colors.blueDark});

      position: absolute;
      width: 100%;
   }

   h2 {
      font-weight: 600;
      font-size: 2.5rem;
      line-height: 95%;
      width: auto;
      position: relative;
   }
`

const LandingTitle: React.FC = () => {
   return (
      <div className={style}>
         <p>Moritz Goessl</p>
         <h1>
            <div>INCEPTION</div>
         </h1>
         <h2>
            Full Stack Developer for
            <br />
            the web and more
         </h2>
      </div>
   )
}

export default LandingTitle
