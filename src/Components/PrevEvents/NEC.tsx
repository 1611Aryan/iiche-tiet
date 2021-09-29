import Polaroid from "../Polaroid"
import Event from "./Event"

import video_webm from "./../../Media/Previous Events/NEC/video.webm"
import video_mp4 from "./../../Media/Previous Events/NEC/video.mp4"

import logo_png from "./../../Media/Previous Events/NEC/logo.png"

import ss_jpg from "./../../Media/Previous Events/NEC/ss.jpg"

const NEC = () => {
  return (
    <Event>
      <h1>NEC</h1>
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
            { imgSrc: video_webm, type: "video/webm" },
            { imgSrc: video_mp4, type: "video/mp4" },
          ]}
          video={true}
          autoPlay={true}
          loop={true}
          controls={false}
        />
        <Polaroid images={[{ imgSrc: logo_png, type: "image/png" }]} />
        <Polaroid images={[{ imgSrc: ss_jpg, type: "img/jpg" }]} />
      </div>
    </Event>
  )
}

export default NEC
