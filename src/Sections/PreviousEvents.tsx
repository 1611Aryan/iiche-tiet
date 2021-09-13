import PrevEventsHome from "../Components/PrevEventsHome"
import Direction from "../Components/Direction"
import WarTrade from "../Components/WarTrade"
import NEC from "../Components/NEC"
import Chemileon from "../Components/Chemileon"
import Swipe from "../Components/Swiper"

const PreviousEvents = () => {
  return (
    <Swipe loop={true}>
      <div className="slide">
        <PrevEventsHome />
      </div>
      <div className="slide">
        <Direction />
      </div>
      <div className="slide">
        <WarTrade />
      </div>
      <div className="slide">
        <Chemileon />
      </div>
      <div className="slide">
        <NEC />
      </div>
    </Swipe>
  )
}

export default PreviousEvents
