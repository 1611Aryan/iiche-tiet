import styled from "@emotion/styled"

const Page = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform-origin: left center;
  transform-style: preserve-3d;
  transition: transform ease-in-out 700ms;
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #172e35;
    border-radius: 10px 0px 0px 10px;

    transform: rotateY(180deg);
    pointer-events: none;
  }
  .front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 10px 10px 0;
  }
`

export default Page
