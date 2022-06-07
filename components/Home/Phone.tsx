import { cls } from "@libs/client/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";
interface PhoneProps {
  addCss?: string;
  snowFall?: boolean;
  [key: string]: any;
}
export default function Phone({ addCss, snowFall, ...rest }: PhoneProps) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      {/* bg-[url('/images/phone.png')] bg-cover bg-center */}
      <motion.div
        {...rest}
        className={cls(
          "relative  flex h-[22rem] w-[12rem] min-w-[12rem] flex-col items-center overflow-hidden rounded-2xl lg:h-[27rem] lg:w-[14.4rem] lg:min-w-[14.4rem]",
          addCss ? addCss : ""
        )}
      >
        {snowFall ? (
          <Snowfall
            color="#ff9ff3"
            style={{
              margin: "0.5rem",
              position: "absolute",
              zIndex: 20,
              padding: 20,
              paddingLeft: 8,
              paddingTop: 12,
            }}
            speed={[0.1, 0.5]}
            bg-fixed
            wind={[0.1, 0.5]}
            snowflakeCount={100}
            radius={[0.5, 1.0]}
          />
        ) : (
          <></>
        )}
        <img
          src="/images/phone.png"
          alt=""
          className="absolute h-full w-full "
        />
        <img src="/images/test.png" alt="" className="" />
        <img src="/images/test2.png" alt="" className="" />
      </motion.div>
    </>
  );
}
