import styled from "@emotion/styled"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/effect-fade/effect-fade.scss"

import SwiperCore, { Pagination, EffectFade } from "swiper"
import PrevEventsHome from "../Components/PrevEventsHome"
import Direction from "../Components/Direction"
import WarTrade from "../Components/WarTrade"
import NEC from "../Components/NEC"
import Chemileon from "../Components/Chemileon"
SwiperCore.use([Pagination, EffectFade])

const PreviousEvents = () => {
  return (
    <StyledPreviousEvents>
      <Swiper
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        fadeEffect={{
          crossFade: true,
        }}
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

const StyledPreviousEvents = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, var(--bg), #000);

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;

    overflow: hidden;

    color: #fff;
  }

  .swiper-pagination-bullet {
    background: var(--primaryColor);
  }
`

export default PreviousEvents
