import styled from "@emotion/styled"
import { coreMember } from "./Data"
import { IoArrowRedo, IoArrowUndo, IoLogoLinkedin } from "react-icons/io5"

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
    setPosition(position => index + 1)
  }

  const prevPage = () => {
    setPosition(position => index - 1)
  }

  return (
    <StyledPage className={position > index ? "turn" : ""}>
      <div className="front">
        <div className="bg">
          <img
            src="https://images.pexels.com/photos/3293037/pexels-photo-3293037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="row">
          <div className="photo">
            <img src={member1.image} alt="" />
          </div>
          <div className="info">
            <a target="_blank" href={member1.linkedin} rel="noreferrer">
              <h4>{member1.name}</h4>
            </a>
            <p>{member1.description}</p>
            <a
              className="linkedin"
              target="_blank"
              href={member1.linkedin}
              rel="noreferrer"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
        {member2 && (
          <div className="row  inverted">
            <div className="photo">
              <img src={member2.image} alt="" />
            </div>
            <div className="info">
              <a href={member2.linkedin} target="_blank" rel="noreferrer">
                <h4>{member2.name}</h4>
              </a>
              <p>{member2.description}</p>
              <a
                className="linkedin"
                target="_blank"
                href={member2.linkedin}
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        )}

        <div className="navigation">
          <IoArrowUndo className="button" onClick={prevPage} />
          {numOfPages !== index && (
            <IoArrowRedo className="button" onClick={nextPage} />
          )}
        </div>
      </div>
      <div className="back"></div>
    </StyledPage>
  )
}

const StyledPage = styled.div`
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
    overflow: hidden;

    background: var(--primaryColor);
    border-left: 2px dashed #fff8;

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

    .row {
      --size: 35%;

      width: 100%;
      height: var(--size);
      display: flex;
      justify-content: space-between;
      align-items: center;

      z-index: 2;

      .photo {
        display: block;
        max-height: 100%;
        width: var(--size);
        aspect-ratio: 1/1;

        border-radius: 5px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          object-fit: cover;
        }
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          --shadow: #0004;

          box-shadow: inset 5px 5px 10px var(--shadow),
            inset -5px 5px 10px var(--shadow), inset 5px -5px 10px var(--shadow),
            inset -5px -5px 10px var(--shadow);
        }
      }

      .info {
        height: 100%;
        width: calc(100% - var(--size) - 5%);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;

        color: #fff;
        line-height: 1;

        font-size: clamp(0.75rem, 1.2vw, 1rem);
        h4 {
          font-size: clamp(1.25rem, 2vw, 2rem);
        }
        p {
          line-height: 1.25;
        }
        .linkedin {
          font-size: clamp(1rem, 2vw, 1.4rem);
        }
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

    @media only screen and (max-width: 500px) {
      .row {
        --size: 40%;
        align-items: flex-start;
        .photo {
          img {
            height: 100%;
          }
        }
        .info {
          justify-content: flex-start;
          gap: 0.25rem;
          p {
            line-height: 1.15;
          }
          .linkedin {
            display: none;
          }
        }
      }
    }
    @media only screen and (max-width: 400px) {
      .row {
        .info {
          font-size: 0.6rem;
          h4 {
            font-size: 1.1rem;
          }

          .linkedin {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`

export default CoreMemberPage
