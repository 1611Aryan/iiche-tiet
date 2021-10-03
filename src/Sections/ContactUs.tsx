import styled from "@emotion/styled"
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5"
import { FaPhone } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"

const ContactUs = () => {
  return (
    <StyledSection>
      <div className="circle one"></div>
      <div className="circle second"></div>
      <header>
        <h2>Contact Us</h2>
      </header>
      <div className="content">
        <div className="message">
          Facilisis varius amet in erat netus a gravida vehicula. Dolor mi,
          tempus dignissim maecenas adipiscing a eget sed maecenas. Tincidunt
          pulvinar
        </div>
        <div className="contact">
          <div className="phone">
            <FaPhone />
            <span>Parth: +917986810284</span>
          </div>
          <div className="email">
            <AiFillMail />
            <span>iiche.tiet@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="handles">
        <IoLogoFacebook />
        <IoLogoInstagram />
        <IoLogoLinkedin />
        <IoLogoTwitter />
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
    &::before {
      content: "";
      position: absolute;
      top: 16px;
      left: -8rem;
      width: 100vw;
      height: var(--height);
      background: var(--primaryColor);
      filter: blur(2px);
    }
    &::after {
      content: "";
      position: absolute;
      top: 36px;
      left: -8rem;
      width: 100vw;
      height: var(--height);
      background: var(--secondaryColor);
      filter: blur(2px);
    }
    h2 {
      position: relative;
      z-index: 2;
      font-size: 4rem;
      line-height: 1;
    }
  }

  .content {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .message {
      width: 50%;
      font-size: 1.8rem;
    }
    .contact {
      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        svg {
          font-size: 3rem;
        }
        span {
          margin-left: 2rem;
          font-size: 1.5rem;
        }
      }
      > * + * {
        margin-top: 1.5rem;
      }
    }
  }

  .handles {
    z-index: 2;
    font-size: 2.5rem;
    cursor: pointer;
    > * + * {
      margin-left: 2rem;
    }
  }
`
export default ContactUs
