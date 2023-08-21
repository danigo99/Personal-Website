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
  backgroundImage: "url(../../../public/me.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  aspectRatio: 1,
});

export const text = style({
  fontSize: `${150 / 16}rem`,
});
