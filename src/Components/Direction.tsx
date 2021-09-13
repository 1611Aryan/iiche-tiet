import styled from "@emotion/styled"
import logoAVIF from "./../Media/Previous Events/Direction/logo.avif"
import logoWEBP from "./../Media/Previous Events/Direction/logo.webp"
import logojpg from "./../Media/Previous Events/Direction/logo.jpg"

import ss1AVIF from "./../Media/Previous Events/Direction/ss1.avif"
import ss1WEBP from "./../Media/Previous Events/Direction/ss1.webp"
import ss1jpg from "./../Media/Previous Events/Direction/ss1.jpg"

import ss2jpg from "./../Media/Previous Events/Direction/ss2.jpg"
import ss2avif from "./../Media/Previous Events/Direction/ss1.avif"
import ss2webp from "./../Media/Previous Events/Direction/ss2.webp"
import Polaroid from "./Polaroid"

const Direction = () => {
  return (
    <StyledDirection>
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
    </StyledDirection>
  )
}

const StyledDirection = styled.section`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: hidden;

  h1 {
    font-family: var(--cursive);
    font-size: 4rem;
  }
  p {
    margin-top: 2rem;
    width: 60%;
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 7em;
  }

  .images {
    position: absolute;
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

export default Direction
