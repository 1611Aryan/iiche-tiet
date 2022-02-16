import styled from "@emotion/styled"
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5"
import MamImage from "Media/Team/NeetuMam.jpeg"

const PresidentPage: React.FC<{
  index: number
  position: number
  setPosition: React.Dispatch<React.SetStateAction<number>>
  numOfPages: number
}> = ({ index, setPosition, position, numOfPages }) => {
  const nextPage = () => {
    if (position === numOfPages) return
    setPosition(_position => index + 1)
  }

  const prevPage = () => {
    setPosition(_position => index - 1)
  }

  return (
    <StyledPage className={position > index ? "turn" : ""}>
      <div className="front">
        <div className="bg">
          <img src={MamImage} alt="" />
          <img
            src="https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <h3>OUR PRESIDENT</h3>
        <img className="mam" src={MamImage} alt="" />
        <h4>Dr. Neetu</h4>
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
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > * + * {
      margin-top: clamp(1rem,2vw,2rem);
    }

    background: var(--primaryColor);
    border-left: 2px dashed #fff8;

    padding: clamp(1rem, 3vw, 2rem);

    backface-visibility: hidden;

    .mam {
      z-index: 2;
      height: 50%;
      aspect-ratio: 1/1;
      object-fit: cover;
      display: inline-block;
    }

    .bg {
      position: absolute;
      inset: 0;

      img {
        position: absolute;
        inset: 0;
        filter: blur(5px) contrast(70%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.2);
        opacity: 0.8;
      }
    }
    h3 {
      z-index: 2;
      text-align: center;

      font-size: clamp(1.5rem, 3vw, 3rem);
      color: #fff;
    }
    h4 {
      z-index: 2;
      text-align: center;
      font-size: clamp(1.25rem, 3vw, 2rem);
      color: #fff;
    }
  }

  .navigation {
    position: absolute;
    inset: auto clamp(1rem, 3vw, 2rem) clamp(1rem, 3vw, 2rem)
      clamp(1rem, 3vw, 2rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`

export default PresidentPage
