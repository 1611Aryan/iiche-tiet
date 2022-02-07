import { useState } from "react"
import styled from "@emotion/styled"

import Picture from "../Components/Picture"
import CoverPage from "../Components/Team/CoverPage"

import bg_webp from "./../Media/Team/teamBg.webp"
import bg_jpg from "./../Media/Team/teamBg.jpg"

import EB_TeamData, {
  CoreMemberData,
  EB_MEMBERS_LENGTH,
  num_of_members,
} from "./../Components/Team/Data"
import EB_PAGE from "../Components/Team/EB_PAGE"
import CoreMemberPage from "Components/Team/CoreMemberPage"
import CoreMemberHeading from "Components/Team/Core/CoreMemberHeading"
import CoreBookMark from "Components/Team/Core/CoreBookMark"
import EB_BOOKMARK from "Components/Team/EB_BOOKMARK"

export const Team = () => {
  const [position, setPosition] = useState(0)

  return (
    <StyledSection id="team">
      <Picture
        images={[
          { imgSrc: bg_webp, type: "image/webp" },
          { imgSrc: bg_jpg, type: "image/jpg" },
        ]}
        className="bg"
      />
      <div className="overlay"></div>
      <StyledBook>
        {Array(num_of_members - EB_MEMBERS_LENGTH)
          .fill({})
          .map((_, index) => (
            <CoreMemberPage
              index={EB_TeamData.length + 2 + index}
              position={position}
              setPosition={setPosition}
              numOfPages={num_of_members + 1}
              member1={CoreMemberData[index * 2]}
              member2={CoreMemberData[index * 2 + 1] || null}
              key={CoreMemberData[index].id}
            />
          ))
          .reverse()}
        <CoreMemberHeading
          index={EB_TeamData.length + 1}
          position={position}
          setPosition={setPosition}
          numOfPages={num_of_members + 1}
        />
        {EB_TeamData.map((member, index) => (
          <EB_PAGE
            index={index + 1}
            position={position}
            setPosition={setPosition}
            member={member}
            numOfPages={num_of_members + 1}
            key={member.id}
          />
        )).reverse()}

        <CoverPage position={position} setPosition={setPosition} />
        {position < EB_MEMBERS_LENGTH + 1 ? (
          <CoreBookMark setPosition={setPosition} />
        ) : (
          <EB_BOOKMARK setPosition={setPosition} />
        )}
      </StyledBook>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background: linear-gradient(to bottom, #000, var(--secondaryColor));
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 0 var(--padding);

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
    background: linear-gradient(to bottom, #000, #0008, #000d);
    //    backdrop-filter: blur(5px);
  }
`

const StyledBook = styled.div`
  width: 48%;
  height: 78%;
  position: relative;

  perspective: 2000px;

  margin-left: clamp(1rem, 3vw, 2rem);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: calc(-1 * clamp(1rem, 3vw, 2rem));
    width: 100%;
    height: 100%;
    background: #2e5d6b;
    border-radius: 10px 0 0 10px;
  }

  > * {
    will-change: transform;
  }

  .turn {
    transform: rotateY(-180deg);

    animation: disappear 1ms linear 300ms;
  }

  @keyframes disappear {
    to {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 50%;

    perspective: 1000px;

    .turn .front {
      display: none;
    }
  }

  @media only screen and (max-aspect-ratio: 1/1) {
    width: 100%;
    height: 50%;

    perspective: 1000px;
  }
`

export default Team
