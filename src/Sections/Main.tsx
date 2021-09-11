import styled from "@emotion/styled"
import HeroBg from "./../Components/HeroBg"
import Home from "./Home"
import AboutUs from "./AboutUs"

const Main = () => {
  return (
    <StyledMain>
      <HeroBg />
      <Home />
      <AboutUs />
    </StyledMain>
  )
}

const StyledMain = styled.section`
  width: 100%;
  height: 200vh;

  position: relative;
`

export default Main
