import PrevEventsHome from "../Components/PrevEvents/PrevEventsHome"
import Direction from "../Components/PrevEvents/Direction"
import WarTrade from "../Components/PrevEvents/WarTrade"
import NEC from "../Components/PrevEvents/NEC"
import Chemileon from "../Components/PrevEvents/Chemileon"
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
