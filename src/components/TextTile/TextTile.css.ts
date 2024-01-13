import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "../../theme/vars.css";

export const container = style({
  backgroundColor: tokens.color.darkGrey,
  display: "flex",
  borderRadius: 80,
  justifyContent: "center",
  alignItems: "center",
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
