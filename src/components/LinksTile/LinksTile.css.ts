import { style } from "@vanilla-extract/css";
import { tokens } from "../../theme/vars.css";

export const container = style({
  backgroundColor: tokens.color.darkGrey,
  display: "flex",
  padding: 24,
  borderRadius: 80,
  color: tokens.color.white,
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const icon = style({
  width: 100,
  height: 100,
  transition: "transform .2s",
  selectors: {
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
});
