import type { NextPage } from "next";
import Layout from "@components/Layout";
import Snowfall from "react-snowfall";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import ExampleImg from "@components/Home/ExampleImg";
import Comments from "@components/Home/Comments";
import Button from "@components/styleComponents/button";
import { cls } from "@libs/client/utils";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Phone from "@components/Home/Phone";
import { font, font_size, tablet } from "@libs/client/tailwindStyle";
const Home: NextPage = () => {
  const { scrollY } = useViewportScroll();
  const [device, setDevice] = useState("phone");
  const itemArray = [
    {
      name: "Modern Black And White",
      description: "깔끔한 Black and White로 모던함을 제공합니다.",
    },
    {
      name: "Cherry Blossom",
      description: "화사한 꽃과 함께 봄 향기를 느낄 수 있습니다.",
    },
    {
      name: "Korean Tradition",
      description: "전통 한지 배경과 한국적인 색깔에 잘 어울립니다.",
    },
  ];
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
    });
  }, [scrollY]);
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() < 550) setDevice("phone");
      if (scrollY.get() > 550) setDevice("tablet");
      if (scrollY.get() > 1000) setDevice("make");
    });
  }, [scrollY]);
  return (
    <Layout title="Cottonwood">
      <div className="">
        {/* Section */}
        <div className="bg-[100%] relative flex h-[100vh] w-full flex-col items-center justify-center">
          <img
            className="absolute top-0 z-10"
            src="/images/curtain.png"
            alt=""
          />
          <motion.div
            layoutId="test"
            className="fixed top-0 flex h-full flex-col items-center justify-center"
          >
            <div className="flex">
              {device === "phone" ? (
                <>
                  <Phone layoutId="device" snowFall addCss="m-12" />
                  <div className=" flex flex-col justify-center text-slate-800">
                    <p
                      className={cls(
                        "mb-8 rounded-xl p-2 ",
                        font_size.font_head_title
                      )}
                    >
                      Best wishes for your marriage.
                    </p>
                    <p
                      className={cls(
                        `mb-8 rounded-xl p-2`,
                        font.font_ko,
                        font_size.font_main_title
                      )}
                    >
                      프리미엄 모바일 청첩장
                    </p>
                    <p
                      className={cls(
                        `p-2`,
                        font.font_ko,
                        font_size.font_main_text
                      )}
                    >
                      전문 디자이너가 직접 디자인한 다양한 템플릿
                    </p>
                    <p
                      className={cls(
                        `p-2`,
                        font.font_ko,
                        font_size.font_main_text
                      )}
                    >
                      특별한 날에 초대받는 손님들을 위한 여러가지 기능
                    </p>
                    <p
                      className={cls(
                        `p-2`,
                        font.font_ko,
                        font_size.font_main_text
                      )}
                    >
                      단 한 번의 결제로 이 모든 것을 자유롭게 사용가능합니다.
                    </p>
                    <p className=" p-2 text-xl font-bold text-[#3f342f]"></p>
                  </div>
                </>
              ) : (
                <div className="relative m-12 h-[28rem] w-[16rem]"></div>
              )}
            </div>
          </motion.div>
        </div>
        {/* Section */}
        <div className=" relative flex h-[100vh] w-full items-center justify-center  ">
          {device === "tablet" && (
            <motion.div
              layoutId="test"
              className="fixed top-0 flex h-full items-center justify-center"
            >
              <div className=" flex items-center justify-center text-slate-600">
                <div className="m-6">
                  <p
                    className={cls(
                      `mb-8 rounded-xl`,
                      font_size.font_head_title
                    )}
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    What&lsquo;s special?
                  </p>
                  <p
                    className={cls(
                      `my-8 `,
                      font.font_ko,
                      font_size.font_main_title
                    )}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    모든 디바이스 지원
                  </p>
                  <p
                    className={cls(
                      `rounded-2xl `,
                      font.font_ko,
                      font_size.font_main_text
                    )}
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    모바일과 태블릿, 테스크탑 까지 <br />
                    모든 디바이스에 최적화된 초대장을 <br />
                    직접 만들 수 있습니다.
                  </p>
                </div>
                <motion.div
                  layoutId="device"
                  className="mr-12 h-[16.8rem] w-[24rem] rounded-2xl border-[4px] border-slate-800 shadow-2xl sm:h-[19.6rem] sm:w-[28rem] md:h-[22.4rem] md:w-[32rem] lg:h-[25.2rem] lg:w-[36rem] xl:h-[28rem] xl:w-[40rem]"
                />
              </div>
            </motion.div>
          )}
        </div>
        {/* Section */}
        <div className=" relative flex h-[90vh] w-full flex-col items-center justify-center space-x-12 bg-opacity-20 ">
          {device === "make" && (
            <motion.div
              layoutId="test"
              className="fixed top-0 flex h-full flex-col items-center justify-center"
            >
              <div className="flex space-x-12">
                <Phone data-aos="fade-left" data-aos-delay="500" />
                <Phone data-aos="fade-left" data-aos-delay="400" />
                <Phone layoutId="device" />
                <Phone data-aos="fade-right" data-aos-delay="400" />
                <Phone data-aos="fade-right" data-aos-delay="500" />
              </div>
              <div
                className={cls(
                  `mt-12 space-y-8 text-center`,
                  font.font_ko,
                  font_size.font_main_text
                )}
              >
                <p
                  className={cls(
                    `mb-8 rounded-xl`,
                    font.font_en,
                    font_size.font_head_title
                  )}
                >
                  It&lsquo;s for you.
                </p>
                <span>눈/꽃가루 이펙트, </span>
                <span>고화질 갤러리,</span>
                <span>음악/동영상 삽입, </span>
                <span>카카오페이,</span>
                <span>지도기능, </span>
                <span>댓글기능,</span>
                <span>참여인원 조사 등</span>
                <p className={cls(font_size.font_main_title)}>
                  모든 기능을 자유롭게 사용할 수 있습니다.
                </p>
              </div>
            </motion.div>
          )}
        </div>
        {/* Section */}
        <div className="relative mt-12 flex w-full justify-center bg-gray-100">
          <div className="w-full ">
            <span>fewfwe</span>
          </div>
          <img
            src="/images/px.png"
            alt=""
            className=" m-12 mr-24 h-[30rem] w-[45rem] "
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
        <div className="relative flex flex-col items-center bg-white">
          <div className="mt-24 text-lg font-bold  text-[#937C6F]">
            ONLY THE BEST
          </div>
          <div className="text-6xl font-bold text-slate-800">PROMO PRICES</div>
          <div className="m-2 text-center font-['NotoSansKR'] text-xl font-medium text-[#3f342f]">
            프로모션 진행중입니다. <br /> 50% 할인된 가격에 모든 초대장을 사용할
            수 있습니다.
          </div>

          <div className="mb-12 grid grid-cols-1 gap-12 bg-white p-12 2xl:grid-cols-2">
            {itemArray.map((item, index) => {
              return (
                <div
                  className={cls(
                    "flex 2xl:flex-row",
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  )}
                  key={index}
                >
                  <Phone />
                  <div className="mx-12 flex flex-col justify-center">
                    <p className="text-3xl text-[#937C6F]">{item?.name}</p>
                    <p className="font-['NotoSansKR'] text-xl text-[#3f342f]">
                      {item?.description}
                    </p>
                    <div className="flex items-center justify-center">
                      <Button text="상세" addStyle="mt-12 w-16" ping />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Section */}
        <div className="relative bg-white">
          <div className="flex flex-col items-center">
            <div className="pt-20 text-xl font-bold text-[#937C6F]">
              ONLY THE BEST
            </div>
            <div className="pt-4 text-4xl font-bold text-slate-800">
              TESTIMONIALS
            </div>
          </div>
          <div className="">
            <Comments />
            <div className="mt-16  flex justify-center">
              <Button text="상세후기" large />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
