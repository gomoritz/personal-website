import React from "react"
import Slide, { SlideState } from "@components/slide/Slide"
import SlideContentBox from "@components/slide/SlideContentBox"
import ProjectPreview from "@components/slide/projects/ProjectPreview"
import { compose } from "@styles/utils"
import { bitmojiShadow } from "@styles/shadows"
import { css } from "@emotion/css"
import allGood from "@assets/images/bitmoji/all-good.png"

type Props = {
   state: SlideState
}

const bitmojiPosition = css`
   position: absolute;
   right: 5%;
   bottom: 0;
   width: 18rem;
   height: auto;
`

const ProjectsSlide: React.FC<Props> = ({ state }) => {
   return (
      <Slide background={"white"} index={3} rounded={true} state={state}>
         <SlideContentBox>
            <h1>What I have done</h1>
            <h2>
               I have already been working on a variety of projects using
               different technologies for targets like the web or desktop.
               Here you can find a collection of smaller and larger
               projects I created in the last years. With my coding
               experience expanding more into other areas, you can expect
               this section to grow and feature more and more technologies.
            </h2>
            <ProjectPreview />
            <img
               className={compose(bitmojiShadow, bitmojiPosition)}
               src={allGood}
               alt="bitmoji with sunglasses peeking from the left"
            />
         </SlideContentBox>
      </Slide>
   )
}

export default ProjectsSlide
