import NavBar from "./Components/NavBar"
import PreviousEvents from "./Sections/PreviousEvents"
import Main from "./Sections/Main"
import Team from "./Sections/Team"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <PreviousEvents />
      <Team />
    </div>
  )
}

export default App
