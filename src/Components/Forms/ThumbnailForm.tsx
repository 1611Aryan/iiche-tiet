import styled from "@emotion/styled"
import { IoMdSend } from "react-icons/io"
import { Link } from "react-router-dom"

const ThumbnailForm: React.FC<{ index: number; formName: string }> = ({
  index,
  formName,
}) => {
  return (
    <Link to={`/forms/${formName}`}>
      <StyledThumbnail key={index}>
        <div>
          <h4>{formName}</h4>
        </div>
        <button>
          <span> Fill Form</span>
          <IoMdSend />
        </button>
      </StyledThumbnail>
    </Link>
  )
}

const StyledThumbnail = styled.li`
  min-width: 18%;
  height: 32vh;
  background: var(--primaryColor);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  div {
    padding: calc(var(--padding) / 2);
    flex: 1;
    background: #fffc;
    display: grid;
    place-items: center;
    h4 {
      font-size: clamp(1.5rem, 3vw, 2rem);
      word-break: break-word;
    }
  }
  button {
    padding: calc(var(--padding) / 3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1rem;
    background: var(--primaryColor);
  }

  cursor: pointer;

  transition: transform 100ms;
  &:hover {
    transform: scale(1.1);
  }
`
export default ThumbnailForm
