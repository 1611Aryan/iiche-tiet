import NavBar from "./Components/NavBar"
import PreviousEvents from "./Sections/PreviousEvents"
import Main from "./Sections/Main"
import Team from "./Sections/Team"
import ContactUs from "./Sections/ContactUs"
import Loader from "./Components/Loader"
import { useEffect, useState } from "react"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.addEventListener("load", () =>
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    )

    return () => {
      window.removeEventListener("load", () => {})
    }
  }, [])

  return (
    <div className="App">
      {loading && <Loader />}
      <NavBar />
      <Main />
      <PreviousEvents />
      <Team />
      <ContactUs />
    </div>
  )
}

export default App
