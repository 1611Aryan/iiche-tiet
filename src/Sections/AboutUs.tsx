import styled from "@emotion/styled"
import logoAVIF from "./../Media/Logo/Logo.avif"
import logoWEBP from "./../Media/Logo/Logo.webp"
import logoPNG from "./../Media/Logo/Logo.png"

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <div className="circle"></div>
      <svg viewBox="0 0 604 120" fill="none">
        <path d="M8 70.3048C169.082 -12.7683 186.871 -12.7683 320.282 70.3048C427.012 136.763 548.565 97.9959 596 70.3048" />
      </svg>
      <picture>
        <source srcSet={logoAVIF} type="image/avif" />
        <source srcSet={logoWEBP} type="image/webp" />
        <source srcSet={logoPNG} type="image/png" />
        <img src={logoPNG} alt="logo" />
      </picture>

      <div className="content">
        <h1>About Us</h1>
        <p>
          Indian Institute of Chemical Engineers is an organization which was
          established Decades ago to conduct events related to chemical
          engineering field for chemical engineering undergraduate students,
          post graduate students and people with related professions.
        </p>
        <p>
          IIChE is one of the most active societies in Thapar University,
          imparting knowledge about chemistry and technology involved in the
          science of chemistry.
        </p>
        <p>
          We believe to promote the advancement of chemical engineering science
          and draw up a code of ethics in the profession. We also want to
          maintain and widen our contacts with chemical engineering
          professionals in India and abroad. We want to act as an authoritative
          body on matters or training to the teaching and the profession of
          chemical engineering.
        </p>
      </div>
    </StyledAboutUs>
  )
}

const StyledAboutUs = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;

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
    width: 50vw;
    transform: rotate(-25deg) translate(40%);
    path {
      stroke: var(--secondaryColor);
      stroke-width: 10;
      stroke-linecap: round;
      filter: blur(5px);
      stroke-dasharray: 450;
      stroke-dashoffset: 450;
      animation: dash ease-in-out 1s forwards;
    }
  }

  picture {
    position: relative;
    z-index: 2;
    width: 30%;
    height: auto;
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

    h1 {
      font-size: 3rem;
      font-weight: 900;
    }
    p {
      font-weight: 400;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
`

export default AboutUs
