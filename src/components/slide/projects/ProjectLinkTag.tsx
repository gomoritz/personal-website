import React from "react"
import { LinkTag } from "@typedefs/project"
import { css } from "@emotion/css"

type Props = {
   tag: LinkTag
}

const ProjectTechTag: React.FC<Props> = ({ tag }) => {
   const style = css`
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      height: 2rem;
      width: fit-content;

      border-radius: 1.3rem;
      margin-right: 0.5rem;
      margin-top: 0.5rem;

      transition: 0.1s ease-in-out;
      background-color: rgba(0, 0, 0, 5%);
      color: rgba(0, 0, 0, 1);
      font-size: 1.3rem;
      font-weight: 400;

      span {
         letter-spacing: -0.05rem;
         margin-left: 0.3rem;
         margin-right: 0.6rem;
      }

      svg {
         width: 2rem;
         height: 2rem;
         flex-shrink: 0;
         color: black;
      }

      &:hover {
         background-color: rgba(0, 0, 0, 10%);
      }
   `
   const Icon = tag.icon

   return (
      <a
         href={tag.url}
         target="_blank"
         rel="noreferrer"
         style={{ textDecoration: "none" }}
      >
         <span className={style}>
            <Icon />
            <span>{tag.name}</span>
         </span>
      </a>
   )
}

export default ProjectTechTag
