import Picture from "../Picture"
import Polaroid from "../Polaroid"
import Event from "./Event"

import bgjpg from "../../Media/Previous Events/Wartrade/bg.jpg"
import bgwebp from "../../Media/Previous Events/Wartrade/bg.webp"

import video from "../../Media/Previous Events/Wartrade/wartrade.webm"

import posterAVIF from "../../Media/Previous Events/Wartrade/poster.avif"
import posterWEBP from "../../Media/Previous Events/Wartrade/poster.webp"
import posterJPG from "../../Media/Previous Events/Wartrade/poster.jpg"

import ssAVIF from "../../Media/Previous Events/Wartrade/ss.avif"
import ssWEBP from "../../Media/Previous Events/Wartrade/ss.webp"
import ssJPG from "../../Media/Previous Events/Wartrade/ss.jpg"

const WarTrade = () => {
  return (
    <Event>
      <Picture
        images={[
          { imgSrc: bgwebp, type: "image/webp" },
          { imgSrc: bgjpg, type: "image/jpg" },
        ]}
        loading="lazy"
        decoding="async"
        className={"bg"}
      />
      <div className="overlay"></div>
      <h1>WarTrade</h1>
      <p>
        A two day event which involved a lot of brainstorming and negotiation
        skills. Participants collaborated in teams of representative countries
        with a preassigned monetary budget and battled it out with other teams
        by boasting their superior firepower in terms of bombs and negotiation
        skills. Mr. Sanjay Gupta (Brand Ambassdor of TIET) being the special
        guest. The event was sponsored by Airmeet.com, Sharp Brain Classes, Give
        My Certificate and CollegeBros.
      </p>
      <div className="images">
        <Polaroid
          images={[{ imgSrc: video, type: "video/webm" }]}
          video={true}
          autoPlay={true}
          loop={true}
          controls={false}
        />
        <Polaroid
          images={[
            { imgSrc: posterAVIF, type: "image/avif" },
            { imgSrc: posterWEBP, type: "image/webp" },
            { imgSrc: posterJPG, type: "image/jpg" },
          ]}
        />
        <Polaroid
          images={[
            { imgSrc: ssAVIF, type: "image/avif" },
            { imgSrc: ssWEBP, type: "image/webp" },
            { imgSrc: ssJPG, type: "image/jpg" },
          ]}
        />
      </div>
    </Event>
  )
}

export default WarTrade
