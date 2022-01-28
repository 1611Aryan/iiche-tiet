import Loader from "./Components/Loader"
import { Suspense } from "react"

import { useRoutes } from "react-router-dom"
import Routes from "Routes"

const App = () => {
  const router = useRoutes(Routes)

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>{router}</Suspense>
    </div>
  )
}

export default App
