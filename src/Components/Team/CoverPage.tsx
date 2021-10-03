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
            { imgSrc: logo_webp, type: "img/webp" },
            { imgSrc: logo_png, type: "img/png" },
          ]}
          className="logo"
        />

        <Picture
          images={[
            { imgSrc: cover_webp, type: "img/webp" },
            { imgSrc: cover_jpg, type: "img/jpg" },
          ]}
          className="coverPhoto"
        />
        <div className="circle small"></div>
        <div className="circle large"></div>
        <h2>
          OUR
          <br />
          TEAM
        </h2>
        <IoArrowRedo onClick={nextPage} />
      </div>
      <div className="back"></div>
    </StyledCoverPage>
  )
}

const StyledCoverPage = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform-origin: left center;
  transform-style: preserve-3d;
  transition: transform ease-in-out 500ms;

  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #172e35;
    border-radius: 10px 0px 0px 10px;

    transform: rotateY(180deg);
    pointer-events: none;
  }
  .front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 10px 10px 0;
    display: grid;
    place-items: center;

    background: var(--primaryColor);
    padding: 2rem;
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

  h2 {
    z-index: 2;
    width: 100%;
    color: #fff;
    font-size: 5rem;
    line-height: 1;
    margin-bottom: 3rem;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(2px);
  }

  .small {
    width: 200px;
    height: 200px;
    top: 20%;
    right: 15%;
    background: rgba(20, 65, 27, 0.4);
  }

  .large {
    width: 350px;
    height: 350px;
    bottom: 5%;
    left: 5%;
    background: rgba(0, 0, 0, 0.4);
  }

  .coverPhoto {
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    width: 55%;
    transform: rotate(-25deg);

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  svg {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-size: 2.5rem;
    cursor: pointer;
    color: #fffa;
    transition: color ease 100ms;

    &:hover {
      color: #fff;
    }
  }
`

export default CoverPage
