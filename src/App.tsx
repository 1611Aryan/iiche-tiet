import Loader from "./Components/Loader"
import { useEffect, useState } from "react"

import { useRoutes } from "react-router-dom"
import Routes from "Routes"

const App = () => {
  const [loading, setLoading] = useState(true)

  const router = useRoutes(Routes)

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
      {router}
    </div>
  )
}

export default App
