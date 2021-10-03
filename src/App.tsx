import NavBar from "./Components/NavBar"
import PreviousEvents from "./Sections/PreviousEvents"
import Main from "./Sections/Main"
import Team from "./Sections/Team"
import ContactUs from "./Sections/ContactUs"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <PreviousEvents />
      <Team />
      <ContactUs />
    </div>
  )
}

export default App
