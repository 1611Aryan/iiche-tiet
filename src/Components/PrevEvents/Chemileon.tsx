import Event from "./Event"
import Polaroid from "../Polaroid"

import video_webm from "./../../Media/Previous Events/Chemileon/video.webm"
import video_mp4 from "./../../Media/Previous Events/Chemileon/video.mp4"

import poster_webp from "./../../Media/Previous Events/Chemileon/poster.webp"
import poster_jpg from "./../../Media/Previous Events/Chemileon/poster.jpg"

import ss_webp from "./../../Media/Previous Events/Chemileon/ss.webp"
import ss_jpg from "./../../Media/Previous Events/Chemileon/ss.jpg"
import Picture from "../Picture"

import bg_webp from "./../../Media/Previous Events/Chemileon/bg.webp"
import bg_jpg from "./../../Media/Previous Events/Chemileon/bg.jpg"

const Chemileon = () => {
  return (
    <Event>
      <Picture
        images={[
          { imgSrc: bg_webp, type: "image/webp" },
          { imgSrc: bg_jpg, type: "image/jpg" },
        ]}
        loading="lazy"
        decoding="async"
        className={"bg"}
      />
      <div className="overlay"></div>
      <h1>Chemileon</h1>
      <p>
        Chem-i-Leon was a virtual treasure hunt where teams competed against
        each other to win exciting prizes. The event was sponsored by GrabOn,
        GeeksforGeeks, repl.it, balsamiq and taskade.
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
            { imgSrc: poster_webp, type: "image/webp" },
            { imgSrc: poster_jpg, type: "image/jpg" },
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

export default Chemileon
