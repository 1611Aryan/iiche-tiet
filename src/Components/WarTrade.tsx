import styled from "@emotion/styled"
import Picture from "./Picture"
import Polaroid from "./Polaroid"

import bgjpg from "./../Media/Previous Events/Wartrade/bg.jpg"
import bgwebp from "./../Media/Previous Events/Wartrade/bg.webp"

import video from "./../Media/Previous Events/Wartrade/wartrade.webm"

import posterAVIF from "./../Media/Previous Events/Wartrade/poster.avif"
import posterWEBP from "./../Media/Previous Events/Wartrade/poster.webp"
import posterJPG from "./../Media/Previous Events/Wartrade/poster.jpg"

import ssAVIF from "./../Media/Previous Events/Wartrade/ss.avif"
import ssWEBP from "./../Media/Previous Events/Wartrade/ss.webp"
import ssJPG from "./../Media/Previous Events/Wartrade/ss.jpg"

const WarTrade = () => {
  return (
    <StyledWarTrade>
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
    </StyledWarTrade>
  )
}

const StyledWarTrade = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0d1019, #000a);

    backdrop-filter: blur(5px);
  }

  h1 {
    position: relative;
    z-index: 2;
    font-family: var(--cursive);
    font-size: 4rem;
  }
  p {
    position: relative;
    z-index: 2;
    margin-top: 2rem;
    width: 60%;
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 7em;
  }

  .images {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & > *:nth-of-type(1) {
      transform: translateY(20%) rotate(20deg);
    }
    & > *:nth-of-type(2) {
      transform: translateY(25%);
    }
    & > *:nth-of-type(3) {
      transform: translateY(15%) rotate(-10deg);
    }
  }
`

export default WarTrade
