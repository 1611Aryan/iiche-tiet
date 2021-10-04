import styled from "@emotion/styled"

const Event: React.FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  return <StyledEvent> {children}</StyledEvent>
}

const StyledEvent = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  color: #fff;
  overflow: hidden;

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
    font-size: 4rem;
  }
  p {
    position: relative;
    z-index: 2;
    margin-top: 2rem;
    width: 60%;
    font-size: 1.3rem;
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
`

export default Event
