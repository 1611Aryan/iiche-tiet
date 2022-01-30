import StyledBookMark from "./BookMark"
import { EB_MEMBERS_LENGTH } from "./Data"

const CoreBookMark: React.FC<{
  setPosition: React.Dispatch<React.SetStateAction<number>>
}> = ({ setPosition }) => {
  const clickHandler = () => {
    setPosition(EB_MEMBERS_LENGTH + 1)
  }

  return (
    <StyledBookMark onClick={clickHandler}>
      <span>Core Members</span>
    </StyledBookMark>
  )
}

export default CoreBookMark
