import React, { useRef, useState } from "react"
import AboutSlide from "@components/slide/about/AboutSlide"
import LandingSlide from "./slide/landing/LandingSlide"
import ProjectsSlide from "@components/slide/projects/ProjectsSlide"

const slides = [LandingSlide, AboutSlide, ProjectsSlide]

export const NavigationContext = React.createContext<{ navigateSlide(amount: number): void } | undefined>(undefined)

const App: React.FC = () => {
   const [slideIndex, setSlideIndex] = useState(0)
   const lastScroll = useRef(0)

   const onWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
      if (Date.now() - lastScroll.current < 300) {
         return
      }

      navigateSlide(event.deltaY > 0 ? 1 : -1)
   }

   function navigateSlide(amount: number) {
      setSlideIndex((prev) => Math.max(0, Math.min(prev + amount, slides.length - 1)))
      lastScroll.current = Date.now()
   }

   return (
      <NavigationContext.Provider value={{ navigateSlide }}>
         <div onWheel={onWheel}>
            {slides.map((SlideComponent, index) => (
               <SlideComponent state={index <= slideIndex ? "current" : index === slideIndex + 1 ? "next" : "hidden"} />
            ))}
         </div>
      </NavigationContext.Provider>
   )
}

export default App
