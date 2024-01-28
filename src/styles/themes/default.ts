export type ThemeProps = "light" | "dark";
interface ITheme {
  "gray-light-1": string;
  "gray-light-2": string;

  "ice-blue-1": string;
  "ice-blue-2": string;

  "tea-light-1": string;

  "tea-dark-1": string;
  "tea-dark-2": string;

  purple: string;

  danger: string;

  "white-1": string;
  white: string;
  black: string;
}

const light: ITheme = {
  "gray-light-1": "#999999",
  "gray-light-2": "#dee1e6",

  "ice-blue-1": "#9EAEB7",
  "ice-blue-2": "#adb7bf",

  "tea-light-1": "#45d0c1",

  "tea-dark-1": "#406A76",
  "tea-dark-2": "#053b4b",

  purple: "#8553f4",

  danger: "#AB222E",

  "white-1": "#f1f7fc",
  white: "#FFF",
  black: "#000",
};

const dark: ITheme = {
  "gray-light-1": "#555555",
  "gray-light-2": "#1e1e1e",

  "ice-blue-1": "#657a8a",
  "ice-blue-2": "#49555f",

  "tea-light-1": "#238272",

  "tea-dark-1": "#77b3b6",
  "tea-dark-2": "#012326",

  purple: "#6d3bbf",

  danger: "#7e1d2a",

  "white-1": "#0d1219",
  white: "#000",
  black: "#FFF",
};

export default light;

export const modeTheme: { [key in ThemeProps]: ITheme } = {
  light,
  dark,
};
