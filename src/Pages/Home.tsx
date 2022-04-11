import PreviousEvents from "Sections/PreviousEvents"
import Main from "Sections/Main"
import Team from "Sections/Team"
import ContactUs from "Sections/ContactUs"
import Notification from "Components/Notification"
import { useEffect } from "react"
import DesignedBy from "Sections/DesignedBy"

const Home = () => {
  const notification = {
    message: "Twosome Conundrum registrations now Live🧪🔥🔥",
    link: "forms",
  }
  //const notification = null

  useEffect(() => {
    document.title = `IIChE TIET`
  }, [])

  return (
    <>
      {notification && <Notification notification={notification} />}
      <Main />
      <PreviousEvents />
      <Team />
      <ContactUs />
      <DesignedBy />
    </>
  )
}

export default Home
