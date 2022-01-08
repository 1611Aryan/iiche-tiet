import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { FormsProvider } from "Store/Provider/forms"
import App from "./App"
import GlobalStyle from "./GlobalStyle"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <FormsProvider>
        <App />
      </FormsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
