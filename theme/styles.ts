const styles = {
  global: {
    "html, body, #__next": {
      height: "100%",
    },
    "#__next": {
      display: "flex",
      flexDirection: "column",
    },
    canvas: {
      position: "fixed",
      zIndex: -2,
      width: "100%",
      height: "100%",
      opacity: 0.7,
    },
  },
};

export default styles;
