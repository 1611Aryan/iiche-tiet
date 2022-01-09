import styled from "@emotion/styled"
import Logo from "Components/Common/Logo"

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.25rem var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;
  overflow: hidden;
`
export default Header
