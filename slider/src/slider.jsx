import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={require("./image/1.jpg")} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("./image/2.jpg")} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("./image/3.jpg")} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("./image/4.jpg")} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
