import styled from "@emotion/styled"
import Picture from "./Picture"

const Polaroid: React.FC<{
  images: { imgSrc: string; type: string }[]
  video?: boolean
  autoplay?: boolean
  loop?: boolean
}> = ({ images, video, autoplay, loop }) => {
  return (
    <StyledPolaroid>
      <Picture
        images={images}
        video={video}
        loading="lazy"
        decoding="async"
        autoplay={autoplay}
        loop={loop}
      />
    </StyledPolaroid>
  )
}

const StyledPolaroid = styled.div`
  flex: 1;
  height: 50%;
  background: #fff;
  padding: 1em;

  box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: transform ease 200ms;
  picture {
    display: block;
    width: 100%;
    height: 85%;
    background: #343434;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    width: 100%;
    height: 85%;
    background: #343434;
    object-fit: cover;
  }

  @media (hover: hover) {
    &:hover {
      transform: translate(0%, 0%) rotate(0deg) scale(1.2) !important;
    }
  }
`

export default Polaroid
