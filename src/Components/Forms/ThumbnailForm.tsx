import styled from "@emotion/styled"
import { IoMdSend } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import formIcon from "Media/Form/formIcon.png"
import { form } from "Store/Provider/forms"

const ThumbnailForm: React.FC<{ form: form }> = ({ form }) => {
  const navigate = useNavigate()

  const clickHandler = () => {
    if (form.active) return navigate(`/forms/${form.formName}`)
    return window.alert("Form has been closed.")
  }

  return (
    <StyledThumbnail
      onClick={clickHandler}
      className={!form.active ? "inactive" : ""}
    >
      <div>
        <img src={form.logo ? form.logo : formIcon} alt="formIcon" />
      </div>
      <button>
        <span> {form.formName}</span>
        &nbsp;
        <IoMdSend />
      </button>
    </StyledThumbnail>
  )
}

const StyledThumbnail = styled.li`
  width: 18vw;
  aspect-ratio: 1 / 1;
  background: var(--primaryColor);

  position: relative;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  div {
    padding: calc(var(--padding) / 4);
    height: 80%;
    background: #fffc;
    display: grid;
    place-items: center;
    background: #52b1b1;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  button {
    padding: calc(var(--padding) / 4);
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1.25rem;
    color: #fff;
    background: #c61741;
  }

  cursor: pointer;

  transition: transform 100ms;
  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 750px) {
    width: 45vw;
  }
`
export default ThumbnailForm
