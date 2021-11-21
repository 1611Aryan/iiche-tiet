import styled from "@emotion/styled"

const Event: React.FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  return <StyledEvent> {children}</StyledEvent>
}

const StyledEvent = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  color: #fff;
  overflow: hidden;

  padding: 0 var(--padding);

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(5px);
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0d1019, #000a);
  }

  h1 {
    position: relative;
    z-index: 2;
    font-family: var(--cursive);
    font-size: clamp(2.5rem, 5vw, 4rem);
  }
  p {
    position: relative;
    z-index: 2;
    margin-top: 2rem;
    width: 60%;
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    text-align: center;
    margin-bottom: 7em;
  }

  .images {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    > * {
      &:hover {
        transform: rotate(0deg) scale(1.2) !important;
        z-index: 10;
      }
    }

    & > *:nth-of-type(1) {
      transform: translateY(20%) rotate(20deg);
    }
    & > *:nth-of-type(2) {
      transform: translateY(25%);
    }
    & > *:nth-of-type(3) {
      transform: translateY(15%) rotate(-10deg);
    }
  }

  @media only screen and (max-width: 500px) {
    p {
      width: 100%;
      margin-bottom: 12rem;
      word-wrap: break-word;
    }

    .images {
      display: block;

      & > *:nth-of-type(1) {
        position: absolute;
        bottom: 0;
        left: 0;
        transform-origin: left bottom;
        transform: translate(-50%, -60%) rotate(40deg);
      }
      & > *:nth-of-type(2) {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform-origin: center bottom;
        transform: translate(-50%, 20%);
        &:hover {
          transform: translate(-50%, 0%) scale(1.2) !important;
        }
      }
      & > *:nth-of-type(3) {
        position: absolute;
        bottom: 0;
        right: 0;
        transform-origin: right bottom;
        transform: translate(40%, -10%) rotate(-20deg);
      }
    }
  }
`

export default Event
