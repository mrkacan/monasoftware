const linkedinButtonVariante = {
  initial: { opacity: 1 },
  animate: { opacity: 1, scale: 1, y: 0 },
  animateButton: { opacity: 0, scale: 15, y: -300 },
  transition: {
    duration: 1,
    type: "spring",
    stiffness: 60,
    bounce: 0.2,
    when: "beforeChildren",
  },
};

const initialLoad = {
  initial: { opacity: 0, y: -200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
      type: "spring",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
  },
};

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  animate: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 2, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 1, duration: 0.01 },
      },
    };
  },
};

export { linkedinButtonVariante, initialLoad, draw };
