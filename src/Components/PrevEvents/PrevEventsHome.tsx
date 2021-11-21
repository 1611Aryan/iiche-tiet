import styled from "@emotion/styled"
import EventLogos from "./EventLogos"

const PrevEventsHome = () => {
  return (
    <StyledPrevEventsHome>
      <div className="triangle"></div>
      <svg className="line" viewBox="0 0 1920 958" fill="none">
        <path d="M2179.91 675.672C1657.3 1829.8 701.432 -1403.87 -312.816 835.999" />
      </svg>
      <h1>
        OUR PREVIOUS
        <br /> EVENTS
      </h1>
      <EventLogos />
      <div className="swipe">
        <h3>Swipe to See</h3>
        <svg viewBox="0 0 351 59" fill="none">
          <path
            d="M350.997 29.6418L300.997 0.774332V58.5094L350.997 29.6418ZM0.997192 34.6418H305.997V24.6418H0.997192V34.6418Z"
            fill="#C61741"
          />
        </svg>
      </div>
    </StyledPrevEventsHome>
  )
}

const StyledPrevEventsHome = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  background: linear-gradient(to bottom, var(--bg), #000);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .triangle {
    --size: 30vw;

    position: absolute;
    top: 50%;
    right: 0;

    transform: translate(20%, -50%) rotate(-20deg);
    filter: blur(50px);

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 calc(var(--size) / 2) calc((var(--size) / 2) * 1.74)
      calc(var(--size) / 2);
    border-color: transparent transparent var(--secondaryColor);
  }

  .line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    path {
      stroke: var(--primaryColor);
      stroke-width: 10;
      stroke-linecap: round;
      filter: blur(10px);
      stroke-dasharray: 3000;
      stroke-dashoffset: -3000;
      animation: dash ease 2s forwards;
    }

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  }

  h1 {
    position: relative;
    z-index: 2;
    color: #fff;
    text-align: center;
  }
  .swipe {
    font-size: 2rem;
    font-family: var(--cursive);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-weight: 100;
    }

    svg {
      width: 12ch;
    }
  }
`

export default PrevEventsHome
