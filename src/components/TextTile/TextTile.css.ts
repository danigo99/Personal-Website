import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "../../theme/vars.css";

export const container = style({
  backgroundColor: tokens.color.darkGrey,
  display: "flex",
  borderRadius: 80,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const brownContainer = style({
  backgroundColor: "#a98",
});

export const text = styleVariants({
  large: {
    fontSize: "150px",
    lineHeight: "50px",
    color: tokens.color.white,
  },
  small: {
    fontSize: "32px",
    marginInline: 100,
    lineHeight: "40px",
    textAlign: "center",
    color: "#D1D1D1",
  },
});

export const linkTrigger = style({
  display: "flex",
  position: "absolute",
  bottom: 40,
  left: 40,
  textDecoration: "none",
  color: "white",
  borderRadius: 32,
  borderWidth: 2,
  borderColor: "white",
  borderStyle: "solid",
  alignContent: "center",
  padding: 12,
  gap: 8,
  transition: ".1s linear",
  selectors: {
    "&:hover": {
      outline: "2px solid white",
    },
  },
});
