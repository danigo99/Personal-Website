import { style } from "@vanilla-extract/css";
import { tokens } from "../../theme/vars.css";

export const container = style({
  backgroundColor: tokens.color.darkGrey,
  display: "flex",
  padding: 8,
  borderRadius: 80,
  color: tokens.color.white,
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  aspectRatio: 1,
  position: "relative",
});

export const linkTrigger = style({
  mixBlendMode: "difference",
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
