export const listColors = {
  black: "#000000",
  white: "#ffffff",
  gray: "#808080",
  blue: "#0000ff",
  red: "#ff0000",
  green: "#008000",
  orange: "#ffa500",
  yellow: "#FFFF00",
} as const;

export type ColorName = keyof typeof listColors;
