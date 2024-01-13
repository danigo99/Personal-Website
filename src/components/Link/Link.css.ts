import { style } from "@vanilla-extract/css";

export const link = style({
  color: "white",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
