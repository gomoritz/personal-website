import React from "react"
import { css } from "@emotion/css"
import { compose } from "@styles/utils"

type Props = {
   styleTypography?: boolean
}

const style = css`
   width: 100%;
   height: 100%;
   max-width: 1920px;
   margin: auto;
   padding: 5rem 7rem;
   position: relative;

   display: flex;
   flex-direction: column;
`

const typographyStyle = css`
   h1,
   h2 {
      margin-block-start: 0;
      margin-block-end: 0;
   }

   h1 {
      font-size: 3rem;
      font-weight: bold;
      letter-spacing: -0.03em;
      margin-bottom: 0.6rem;
   }

   h2 {
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: -0.04em;
      width: 70ch;
      max-width: 100%;
   }
`

const SlideContentBox: React.FC<Props> = ({
   children,
   styleTypography = true
}) => {
   return (
      <div className={compose(style, styleTypography && typographyStyle)}>
         {children}
      </div>
   )
}

export default SlideContentBox
