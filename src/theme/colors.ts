export const colors = {
  grey1: { darkMode: "greyDark1", lightMode: "greyLight1" },
  grey2: { darkMode: "greyDark2", lightMode: "greyLight2" },
  grey3: { darkMode: "greyDark3", lightMode: "greyLight3" },
  grey4: { darkMode: "greyDark4", lightMode: "greyLight4" },
  grey5: { darkMode: "greyDark5", lightMode: "greyLight5" },
  grey6: { darkMode: "greyDark6", lightMode: "greyLight6" },
  grey7: { darkMode: "greyDark7", lightMode: "greyLight7" },
  grey8: { darkMode: "greyDark8", lightMode: "greyLight8" },
  grey9: { darkMode: "greyDark9", lightMode: "greyLight9" },
  grey10: { darkMode: "greyDark10", lightMode: "greyLight10" },
  grey11: { darkMode: "greyDark11", lightMode: "greyLight11" },
  grey12: { darkMode: "greyDark12", lightMode: "greyLight12" },

  dark2: { darkMode: "greyDark2", lightMode: "greyDark2" },
  dark4: { darkMode: "greyDark4", lightMode: "greyDark4" },
  dark6: { darkMode: "greyDark6", lightMode: "greyDark6" },
  dark7: { darkMode: "greyDark7", lightMode: "greyDark7" },
  dark12: { darkMode: "greyDark12", lightMode: "greyDark12" },

  indigo10: { darkMode: "indigo10", lightMode: "indigo10" },
  indigo11: { darkMode: "indigo11", lightMode: "indigo11" },

  green3: { darkMode: "green3", lightMode: "green3" },
  green4: { darkMode: "green4", lightMode: "green4" },
  green9: { darkMode: "green9", lightMode: "green9" },
  green10: { darkMode: "green10", lightMode: "green10" },
  green11: { darkMode: "green11", lightMode: "green11" },

  amber3: { darkMode: "amber3", lightMode: "amber3" },
  amber4: { darkMode: "amber4", lightMode: "amber4" },
  amber9: { darkMode: "amber9", lightMode: "amber9" },
  amber10: { darkMode: "amber10", lightMode: "amber10" },
  amber11: { darkMode: "amber11", lightMode: "amber11" },

  tomato1: { darkMode: "tomato1", lightMode: "tomato1" },
  tomato3: { darkMode: "tomato3", lightMode: "tomato3" },
  tomato4: { darkMode: "tomato4", lightMode: "tomato4" },
  tomato7: { darkMode: "tomato7", lightMode: "tomato7" },
  tomato10: { darkMode: "tomato10", lightMode: "tomato10" },
  tomato11: { darkMode: "tomato11", lightMode: "tomato11" },

  purple1: { darkMode: "purple1", lightMode: "purple1" },
  purple2: { darkMode: "purple2", lightMode: "purple2" },
  purple3: { darkMode: "purple3", lightMode: "purple3" },
  purple4: { darkMode: "purple4", lightMode: "purple4" },
  purple5: { darkMode: "purple5", lightMode: "purple5" },
  purple6: { darkMode: "purple6", lightMode: "purple6" },
  purple7: { darkMode: "purple7", lightMode: "purple7" },
  purple8: { darkMode: "purple8", lightMode: "purple8" },
  purple9: { darkMode: "purple9", lightMode: "purple9" },
  purple10: { darkMode: "purple10", lightMode: "purple10" },
  purple11: { darkMode: "purple11", lightMode: "purple11" },
  purple12: { darkMode: "purple12", lightMode: "purple12" },
  purpleAlpha1: { darkMode: "purpleAlpha1", lightMode: "purpleAlpha1" },
  greyAlpha1: { darkMode: "greyAlpha1", lightMode: "greyAlpha1" },

  currentColor: { darkMode: "currentColor", lightMode: "currentColor" },
  inherit: { darkMode: "inherit", lightMode: "inherit" },
  transparent: { darkMode: "transparent", lightMode: "transparent" }
} as const

export type ThemeColor = keyof typeof colors
