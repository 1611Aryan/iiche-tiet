import styled from "@emotion/styled"

import logoWEBP from "./../Media/Logo/Logo.webp"
import logoPNG from "./../Media/Logo/Logo.png"
import { useEffect, useRef, useState } from "react"

const AboutUs = () => {
  const logoRef = useRef<HTMLPictureElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => setVisible(entries[0].isIntersecting),
      { root: null, threshold: 0.25 }
    )
    logoRef.current && observer.observe(logoRef.current)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      logoRef.current && observer.unobserve(logoRef.current)
    }
  }, [logoRef])

  return (
    <StyledAboutUs>
      <div className="circle"></div>
      <svg viewBox="0 0 604 120" fill="none">
        <path
          className={visible ? "dash" : "'"}
          d="M8 70.3048C169.082 -12.7683 186.871 -12.7683 320.282 70.3048C427.012 136.763 548.565 97.9959 596 70.3048"
        />
      </svg>

      <picture ref={logoRef} className={visible ? "reset" : "'"}>
        <source srcSet={logoWEBP} type="image/webp" />
        <source srcSet={logoPNG} type="image/png" />
        <img src={logoPNG} alt="logo" />
      </picture>

      <div className={` content ${visible ? "reset" : ""}`}>
        <h1>About Us</h1>
        <p>
          Indian Institute of Chemical Engineers is an organization which was
          established Decades ago to conduct events related to chemical
          engineering field.
        </p>
        <p>
          We are one of the most active societies in Thapar University,
          imparting knowledge about chemistry and technology involved in the
          science of chemistry.
        </p>
        <p>
          We believe to promote the advancement of chemical engineering science
          and draw up a code of ethics in the profession. We also want to
          maintain and widen our contacts with chemical engineering
          professionals in India and abroad.
        </p>
      </div>
    </StyledAboutUs>
  )
}

const StyledAboutUs = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(4 * var(--padding));

  overflow: hidden;

  .circle {
    --size: 50vh;
    position: absolute;
    left: 0;
    top: 50%;
    height: var(--size);
    width: var(--size);
    background: var(--primaryColor);
    border-radius: 50%;
    transform: translate(-40%, -30%);
    filter: blur(50px);
  }

  svg {
    position: absolute;
    top: 60%;
    right: 0;
    width: 55vw;
    transform: rotate(-25deg) translate(30%);
    path {
      stroke: var(--secondaryColor);
      stroke-width: 10;
      stroke-linecap: round;
      filter: blur(5px);
      stroke-dasharray: 450;
      stroke-dashoffset: -450;
      transition: all ease-in-out 800ms;
    }
    .dash {
      stroke-dashoffset: 0;
    }
  }

  picture {
    position: relative;
    z-index: 2;
    width: 30%;
    aspect-ratio: 1/1;
    transform: translate(-100%);
    opacity: 0;
    transition: all ease-in-out 250ms;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .content {
    width: 50%;
    position: relative;
    z-index: 2;
    color: white;
    transform: translate(100%);
    opacity: 0;
    transition: all ease-in-out 250ms;

    p {
      font-weight: 400;
      font-size: clamp(0.7rem, 1.2vw, 1.2rem);
      margin-top: 1rem;
    }
  }

  .reset {
    transform: translate(0);
    opacity: 1;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 var(--padding);
    .circle {
      --size: 30vh;
    }

    picture {
      width: 30%;
    }
    .content {
      width: 65%;
      line-height: 1;
    }
  }
`

export default AboutUs
