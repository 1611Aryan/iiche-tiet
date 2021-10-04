import styled from "@emotion/styled"
import PrevEventsHome from "../Components/PrevEvents/PrevEventsHome"
import Direction from "../Components/PrevEvents/Direction"
import WarTrade from "../Components/PrevEvents/WarTrade"
import NEC from "../Components/PrevEvents/NEC"
import Chemileon from "../Components/PrevEvents/Chemileon"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from "swiper"
import "swiper/swiper-bundle.css"
import "swiper/components/pagination/pagination.scss"

SwiperCore.use([Pagination])

const PreviousEvents = () => {
  return (
    <StyledPreviousEvents>
      <Swiper
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="swiper"
      >
        <SwiperSlide>
          <PrevEventsHome />
        </SwiperSlide>
        <SwiperSlide>
          <Direction />
        </SwiperSlide>
        <SwiperSlide>
          <WarTrade />
        </SwiperSlide>
        <SwiperSlide>
          <Chemileon />
        </SwiperSlide>
        <SwiperSlide>
          <NEC />
        </SwiperSlide>
      </Swiper>
    </StyledPreviousEvents>
  )
}

const StyledPreviousEvents = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-pagination-bullet {
      background: #fff;
      opacity: 0.8;
      &-active {
        background: red;
      }
    }

    &-scrollbar {
      background: #fff5;
      &-drag {
        background: var(--primaryColor);
        opacity: 0.8;
      }
    }
  }
`

export default PreviousEvents
