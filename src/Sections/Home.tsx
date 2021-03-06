import styled from "@emotion/styled"
import NavBar from "../Components/NavBar"

const Home = () => {
  return (
    <StyledHome>
      <NavBar />
      <div className="circle"></div>
      <div className="triangle"></div>
      <h1>
        <span className="line1">IIChE</span>
        <span className="line2">THAPAR</span>
        <span className="line3">STUDENT</span>
        <span className="line4">CHAPTER</span>
      </h1>

      <svg className="atom" viewBox="0 0 100 100">
        <defs>
          <filter id="blur" x="-10" y="-10" width="120" height="120">
            <feGaussianBlur in="SourceGraphic" stdDeviation=".4" />
          </filter>
          <filter id="blur2" x="-10" y="-10" width="120" height="120">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>
        <g filter="url(#blur2)">
          <circle className="kern" cx="50" cy="50" r="2" />
        </g>
        <circle className="kern" cx="50" cy="50" r="2" />
        <g className="lines">
          <path
            className=""
            d="M  57.5,50 57.39,55.21 57.05,60.26 56.5,65 55.75,69.28 54.82,72.98 53.75,75.98 52.57,78.19 51.3,79.54 50,80 48.7,79.54 47.43,78.19 46.25,75.98 45.18,72.98 44.25,69.28 43.5,65 42.95,60.26 42.61,55.21 42.5,50 42.61,44.79 42.95,39.74 43.5,35 44.25,30.72 45.18,27.02 46.25,24.02 47.43,21.81 48.7,20.46 50,20 51.3,20.46 52.57,21.81 53.75,24.02 54.82,27.02 55.75,30.72 56.5,35 57.05,39.74 57.39,44.79 57.5,50"
          ></path>
          <path
            className=""
            d="M  53.75,56.5 49.18,59 44.64,61.23 40.26,63.13 36.17,64.62 32.51,65.67 29.38,66.24 26.87,66.32 25.07,65.9 24.02,65 23.76,63.64 24.3,61.87 25.63,59.74 27.69,57.32 30.43,54.67 33.76,51.88 37.59,49.03 41.8,46.21 46.25,43.5 50.82,41 55.36,38.77 59.74,36.88 63.83,35.38 67.49,34.33 70.62,33.76 73.13,33.68 74.93,34.1 75.98,35 76.24,36.36 75.7,38.13 74.38,40.26 72.31,42.68 69.57,45.33 66.24,48.12 62.41,50.97 58.2,53.79 53.75,56.5"
          ></path>
          <path
            className=""
            d="M  53.75,43.5 58.2,46.21 62.41,49.03 66.24,51.88 69.57,54.67 72.31,57.32 74.38,59.74 75.7,61.87 76.24,63.64 75.98,65 74.93,65.9 73.13,66.32 70.63,66.24 67.49,65.67 63.83,64.62 59.74,63.13 55.36,61.23 50.82,59 46.25,56.5 41.8,53.79 37.59,50.97 33.76,48.13 30.43,45.33 27.69,42.68 25.63,40.26 24.3,38.13 23.76,36.36 24.02,35 25.07,34.1 26.87,33.68 29.37,33.76 32.51,34.33 36.17,35.38 40.26,36.87 44.64,38.77 49.18,41 53.75,43.5"
          ></path>
        </g>
        <g className="electronTails" filter="url(#blur)">
          <path
            className="tail tail1"
            d="M  57.5,50 57.39,55.21 57.05,60.26 56.5,65 55.75,69.28 54.82,72.98 53.75,75.98 52.57,78.19 51.3,79.54 50,80 48.7,79.54 47.43,78.19 46.25,75.98 45.18,72.98 44.25,69.28 43.5,65 42.95,60.26 42.61,55.21 42.5,50 42.61,44.79 42.95,39.74 43.5,35 44.25,30.72 45.18,27.02 46.25,24.02 47.43,21.81 48.7,20.46 50,20 51.3,20.46 52.57,21.81 53.75,24.02 54.82,27.02 55.75,30.72 56.5,35 57.05,39.74 57.39,44.79 57.5,50"
          ></path>
          <path
            className="tail tail2"
            d="M  53.75,56.5 49.18,59 44.64,61.23 40.26,63.13 36.17,64.62 32.51,65.67 29.38,66.24 26.87,66.32 25.07,65.9 24.02,65 23.76,63.64 24.3,61.87 25.63,59.74 27.69,57.32 30.43,54.67 33.76,51.88 37.59,49.03 41.8,46.21 46.25,43.5 50.82,41 55.36,38.77 59.74,36.88 63.83,35.38 67.49,34.33 70.62,33.76 73.13,33.68 74.93,34.1 75.98,35 76.24,36.36 75.7,38.13 74.38,40.26 72.31,42.68 69.57,45.33 66.24,48.12 62.41,50.97 58.2,53.79 53.75,56.5"
          ></path>
          <path
            className="tail tail3"
            d="M  53.75,43.5 58.2,46.21 62.41,49.03 66.24,51.88 69.57,54.67 72.31,57.32 74.38,59.74 75.7,61.87 76.24,63.64 75.98,65 74.93,65.9 73.13,66.32 70.63,66.24 67.49,65.67 63.83,64.62 59.74,63.13 55.36,61.23 50.82,59 46.25,56.5 41.8,53.79 37.59,50.97 33.76,48.13 30.43,45.33 27.69,42.68 25.63,40.26 24.3,38.13 23.76,36.36 24.02,35 25.07,34.1 26.87,33.68 29.37,33.76 32.51,34.33 36.17,35.38 40.26,36.87 44.64,38.77 49.18,41 53.75,43.5"
          ></path>
        </g>
        <g className="electrons">
          <path
            className="electron electron1"
            d="M  57.5,50 57.39,55.21 57.05,60.26 56.5,65 55.75,69.28 54.82,72.98 53.75,75.98 52.57,78.19 51.3,79.54 50,80 48.7,79.54 47.43,78.19 46.25,75.98 45.18,72.98 44.25,69.28 43.5,65 42.95,60.26 42.61,55.21 42.5,50 42.61,44.79 42.95,39.74 43.5,35 44.25,30.72 45.18,27.02 46.25,24.02 47.43,21.81 48.7,20.46 50,20 51.3,20.46 52.57,21.81 53.75,24.02 54.82,27.02 55.75,30.72 56.5,35 57.05,39.74 57.39,44.79 57.5,50"
          ></path>
          <path
            className="electron electron2"
            d="M  53.75,56.5 49.18,59 44.64,61.23 40.26,63.13 36.17,64.62 32.51,65.67 29.38,66.24 26.87,66.32 25.07,65.9 24.02,65 23.76,63.64 24.3,61.87 25.63,59.74 27.69,57.32 30.43,54.67 33.76,51.88 37.59,49.03 41.8,46.21 46.25,43.5 50.82,41 55.36,38.77 59.74,36.88 63.83,35.38 67.49,34.33 70.62,33.76 73.13,33.68 74.93,34.1 75.98,35 76.24,36.36 75.7,38.13 74.38,40.26 72.31,42.68 69.57,45.33 66.24,48.12 62.41,50.97 58.2,53.79 53.75,56.5"
          ></path>
          <path
            className="electron electron3"
            d="M  53.75,43.5 58.2,46.21 62.41,49.03 66.24,51.88 69.57,54.67 72.31,57.32 74.38,59.74 75.7,61.87 76.24,63.64 75.98,65 74.93,65.9 73.13,66.32 70.63,66.24 67.49,65.67 63.83,64.62 59.74,63.13 55.36,61.23 50.82,59 46.25,56.5 41.8,53.79 37.59,50.97 33.76,48.13 30.43,45.33 27.69,42.68 25.63,40.26 24.3,38.13 23.76,36.36 24.02,35 25.07,34.1 26.87,33.68 29.37,33.76 32.51,34.33 36.17,35.38 40.26,36.87 44.64,38.77 49.18,41 53.75,43.5"
          ></path>
        </g>
      </svg>
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
    --size: 25vw;

    position: absolute;
    top: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
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

    font-size: clamp(0.6rem, 1.5vw, 1.1rem);

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

  svg.atom {
    width: 30vw;
    overflow: visible;
  }

  svg circle.kern {
    fill: var(--primaryColor);
    stroke: none;
  }
  .atom path {
    fill: none;
    stroke: #fff;

    stroke-width: 0.06;
  }

  path.tail {
    stroke: #68a6be;

    fill: none;
    animation: atom 1.5s infinite linear;
    stroke-dashoffset: 0;
    stroke-dasharray: 20, 44.5;
    stroke-width: 0.6;
  }
  path.electron {
    stroke: #58a8c0;

    fill: none;
    animation: atom 1.5s infinite linear;
    stroke-dashoffset: 0;
    stroke-dasharray: 0.1, 64.4;
    stroke-width: 2;
    stroke-linecap: round;
  }
  path.tail1,
  path.electron1 {
    animation-delay: -1s;
  }
  path.tail2,
  path.electron2 {
    animation-delay: -1.4s;
  }

  @keyframes atom {
    to {
      stroke-dashoffset: 129;
    }
  }

  @media only screen and (max-width: 500px) {
    h1 {
      z-index: 2;
    }

    svg.atom {
      display: none;
    }
  }
`

export default Home
