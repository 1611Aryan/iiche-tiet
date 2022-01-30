import styled from "@emotion/styled"

const StyledBookMark = styled.div`
  --wordSize: 8ch;

  --sizeX: calc(var(--wordSize) + var(--wordSize) / 4);
  --sizeY: calc(var(--sizeX) / 2);

  --bg: #7fadbe;

  --width: clamp(calc(var(--sizeX) / 10), 1vw, calc(var(--sizeX) / 7));
  --height: calc(var(--sizeY) / 2);

  position: absolute;
  top: 1rem;
  right: calc(-1 * var(--sizeX));
  width: var(--sizeX);
  height: var(--sizeY);

  background: var(--bg);
  display: flex;
  align-items: center;

  cursor: pointer;

  font-size: clamp(0.7rem, 1vw, 0.9rem);

  span {
    display: inline-block;
    margin-left: var(--width);
    width: min-content;

    line-height: 1.25;
  }

  box-shadow: inset 2px 0px 2px rgba(0, 0, 0, 0.1);

  &::before,
  &::after {
    position: absolute;
    content: "";
    right: calc(-1 * var(--width));

    width: 0;
    height: 0;
    border-style: solid;
    z-index: 2;
  }
  &::before {
    top: 0;
    border-width: var(--height) var(--width) 0 0;
    border-color: var(--bg) transparent transparent transparent;
  }
  &::after {
    bottom: 0;
    border-width: var(--height) 0 0 var(--width);
    border-color: transparent transparent transparent var(--bg);
  }

  @media only screen and (max-width: 500px), (max-aspect-ratio: 1/1) {
    --wordSize: 4ch;
    top: calc(-1 * var(--sizeY));
    right: -1rem;

    transform-origin: left bottom;
    transform: rotateZ(-90deg);

    span {
      height: 1rem;
      overflow: hidden;
    }
  }
`

export default StyledBookMark
