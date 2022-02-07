import styled from "@emotion/styled"
import { coreMember, num_of_members } from "./Data"
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5"

import CoreMember from "./Core/CoreMember"

const CoreMemberPage: React.FC<{
  index: number
  position: number
  setPosition: React.Dispatch<React.SetStateAction<number>>
  numOfPages: number
  member1: coreMember
  member2: coreMember | null
}> = ({ index, setPosition, position, numOfPages, member2, member1 }) => {
  const nextPage = () => {
    if (position === numOfPages) return
    setPosition(index + 1)
  }

  const prevPage = () => {
    setPosition(index - 1)
  }

  return (
    <StyledPage
      theme={{ index: num_of_members - index + 1 }}
      className={position > index ? "turn" : ""}
    >
      <div className="front">
        <div className="bg">
          <img
            src="https://images.pexels.com/photos/3293037/pexels-photo-3293037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        {<CoreMember member={member1} inverted={false} />}
        {member2 && <CoreMember member={member2} inverted={true} />}

        <div className="navigation">
          <IoArrowUndo className="button" onClick={prevPage} />
          {numOfPages !== index && (
            <IoArrowRedo className="button" onClick={nextPage} />
          )}
        </div>
      </div>
    </StyledPage>
  )
}

const StyledPage = styled.div<{ theme: { index: number } }>`
  /* --index: ${props => props.theme.index + 4};
  z-index: var(--index); */
  z-index: 2;
  position: absolute;
  inset: 0;

  transform-origin: left center;
  transform-style: preserve-3d;
  transition: transform linear 500ms;
  &::before {
    content: "";
    z-index: 1;
    position: absolute;
    inset: 0;

    background: #172e35;
    border-radius: 10px 0px 0px 10px;

    transform: rotateY(180deg);
    pointer-events: none;
  }
  .front {
    z-index: 2;
    position: absolute;
    inset: 0;
    border-radius: 0 10px 10px 0;
    overflow: hidden;

    background: var(--primaryColor);
    border-left: 2px dashed #fff8;

    backface-visibility: hidden;

    padding: clamp(1rem, 3vw, 2rem);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    .bg {
      position: absolute;
      inset: 0;
      filter: blur(5px) contrast(70%);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.2);
      }
    }

    .inverted {
      flex-direction: row-reverse;
    }

    .navigation {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      z-index: 2;

      .button {
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        cursor: pointer;
        color: #fff8;
        transition: color 200ms;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`

export default CoreMemberPage
