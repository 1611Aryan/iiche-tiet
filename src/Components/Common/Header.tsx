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
  padding: 1.5rem var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export default Header
