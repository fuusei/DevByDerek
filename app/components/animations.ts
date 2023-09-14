import { Variants, cubicBezier } from "framer-motion";

export const fadeToRight: Variants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: cubicBezier(0.645, 0.045, 0.355, 1),
    },
  },
};

export const aboutFadeToRight: Variants = {
  hidden: (i: any) => ({
    opacity: 0,
    x: -200,
  }),
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      delay: i * 0.2,
      ease: cubicBezier(0.645, 0.045, 0.355, 1),
    },
  }),
};

export const techFadeToRight: Variants = {
  hidden: (i: any) => ({
    opacity: 0,
    x: -16,
  }),
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // stagger delay
      ease: cubicBezier(0.645, 0.045, 0.355, 1),
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: cubicBezier(0.645, 0.045, 0.355, 1),
    },
  },
};

export const staggerFadeIn: Variants = {
  hidden: (i: any) => ({
    opacity: 0,
    y: 20,
  }),
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // stagger delay
      ease: cubicBezier(0.645, 0.045, 0.355, 1),
    },
  }),
};

export const fadeToLeft: Variants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: cubicBezier(0.645, 0.045, 0.355, 1),
    },
  },
};

export const staggerFadeToLeft: Variants = {
  hidden: (i: any) => ({
    opacity: 0,
    x: 200,
  }),
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      delay: i * 0.2, // stagger delay
      ease: cubicBezier(0.645, 0.045, 0.355, 1),
    },
  }),
};