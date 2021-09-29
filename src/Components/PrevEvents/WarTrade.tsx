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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates
        beatae corrupti numquam fugit laborum recusandae praesentium ipsum, enim
        aut aliquid distinctio magni doloribus alias? Doloremque blanditiis
        placeat consequuntur itaque! Nihil nam ratione excepturi non hic eius
        aut consectetur magni illo officiis, libero incidunt natus, dolor esse.
        At consequuntur eius commodi qui expedita temporibus non, totam
        distinctio eveniet. Reprehenderit, dolor?
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
