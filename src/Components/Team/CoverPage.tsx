import { IoArrowRedo } from "react-icons/io5"
import styled from "@emotion/styled"

import Picture from "../Picture"

import logo_webp from "./../../Media/Logo/logoWhite.webp"
import logo_png from "./../../Media/Logo/logoWhite.png"

import cover_webp from "./../../Media/Team/teamCover.webp"
import cover_jpg from "./../../Media/Team/teamCover.jpg"

const CoverPage: React.FC<{
  setPosition: React.Dispatch<React.SetStateAction<number>>
  position: number
}> = ({ position, setPosition }) => {
  const nextPage = () => {
    setPosition(position => position + 1)
  }

  return (
    <StyledCoverPage className={position !== 0 ? "turn" : ""}>
      <div className="front">
        <Picture
          images={[
            { imgSrc: logo_webp, type: "image/webp" },
            { imgSrc: logo_png, type: "image/png" },
          ]}
          className="logo"
        />

        <Picture
          images={[
            { imgSrc: cover_webp, type: "image/webp" },
            { imgSrc: cover_jpg, type: "image/jpg" },
          ]}
          className="coverPhoto"
        />
        <div className="circle small"></div>
        <div className="circle large"></div>
        <h1>
          OUR
          <br />
          TEAM
        </h1>
        <IoArrowRedo onClick={nextPage} />
      </div>
      <div className="back"></div>
    </StyledCoverPage>
  )
}

const StyledCoverPage = styled.div`
  z-index: 2;
  position: absolute;
  inset: 0;

  transform-origin: left center;
  transform-style: preserve-3d;
  transition: transform linear 500ms;

  .back {
    position: absolute;
    inset: 0;
    background: #172e35;
    border-radius: 10px 0px 0px 10px;

    transform: rotateY(180deg);
    pointer-events: none;
  }
  .front {
    position: absolute;
    inset: 0;
    border-radius: 0 10px 10px 0;
    display: grid;
    place-items: center;

    overflow: hidden;

    background: var(--primaryColor);
    padding: clamp(1rem, 3vw, 2rem);
  }

  .logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 40%;
    img {
      width: 100%;
    }
  }

  h1 {
    z-index: 2;
    text-align: center;
    color: #fff;
    font-size: clamp(3rem, 7vw, 5rem);
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(2px);
  }

  .small {
    width: 18vw;
    height: 18vw;
    top: 20%;
    right: 15%;
    background: rgba(20, 65, 27, 0.4);
  }

  .large {
    width: 30vw;
    height: 30vw;
    bottom: 5%;
    left: 5%;
    background: rgba(0, 0, 0, 0.4);
  }

  .coverPhoto {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    filter: blur(5px) contrast(80%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0 10px 10px 0;
    }
  }

  svg {
    position: absolute;
    bottom: clamp(1rem, 3vw, 2rem);
    right: clamp(1rem, 3vw, 2rem);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    cursor: pointer;
    color: #fffa;
    transition: color ease 100ms;

    &:hover {
      color: #fff;
    }
  }
`

export default CoverPage
