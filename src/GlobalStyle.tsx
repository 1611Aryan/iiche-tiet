import { css, Global } from "@emotion/react"

const GlobalStyle = () => {
  const Styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --padding: clamp(1.5rem, 3vw, 2.5rem);
      --primary: #fff;
      --bg: #0d1019;
      --primaryColor: #448a9f;
      --secondaryColor: #660e25;
      --cursive: "Lobster", cursive;
    }

    html {
      user-select: none;
      scroll-behavior: smooth;
    }

    body {
      width: 100vw;
      overflow-x: hidden;
      font-family: "Rubik", sans-serif;

      background: #0d1019;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    h1 {
      font-size: clamp(2rem, 5vw, 4rem);
      line-height: 1;
    }
  `

  return <Global styles={Styles} />
}

export default GlobalStyle
