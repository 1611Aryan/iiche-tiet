import styled from "@emotion/styled"

import directionLogo_PNG from "./../../Media/Previous Events/Logo/Direction.png"
import directionLogo_WEBP from "./../../Media/Previous Events/Logo/Direction.webp"

import wartradeLogo_PNG from "./../../Media/Previous Events/Logo/WarTrade.png"
import wartradeLogo_WEBP from "./../../Media/Previous Events/Logo/WarTrade.webp"

import chemileonLogo_PNG from "./../../Media/Previous Events/Logo/Chem-i-Leon.png"
import chemileonLogo_WEBP from "./../../Media/Previous Events/Logo/Chem-i-Leon.webp"

import NEC_Logo_PNG from "./../../Media/Previous Events/Logo/NEC.png"
import NEC_Logo_WEBP from "./../../Media/Previous Events/Logo/NEC.webp"

import EventLogo from "./EventLogo"

const EventLogos = () => {
  return (
    <StyledEventLogos>
      <EventLogo
        images={[
          { imgSrc: directionLogo_WEBP, type: "image/webp" },
          { imgSrc: directionLogo_PNG, type: "image/png" },
        ]}
      />
      <EventLogo
        images={[
          { imgSrc: wartradeLogo_WEBP, type: "image/webp" },
          { imgSrc: wartradeLogo_PNG, type: "image/png" },
        ]}
      />
      <EventLogo
        images={[
          { imgSrc: chemileonLogo_WEBP, type: "image/webp" },
          { imgSrc: chemileonLogo_PNG, type: "image/png" },
        ]}
      />
      <EventLogo
        images={[
          { imgSrc: NEC_Logo_WEBP, type: "image/webp" },
          { imgSrc: NEC_Logo_PNG, type: "image/png" },
        ]}
      />
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
`

export default EventLogos
