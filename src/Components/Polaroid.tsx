import styled from "@emotion/styled"
import Picture from "./Picture"

const Polaroid: React.FC<{
  images: { imgSrc: string; type: string }[]
  video?: boolean
  autoPlay?: boolean
  loop?: boolean
  controls?: boolean
}> = ({ images, video, autoPlay, loop, controls }) => {
  return (
    <StyledPolaroid>
      <Picture
        images={images}
        video={video}
        loading="lazy"
        decoding="async"
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
      />
    </StyledPolaroid>
  )
}

const StyledPolaroid = styled.div`
  flex: 1;
  height: 50%;
  background: #fff;
  padding: clamp(0.3rem, 1vw, 1rem);

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

  @media only screen and (max-width: 500px) {
    margin-top: 100%;
    display: inline-block;
    width: 60%;
    height: 30%;
  }
  picture {
    display: block;
    width: 100%;
    height: 95%;
    background: #343434;
    overflow: hidden;
  }
`

export default Polaroid
