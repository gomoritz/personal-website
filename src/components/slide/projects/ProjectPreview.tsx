import React, { useState } from "react"
import projects from "../../../data/projects"
import { css } from "@emotion/css"
import ProjectTechTag from "@components/slide/projects/ProjectTechTag"
import ProjectLinkTag from "@components/slide/projects/ProjectLinkTag"

const ProjectPreview: React.FC = () => {
   const [projectIndex] = useState(0)
   const project = projects[projectIndex]

   const style = css`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 50%;
      margin-top: 5rem;

      #image {
         width: 180%;
         height: 100%;
         max-width: 750px;

         background-image: url(${project.image});
         background-size: cover;
         background-position: center;

         border-radius: 1rem;
         border: 0.5rem solid white;
         filter: drop-shadow(2px 2px 30px rgba(0, 0, 0, 0.09));
      }

      #details {
         display: flex;
         flex-shrink: 0;
         flex-direction: column;
         justify-content: start;
         max-width: 50%;

         margin-left: 2rem;
         padding-top: 0.4rem;
         padding-bottom: 0.4rem;

         #title {
            font-size: 2rem;
         }

         #tech {
            margin-bottom: 1rem;
         }

         #description {
            font-size: 1.4rem;
            letter-spacing: -0.06rem;
            max-width: 50ch;
         }

         #links {
            margin-top: auto;
            display: flex;
         }
      }
   `

   return (
      <div className={style}>
         <div id="image" />
         <div id="details">
            <h1 id="title">{project.title}</h1>
            <div id="tech">
               {project.techs.map((tech) => (
                  <ProjectTechTag tag={tech} />
               ))}
            </div>
            <p id="description">{project.description}</p>
            <div id="links">
               {project.links.map((link) => (
                  <ProjectLinkTag tag={link} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default ProjectPreview
