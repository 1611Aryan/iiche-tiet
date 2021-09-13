import styled from "@emotion/styled"
import atomGIF from "./../Media/Atom/atom.gif"

const Home = () => {
  return (
    <StyledHome>
      <div className="circle"></div>
      <div className="triangle"></div>
      <h1>
        <span className="line1">IIChE</span>
        <span className="line2">THAPAR</span>
        <span className="line3">STUDENT</span>
        <span className="line4">CHAPTER</span>
      </h1>

      <picture>
        <source srcSet={atomGIF} type="image/gif" />
        <img src={atomGIF} alt="atom" />
      </picture>
    </StyledHome>
  )
}

const StyledHome = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 calc(4 * var(--padding));

  position: relative;
  z-index: 3;
  > * {
    width: 40%;
  }

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 25vw;
    height: 25vw;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(8px);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .triangle {
    position: absolute;
    top: 0;
    right: -10%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 120vw 100vh 0;
    border-color: transparent rgba(255, 255, 255, 0.05) transparent transparent;

    filter: blur(10px);
  }

  h1 {
    color: white;
    display: flex;
    flex-direction: column;
    font-weight: 400;

    font-size: 1.1rem;

    span {
      line-height: 1;
    }
    .line1 {
      font-size: 6em;
    }
    .line2 {
      font-size: 3.5em;
    }
    .line3 {
      font-size: 4.5em;
    }
    .line4 {
      font-size: 4.5em;
    }
  }
`

export default Home
