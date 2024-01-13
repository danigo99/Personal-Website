import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "../../theme/vars.css";

export const container = style({
  backgroundColor: tokens.color.darkGrey,
  display: "flex",
  borderRadius: 80,
  position: "relative",
  flexDirection: "column",
  padding: 60,
  gap: 32,
});

export const title = style({
  color: tokens.color.white,
  fontSize: "30px",
  fontWeight: 600,
  margin: 0,
});

export const blurb = style({
  color: tokens.color.white,
  fontSize: "15px",
  margin: 0,
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
