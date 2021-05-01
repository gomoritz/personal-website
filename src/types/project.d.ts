import { IconType } from "react-icons"

interface Project {
   title: string
   description: string
   image: string
   techs: TechTag[]
   links: LinkTag[]
}

interface TechTag {
   name: string
   url: string
   backgroundColor: string
   foregroundColor: string
}

interface LinkTag {
   icon: IconType
   name: string
   url: string
}
