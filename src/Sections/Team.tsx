import { useEffect, useState } from "react"
import styled from "@emotion/styled"

import Picture from "../Components/Picture"
import CoverPage from "../Components/Team/CoverPage"

import bg_webp from "./../Media/Team/teamBg.webp"
import bg_jpg from "./../Media/Team/teamBg.jpg"

import EB_TeamData, {
  CoreMemberData,
  num_of_members,
} from "./../Components/Team/Data"
import EB_PAGE from "./../Components/Team/Page"
import CoreMemberPage from "Components/Team/CoreMemberPage"
import CoreMemberHeading from "Components/Team/CoreMemberHeading"

export const Team = () => {
  const [position, setPosition] = useState(10)

  useEffect(() => console.log(position, num_of_members), [position])

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
        {Array(num_of_members - EB_TeamData.length)
          .fill({})
          .map((_, index) => (
            <CoreMemberPage
              index={num_of_members + 1 - index}
              position={position}
              setPosition={setPosition}
              numOfPages={num_of_members + 1}
              member1={CoreMemberData[index]}
              member2={CoreMemberData[index + 1]}
              key={index}
            />
          ))}
        <CoreMemberHeading
          index={EB_TeamData.length + 1}
          position={position}
          setPosition={setPosition}
          numOfPages={num_of_members + 1}
        />
        {EB_TeamData.map((member, index) => (
          <EB_PAGE
            index={EB_TeamData.length - index}
            position={position}
            setPosition={setPosition}
            member={member}
            numOfPages={num_of_members + 1}
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

  .turn {
    transform: rotateY(-180deg);
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 50%;

    perspective: 500px;
  }
`

export default Team
