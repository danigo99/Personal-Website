import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { vars } from "./vars.css";

export const unconditionalProperties = defineProperties({
  properties: {
    backgroundColor: vars.color,
    borderColor: vars.color,
    color: vars.color,
    fill: vars.color,

    all: ["unset"],

    boxSizing: ["border-box"],
    display: ["flex", "grid"],
    gridTemplateColumns: vars.gridTemplateColumns,
    gridColumn: vars.gridColumn,
    alignItems: ["flex-start", "center"],
    alignSelf: ["center", "stretch"],
    flexDirection: ["column", "row"],
    flex: [1],
    flexWrap: ["wrap"],
    justifyContent: ["center", "space-between", "end"],
    overflow: ["hidden", "auto"],
    textAlign: ["center", "end", "inherit", "start"],
    textOverflow: ["ellipsis"],
    textTransform: ["uppercase"],

    borderRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderTopLeftRadius: vars.borderRadius,

    fontFamily: vars.fontFamily,

    margin: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,

    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingBlock: vars.space,
    paddingInline: vars.space,
  },
});

export const sprinkles = createSprinkles(unconditionalProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
