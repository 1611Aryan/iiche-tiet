import PreviousEvents from "Sections/PreviousEvents"
import Main from "Sections/Main"
import Team from "Sections/Team"
import ContactUs from "Sections/ContactUs"
import Notification from "Components/Notification"

const Home = () => {
  const notification = { message: "Recruitments now Live✨✨", link: "forms" }

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <Notification notification={notification} />
      )}

      <Main />
      <PreviousEvents />
      <Team />
      <ContactUs />
    </>
  )
}

export default Home
