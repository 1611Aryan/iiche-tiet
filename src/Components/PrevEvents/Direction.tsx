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
        "To learn is to grow with grace, to see is to believe with faith". We at
        IIChE conducted our much awaited orientation program - DIRECTION on 7th
        November,2020. The main aim of this orientation is to guide and help
        freshers that what it feels to live a 'college life'. The orientation
        program was filled with fun and frolic. A plethora of activities and
        discussions that gave freshers a delightful insight on campus life and
        aims of the society. By this we welcomed our freshers to the society and
        as truly said Together we learn, laugh and form bonds . The more energy
        you put into bonding, the harder is to break !!
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
