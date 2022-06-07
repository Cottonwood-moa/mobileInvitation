// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
export default function Vertical() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="h-[100vh] w-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100vh] w-full"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100vh] w-full"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
