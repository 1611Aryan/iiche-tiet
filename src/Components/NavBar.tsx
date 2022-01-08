import styled from "@emotion/styled"

import Logo from "./Common/Logo"

const NavBar = () => {
  const navData = [
    {
      name: "ABOUT",
      link: "about",
    },
    {
      name: "EVENTS",
      link: "events",
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
      link: "contact",
    },
  ]

  return (
    <StyledNav>
      <Logo />
      <nav>
        <ul>
          {navData.map((data, index) => (
            <li key={index}>
              <a href={`#${data.link}`}>
                <span>{data.name}</span>
              </a>
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
  will-change: transform;

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
        font-size: clamp(0.8rem, 2vw, 1.1rem);
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
