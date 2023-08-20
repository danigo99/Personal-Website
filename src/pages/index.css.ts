import { style } from "@vanilla-extract/css";
import { globalFontFace } from "@vanilla-extract/css";
import { tokens } from "../theme/vars.css";

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: tokens.gridTemplateColumns["2"],
  gap: tokens.space[16],
});

export const oneColumGridSquare = style({
  gridColumn: tokens.gridColumn["1"],
});

export const twoColumGridSquare = style({
  gridColumn: tokens.gridColumn["2"],
});

const trebuchet = "Trebuchet";

globalFontFace(trebuchet, {
  src: 'local("Trebuchet MS")',
});

export const body = style({
  backgroundColor: "black",
  fontFamily: tokens.fontFamily.body,
});
