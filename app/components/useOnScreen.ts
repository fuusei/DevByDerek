import { useEffect, useRef, MutableRefObject } from "react";
import { useInView, useAnimation, AnimationControls } from "framer-motion";

export default function useOnScreen(): {
  ref: MutableRefObject<null>;
  controls: AnimationControls;
} {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { ref, controls };
}
