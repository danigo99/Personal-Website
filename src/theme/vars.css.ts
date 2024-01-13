import { createTheme, keyframes } from "@vanilla-extract/css";

export type Color = keyof typeof vars.color;

// Theme tokens. Purely technical properties should be added to sprinkles directly, not here.
export const tokens = {
  borderRadius: {
    0: "0px",
    6: "6px",
    50: "50px",
    "100%": "100%",
  },
  color: {
    currentColor: "currentColor",
    black: "#000000",
    darkGrey: "#1A1A1A",
    white: "#FFFFFF",
    transparent: "transparent",
  },
  space: {
    2: "2px",
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    24: "24px",
    32: "32px",
    40: "40px",
    48: "48px",
    64: "64px",
    80: "80px",
    96: "96px",
    160: "160px",
  },
  fontFamily: {
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  gridTemplateColumns: {
    "2": "1fr 1fr",
  },
  gridColumn: {
    "1": "span 1 / span 1",
    "2": "span 2 / span 2",
  },
  gridRow: {
    "1": "span 1 / span 1",
    "2": "span 2 / span 2",
  },
} as const;

export const [themeClass, vars] = createTheme(tokens);
