import type { Color } from "./vars.css"

type ConditionalColor = Readonly<{ darkMode: Color; lightMode: Color }>

export const selectors = {
  active: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeActive: darkMode,
    lightModeActive: lightMode
  }),
  checked: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeChecked: darkMode,
    lightModeChecked: lightMode
  }),
  checkedHover: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeCheckedHover: darkMode,
    lightModeCheckedHover: lightMode
  }),
  disabled: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeDisabled: darkMode,
    lightModeDisabled: lightMode
  }),
  focusVisible: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeFocusVisible: darkMode,
    lightModeFocusVisible: lightMode
  }),
  focusWithin: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeFocusWithin: darkMode,
    lightModeFocusWithin: lightMode
  }),
  highlighted: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeHighlighted: darkMode,
    lightModeHighlighted: lightMode
  }),
  hover: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeHover: darkMode,
    lightModeHover: lightMode
  }),
  open: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeOpen: darkMode,
    lightModeOpen: lightMode
  }),
  placeholder: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModePlaceholder: darkMode,
    lightModePlaceholder: lightMode
  })
}
