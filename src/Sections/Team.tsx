import styled from "@emotion/styled"
import Picture from "../Components/Picture"

import CoverPage from "../Components/Team/CoverPage"

import bg_webp from "./../Media/Team/teamBg.webp"
import bg_jpg from "./../Media/Team/teamBg.jpg"
import ParthPage from "../Components/Team/ParthPage"
import { useRef } from "react"
import AnushkaPage from "../Components/Team/AnushkaPage"
import LokeshwarPage from "../Components/Team/LokeshwarPage"
import AvantikaPage from "../Components/Team/AvantikaPage"
import PrathamPage from "../Components/Team/PrathamPage"
import MehakPage from "../Components/Team/MehakPage"
import JaskaranPage from "../Components/Team/JaskaranPage"
import AryanPage from "../Components/Team/AryanPage"

export const Team = () => {
  const coverRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)
  const fourthRef = useRef<HTMLDivElement>(null)
  const fifthRef = useRef<HTMLDivElement>(null)
  const sixthRef = useRef<HTMLDivElement>(null)
  const seventhRef = useRef<HTMLDivElement>(null)
  const eighthRef = useRef<HTMLDivElement>(null)

  return (
    <StyledSection>
      <Picture
        images={[
          { imgSrc: bg_webp, type: "img/webp" },
          { imgSrc: bg_jpg, type: "img/jpg" },
        ]}
        className="bg"
      />
      <div className="overlay"></div>
      <StyledBook>
        <AryanPage prevRef={seventhRef} pageRef={eighthRef} />
        <JaskaranPage prevRef={sixthRef} pageRef={seventhRef} />
        <MehakPage prevRef={fifthRef} pageRef={sixthRef} />
        <PrathamPage prevRef={fourthRef} pageRef={fifthRef} />
        <AvantikaPage prevRef={thirdRef} pageRef={fourthRef} />
        <LokeshwarPage prevRef={secondRef} pageRef={thirdRef} />
        <AnushkaPage prevRef={firstRef} pageRef={secondRef} />
        <ParthPage prevRef={coverRef} pageRef={firstRef} />
        <CoverPage pageRef={coverRef} />
      </StyledBook>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background: linear-gradient(to bottom, #000, var(--secondaryColor));
  display: grid;
  place-items: center;

  position: relative;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000, #0008);
    backdrop-filter: blur(5px);
  }
`

const StyledBook = styled.div`
  width: 50%;
  height: 85%;
  position: relative;
  perspective-origin: left;
  perspective: 2000px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -2rem;
    width: 100%;
    height: 100%;
    background: #356c7c;
    border-radius: 10px 0 0 10px;
  }

  .turn {
    transform: rotateY(-180deg);
  }
`

export default Team
