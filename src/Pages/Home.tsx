import PreviousEvents from "Sections/PreviousEvents"
import Main from "Sections/Main"
import Team from "Sections/Team"
import ContactUs from "Sections/ContactUs"
import Notification from "Components/Notification"
import { useEffect } from "react"

const Home = () => {
  const notification = { message: "Recruitments now Live✨✨", link: "forms" }

  useEffect(() => {
    document.title = `IIChE TIET`
  }, [])

  return (
    <>
      <Notification notification={notification} />
      <Main />
      <PreviousEvents />
      <Team />
      <ContactUs />
    </>
  )
}

export default Home
