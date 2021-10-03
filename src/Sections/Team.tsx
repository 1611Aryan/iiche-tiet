import { useState } from "react"
import styled from "@emotion/styled"

import Picture from "../Components/Picture"
import CoverPage from "../Components/Team/CoverPage"

import bg_webp from "./../Media/Team/teamBg.webp"
import bg_jpg from "./../Media/Team/teamBg.jpg"

import TeamData from "./../Components/Team/Data"
import Page from "./../Components/Team/Page"

export const Team = () => {
  const [position, setPosition] = useState(0)

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
        {TeamData.map((team, index) => (
          <Page
            index={TeamData.length - index}
            position={position}
            setPosition={setPosition}
            member={team.member}
            images={team.images}
            numOfPages={TeamData.length}
            key={index}
          />
        ))}
        <CoverPage position={position} setPosition={setPosition} />
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
  width: 48%;
  height: 78%;
  position: relative;

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
