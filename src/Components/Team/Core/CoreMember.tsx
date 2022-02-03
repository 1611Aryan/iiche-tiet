import styled from "@emotion/styled"
import { useRef } from "react"
import { IoLogoLinkedin } from "react-icons/io5"
import { coreMember } from "../Data"

const CoreMember: React.FC<{ member: coreMember; inverted: boolean }> = ({
  member,
  inverted,
}) => {
  const imageRef = useRef<HTMLImageElement>(null)

  const errorHandler = (err: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(err)
    if (imageRef.current)
      imageRef.current.src =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  }

  return (
    <StyledCoreMember className={inverted ? "inverted" : ""}>
      <div className="photo">
        <img ref={imageRef} onError={errorHandler} src={member.image} alt="" />
      </div>
      <div className="info">
        <a
          target="_blank"
          href={member.linkedin ? member.linkedin : "#"}
          rel="noreferrer"
        >
          <h4>{member.name}</h4>
        </a>
        <p>{member.description}</p>
        {member.linkedin && (
          <a
            className="linkedin"
            target="_blank"
            href={member.linkedin}
            rel="noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        )}
      </div>
    </StyledCoreMember>
  )
}

const StyledCoreMember = styled.div`
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

    border-radius: 5px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-position: center center;
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

  @media only screen and (max-width: 500px) {
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
  @media only screen and (max-width: 400px) {
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
`

export default CoreMember
