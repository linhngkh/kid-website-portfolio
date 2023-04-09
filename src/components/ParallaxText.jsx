import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import "../index.css";
import { wrap } from "@motionone/utils";

function ParallaxTexts({ children, baseVelocity = 100 }) {
  //create a base x with initial value = 0 to track the state and velocity of a value.
  const baseX = useMotionValue(0);
  // create absolute scroll position with the useScroll hook.
  const { scrollY } = useScroll();
  //return a new motion value that updates with the velocity of the original value.
  const scrollVelocity = useVelocity(scrollY);
  // create a motion value,  animate to its latest target with a spring
  const smoothVelocity = useSpring(scrollVelocity, {
    // damping: Strength of opposing force
    damping: 50,
    // stiffness: Higher values will create more sudden movement
    stiffness: 400,
  });
  //can map a motion value from one range of values to another.
  //map smoothVelocity from [0, 1000] to [0, 5]
  // when smoothVelocity = 0, velocityFactor = 1000
  const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 5], {
    //clamp : ranges will map perpetually
    clamp: false,
  });
  //wrapping for the length of the text
  const x = useTransform(baseX, (v) => `${wrap(-10, -20, v)}%`);
  // .current = 1
  const directionFactor = useRef(1);
  //animation loop that outputs the latest frame time to the provided callback.
  // time, the total duration of time since the callback was first called.
  // delta, the total duration of time since the last animation frame.
  useAnimationFrame((timestamp, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    // get() : Returns the latest state of MotionValue
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
export default function ParallaxText() {
  return (
    <section style={{ fontFamily: "Plaster" }}>
      <ParallaxTexts baseVelocity={-5}>XUKA THUYAN</ParallaxTexts>
      <ParallaxTexts baseVelocity={5}>DANCER MODEL KID</ParallaxTexts>
    </section>
  );
}
