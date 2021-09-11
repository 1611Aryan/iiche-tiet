import directionLogo_PNG from "./../Media/Previous Events/Logo/Direction.png"
import directionLogo_WEBP from "./../Media/Previous Events/Logo/Direction.webp"
import wartradeLogo_PNG from "./../Media/Previous Events/Logo/War Trade.png"
import wartradeLogo_WEBP from "./../Media/Previous Events/Logo/War Trade.webp"
import chemileonLogo_PNG from "./../Media/Previous Events/Logo/Chem-i-Leon.png"
import chemileonLogo_WEBP from "./../Media/Previous Events/Logo/Chem-i-Leon.webp"
import NEC_Logo_PNG from "./../Media/Previous Events/Logo/NEC.png"
import NEC_Logo_WEBP from "./../Media/Previous Events/Logo/NEC.webp"
import styled from "@emotion/styled"

const EventLogos = () => {
  return (
    <StyledEventLogos>
      <div className="logo">
        <picture className="blur">
          <source srcSet={directionLogo_WEBP} type="image/webp" />
          <source srcSet={directionLogo_PNG} type="image/png" />
          <img src={directionLogo_PNG} alt="Drrection Logo" />
        </picture>
        <picture>
          <source srcSet={directionLogo_WEBP} type="image/webp" />
          <source srcSet={directionLogo_PNG} type="image/png" />
          <img src={directionLogo_PNG} alt="Drrection Logo" />
        </picture>
      </div>
      <div className="logo">
        <picture className="blur">
          <source srcSet={wartradeLogo_WEBP} type="image/webp" />
          <source srcSet={wartradeLogo_PNG} type="image/png" />
          <img src={wartradeLogo_PNG} alt="Wartrade Logo" />
        </picture>
        <picture>
          <source srcSet={wartradeLogo_WEBP} type="image/webp" />
          <source srcSet={wartradeLogo_PNG} type="image/png" />
          <img src={wartradeLogo_PNG} alt="Wartrade Logo" />
        </picture>
      </div>
      <div className="logo">
        <picture className="blur">
          <source srcSet={chemileonLogo_WEBP} type="image/webp" />
          <source srcSet={chemileonLogo_PNG} type="image/png" />
          <img src={chemileonLogo_PNG} alt="Chemileon Logo" />
        </picture>
        <picture>
          <source srcSet={chemileonLogo_WEBP} type="image/webp" />
          <source srcSet={chemileonLogo_PNG} type="image/png" />
          <img src={chemileonLogo_PNG} alt="Chemileon Logo" />
        </picture>
      </div>
      <div className="logo">
        <picture className="blur">
          <source srcSet={NEC_Logo_WEBP} type="image/webp" />
          <source srcSet={NEC_Logo_PNG} type="image/png" />
          <img src={NEC_Logo_PNG} alt="NEC Logo" />
        </picture>
        <picture>
          <source srcSet={NEC_Logo_WEBP} type="image/webp" />
          <source srcSet={NEC_Logo_PNG} type="image/png" />
          <img src={NEC_Logo_PNG} alt="NEC Logo" />
        </picture>
      </div>
    </StyledEventLogos>
  )
}

const StyledEventLogos = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > * + * {
    margin-left: 5em;
  }

  .logo {
    width: 13%;
    position: relative;
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
    }

    picture :not(.blur) {
      position: relative;
      z-index: 2;
    }

    .blur {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(10px) contrast(100%) saturate(120%);
    }
  }
`

export default EventLogos
