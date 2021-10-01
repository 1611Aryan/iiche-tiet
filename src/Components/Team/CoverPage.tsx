import Picture from "../Picture"

import logo_webp from "./../../Media/Logo/logoWhite.webp"
import logo_png from "./../../Media/Logo/logoWhite.png"
import { IoArrowRedo } from "react-icons/io5"
import styled from "@emotion/styled"
import Page from "./style"

const CoverPage: React.FC<{ pageRef: React.RefObject<HTMLDivElement> }> = ({
  pageRef,
}) => {
  const nextPage = () => pageRef.current?.classList.add("turn")

  return (
    <StyledCoverPage ref={pageRef}>
      <div className="front">
        <Picture
          images={[
            { imgSrc: logo_webp, type: "img/webp" },
            { imgSrc: logo_png, type: "img/png" },
          ]}
          className="logo"
        />
        <h2>
          OUR
          <br />
          TEAM
        </h2>
        <IoArrowRedo onClick={nextPage} />
      </div>
      <div className="back"></div>
    </StyledCoverPage>
  )
}

const StyledCoverPage = styled(Page)`
  .front {
    display: grid;
    place-items: center;

    background: var(--primaryColor);
  }

  .logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 40%;
    img {
      width: 100%;
    }
  }

  h2 {
    color: #fff;
    font-size: 5rem;
    text-align: center;
  }

  svg {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-size: 3rem;
    cursor: pointer;
    color: #fff;
  }
`

export default CoverPage
