import { css, Global } from "@emotion/react"

const GlobalStyle = () => {
  const Styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --padding: 2.5rem;
      --primary: #fff;
    }

    body {
      width: 100vw;
      overflow-x: hidden;
      font-family: "Rubik", sans-serif;

      background: #0d1019;
    }
  `

  return <Global styles={Styles} />
}

export default GlobalStyle
