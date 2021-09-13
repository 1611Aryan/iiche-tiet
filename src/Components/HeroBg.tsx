import styled from "@emotion/styled"
import homeBgJPG from "./../Media/Hero/heroBG.jpg"
import homeBgWEBP from "./../Media/Hero/heroBG.webp"
import homeBgAVIF from "./../Media/Hero/heroBG.avif"

const HeroBg = () => {
  return (
    <StyledHeroBg>
      <source srcSet={homeBgAVIF} type="image/avif" />
      <source srcSet={homeBgWEBP} type="image/webp" />
      <source srcSet={homeBgJPG} type="image/jpeg" />
      <img src={homeBgJPG} alt="home" />
    </StyledHeroBg>
  )
}

const StyledHeroBg = styled.picture`
  position: absolute;
  top: -10%;
  left: -25%;
  width: 150%;
  height: 140vh;

  z-index: 2;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(50px);
  }
`

export default HeroBg
