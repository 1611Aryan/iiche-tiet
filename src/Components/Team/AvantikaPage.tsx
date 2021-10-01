import Picture from "../Picture"

import { IoArrowRedo, IoArrowUndo } from "react-icons/io5"
import styled from "@emotion/styled"
import Page from "./style"

import avantika_jpg from "./../../Media/Team/avantika.jpg"

const AvantikaPage: React.FC<{
  prevRef: React.RefObject<HTMLDivElement>
  pageRef: React.RefObject<HTMLDivElement>
}> = ({ prevRef, pageRef }) => {
  const prevPage = () => prevRef.current?.classList.remove("turn")

  const nextPage = () => pageRef.current?.classList.add("turn")

  return (
    <StyledAvantikaPage ref={pageRef}>
      <div className="front">
        {" "}
        <div className="row one">
          <Picture images={[{ imgSrc: avantika_jpg, type: "img/jpg" }]} />
          <div className="content">
            <div>
              <h4>Name</h4>
              <span>Avantika Garg</span>
            </div>
            <div>
              <h4>Designation</h4>
              <span>PR Head</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            accusamus perferendis temporibus ad ullam, vero recusandae doloribus
            modi deserunt explicabo natus amet, atque, quibusdam numquam.
          </div>
        </div>
        <div className="row">
          <IoArrowUndo onClick={prevPage} />
          <IoArrowRedo onClick={nextPage} />
        </div>
      </div>
      <div className="back"></div>
    </StyledAvantikaPage>
  )
}

const StyledAvantikaPage = styled(Page)`
  .front {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    background: var(--primaryColor);
    border-left: 2px dashed #fff4;

    padding: 2rem;

    svg {
      font-size: 3rem;
      cursor: pointer;
      color: #fff;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      overflow: hidden;
      picture {
        width: 45%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
      }
    }

    .one {
      height: 45%;
    }
  }
`

export default AvantikaPage
