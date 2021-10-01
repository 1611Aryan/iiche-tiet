import Picture from "../Picture"

import { IoArrowUndo } from "react-icons/io5"
import styled from "@emotion/styled"
import Page from "./style"

import aryan_jpg from "./../../Media/Team/aryan.jpg"

const AryanPage: React.FC<{
  prevRef: React.RefObject<HTMLDivElement>
  pageRef: React.RefObject<HTMLDivElement>
}> = ({ prevRef, pageRef }) => {
  const prevPage = () => prevRef.current?.classList.remove("turn")

  return (
    <StyledAryanPage ref={pageRef}>
      <div className="front">
        <div className="row one">
          <Picture images={[{ imgSrc: aryan_jpg, type: "img/jpg" }]} />
          <div className="content">
            <div>
              <h4>Name</h4>
              <span>Aryan Gupta</span>
            </div>
            <div>
              <h4>Designation</h4>
              <span>Technical Head</span>
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
        </div>
      </div>
      <div className="back"></div>
    </StyledAryanPage>
  )
}

const StyledAryanPage = styled(Page)`
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

export default AryanPage
