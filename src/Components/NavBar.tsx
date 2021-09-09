import styled from "@emotion/styled"
import logoPNG from "./../Media/Logo/logoWhite.png"
import logoWEBP from "./../Media/Logo/logoWhite.webp"
import logoAVIF from "./../Media/Logo/logoWhite.avif"

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
    {
      name: "ANNOUNCEMENTS",
      link: "announcements",
    },
    {
      name: "CONTACT US",
      link: "contactUs",
    },
  ]

  return (
    <StyledNav>
      <picture>
        <source srcSet={logoAVIF} type="image/avif" />
        <source srcSet={logoWEBP} type="image/webp" />
        <source srcSet={logoPNG} type="image/png" />
        <img src={logoPNG} alt="logo" />
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;

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
`

export default NavBar