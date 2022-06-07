import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
export default function Comments() {
  const comments = [
    {
      man: "고대혁",
      women: "정아람",
      content:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.",
    },
    {
      man: "이채영",
      women: "영채이",
      content:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.",
    },
    {
      man: "정재욱",
      women: "욱재정",
      content:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.",
    },
  ];
  return (
    <>
      <Swiper
        className="comments"
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {comments.map((comment, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center text-center font-['Dongle']"
            >
              <div className="left-0 right-0 m-auto mt-24 w-[40rem] text-4xl text-gray-400">
                &quot;{comment?.content}&quot;
              </div>
              <div className="m-8 text-2xl font-bold text-slate-800">
                {comment?.man} ❤ {comment?.women}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
