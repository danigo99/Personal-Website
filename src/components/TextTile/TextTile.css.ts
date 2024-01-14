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

export const text = styleVariants({
  large: {
    fontSize: "150px",
    lineHeight: "50px",
    color: tokens.color.white,
    "@media": {
      "screen and (max-width:900px)": {
        marginInline: 100,
        lineHeight: "80px",
        fontSize: "80px",
      },
      "screen and (max-width:1080px)": {
        marginInline: 100,
        lineHeight: "100px",
        fontSize: "100px",
      },
    },
  },
  small: {
    fontSize: "32px",
    marginInline: 100,
    lineHeight: "40px",
    textAlign: "center",
    color: "#D1D1D1",
  },
});
