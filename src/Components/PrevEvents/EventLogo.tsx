import styled from "@emotion/styled"
import Picture from "../Picture"

const EventLogo: React.FC<{ images: { imgSrc: string; type: string }[] }> = ({
  images,
}) => {
  return (
    <StyledLogo>
      <Picture images={images} loading="lazy" decoding="async" />
      <Picture images={images} loading="lazy" decoding="async" />
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  width: 13%;
  position: relative;

  transition: transform 200ms;

  &:hover {
    transform: scale(0.9);
  }

  picture {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:first-of-type,
  &:last-of-type {
    transform: translateY(5em);

    &:hover {
      transform: translateY(5em) scale(0.9);
    }
  }

  & > :first-of-type {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px) contrast(100%) saturate(120%);
  }

  & > :nth-of-type(2) {
    position: relative;
    z-index: 2;
  }
`

export default EventLogo
