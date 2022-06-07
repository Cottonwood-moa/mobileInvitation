import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
interface IProps {
  item: number;
}
export default function ExampleImg({ item }: IProps) {
  const [pop, setPop] = useState(false);
  return (
    <>
      {pop ? (
        <div className="fixed top-0 left-0 z-20 flex h-[100vh] w-[100vw] flex-wrap items-center justify-center bg-gray-800 bg-opacity-80">
          <motion.img
            layoutId={`example${item}`}
            onClick={() => setPop(false)}
            className="top-0 bottom-0 h-[80vh] w-[80vw] cursor-pointer bg-cover"
            src={`/images/example${item}.jpg`}
            alt=""
          />
        </div>
      ) : (
        <motion.img
          layoutId={`example${item}`}
          whileHover={{ scale: 1.05 }}
          onClick={() => setPop(true)}
          className="cursor-pointer bg-cover"
          src={`/images/example${item}.jpg`}
          alt=""
        />
      )}
    </>
  );
}
