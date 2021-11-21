import styled from "@emotion/styled"
import smallLogo from "./../Media/Logo/Logo.webp"
import logoPNG from "./../Media/Logo/logoWhite.png"
import logoWEBP from "./../Media/Logo/logoWhite.webp"

const NavBar = () => {
  const navData = [
    {
      name: "ABOUT",
      link: "aboutUs",
    },
    {
      name: "EVENTS",
      link: "prevEvents",
    },
    {
      name: "TEAM",
      link: "team",
    },
    // {
    //   name: "ANNOUNCEMENTS",
    //   link: "announcements",
    // },
    {
      name: "CONTACT",
      link: "contactUs",
    },
  ]

  return (
    <StyledNav>
      <picture>
        <source
          media="(max-width:500px)"
          srcSet={smallLogo}
          type="image/webp"
        />
        <source srcSet={logoWEBP} type="image/webp" />
        <source srcSet={logoPNG} type="image/png" />
        <img src={smallLogo} alt="" />
      </picture>
      <nav>
        <ul>
          {navData.map((data, index) => (
            <li key={index}>
              <span>{data.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </StyledNav>
  )
}

const StyledNav = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  overflow: hidden;

  picture {
    height: 10vh;
    width: auto;
    img {
      height: 100%;
      width: auto;
      object-fit: cover;
      display: block;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    color: var(--primary);

    li:first-of-type {
      padding-right: clamp(0.5rem, 1vw, 1rem);
    }
    li:last-of-type {
      padding-left: clamp(0.5rem, 1vw, 1rem);
    }

    li:not(li:first-of-type):not(li:last-of-type) {
      padding: 0 clamp(0.5rem, 1vw, 1rem);
    }

    li {
      display: block;

      border-bottom: 1px solid #fff8;
      padding-bottom: clamp(0.2rem, 0.7vw, 0.4rem);
      cursor: pointer;

      transition: all ease 300ms;

      span {
        font-size: clamp(0.8rem, 2vw, 1.2rem);
        transition: transform ease 200ms, color ease 500ms;
      }

      @media (hover: hover) {
        &:hover {
          span {
            display: block;
            transform: translateY(-4px);
            color: #fbff00;
          }
          border-bottom-color: #fbff00;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    picture {
      height: 6vh;
    }
  }
`

export default NavBar
