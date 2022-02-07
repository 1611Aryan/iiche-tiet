import styled from "@emotion/styled"
import {
  IoArrowRedo,
  IoArrowUndo,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5"
import Picture from "../Picture"
import { EB_Member } from "./Data"

const EB_PAGE: React.FC<{
  member: EB_Member
  index: number
  position: number
  setPosition: React.Dispatch<React.SetStateAction<number>>
  numOfPages: number
}> = ({ member, index, setPosition, position, numOfPages }) => {
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
        <Picture className="bg" images={member.images} />
        <div className="row">
          <div className="one column">
            <Picture className="display" images={member.images} />
            <div className="content">
              <div className="name">{member.details.name}</div>
              <div className="designation">{member.details.designation}</div>
            </div>
          </div>
          <div className="column">
            <div className="info">
              <p>{member.details.info}</p>
            </div>
            <div className="logos">
              {member.socials.map((handle, index) =>
                handle.type === "instagram" ? (
                  <a
                    key={index}
                    href={handle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram />
                  </a>
                ) : handle.type === "facebook" ? (
                  <a
                    key={index}
                    href={handle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoFacebook />
                  </a>
                ) : handle.type === "linkedin" ? (
                  <a
                    key={index}
                    href={handle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoLinkedin />
                  </a>
                ) : (
                  <a
                    key={index}
                    href={handle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoTwitter />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div className="row">
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

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    background: var(--primaryColor);
    border-left: 2px dashed #fff8;

    padding: clamp(1rem, 3vw, 2rem);

    .bg {
      position: absolute;
      inset: 0;
      opacity: 0.5;
      filter: blur(5px) contrast(60%);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.1);
      }
    }

    .row {
      z-index: 2;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: clamp(1rem, 3vw, 2.5rem);
    }

    .column {
      width: 50%;
      height: 100%;
      .display {
        display: block;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          aspect-ratio: 1/1;
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

      .content {
        margin-top: 2rem;
        color: #fff;
        font-size: clamp(0.9rem, 3vw, 2rem);
        line-height: 1;
        .name {
          font-weight: 700;
          font-size: 1.5em;
        }
        .designation {
          margin-top: 0.1em;
        }
      }

      .info {
        color: #fff;
        font-size: clamp(0.7rem, 3vw, 1.3rem);
        position: relative;
        p {
          position: relative;
          z-index: 2;
        }
        &::before {
          content: "“";
          position: absolute;
          top: -1rem;
          left: -1rem;
          font-size: 8em;
          line-height: 1;
          vertical-align: top;
          color: #fff5;
        }
      }
      .logos {
        margin-top: clamp(0.5rem, 3vw, 2rem);
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: clamp(1rem, 3vw, 2rem);
        align-items: center;
        color: #fffa;
        font-size: clamp(1rem, 3vw, 2rem);
        svg {
          cursor: pointer;
          transition: color 200ms;

          &:hover {
            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            color: #fff;
          }

          @keyframes shake {
            10%,
            90% {
              transform: translate3d(-1px, 0, 0);
            }

            20%,
            80% {
              transform: translate3d(1px, 0, 0);
            }

            30%,
            50%,
            70% {
              transform: translate3d(-2px, 0, 0);
            }

            40%,
            60% {
              transform: translate3d(2px, 0, 0);
            }
          }
        }
      }
    }

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
`
export default EB_PAGE
