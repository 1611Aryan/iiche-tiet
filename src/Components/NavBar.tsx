import styled from "@emotion/styled"
import logoPNG from "./../Media/Logo/logoWhite.png"
import logoWEBP from "./../Media/Logo/logoWhite.webp"
import Picture from "./Picture"

const NavBar = () => {
  const navData = [
    {
      name: "ABOUT US",
      link: "aboutUs",
    },
    {
      name: "PREVIOUS EVENTS",
      link: "prevEvents",
    },
    {
      name: "OUR TEAM",
      link: "team",
    },
    // {
    //   name: "ANNOUNCEMENTS",
    //   link: "announcements",
    // },
    {
      name: "CONTACT US",
      link: "contactUs",
    },
  ]

  return (
    <StyledNav>
      <Picture
        images={[
          { imgSrc: logoWEBP, type: "image/webp" },
          { imgSrc: logoPNG, type: "image/png" },
        ]}
      />
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
      padding-right: 1em;
    }
    li:last-of-type {
      padding-left: 1em;
    }

    li:not(li:first-of-type):not(li:last-of-type) {
      padding: 0 1em;
    }

    li {
      display: block;

      border-bottom: 1px solid #fff8;
      padding-bottom: 0.4em;
      cursor: pointer;

      transition: all ease 300ms;

      span {
        font-size: 1rem;
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
      height: 5vh;
    }
  }
`

export default NavBar
