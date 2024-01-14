import { style } from "@vanilla-extract/css";
import { globalFontFace } from "@vanilla-extract/css";
import { tokens } from "../theme/vars.css";

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
  gridAutoRows: "1fr",
  gap: tokens.space[16],
});

export const oneColumGridSquare = style({
  gridColumn: tokens.gridColumn["1"],
});

export const twoColumGridSquare = style({
  gridColumn: tokens.gridColumn["2"],
  "@media": {
    "screen and (max-width:700px)": {
      gridColumn: 1,
    },
  },
});

export const twoRowGridSquare = style({
  gridRow: tokens.gridRow["2"],
});

const trebuchet = "Trebuchet";

globalFontFace(trebuchet, {
  src: 'local("Trebuchet MS")',
});

export const body = style({
  backgroundColor: "black",
  fontFamily: "Trebuchet MS",
});

export const brownTile = style({
  backgroundColor: "#a98",
});
