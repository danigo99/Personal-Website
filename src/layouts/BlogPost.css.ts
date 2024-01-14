import { style, globalStyle } from "@vanilla-extract/css";
import { tokens } from "../theme/vars.css";

export const body = style({
  background: tokens.color.black,
  color: tokens.color.white,
  fontFamily: "Trebuchet MS",
});

export const container = style({
  maxWidth: 600,
  marginInline: "auto",
  marginTop: "80px",
});

export const date = style({
  fontSize: "15px",
  paddingBlock: "10px",
  paddingInline: "20px",
  borderRadius: "40px",
  border: `2px solid rgb(48, 54, 61)`,
  maxWidth: "fit-content",
  marginBottom: "20px",
});

export const closeButton = style({
  color: tokens.color.white,
  cursor: "pointer",
  fontSize: "30px",
  outline: `2px solid rgb(48, 54, 61)`,
  borderRadius: "100%",
  width: "40px",
  height: "40px",
  alignContent: "center",
  display: "flex",
  justifyContent: "center",
  marginInline: "auto",
  marginBottom: "50px",
  transition: "outline 0.1s linear",

  selectors: {
    "&:hover": {
      outlineWidth: "4px",
    },
  },
});

globalStyle("h1", {
  fontSize: "36px",
  lineHeight: "1.5",
});

globalStyle("p", {
  fontSize: "15px",
  lineHeight: "20px",
});

globalStyle("a", {
  color: tokens.color.white,
});

globalStyle("img", {
  maxWidth: "100%",
  borderRadius: "10px",
});

globalStyle("pre", {
  padding: "20px",
  borderRadius: "10px",
});
