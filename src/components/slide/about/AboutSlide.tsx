import React from "react"
import Slide, { SlideState } from "@components/slide/Slide"
import wave from "@assets/images/bitmoji/wave-peek-right.png"
import { bitmojiShadow } from "@styles/shadows"
import { compose } from "@styles/utils"
import { css } from "@emotion/css"
import SlideContentBox from "@components/slide/SlideContentBox"
import SocialButton from "@components/slide/about/SocialButton"
import {
   IoLogoGithub,
   IoLogoInstagram,
   IoLogoTwitter
} from "react-icons/all"

type Props = {
   state: SlideState
}

const bitmojiPosition = css`
   position: absolute;
   right: 0;
   top: 15%;
   width: 24rem;
   height: auto;
`

const style = css`
   color: white;

   #callout {
      background: #ffffff;
      box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      width: 60ch;
      padding: 2rem 2.5rem;
      margin-top: 3rem;

      color: black;
      font-size: 1.6rem;
      letter-spacing: -0.04em;

      p {
         padding: 0;
         margin: 0.6rem 0;

         b {
            font-weight: 600;
            position: relative;
            z-index: 25;
            white-space: nowrap;
         }

         b:after {
            content: "";
            position: absolute;
            left: -2px;
            bottom: 3px;
            width: calc(100% + 5px);
            height: 8px;
            z-index: -10;

            background-color: #7de0f7;
            opacity: 50%;
            border-radius: 4px;
         }
      }
   }

   #socials {
      position: absolute;
      left: 0;
      bottom: 7rem;
      width: 100%;

      display: flex;
      justify-content: center;
   }
`

const AboutSlide: React.FC<Props> = ({ state }) => {
   return (
      <Slide
         background={"blue"}
         rounded={true}
         className={style}
         index={2}
         state={state}
      >
         <SlideContentBox>
            <h1>About me</h1>
            <div id="callout">
               <p>
                  My name is <b>Moritz</b>, I am a student and developer.
               </p>
               <p>
                  I started coding <b>about 6 years ago</b> by learning the
                  Java programming language to develop plugins for
                  Minecraft, which was my absolute favorite game at the
                  time.
               </p>
               <p>
                  My experience in software engineering includes{" "}
                  <b>frontend and backend</b> development, <b>database</b>{" "}
                  and <b>server</b> management as well as{" "}
                  <b>continous integration</b> and <b>deployment</b>.
                  Recently, I focused on <b>JavaScript</b> (and TypeScript)
                  since it gives you the power to write a full stack
                  application in just one language.
               </p>
               <p>
                  You can find me on <b>GitHub</b> and on the most common{" "}
                  <b>social media</b> platforms via the links below.
               </p>
            </div>
            <div id="socials">
               <SocialButton
                  icon={IoLogoGithub}
                  link="https://github.com/incxption"
               />
               <SocialButton
                  icon={IoLogoTwitter}
                  link="https://twitter.com/theincxption"
               />
               <SocialButton
                  icon={IoLogoInstagram}
                  link="https://instagram.com/theincxption"
               />
            </div>
         </SlideContentBox>
         <img
            className={compose(bitmojiShadow, bitmojiPosition)}
            alt="bitmoji waving and peeking from the right"
            src={wave}
         />
      </Slide>
   )
}

export default AboutSlide
