import styled from "@emotion/styled"
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5"
import { FaPhone } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import { useEffect, useRef, useState } from "react"

const ContactUs = () => {
  const linesRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => setVisible(entries[0].isIntersecting),
      { root: null, threshold: 0.25 }
    )
    linesRef.current && observer.observe(linesRef.current)

    const copy = linesRef.current

    return () => {
      observer.unobserve(copy!)
    }
  }, [linesRef])

  return (
    <StyledSection ref={linesRef} id="contact">
      <div className="circle one"></div>
      <div className="circle second"></div>
      <header>
        <div className={`lines ${visible ? "visible" : ""}`}></div>

        <h1>Contact Us</h1>
      </header>
      <div className="content">
        <div className="message">
          We can crack your morse code, but if your flashlight's battery runs
          out, here's a back up for you.
        </div>
        <div className="contact">
          <div className="phone">
            <FaPhone />
            <span>Parth: +917986810284</span>
          </div>
          <a href="mailto:iiche.tiet@gmail.com">
            <div className="email">
              <AiFillMail />
              <span>iiche.tiet@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
      <div className="handles">
        <a
          href="https://www.facebook.com/IIChE-TIET-Student-Chapter-101382642299317"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook />
        </a>

        <a
          href="https://www.instagram.com/iiche.tiet/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram />
        </a>

        <a
          href="https://www.linkedin.com/company/indian-institute-of-chemical-engineers-iiche-tiet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://twitter.com/IIChE_TIET"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter />
        </a>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background: linear-gradient(#161415, #000);

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 8rem;
  color: #fff;

  padding: 0 var(--padding);

  .circle {
    position: absolute;

    filter: blur(80px);
  }

  .one {
    top: 25%;
    left: -5%;
    width: 20%;
    aspect-ratio: 1/1;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    background: var(--primaryColor);
  }

  .second {
    bottom: 5%;
    right: -10%;
    width: 25%;
    aspect-ratio: 1/1;
    border-radius: 21% 79% 37% 63% / 66% 57% 43% 34%;
    background: var(--secondaryColor);
  }

  header {
    z-index: 2;
    position: relative;
    --height: 8px;
    .lines {
      position: absolute;
      top: 0;
      left: calc(-2 * var(--padding));
      width: calc(100vw + 2 * var(--padding));
      height: 100%;
      transform: translate(-120%);
      transition: transform ease-in-out 400ms;
      &::before {
        content: "";
        position: absolute;
        top: 16px;
        left: 0rem;
        width: 100%;
        height: var(--height);
        background: var(--primaryColor);
        filter: blur(2px);
      }
      &::after {
        content: "";
        position: absolute;
        top: 36px;
        left: 0rem;
        width: 100%;
        height: var(--height);
        background: var(--secondaryColor);
        filter: blur(2px);
      }
    }

    .visible {
      transform: translate(0px);
    }

    h1 {
      position: relative;
      z-index: 2;
    }
  }

  .content {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .message {
      width: 50%;
      font-size: clamp(1rem, 2vw, 1.8rem);
    }
    .contact {
      > * + * {
        margin-top: 1.5rem;
      }
      a {
        display: block;
      }
      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        svg {
          font-size: clamp(1rem, 4vw, 3rem);
        }
        span {
          margin-left: clamp(0.75rem, 2vw, 2rem);
          font-size: clamp(0.9rem, 2vw, 1.5rem);
        }
      }
    }
  }

  .handles {
    z-index: 2;
    font-size: clamp(1.25rem, 3vw, 2.5rem);
    cursor: pointer;
    > * + * {
      margin-left: clamp(1rem, 3vw, 2rem);
    }

    a {
      display: inline-block;
      transition: transform 200ms, color 100ms;
      &:hover {
        transform: scale(1.1);

        &:nth-of-type(odd) {
          color: var(--primaryColor);
        }
        &:nth-of-type(even) {
          color: var(--secondaryColor);
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .circle {
      filter: blur(50px);
    }
    .one {
      width: 40%;
    }

    .second {
      width: 55%;
    }

    .content {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      .message {
        width: 80%;
      }
      > * + * {
        margin-top: 1.5rem;
      }
    }
  }
`
export default ContactUs
