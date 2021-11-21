import Polaroid from "../Polaroid"
import Event from "./Event"

import bg_png from "./../../Media/Previous Events/NEC/bg.png"
import bg_webp from "./../../Media/Previous Events/NEC/bg.webp"

import video_webm from "./../../Media/Previous Events/NEC/video.webm"
import video_mp4 from "./../../Media/Previous Events/NEC/video.mp4"

import logo_png from "./../../Media/Previous Events/NEC/logo.png"
import logo_webp from "./../../Media/Previous Events/NEC/logo.webp"

import ss_jpg from "./../../Media/Previous Events/NEC/ss.jpg"
import ss_webp from "./../../Media/Previous Events/NEC/ss.webp"
import Picture from "../Picture"

const NEC = () => {
  return (
    <Event>
      <Picture
        images={[
          { imgSrc: bg_webp, type: "image/webp" },
          { imgSrc: bg_png, type: "image/jpg" },
        ]}
        loading="lazy"
        decoding="async"
        className={"bg"}
      />
      <div className="overlay"></div>
      <h1>NEC</h1>
      <p>
        NEC was a National level conference where students interacted about
        Robotics, How Technology has changed over the past 20 years, Why
        Engineers prefer MBA, Challenges faced by youth etc. with the speakers
        and other guests.
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
        <Polaroid
          images={[
            { imgSrc: logo_webp, type: "image/webp" },
            { imgSrc: logo_png, type: "image/png" },
          ]}
        />
        <Polaroid
          images={[
            { imgSrc: ss_webp, type: "image/webp" },
            { imgSrc: ss_jpg, type: "image/jpg" },
          ]}
        />
      </div>
    </Event>
  )
}

export default NEC
