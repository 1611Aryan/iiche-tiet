import styled from "@emotion/styled"
import smallLogo from "Media/Logo/Logo.webp"
import logoPNG from "Media/Logo/logoWhite.png"
import logoWEBP from "Media/Logo/logoWhite.webp"
import { Link } from "react-router-dom"

const Logo = () => (
  <StyledLogo>
    <Link to="/">
      <StyledLogo>
        <source
          media="(max-width:500px)"
          srcSet={smallLogo}
          type="image/webp"
        />
        <source srcSet={logoWEBP} type="image/webp" />
        <source srcSet={logoPNG} type="image/png" />

        <img src={smallLogo} alt="" />
      </StyledLogo>
    </Link>
  </StyledLogo>
)

const StyledLogo = styled.picture`
  width: auto;
  height: 10vh;

  a {
    width: auto;
    height: 10vh;
  }
  picture {
    height: 10vh;
    width: auto;
    img {
      height: 100%;
      width: auto;
      object-fit: cover;
      display: block;
    }
    @media only screen and (max-width: 500px) {
      height: 6vh;
    }
  }
`

export default Logo
