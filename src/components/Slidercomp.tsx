import mic from "../assets/pics/Mic.webp";
import mic2 from "../assets/pics/adobe.jpg";
import mic3 from "../assets/pics/goog.png";
import mic4 from "../assets/pics/net.webp";
import mic5 from "../assets/pics/nike.png";
import mic6 from "../assets/pics/chanel.webp";
import mic7 from "../assets/pics/adidas.webp";
import mic8 from "../assets/pics/puma.jpg";

import { animate, motion, useMotionValue } from "framer-motion";
import { FC, useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const SliderComp = () => {
  const images = [mic, mic2, mic3, mic4, mic5, mic6, mic7, mic8];
  const [ref, { width }] = useMeasure();
  const xMove = useMotionValue(0);

  const [speed, setSpeed] = useState<number>(20);

  useEffect(() => {
    const totalWidth = width * images.length;
    const control = animate(xMove, [0, -totalWidth], {
      ease: "linear",
      duration: speed * images.length,
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => control?.stop();
  }, [xMove, width, speed, images.length]);

  return (
    <div className="relative w-full h-[20vh] overflow-hidden">
      {" "}
      <motion.div className="flex gap-4" ref={ref} style={{ x: xMove }}>
        {" "}
        {[...images, ...images, ...images].map((image: string, i: number) => (
          <Slider key={i} el={image} />
        ))}
      </motion.div>
    </div>
  );
};

export default SliderComp;

interface iProps {
  el: string;
}

const Slider: FC<iProps> = ({ el }: any) => {
  return (
    <motion.div className="relative w-[12vw] h-[12vh] flex-shrink-0">
      {" "}
      <img
        src={el}
        alt="slider image"
        className="w-full h-full object-contain"
      />{" "}
    </motion.div>
  );
};
