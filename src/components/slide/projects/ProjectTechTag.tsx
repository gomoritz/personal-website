import React from "react"
import { TechTag } from "@typedefs/project"
import { css } from "@emotion/css"

type Props = {
   tag: TechTag
}

const ProjectTechTag: React.FC<Props> = ({ tag }) => {
   const style = css`
      display: inline-block;
      border-radius: 1.3rem;
      padding: 0.2rem 0.8rem;
      margin-right: 0.5rem;
      margin-top: 0.5rem;

      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: -0.05rem;
      background-color: ${tag.backgroundColor}66;
      color: ${tag.foregroundColor};
   `

   return (
      <a
         href={tag.url}
         target="_blank"
         rel="noreferrer"
         style={{ textDecoration: "none" }}
      >
         <span className={style}>{tag.name}</span>
      </a>
   )
}

export default ProjectTechTag
