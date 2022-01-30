import StyledBookMark from "./BookMark"

const EB_BOOKMARK: React.FC<{
  setPosition: React.Dispatch<React.SetStateAction<number>>
}> = ({ setPosition }) => {
  const clickHandler = () => {
    setPosition(1)
  }

  return (
    <StyledBookMark onClick={clickHandler}>
      <span>EB</span>
    </StyledBookMark>
  )
}

export default EB_BOOKMARK
