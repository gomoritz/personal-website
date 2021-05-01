import { LinkTag, Project } from "@typedefs/project"
import { IoGlobe, IoLogoGithub } from "react-icons/all"
import technologies from "./technologies"
import spotifyComposer from "@assets/images/projects/spotify-composer.png"

const { React, FramerMotion, TypeScript, TailwindCSS } = technologies

const projects: Project[] = [
   {
      title: "Spotify Composer",
      description:
         "Combine and filter Spotify playlists by using a Tinder-like " +
         "swipe technique to drop (left) or take (right) a song. " +
         "Includes a 30-second song preview provided by Spotify to " +
         "help make your decision easier. Based on your selected " +
         "songs, a new playlist can be created on Spotify.",
      image: spotifyComposer,
      techs: [React, TypeScript, FramerMotion, TailwindCSS],
      links: [
         GitHub("incxption/spotify-composer"),
         Website("https://composer.incxption.dev")
      ]
   }
]

function GitHub(repository: string): LinkTag {
   return {
      name: "Repository",
      icon: IoLogoGithub,
      url: "https://github.com/" + repository
   }
}

function Website(url: string): LinkTag {
   return {
      name: "Website",
      icon: IoGlobe,
      url: url
   }
}

export default projects
