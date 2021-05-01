import React from "react"
import Slide, { SlideState } from "@components/slide/Slide"
import sunglasses from "@assets/images/bitmoji/sunglasses-peek-left.png"
import { bitmojiShadow } from "@styles/shadows"
import { compose } from "@styles/utils"
import { css } from "@emotion/css"
import LandingTitle from "./LandingTitle"
import LandingCTA from "@components/slide/landing/LandingCTA"
import SlideContentBox from "@components/slide/SlideContentBox"

type Props = {
   state: SlideState
}

const bitmojiPosition = css`
   position: absolute;
   left: 0;
   top: 42%;
   width: 18rem;
   height: auto;
`

const LandingSlide: React.FC<Props> = ({ state }) => {
   return (
      <Slide background={"white"} rounded={true} index={1} state={state}>
         <SlideContentBox styleTypography={false}>
            <LandingTitle />
            <LandingCTA />
         </SlideContentBox>
         <img
            className={compose(bitmojiShadow, bitmojiPosition)}
            src={sunglasses}
            alt="bitmoji with sunglasses peeking from the left"
         />
      </Slide>
   )
}

export default LandingSlide
