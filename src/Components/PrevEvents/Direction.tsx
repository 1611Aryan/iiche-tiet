import Event from "./Event"

import logoAVIF from "../../Media/Previous Events/Direction/logo.avif"
import logoWEBP from "../../Media/Previous Events/Direction/logo.webp"
import logojpg from "../../Media/Previous Events/Direction/logo.jpg"

import ss1AVIF from "../../Media/Previous Events/Direction/ss1.avif"
import ss1WEBP from "../../Media/Previous Events/Direction/ss1.webp"
import ss1jpg from "../../Media/Previous Events/Direction/ss1.jpg"

import ss2jpg from "../../Media/Previous Events/Direction/ss2.jpg"
import ss2avif from "../../Media/Previous Events/Direction/ss1.avif"
import ss2webp from "../../Media/Previous Events/Direction/ss2.webp"

import Polaroid from "../Polaroid"

const Direction = () => {
  return (
    <Event>
      <h1>Direction</h1>
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
          images={[
            { imgSrc: ss1AVIF, type: "image/avif" },
            { imgSrc: ss1WEBP, type: "image/webp" },
            { imgSrc: ss1jpg, type: "image/jpg" },
          ]}
        />
        <Polaroid
          images={[
            { imgSrc: logoAVIF, type: "image/avif" },
            { imgSrc: logoWEBP, type: "image/webp" },
            { imgSrc: logojpg, type: "image/jpg" },
          ]}
        />
        <Polaroid
          images={[
            { imgSrc: ss2avif, type: "image/avif" },
            { imgSrc: ss2webp, type: "image/webp" },
            { imgSrc: ss2jpg, type: "image/jpg" },
          ]}
        />
      </div>
    </Event>
  )
}

export default Direction
