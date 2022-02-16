import { offset } from "Sections/Team"
import StyledBookMark from "../BookMark"
import { EB_MEMBERS_LENGTH } from "../Data"

const CoreBookMark: React.FC<{
  setPosition: React.Dispatch<React.SetStateAction<number>>
}> = ({ setPosition }) => {
  const clickHandler = () => {
    setPosition(EB_MEMBERS_LENGTH + offset)
  }

  return (
    <StyledBookMark onClick={clickHandler}>
      <span>Core Members</span>
    </StyledBookMark>
  )
}

export default CoreBookMark
